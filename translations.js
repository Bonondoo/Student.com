// Translation data for multilingual support
const translations = {
    en: {
        // Header
        mainTitle: "AgriVoice",
        subtitle: "AI-Powered Crop Health Diagnosis for Zambian Farmers",
        
        // Menu
        languageTitle: "Choose Language",
        helpTitle: "Help & Information",
        helpText: "How to Use",
        historyText: "Diagnosis History",
        clearDataText: "Clear Data",
        
        // Input Section
        inputTitle: "Describe Your Crop Problem",
        voiceInstruction: "Click the microphone and describe your crop symptoms",
        exampleTitle: "Example Descriptions:",
        textInputTitle: "Or Type Your Description:",
        cropSelectLabel: "Select Crop Type:",
        analyzeText: "Analyze Symptoms",
        
        // Transcript
        transcriptTitle: "Voice Transcript:",
        retryText: "Try Again",
        processText: "Process Diagnosis",
        
        // Results
        resultsTitle: "Diagnosis Results",
        noResultsText: "No diagnosis yet. Describe your crop symptoms to get started.",
        printText: "Print Treatment Guide",
        
        // Diagnosis
        symptoms: "Symptoms",
        causes: "Possible Causes",
        prevention: "Prevention",
        treatments: "Chemical Treatments",
        confidence: "Confidence",
        severity: "Severity",
        
        // Severity levels
        severityLow: "Low",
        severityMedium: "Medium",
        severityHigh: "High",
        
        // Status messages
        statusReady: "Ready for diagnosis",
        statusListening: "Listening...",
        statusProcessing: "Processing your input...",
        statusAnalyzing: "Analyzing symptoms...",
        statusComplete: "Diagnosis complete",
        statusError: "An error occurred. Please try again.",
        
        // Modals
        historyModalTitle: "Diagnosis History",
        helpModalTitle: "How to Use AgriVoice",
        
        // Loading
        loadingText: "Initializing AgriVoice...",
        
        // Help content
        helpVoiceTitle: "Voice Input",
        helpVoiceText: "Click the microphone button and speak clearly in English, Chichewa, or Icibemba. Describe what you see on your crops - yellowing leaves, spots, wilting, etc.",
        
        helpTextTitle: "Text Input",
        helpTextText: "You can also type your description in the text area. Select your crop type from the dropdown menu for more accurate results.",
        
        helpResultsTitle: "Understanding Results",
        helpResultsText: "The system will show you possible diseases with confidence scores. Higher confidence means more likely diagnosis.",
        
        helpPrintTitle: "Print Treatment Guide",
        helpPrintText: "Use the print button to get a detailed treatment guide with chemical recommendations and safety instructions.",
        
        // Common terms
        cropTypes: {
            maize: "Maize",
            tomato: "Tomato", 
            beans: "Beans"
        },
        
        // Safety warnings
        safetyTitle: "SAFETY WARNING",
        safetyText: "Always read chemical labels carefully. Wear protective equipment. Keep chemicals away from children. Follow application rates strictly.",
        
        // Buttons
        close: "Close",
        clear: "Clear",
        save: "Save",
        cancel: "Cancel"
    },
    
    ny: { // Chichewa
        // Header
        mainTitle: "AgriVoice",
        subtitle: "Makina Ozindikira Matenda a Mbewu kwa Alimi a ku Zambia",
        
        // Menu
        languageTitle: "Sankhani Chilankhulo",
        helpTitle: "Chithandizo ndi Uthenga",
        helpText: "Momwe Mungagwiritsire Ntchito",
        historyText: "Mbiri ya Kuzindikira",
        clearDataText: "Chotsani Zidziwitso",
        
        // Input Section
        inputTitle: "Fotokozani Vuto la Mbewu Zanu",
        voiceInstruction: "Dinani makina ndipo fotokozani zizindikiro za mbewu zanu",
        exampleTitle: "Zitsanzo za Kufotokoza:",
        textInputTitle: "Kapena Lembani Kufotokoza Kwanu:",
        cropSelectLabel: "Sankhani Mtundu wa Mbewu:",
        analyzeText: "Unikani Zizindikiro",
        
        // Transcript
        transcriptTitle: "Zomwe Mwalankhula:",
        retryText: "Yesaninso",
        processText: "Konzani Kuzindikira",
        
        // Results
        resultsTitle: "Zotsatira za Kuzindikira",
        noResultsText: "Palibe kuzindikira pakadali pano. Fotokozani zizindikiro za mbewu zanu kuti muyambe.",
        printText: "Sindikizani Buku la Mankhwala",
        
        // Diagnosis
        symptoms: "Zizindikiro",
        causes: "Zifukwa Zotheka",
        prevention: "Kuletsa",
        treatments: "Mankhwala a Kemikoloji",
        confidence: "Kukhulupirira",
        severity: "Kukula kwa Vuto",
        
        // Severity levels
        severityLow: "Pang'ono",
        severityMedium: "Pakati",
        severityHigh: "Kwambiri",
        
        // Status messages
        statusReady: "Wokonzeka kuzindikira",
        statusListening: "Kumumvera...",
        statusProcessing: "Kukonza zomwe mwalemba...",
        statusAnalyzing: "Kuunika zizindikiro...",    
        statusComplete: "Kuzindikira kwatha",
        statusError: "Pali vuto. Chonde yesaninso.",
        
        // Modals
        historyModalTitle: "Mbiri ya Kuzindikira",
        helpModalTitle: "Momwe Mungagwiritsire Ntchito AgriVoice",
        
        // Loading
        loadingText: "Kuyambitsa AgriVoice...",
        
        // Help content
        helpVoiceTitle: "Kulankhula",
        helpVoiceText: "Dinani batani la makina ndipo lankhulani momveka bwino mu Chingerezi, Chichewa, kapena Icibemba. Fotokozani zomwe mukuona pa mbewu zanu.",
        
        helpTextTitle: "Kulemba",
        helpTextText: "Mutha kulembanso kufotokoza kwanu m'malo oyenera. Sankhani mtundu wa mbewu kuchokera pamndandanda kuti mulandire zotsatira zolondola.",
        
        helpResultsTitle: "Kumvetsa Zotsatira",
        helpResultsText: "Makina adzakuonetsani matenda omwe angakhale ndi chidziwitso cha kukhulupirira. Kukhulupirira kwakukulu kumatanthauza kuti matendayo ndi oona kwambiri.",
        
        helpPrintTitle: "Sindikizani Buku la Chithandizo",
        helpPrintText: "Gwiritsani ntchito batani losindikizira kuti mulandire buku la chithandizo chokhala ndi malangizo a mankhwala ndi malangizo a chitetezo.",
        
        // Common terms
        cropTypes: {
            maize: "Chimanga",
            tomato: "Nyama",
            beans: "Nyemba"
        },
        
        // Safety warnings
        safetyTitle: "CHENJEZO LA CHITETEZO",
        safetyText: "Muziwerenga malangizo a mankhwala mosamala. Valani zida zooteteza. Sungani mankhwala kutali ndi ana. Tsatirani malangizo a kugwiritsa ntchito.",
        
        // Buttons
        close: "Tsekani",
        clear: "Chotsani",
        save: "Sungani",
        cancel: "Lekani"
    },
    
    bem: { // Icibemba
        // Header
        mainTitle: "AgriVoice",
        subtitle: "Ifikopo fya Ubwino bwa Imilimwa ukutemwa na AI kuli Abalimi ba ku Zambia",
        
        // Menu
        languageTitle: "Salani Umulimi",
        helpTitle: "Ubufumfushi na Amamenshi",
        helpText: "Ubutumiki bwa Kwikatako",
        historyText: "Ubusuma bwa Ukulongosha",
        clearDataText: "Sukanyani Amamenshi",
        
        // Input Section
        inputTitle: "Iyabukani Amatatilo ya Imilimwa Yenu",
        voiceInstruction: "Kapatani icitumbi ca namakono no iyabukeni amatatilo ya imilimwa yenu",
        exampleTitle: "Ifishusho fya Kuiyabuka:",
        textInputTitle: "Nangu Lembekani Ukuiyabuka Kwenu:",
        cropSelectLabel: "Salani Ubusuma bwa Imilimwa:",
        analyzeText: "Shikishani Amatatilo",
        
        // Transcript
        transcriptTitle: "Ifyo Mwalelandile:",
        retryText: "Ikani Nafuti",
        processText: "Peleshapo Ukulongosha",
        
        // Results
        resultsTitle: "Ifikolwa fya Ukulongosha",
        noResultsText: "Tamukulongosha nomba. Iyabukani amatatilo ya imilimwa yenu mukuanda.",
        printText: "Kapatani Icitabo ca Ubulwele",
        
        // Diagnosis
        symptoms: "Amatatilo",
        causes: "Impamfu Shingafye Ukuba",
        prevention: "Ukwepusha",
        treatments: "Amankhwala ya mu Kemikolo",
        confidence: "Ukwiishiba",
        severity: "Ubukulu bwa Cishi",
        
        // Severity levels
        severityLow: "Panono",
        severityMedium: "Pakati",
        severityHigh: "Ukufika Pantu",
        
        // Status messages
        statusReady: "Tayali ukulongosha",
        statusListening: "Ndasumina...",
        statusProcessing: "Ndapeleshesha ifyo mwalemba...",
        statusAnalyzing: "Ndashikisha amatatilo...",
        statusComplete: "Ukulongosha kwapwa",
        statusError: "Pali ichintu cilafwaila. Mwakacenjelesha ukwika nafuti.",
        
        // Modals
        historyModalTitle: "Ubusuma bwa Ukulongosha",
        helpModalTitle: "Ubutumiki bwa Kwikatako AgriVoice",
        
        // Loading
        loadingText: "Ndayandaula AgriVoice...",
        
        // Help content
        helpVoiceTitle: "Ukulanda",
        helpVoiceText: "Kapatani icitumbi ca namakono no landeni nomba mu Cingeleshi, Cinyanja, nangu Icibemba. Iyabukani ifyo mukulola ku milimwa yenu.",
        
        helpTextTitle: "Ukulemba",
        helpTextText: "Mungalembeko ukuiyabuka kwenu mu kasanduuko. Salani ubusuma bwa imilimwa ukucila ku katanduula ukupata ifikolwa fya cine.",
        
        helpResultsTitle: "Ukumfwikisha Ifikolwa",
        helpResultsText: "Amashine yalabapeela indwala shingafye ukuba ni cipimo ca ukwiishiba. Ukwiishiba ukwingi ukulanda ukuti indwalayo yali ya cine ukufika.",
        
        helpPrintTitle: "Kapatani Icitabo ca Ubufumfushi",
        helpPrintText: "Bomfyani icitumbi ca kukapatako ukupata icitabo ca ubufumfushi icali na malangisho ya mankhwala na malangisho ya ukwilolesha.",
        
        // Common terms
        cropTypes: {
            maize: "Ubwaali",
            tomato: "Intomato",
            beans: "Amabinshi"
        },
        
        // Safety warnings
        safetyTitle: "ICILOLELESHO CA UKWILOLESHA",
        safetyText: "Muzibelenga malangisho ya mankhwala ukwilolesha. Fwalani ifyakwilolesha. Bikeni amankhwala ukutali na bana. Kondeni malangisho ya kubomfya.",
        
        // Buttons
        close: "Pinyani",
        clear: "Sukanyani",
        save: "Bikani",
        cancel: "Lekani"
    }
};

