// AgriVoice Application Main Script
class AgriVoiceApp {
    constructor() {
        this.isListening = false;
        this.recognition = null;
        this.currentDiagnosis = null;
        this.diagnosisHistory = [];
        
        this.initializeApp();
        this.loadHistory();
    }
    
    initializeApp() {
        // Initialize language
        initializeLanguage();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Initialize speech recognition
        this.initializeSpeechRecognition();
        
        // Update status
        this.updateStatus('statusReady');
        
        // Hide loading overlay after initialization
        setTimeout(() => {
            const loadingOverlay = document.getElementById('loadingOverlay');
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
        }, 3000);
    }
    
    setupEventListeners() {
        // Menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const menuOverlay = document.getElementById('menuOverlay');
        
        menuBtn?.addEventListener('click', () => this.toggleMenu());
        menuOverlay?.addEventListener('click', () => this.closeMenu());
        
        // Language selection
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                setLanguage(e.target.closest('.lang-btn').dataset.lang);
                this.closeMenu();
            });
        });
        
        // Voice control
        const micBtn = document.getElementById('micBtn');
        micBtn?.addEventListener('click', () => this.toggleVoiceRecognition());
        
        // Text input
        const analyzeBtn = document.getElementById('analyzeBtn');
        analyzeBtn?.addEventListener('click', () => this.analyzeTextInput());
        
        // Transcript actions
        const retryBtn = document.getElementById('retryBtn');
        const processBtn = document.getElementById('processBtn');
        
        retryBtn?.addEventListener('click', () => this.retryVoiceInput());
        processBtn?.addEventListener('click', () => this.processTranscript());
        
        // Print button
        const printBtn = document.getElementById('printBtn');
        printBtn?.addEventListener('click', () => this.printTreatmentGuide());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
                this.closeModals();
            }
        });
    }
    
    initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.maxAlternatives = 1;
            
            // Set language based on current selection
            this.updateRecognitionLanguage();
            
            this.recognition.onstart = () => {
                this.isListening = true;
                this.updateMicButton();
                this.updateStatus('statusListening');
            };
            
            this.recognition.onend = () => {
                this.isListening = false;
                this.updateMicButton();
                this.updateStatus('statusReady');
            };
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.displayTranscript(transcript);
                this.updateStatus('statusProcessing');
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.updateStatus('statusError');
                this.showNotification('Voice recognition failed. Please try again.', 'error');
            };
        } else {
            console.warn('Speech recognition not supported');
            const micBtn = document.getElementById('micBtn');
            if (micBtn) {
                micBtn.disabled = true;
                micBtn.title = 'Voice recognition not supported in this browser';
            }
        }
    }
    
    updateRecognitionLanguage() {
        if (!this.recognition) return;
        
        const langMap = {
            'en': 'en-US',
            'ny': 'en-US', // Fallback to English for Chichewa
            'bem': 'en-US'  // Fallback to English for Bemba
        };
        
        this.recognition.lang = langMap[currentLanguage] || 'en-US';
    }
    
    toggleMenu() {
        const menuContainer = document.getElementById('menuContainer');
        const menuOverlay = document.getElementById('menuOverlay');
        
        menuContainer?.classList.toggle('active');
        menuOverlay?.classList.toggle('active');
    }
    
    closeMenu() {
        const menuContainer = document.getElementById('menuContainer');
        const menuOverlay = document.getElementById('menuOverlay');
        
        menuContainer?.classList.remove('active');
        menuOverlay?.classList.remove('active');
    }
    
    toggleVoiceRecognition() {
        if (!this.recognition) {
            this.showNotification('Voice recognition not available', 'error');
            return;
        }
        
        if (this.isListening) {
            this.recognition.stop();
        } else {
            this.recognition.start();
        }
    }
    
    updateMicButton() {
        const micBtn = document.getElementById('micBtn');
        if (!micBtn) return;
        
        if (this.isListening) {
            micBtn.classList.add('listening');
            micBtn.innerHTML = '<i class="fas fa-stop"></i>';
        } else {
            micBtn.classList.remove('listening');
            micBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        }
    }
    
    displayTranscript(transcript) {
        const transcriptContainer = document.getElementById('transcriptContainer');
        const transcriptElement = document.getElementById('transcript');
        
        if (transcriptContainer && transcriptElement) {
            transcriptElement.textContent = transcript;
            transcriptContainer.style.display = 'block';
        }
    }
    
    retryVoiceInput() {
        const transcriptContainer = document.getElementById('transcriptContainer');
        if (transcriptContainer) {
            transcriptContainer.style.display = 'none';
        }
        
        if (this.recognition) {
            this.recognition.start();
        }
    }
    
    processTranscript() {
        const transcript = document.getElementById('transcript')?.textContent;
        if (transcript) {
            this.performDiagnosis(transcript);
        }
    }
    
    analyzeTextInput() {
        const symptomText = document.getElementById('symptomText')?.value.trim();
        const cropSelect = document.getElementById('cropSelect')?.value;
        
        if (!symptomText) {
            this.showNotification('Please describe your crop symptoms', 'warning');
            return;
        }
        
        this.performDiagnosis(symptomText, cropSelect);
    }
    
    async performDiagnosis(symptoms, cropType = null) {
        this.updateStatus('statusAnalyzing');
        
        try {
            // Simulate processing delay for better UX
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Search for matching diseases
            const results = searchDiseases(symptoms, cropType);
            
            if (results.length === 0) {
                this.displayNoResults();
                this.updateStatus('statusReady');
                return;
            }
            
            // Store current diagnosis
            this.currentDiagnosis = {
                symptoms,
                cropType,
                results,
                timestamp: new Date()
            };
            
            // Add to history
            this.addToHistory(this.currentDiagnosis);
            
            // Display results
            this.displayResults(results);
            this.updateStatus('statusComplete');
            
        } catch (error) {
            console.error('Diagnosis error:', error);
            this.updateStatus('statusError');
            this.showNotification('Diagnosis failed. Please try again.', 'error');
        }
    }
    
    displayResults(results) {
        const resultsContainer = document.getElementById('resultsContainer');
        const printSection = document.getElementById('printSection');
        
        if (!resultsContainer) return;
        
        resultsContainer.innerHTML = '';
        
        results.forEach((result, index) => {
            const resultElement = this.createResultElement(result, index);
            resultsContainer.appendChild(resultElement);
        });
        
        // Show print section
        if (printSection) {
            printSection.style.display = 'block';
        }
        
        // Animate results
        setTimeout(() => {
            resultsContainer.querySelectorAll('.diagnosis-result').forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0)';
                }, index * 200);
            });
        }, 100);
    }
    
    createResultElement(disease, index) {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'diagnosis-result';
        resultDiv.style.opacity = '0';
        resultDiv.style.transform = 'translateX(20px)';
        
        const severityClass = `severity-${disease.severity}`;
        const severityText = getTranslation(`severity${disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)}`);
        
        resultDiv.innerHTML = `
            <div class="diagnosis-header">
                <div>
                    <div class="disease-name">${disease.name}</div>
                    <div class="confidence-score">${getTranslation('confidence')}: ${disease.confidence}% | ${disease.cropName}</div>
                </div>
                <div class="severity-badge ${severityClass}">${severityText}</div>
            </div>
            
            <div class="diagnosis-section">
                <h4><i class="fas fa-eye"></i> ${getTranslation('symptoms')}</h4>
                <ul>
                    ${disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                </ul>
            </div>
            
            <div class="diagnosis-section">
                <h4><i class="fas fa-search"></i> ${getTranslation('causes')}</h4>
                <ul>
                    ${disease.causes.map(cause => `<li>${cause}</li>`).join('')}
                </ul>
            </div>
            
            <div class="diagnosis-section">
                <h4><i class="fas fa-shield-alt"></i> ${getTranslation('prevention')}</h4>
                <ul>
                    ${disease.prevention.map(prevent => `<li>${prevent}</li>`).join('')}
                </ul>
            </div>
            
            <div class="diagnosis-section">
                <h4><i class="fas fa-flask"></i> ${getTranslation('treatments')}</h4>
                <div class="chemical-treatments">
                    ${disease.treatments.map(treatment => `
                        <div class="chemical-item">
                            <div class="chemical-name">${treatment.name}</div>
                            <div class="chemical-details">
                                <strong>Dosage:</strong> ${treatment.dosage}<br>
                                <strong>Application:</strong> ${treatment.application}<br>
                                <strong>Safety:</strong> ${treatment.safety}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        return resultDiv;
    }
    
    displayNoResults() {
        const resultsContainer = document.getElementById('resultsContainer');
        const printSection = document.getElementById('printSection');
        
        if (!resultsContainer) return;
        
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No matching diseases found. Try describing your symptoms differently or contact a local agricultural extension officer.</p>
            </div>
        `;
        
        if (printSection) {
            printSection.style.display = 'none';
        }
    }
    
    printTreatmentGuide() {
        if (!this.currentDiagnosis) {
            this.showNotification('No diagnosis available to print', 'warning');
            return;
        }
        
        // Create print content
        this.createPrintContent();
        
        // Trigger print
        setTimeout(() => {
            window.print();
        }, 500);
    }
    
    createPrintContent() {
        const resultsContainer = document.getElementById('resultsContainer');
        if (!resultsContainer) return;
        
        // Add print header
        const printHeader = document.createElement('div');
        printHeader.className = 'print-header';
        printHeader.innerHTML = `
            <div class="print-title">AgriVoice Treatment Guide</div>
            <div class="print-date">Generated on: ${new Date().toLocaleDateString()}</div>
        `;
        
        // Add safety warning
        const safetyWarning = document.createElement('div');
        safetyWarning.className = 'safety-warning';
        safetyWarning.innerHTML = `
            <h4><i class="fas fa-exclamation-triangle"></i> ${getTranslation('safetyTitle')}</h4>
            <p>${getTranslation('safetyText')}</p>
        `;
        
        // Insert at the beginning of results
        resultsContainer.insertBefore(safetyWarning, resultsContainer.firstChild);
        resultsContainer.insertBefore(printHeader, resultsContainer.firstChild);
    }
    
    addToHistory(diagnosis) {
        this.diagnosisHistory.unshift({
            ...diagnosis,
            id: Date.now()
        });
        
        // Keep only last 50 diagnoses
        if (this.diagnosisHistory.length > 50) {
            this.diagnosisHistory = this.diagnosisHistory.slice(0, 50);
        }
        
        this.saveHistory();
    }
    
    saveHistory() {
        try {
            localStorage.setItem('agrivoice_history', JSON.stringify(this.diagnosisHistory));
        } catch (error) {
            console.error('Failed to save history:', error);
        }
    }
    
    loadHistory() {
        try {
            const saved = localStorage.getItem('agrivoice_history');
            if (saved) {
                this.diagnosisHistory = JSON.parse(saved);
            }
        } catch (error) {
            console.error('Failed to load history:', error);
            this.diagnosisHistory = [];
        }
    }
    
    updateStatus(statusKey) {
        const statusText = document.getElementById('statusText');
        if (statusText) {
            statusText.textContent = getTranslation(statusKey);
        }
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 5000);
    }
    
    closeModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
}

// Global functions for menu items
function showHelp() {
    const helpModal = document.getElementById('helpModal');
    if (helpModal) {
        helpModal.style.display = 'block';
        updateHelpContent();
    }
    app.closeMenu();
}

function showHistory() {
    const historyModal = document.getElementById('historyModal');
    const historyContent = document.getElementById('historyContent');
    
    if (!historyModal || !historyContent) return;
    
    if (app.diagnosisHistory.length === 0) {
        historyContent.innerHTML = `
            <div class="no-results">
                <i class="fas fa-history"></i>
                <p>No diagnosis history available.</p>
            </div>
        `;
    } else {
        historyContent.innerHTML = app.diagnosisHistory.map(item => `
            <div class="history-item">
                <div class="history-date">${new Date(item.timestamp).toLocaleDateString()}</div>
                <div class="history-crop">${item.cropType ? getTranslation(`cropTypes.${item.cropType}`) : 'All crops'}</div>
                <div class="history-disease">${item.results[0]?.name || 'No matches'}</div>
            </div>
        `).join('');
    }
    
    historyModal.style.display = 'block';
    app.closeMenu();
}

function clearData() {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
        localStorage.removeItem('agrivoice_history');
        app.diagnosisHistory = [];
        app.showNotification('All data cleared successfully', 'info');
    }
    app.closeMenu();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// CSS for notifications (added dynamically)
const notificationStyles = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 8px;
        padding: 15px 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-info {
        border-left: 4px solid var(--info);
        color: var(--info);
    }
    
    .notification-warning {
        border-left: 4px solid var(--warning);
        color: var(--warning);
    }
    
    .notification-error {
        border-left: 4px solid var(--danger);
        color: var(--danger);
    }
    
    .notification i {
        font-size: 1.2rem;
    }
`;

// Add notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize application when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new AgriVoiceApp();
});

// Handle language changes
document.addEventListener('languageChanged', () => {
    if (app && app.recognition) {
        app.updateRecognitionLanguage();
    }
});
