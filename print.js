@media print {
    * {
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
    }
    
    body {
        background: white !important;
        color: black !important;
        padding: 0 !important;
        margin: 0 !important;
        font-size: 12pt !important;
        line-height: 1.4 !important;
    }
    
    .container {
        max-width: none !important;
        margin: 0 !important;
        padding: 20px !important;
    }
    
    /* Hide non-essential elements */
    .menu-btn,
    .menu-container,
    .menu-overlay,
    .loading-overlay,
    .status-bar,
    .input-section,
    .voice-control,
    .text-input-section,
    .transcript-container,
    .print-btn,
    .modal {
        display: none !important;
    }
    
    /* Show only results section */
    .app-container {
        display: block !important;
        grid-template-columns: none !important;
        gap: 0 !important;
    }
    
    .results-section {
        background: white !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        transform: none !important;
    }
    
    /* Header styling for print */
    header {
        background: white !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0 0 20px 0 !important;
        margin-bottom: 30px !important;
        border-bottom: 2px solid #1B5E20 !important;
    }
    
    .logo-container {
        justify-content: flex-start !important;
    }
    
    .logo-icon {
        background: #1B5E20 !important;
        color: white !important;
        width: 50px !important;
        height: 50px !important;
        font-size: 1.5rem !important;
        animation: none !important;
    }
    
    header h1 {
        color: #1B5E20 !important;
        font-size: 24pt !important;
        margin: 0 0 10px 0 !important;
    }
    
    .zambia-stripe {
        background: linear-gradient(90deg, #1B5E20 0%, #F7941E 33%, #C1272D 66%, #000000 100%) !important;
        height: 6px !important;
        animation: none !important;
    }
    
    header p {
        color: #666 !important;
        font-size: 11pt !important;
        margin: 10px 0 !important;
        animation: none !important;
    }
    
    /* Results styling for print */
    .section-title {
        color: #1B5E20 !important;
        font-size: 18pt !important;
        margin-bottom: 20px !important;
        animation: none !important;
        border-bottom: 1px solid #1B5E20 !important;
        padding-bottom: 10px !important;
    }
    
    .diagnosis-result {
        background: white !important;
        border: 1px solid #ddd !important;
        border-left: 4px solid #1B5E20 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        page-break-inside: avoid !important;
        margin-bottom: 30px !important;
        animation: none !important;
    }
    
    .disease-name {
        color: #1B5E20 !important;
        font-size: 16pt !important;
        font-weight: bold !important;
    }
    
    .severity-badge {
        border: 1px solid #ddd !important;
        background: white !important;
        color: black !important;
    }
    
    .diagnosis-section h4 {
        color: #1B5E20 !important;
        font-size: 14pt !important;
        font-weight: bold !important;
        margin-top: 15px !important;
        margin-bottom: 10px !important;
    }
    
    .chemical-treatments {
        background: #f9f9f9 !important;
        border: 1px solid #ddd !important;
        border-left: 4px solid #F7941E !important;
        border-radius: 0 !important;
    }
    
    .chemical-item {
        background: white !important;
        border: 1px solid #eee !important;
        border-radius: 0 !important;
        page-break-inside: avoid !important;
    }
    
    .chemical-name {
        color: #1B5E20 !important;
        font-weight: bold !important;
    }
    
    .chemical-details {
        color: #666 !important;
    }
    
    /* Print-specific elements */
    .print-header {
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid #1B5E20;
    }
    
    .print-title {
        font-size: 20pt;
        font-weight: bold;
        color: #1B5E20;
        margin-bottom: 10px;
    }
    
    .print-date {
        font-size: 11pt;
        color: #666;
    }
    
    .print-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        background: white;
        border-top: 1px solid #ddd;
        padding: 10px 20px;
        font-size: 10pt;
        color: #666;
        text-align: center;
    }
    
    .safety-warning {
        background: #fff3e0 !important;
        border: 2px solid #F7941E !important;
        padding: 15px !important;
        margin: 20px 0 !important;
        page-break-inside: avoid !important;
    }
    
    .safety-warning h4 {
        color: #F7941E !important;
        font-weight: bold !important;
        margin-bottom: 10px !important;
    }
    
    /* Page breaks */
    .page-break {
        page-break-before: always;
    }
    
    /* Table styling for chemical information */
    .chemical-table {
        width: 100%;
        border-collapse: collapse;
        margin: 15px 0;
    }
    
    .chemical-table th,
    .chemical-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    
    .chemical-table th {
        background: #f5f5f5;
        font-weight: bold;
        color: #1B5E20;
    }
    
    /* Remove animations and transitions */
    * {
        animation: none !important;
        transition: none !important;
        transform: none !important;
    }
}