// Current language
let currentLanguage = 'en';

// Function to get translation
function getTranslation(key) {
    const keys = key.split('.');
    let result = translations[currentLanguage];
    
    for (const k of keys) {
        if (result && result[k]) {
            result = result[k];
        } else {
            // Fallback to English if translation not found
            result = translations.en;
            for (const fallbackKey of keys) {
                if (result && result[fallbackKey]) {
                    result = result[fallbackKey];
                } else {
                    return key; // Return key if no translation found
                }
            }
            break;
        }
    }
    
    return result || key;
}

// Function to update UI with current language
function updateLanguage() {
    // Update all elements with translation keys
    document.querySelectorAll('[id]').forEach(element => {
        const id = element.id;
        const translation = getTranslation(id);
        
        if (translation !== id) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update crop select options
    const cropSelect = document.getElementById('cropSelect');
    if (cropSelect) {
        const options = cropSelect.querySelectorAll('option');
        options[1].textContent = getTranslation('cropTypes.maize');
        options[2].textContent = getTranslation('cropTypes.tomato');
        options[3].textContent = getTranslation('cropTypes.beans');
    }
    
    // Update example list
    updateExampleList();
    
    // Update help content
    updateHelpContent();
}

// Function to update example list based on language
function updateExampleList() {
    const exampleList = document.getElementById('exampleList');
    if (!exampleList) return;
    
    const examples = {
        en: [
            "My maize leaves are turning yellow and have brown spots",
            "Tomato plants are wilting and fruits have dark patches", 
            "Bean pods are covered with white powdery substance"
        ],
        ny: [
            "Tsamba la chimanga likuchita chikasu ndipo lili ndi madontho akuda",
            "Zomera za nyama zikufota ndipo zipatso zili ndi madontho akuda",
            "Nthanga za nyemba zili ndi fumbi loyera"
        ],
        bem: [
            "Amasamba ya ubwaali yacita bupe no yali na matonto yamfifi",
            "Imilimwa ya intomato yafwa no ifisabo fyali na matonto yamfifi",
            "Amapapa ya mabinshi yafunkidwa ne fumbi lyeru"
        ]
    };
    
    exampleList.innerHTML = '';
    examples[currentLanguage].forEach(example => {
        const li = document.createElement('li');
        li.textContent = example;
        exampleList.appendChild(li);
    });
}

// Function to update help content
function updateHelpContent() {
    const helpContent = document.getElementById('helpContent');
    if (!helpContent) return;
    
    helpContent.innerHTML = `
        <div class="help-section">
            <h4><i class="fas fa-microphone"></i> ${getTranslation('helpVoiceTitle')}</h4>
            <p>${getTranslation('helpVoiceText')}</p>
        </div>
        <div class="help-section">
            <h4><i class="fas fa-keyboard"></i> ${getTranslation('helpTextTitle')}</h4>
            <p>${getTranslation('helpTextText')}</p>
        </div>
        <div class="help-section">
            <h4><i class="fas fa-chart-line"></i> ${getTranslation('helpResultsTitle')}</h4>
            <p>${getTranslation('helpResultsText')}</p>
        </div>
        <div class="help-section">
            <h4><i class="fas fa-print"></i> ${getTranslation('helpPrintTitle')}</h4>
            <p>${getTranslation('helpPrintText')}</p>
        </div>
    `;
}

// Function to set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('agrivoice_language', lang);
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    updateLanguage();
}

// Initialize language on page load
function initializeLanguage() {
    const savedLang = localStorage.getItem('agrivoice_language') || 'en';
    setLanguage(savedLang);
}
