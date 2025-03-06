// Add CSS styles for transitions at the top of the file after existing style definitions
document.head.insertAdjacentHTML('beforeend', `
<style>
    .bank-section {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.3s ease, transform 0.3s ease;
        overflow: hidden;
    }
    .bank-section.hidden {
        opacity: 0;
        transform: translateY(10px);
        height: 0;
        margin: 0;
        padding: 0;
    }
    .account-option {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .account-type-item {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .account-type-item.fade-in {
        animation: fadeIn 0.3s ease forwards;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>
`);

// Language translations
const translations = {
    en: {
        // Mobile Input Screen
        'Login to Onemoney': 'Login to Onemoney',
        'Login to link your accounts and share financial data': 'Login to link your accounts and share financial data',
        'Enter mobile number': 'Enter mobile number',
        'Enter any 6-digit OTP': 'Enter any 6-digit OTP',
        'Send OTP': 'Send OTP',
        'Onemoney is India\'s largest and most-trusted platform to share financial data': 'Onemoney is India\'s largest and most-trusted platform to share financial data',
        
        // Bank Selection Screen
        'Select Your Bank(s)': 'Select Your Bank(s)',
        'Select banks you have deposits or term accounts with': 'Select banks you have deposits or term accounts with',
        'Search for banks': 'Search for banks',
        'Selected Banks': 'Selected Banks',
        'Popular Banks': 'Popular Banks',
        'Continue': 'Continue',
        'Proceed': 'Proceed',
        'No banks selected': 'No banks selected',
        'Search for your bank': 'Search for your bank',
        'No results found': 'No results found',
        
        // Account Selection Screen
        'Showing': 'Showing',
        'accounts discovered for': 'accounts discovered for',
        'edit': 'edit',
        'Select Accounts': 'Select Accounts',
        'Select the accounts you want to link:': 'Select the accounts you want to link:',
        'accounts selected': 'accounts selected',
        'All Accounts': 'All Accounts',
        'Bank Accounts': 'Bank Accounts',
        'Mutual Funds': 'Mutual Funds',
        'Equity': 'Equity',
        'Select All': 'Select All',
        'Savings Account': 'Savings Account',
        'Current Account': 'Current Account',
        'DEMAT Account': 'DEMAT Account',
        'Account No': 'Account No',
        'Folio No': 'Folio No',
        'Proceed': 'Proceed',
        
        // Confirmation Screen
        'Approve to share consent': 'Approve to share consent',
        'requires your consent for': 'requires your consent for',
        'Loan Approval': 'Loan Approval',
        'Selected Accounts': 'Selected Accounts',
        'Link More Accounts': 'Link More Accounts',
        'Loan Evaluation': 'Loan Evaluation',
        'Statement Period': 'Statement Period',
        'Frequency': 'Frequency',
        'Consent Valid Till': 'Consent Valid Till',
        'Data Deleted Before': 'Data Deleted Before',
        'One Time': 'One Time',
        'Twice a Month': 'Twice a Month',
        'Loan Monitoring': 'Loan Monitoring',
        'Portfolio Management': 'Portfolio Management',
        'Credit Line Approval': 'Credit Line Approval',
        'Credit Card Application': 'Credit Card Application',
        'Consent Details': 'Consent Details',
        'Approve': 'Approve',
        'Reject': 'Reject',
        
        // Success Screen
        'CONSENT APPROVED': 'CONSENT APPROVED',
        'Your data has been successfully shared with': 'Your data has been successfully shared with',
        'Download Data': 'Download Data',
        
        // OTP Verification Drawer
        'Enter': 'Enter',
        'OTP sent to': 'OTP sent to',
        'Verify OTP': 'Verify OTP',
        'Resend OTP in': 'Resend OTP in',
        'Unable to receive OTP': 'Unable to receive OTP',
        'OTP': 'OTP',
        'of': 'of',
        
        // Rejection Drawer
        'Are you sure you want to deny consent?': 'Are you sure you want to deny consent?',
        'This action is not reversible and will take you back to': 'This action is not reversible and will take you back to',
        'Yes I want to decline': 'Yes I want to decline',
        'Go Back': 'Go Back',
        
        // Consent Drawer
        'We request access to:': 'We request access to:',
        'Bank statement for the period': 'Bank statement for the period',
        'Profile, Summary, Transactions': 'Profile, Summary, Transactions',
        'Profile, Summary': 'Profile, Summary',
        'Data will be refreshed twice a month': 'Data will be refreshed twice a month',
        'Consent valid for 2 years': 'Consent valid for 2 years',
        'Data life is 1 day': 'Data life is 1 day',
        'Your data will be stored': 'Your data will be stored',
        'Account types: Deposits, Term Deposits': 'Account types: Deposits, Term Deposits',
        
        // Proceed Button States
        'Send OTP': 'Send OTP',
        'Continue': 'Continue',
        'Proceed': 'Proceed',
        'Approve': 'Approve',
        
        // Others
        'powered by': 'powered by',
        'We request access to': 'We request access to',
        'Data will be fetched once': 'Data will be fetched once',
        'Consent valid for 7 days': 'Consent valid for 7 days',
        'Data life is 1 day': 'Data life is 1 day',
        'Your data will be stored': 'Your data will be stored',
        'Account types': 'Account types',
    },
    hi: {
        // Mobile Input Screen
        'Login to Onemoney': 'वनमनी में लॉगिन करें',
        'Login to link your accounts and share financial data': 'अपने खातों को लिंक करने और वित्तीय डेटा साझा करने के लिए लॉगिन करें',
        'Enter mobile number': 'मोबाइल नंबर दर्ज करें',
        'Enter any 6-digit OTP': '6 अंकों का OTP दर्ज करें',
        'Send OTP': 'OTP भेजें',
        'Onemoney is India\'s largest and most-trusted platform to share financial data': 'वनमनी भारत का सबसे बड़ा और सबसे भरोसेमंद वित्तीय डेटा साझा करने वाला प्लेटफॉर्म है',
        
        // Bank Selection Screen
        'Select Your Bank(s)': 'अपना बैंक चुनें',
        'Select banks you have deposits or term accounts with': 'उन बैंकों का चयन करें जिनमें आपके पास जमा या मियादी खाते हैं',
        'Search for banks': 'बैंकों के लिए खोजें',
        'Selected Banks': 'चयनित बैंक',
        'Popular Banks': 'लोकप्रिय बैंक',
        'Continue': 'जारी रखें',
        'Proceed': 'आगे बढ़ें',
        'No banks selected': 'कोई बैंक चयनित नहीं',
        'Search for your bank': 'अपने बैंक के लिए खोजें',
        'No results found': 'कोई परिणाम नहीं मिला',
        
        // Account Selection Screen
        'Showing': 'दिखा रहा है',
        'accounts discovered for': 'खाते इनके लिए खोजे गए',
        'edit': 'संपादित करें',
        'Select Accounts': 'खाते चुनें',
        'Select the accounts you want to link:': 'वे खाते चुनें जिन्हें आप लिंक करना चाहते हैं:',
        'accounts selected': 'खाते चुने गए',
        'All Accounts': 'सभी खाते',
        'Bank Accounts': 'बैंक खाते',
        'Mutual Funds': 'म्यूचुअल फंड',
        'Equity': 'इक्विटी',
        'Select All': 'सभी चुनें',
        'Savings Account': 'बचत खाता',
        'Current Account': 'चालू खाता',
        'DEMAT Account': 'डीमैट खाता',
        'Account No': 'खाता संख्या',
        'Folio No': 'फोलियो संख्या',
        'Proceed': 'चयनित के साथ आगे बढ़ें',
        
        // Confirmation Screen
        'Approve to share consent': 'सहमति साझा करने के लिए स्वीकृति दें',
        'requires your consent for': 'के लिए आपकी सहमति की आवश्यकता है',
        'Loan Approval': 'ऋण स्वीकृति',
        'Selected Accounts': 'चयनित खाते',
        'Link More Accounts': 'अधिक खाते जोड़ें',
        'Loan Evaluation': 'ऋण मूल्यांकन',
        'Statement Period': 'स्टेटमेंट अवधि',
        'Frequency': 'आवृत्ति',
        'Consent Valid Till': 'सहमति कब तक वैध है',
        'Data Deleted Before': 'डेटा हटाने की अवधि',
        'One Time': 'एक बार',
        'Twice a Month': 'महीने में दो बार',
        'Loan Monitoring': 'ऋण निगरानी',
        'Portfolio Management': 'पोर्टफोलियो प्रबंधन',
        'Credit Line Approval': 'क्रेडिट लाइन अनुमोदन',
        'Credit Card Application': 'क्रेडिट कार्ड आवेदन',
        'Consent Details': 'सहमति विवरण',
        'Approve': 'स्वीकृत करें',
        'Reject': 'अस्वीकार करें',
        
        // Success Screen
        'CONSENT APPROVED': 'सहमति स्वीकृत',
        'Your data has been successfully shared with': 'आपका डेटा सफलतापूर्वक इनके साथ साझा किया गया है',
        'Download Data': 'डेटा डाउनलोड करें',
        
        // OTP Verification Drawer
        'Enter': 'दर्ज करें',
        'OTP sent to': 'OTP भेजा गया',
        'Verify OTP': 'OTP सत्यापित करें',
        'Resend OTP in': 'OTP पुनः भेजें',
        'Unable to receive OTP': 'OTP प्राप्त करने में असमर्थ',
        'OTP': 'OTP',
        'of': 'का',
        
        // Rejection Drawer
        'Are you sure you want to deny consent?': 'क्या आप वाकई सहमति से इनकार करना चाहते हैं?',
        'This action is not reversible and will take you back to': 'यह क्रिया अपरिवर्तनीय है और आपको वापस ले जाएगी',
        'Yes I want to decline': 'हां, मैं अस्वीकार करना चाहता हूँ',
        'Go Back': 'वापस जाएं',
        
        // Consent Drawer
        'We request access to:': 'हम निम्न तक पहुंच का अनुरोध करते हैं:',
        'Bank statement for the period': 'इस अवधि के लिए बैंक स्टेटमेंट',
        'Profile, Summary, Transactions': 'प्रोफाइल, सारांश, लेनदेन',
        'Profile, Summary': 'प्रोफाइल, सारांश',
        'Data will be refreshed twice a month': 'डेटा महीने में दो बार रिफ्रेश किया जाएगा',
        'Consent valid for 2 years': 'सहमति 2 वर्षों के लिए वैध है',
        'Data life is 1 day': 'डेटा जीवन 1 दिन है',
        'Your data will be stored': 'आपका डेटा संग्रहित किया जाएगा',
        'Account types: Deposits, Term Deposits': 'खाता प्रकार: जमा, मियादी जमा',
        
        // Proceed Button States
        'Send OTP': 'OTP भेजें',
        'Continue': 'जारी रखें',
        'Proceed': 'चयनित के साथ आगे बढ़ें',
        'Approve': 'स्वीकृत करें',
        
        // Others
        'powered by': 'द्वारा संचालित',
        'We request access to': 'हम इन तक पहुंच का अनुरोध करते हैं',
        'Data will be fetched once': 'डेटा एक बार लिया जाएगा',
        'Consent valid for 7 days': 'सहमति 7 दिनों के लिए वैध है',
        'Data life is 1 day': 'डेटा जीवन 1 दिन है',
        'Your data will be stored': 'आपका डेटा संग्रहित किया जाएगा',
        'Account types': 'खाता प्रकार',
    }
};

// Default language
let currentLanguage = 'en';

// Function to switch language
function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    updateLanguageUI();
    translatePage();
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    // Toggle active class for indicator dot
    document.getElementById('language-toggle').classList.toggle('active', currentLanguage === 'hi');
}

// Function to update UI elements based on language
function updateLanguageUI() {
    const langBtn = document.getElementById('language-toggle');
    if (currentLanguage === 'hi') {
        langBtn.setAttribute('title', 'Switch to English');
    } else {
        langBtn.setAttribute('title', 'हिंदी में बदलें');
    }
}

// Function to translate the page
function translatePage() {
    // Translate all elements with text content
    document.querySelectorAll('h1, h2, h3, p, button, label, span, div, a').forEach(element => {
        const originalText = element.getAttribute('data-original-text');
        
        // Skip elements without text content or with only whitespace
        if (!element.textContent.trim()) return;
        
        // Skip elements that are script-generated or dynamic counters
        if (element.classList.contains('resend-timer') || 
            element.classList.contains('user-count') ||
            element.parentElement && element.parentElement.classList.contains('account-number')) return;
        
        // Skip elements inside scripts or that contain HTML
        if (element.closest('script') || element.innerHTML !== element.textContent) return;
        
        // Skip elements in the How It Works popup
        if (element.closest('#how-it-works-popup')) return;
        
        // Skip elements in the Get in Touch pill
        if (element.closest('#get-in-touch-pill')) return;
        
        // If this is the first translation, store the original text
        if (!originalText) {
            element.setAttribute('data-original-text', element.textContent);
        }
        
        const textToTranslate = originalText || element.textContent;
        
        // Check if we have a translation for this text
        if (translations[currentLanguage][textToTranslate]) {
            element.textContent = translations[currentLanguage][textToTranslate];
        }
        
        // Special handling for consent purpose paragraph
        if (element.parentElement && element.parentElement.classList.contains('consent-purpose') && element.tagName === 'P') {
            if (currentLanguage === 'hi') {
                // Hard-code the Hindi translation for the consent purpose paragraph
                const brandName = document.getElementById('header-brand-name').textContent;
                element.textContent = `${brandName} के लिए आपकी सहमति की आवश्यकता है:`;
            } else {
                // Restore the original English text
                const brandName = document.getElementById('header-brand-name').textContent;
                element.textContent = `${brandName} requires your consent for:`;
            }
        }
    });
    
    // Translate placeholders in input elements
    document.querySelectorAll('input[placeholder]').forEach(input => {
        // Skip elements in the How It Works popup
        if (input.closest('#how-it-works-popup')) return;
        
        // Skip elements in the Get in Touch pill
        if (input.closest('#get-in-touch-pill')) return;
        
        const originalPlaceholder = input.getAttribute('data-original-placeholder');
        
        if (!originalPlaceholder) {
            input.setAttribute('data-original-placeholder', input.placeholder);
        }
        
        const placeholderToTranslate = originalPlaceholder || input.placeholder;
        
        if (translations[currentLanguage][placeholderToTranslate]) {
            input.placeholder = translations[currentLanguage][placeholderToTranslate];
        }
    });
    
    // Special handling for proceed button
    const proceedButton = document.querySelector('.proceed-button');
    if (proceedButton) {
        const originalButtonText = proceedButton.getAttribute('data-original-text');
        
        if (!originalButtonText) {
            proceedButton.setAttribute('data-original-text', proceedButton.textContent);
        }
        
        const buttonTextToTranslate = originalButtonText || proceedButton.textContent;
        
        if (translations[currentLanguage][buttonTextToTranslate]) {
            proceedButton.textContent = translations[currentLanguage][buttonTextToTranslate];
        }
    }
}

// Initialize language from saved preference or default
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        
        // Set active state if Hindi is selected
        document.getElementById('language-toggle').classList.toggle('active', currentLanguage === 'hi');
        
        // Translate the page on initial load if needed
        if (currentLanguage === 'hi') {
            translatePage();
        }
    }
    updateLanguageUI();
}

// Function to handle account option checkbox changes
function setupAccountOptionCheckboxes() {
    // Get the current brand color
    const brandColor = getComputedStyle(document.documentElement).getPropertyValue('--brand-color').trim() || '#722DAA';
    
    // Apply initial state based on checked status
    document.querySelectorAll('#account-selection-screen .account-option input[type="checkbox"]').forEach(checkbox => {
        const accountOption = checkbox.closest('.account-option');
        const checkmark = accountOption.querySelector('.checkbox-checkmark');
        
        if (checkbox.checked) {
            accountOption.classList.add('checked');
            accountOption.style.borderColor = brandColor;
            
            // Style the checkbox
            if (checkmark) {
                checkmark.style.backgroundColor = brandColor;
                checkmark.style.borderColor = brandColor;
            }
        } else {
            accountOption.classList.remove('checked');
            accountOption.style.borderColor = '#E5E7EB'; // Default grey border
            
            // Style the checkbox
            if (checkmark) {
                checkmark.style.backgroundColor = 'white';
                checkmark.style.borderColor = '#E5E7EB';
            }
        }
        
        // Add change event listener
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                accountOption.classList.add('checked');
                accountOption.style.borderColor = brandColor;
                
                // Style the checkbox
                if (checkmark) {
                    checkmark.style.backgroundColor = brandColor;
                    checkmark.style.borderColor = brandColor;
                }
            } else {
                accountOption.classList.remove('checked');
                accountOption.style.borderColor = '#E5E7EB';
                
                // Style the checkbox
                if (checkmark) {
                    checkmark.style.backgroundColor = 'white';
                    checkmark.style.borderColor = '#E5E7EB';
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set initial CSS variables for colors
    const initialColor = document.getElementById('color-input').value || '#184C8F'; // Get value from input or use default
    document.documentElement.style.setProperty('--brand-color', initialColor);
    document.documentElement.style.setProperty('--checkmark-color', initialColor);
    
    // Reset all checkbox backgrounds to white first
    document.querySelectorAll('#account-selection-screen .account-option input[type="checkbox"]:not(:checked) + .checkbox-checkmark').forEach(checkmark => {
        checkmark.style.backgroundColor = 'white';
        checkmark.style.borderColor = '#E5E7EB';
    });
    
    // Apply initial brand color to all checked account options
    document.querySelectorAll('#account-selection-screen .account-option input[type="checkbox"]:checked').forEach(checkbox => {
        const accountOption = checkbox.closest('.account-option');
        const checkmark = accountOption.querySelector('.checkbox-checkmark');
        
        if (accountOption) {
            accountOption.style.borderColor = initialColor;
            accountOption.classList.add('checked');
            
            if (checkmark) {
                checkmark.style.backgroundColor = initialColor;
                checkmark.style.borderColor = initialColor;
            }
        }
    });
    
    // Initialize account option checkboxes
    setupAccountOptionCheckboxes();
    
    // Initialize language support first
    document.getElementById('language-toggle').addEventListener('click', switchLanguage);
    initializeLanguage();
    
    // Initialize OTP verification system
    initializeOTPVerification();

    // Initialize current use case at the top
    const usecaseInput = document.getElementById('usecase-input');
    let currentUseCase = usecaseInput ? usecaseInput.value : 'loan-approval'; // Default to loan-approval if input not found

    // Function to update the consent purpose banner
    function updateConsentPurpose() {
        const consentPurpose = document.querySelector('.consent-purpose');
        if (!consentPurpose) return;
        
        const pElement = consentPurpose.querySelector('p');
        const h2Element = consentPurpose.querySelector('h2');
        
        if (!pElement || !h2Element) return;
        
        const brandName = nameInput.value || 'ICICI Bank';
        const useCaseValue = usecaseInput.value || 'loan-approval';
        
        // Get the readable use case name
        let useCaseText = 'Loan Approval';
        switch (useCaseValue) {
            case 'portfolio-management':
                useCaseText = 'Portfolio Management';
                break;
            case 'credit-line':
                useCaseText = 'Credit Line';
                break;
            case 'credit-card':
                useCaseText = 'Credit Card';
                break;
            default:
                useCaseText = 'Loan Approval';
        }
        
        // Update the text with the current brand name and use case
        if (currentLanguage === 'hi') {
            let translatedUseCase = translations.hi[useCaseText] || useCaseText;
            pElement.textContent = `${brandName} के लिए आपकी सहमति की आवश्यकता है:`;
            h2Element.textContent = translatedUseCase;
        } else {
            pElement.textContent = `${brandName} requires your consent for:`;
            h2Element.textContent = useCaseText;
        }
        
        // Store the current use case value to make it available globally
        currentUseCase = useCaseValue;
        
        // Update which consent container is shown based on the use case
        updateConsentContainers();
    }

    // Cache DOM elements
    const uploadButton = document.querySelector('.upload-button');
    const fileInput = document.getElementById('logo-input');
    const colorInput = document.getElementById('color-input');
    const colorValue = document.querySelector('.color-value');
    const nameInput = document.getElementById('name-input');
    const headerLogo = document.getElementById('header-logo');
    const headerBrandName = document.getElementById('header-brand-name');
    const fontInput = document.getElementById('font-input');
    
    // File upload related elements
    let fileInfo, fileName, removeFileBtn;
    
    function initializeFileUpload() {
        fileInfo = document.querySelector('.file-info');
        fileName = document.querySelector('.file-name');
        removeFileBtn = document.querySelector('.remove-file');
        
        if (removeFileBtn) {
            removeFileBtn.addEventListener('click', function() {
                // Reset file input
                fileInput.value = '';
                // Reset header logo to default
                headerLogo.src = 'icici-logo.svg';
                // Hide file info
                if (fileInfo) fileInfo.style.display = 'none';
                // Reset upload button text
                uploadButton.querySelector('span').textContent = 'Upload Image';
            });
        }
    }
    
    // Initialize file upload elements
    initializeFileUpload();

    // Helper function to darken a hex color by a given percentage
    function darkenColor(hex, percent) {
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        r = Math.max(0, Math.floor(r * (100 - percent) / 100));
        g = Math.max(0, Math.floor(g * (100 - percent) / 100));
        b = Math.max(0, Math.floor(b * (100 - percent) / 100));
        return `#${[r, g, b].map(x =>x.toString(16).padStart(2, '0')).join('')}`;
    }

    // Updated updateBrandColor function
    function updateBrandColor(color) {
        const darkenedColor = darkenColor(color, 20);
        document.querySelector('.app-header').style.background = `linear-gradient(135deg, ${color} 0%, ${darkenedColor} 100%)`;
        document.querySelector('.proceed-button').style.background = `linear-gradient(135deg, ${color} 0%, ${darkenedColor} 100%)`;
        document.querySelector('.link-more').style.color = color;
        
        // Update CSS variables for brand color
        document.documentElement.style.setProperty('--brand-color', color);
        document.documentElement.style.setProperty('--checkmark-color', color);

        // Log to verify what's happening
        console.log('Updating brand color to:', color);
        console.log('Found checked account options:', document.querySelectorAll('#account-selection-screen .account-option.checked').length);
        
        // Update all checked account options directly
        const checkedOptions = document.querySelectorAll('#account-selection-screen .account-option input[type="checkbox"]:checked');
        console.log('Found checked checkboxes:', checkedOptions.length);
        
        // Update parent account options of checked checkboxes
        checkedOptions.forEach(checkbox => {
            const accountOption = checkbox.closest('.account-option');
            if (accountOption) {
                accountOption.style.borderColor = color;
                accountOption.classList.add('checked'); // Ensure class is added
                console.log('Updating border color on account option');
            }
        });
        
        // Update all checkboxes in checked state
        document.querySelectorAll('#account-selection-screen .account-option input[type="checkbox"]:checked + .checkbox-checkmark').forEach(checkmark => {
            checkmark.style.backgroundColor = color;
            checkmark.style.borderColor = color;
        });
        
        // Make sure unchecked checkboxes are white
        document.querySelectorAll('#account-selection-screen .account-option input[type="checkbox"]:not(:checked) + .checkbox-checkmark').forEach(checkmark => {
            checkmark.style.backgroundColor = 'white';
            checkmark.style.borderColor = '#E5E7EB'; // grey border
        });
    }

    // Helper function to convert hex to RGB
    function hexToRGB(hex) {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return { r, g, b };
    }

    // Handle file upload
    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                headerLogo.src = e.target.result;
                if (fileName && fileInfo) {
                    fileName.textContent = file.name;
                    fileInfo.style.display = 'flex';
                }
                uploadButton.querySelector('span').textContent = 'Replace Logo';
            };
            
            reader.readAsDataURL(file);
        }
    });

    // Handle color changes
    colorInput.addEventListener('input', function(e) {
        const color = e.target.value;
        colorValue.textContent = color.toUpperCase();
        const rgb = hexToRGB(color);
        document.documentElement.style.setProperty('--brand-color', color);
        document.documentElement.style.setProperty('--brand-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
        updateBrandColor(color);
    });

    // Handle brand name changes
    nameInput.addEventListener('input', function(e) {
        const brandName = e.target.value || 'ICICI Bank';
        headerBrandName.textContent = brandName;
        document.getElementById('success-brand-name').textContent = brandName;
        
        // Update the rejection drawer brand name
        const rejectionBrandName = document.getElementById('rejection-brand-name');
        if (rejectionBrandName) {
            rejectionBrandName.textContent = brandName;
        }
        
        updateConsentPurpose(); // Update consent purpose when brand name changes
    });

    // Function to update styles of account options based on checkbox state
    function updateAccountOptionStyles(bankSection) {
        // Get the current brand color from CSS variable
        const brandColor = getComputedStyle(document.documentElement).getPropertyValue('--brand-color').trim();
        
        const accountOptions = bankSection.querySelectorAll('.account-option');
        accountOptions.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            const checkmark = option.querySelector('.checkbox-checkmark');
            
            if (checkbox.checked) {
                // Update account option borders
                option.classList.add('selected');
                option.classList.add('checked');
                option.style.borderColor = brandColor;
                
                // Update checkbox styles
                if (checkmark) {
                    checkmark.style.backgroundColor = brandColor;
                    checkmark.style.borderColor = brandColor;
                }
            } else {
                // Update account option borders
                option.classList.remove('selected');
                option.classList.remove('checked');
                option.style.borderColor = '#E5E7EB'; // reset to grey
                
                // Update checkbox styles
                if (checkmark) {
                    checkmark.style.backgroundColor = 'white';
                    checkmark.style.borderColor = '#E5E7EB'; // reset to grey
                }
            }
        });
    }

    // Add this helper function for updating "Select All" button text
    function updateSelectAllButtonText(bankSection) {
        const selectAllButton = bankSection.querySelector('.select-all');
        if (!selectAllButton) return;
        
        const accountOptions = bankSection.querySelectorAll('.account-option');
        const hasUncheckedOptions = Array.from(accountOptions)
            .some(option => !option.querySelector('input[type="checkbox"]').checked);
        
        selectAllButton.textContent = hasUncheckedOptions ? 'Select All' : 'Unselect All';
    }

    // Handle account selection using event delegation instead of attaching listeners to each option
    document.addEventListener('click', function(e) {
        // Handle account option clicks through delegation
        const accountOption = e.target.closest('.account-option');
        if (accountOption) {
            e.preventDefault();
            e.stopPropagation();
            
            const checkbox = accountOption.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                const bankSection = accountOption.closest('.bank-section');
                updateAccountOptionStyles(bankSection);
                
                // Update Select All button text
                if (bankSection) {
                    updateSelectAllButtonText(bankSection);
                }
                
                updateSelectedCount();
            }
        }
        
        // Handle select all button clicks through delegation
        const selectAllButton = e.target.closest('.select-all');
        if (selectAllButton) {
            e.preventDefault();
            const bankSection = selectAllButton.closest('.bank-section');
            if (bankSection) {
                handleSelectAll(bankSection);
                updateSelectedCount();
            }
        }
    });

    // Initialize with default color
    const defaultColor = '#AE282E';
    colorInput.value = defaultColor;
    colorValue.textContent = defaultColor;
    document.documentElement.style.setProperty('--brand-color', defaultColor);
    const rgb = hexToRGB(defaultColor);
    document.documentElement.style.setProperty('--brand-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    updateBrandColor(defaultColor);
    
    // Initialize styles for checkboxes on page load (moved here after setting brand color)
    document.querySelectorAll('.bank-section').forEach(section => {
        updateAccountOptionStyles(section);
    });

    // List of Google Fonts
    const googleFonts = [
        'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 
        'Raleway', 'Nunito', 'Source Sans Pro', 'Ubuntu', 'Roboto Condensed', 
        'Oswald', 'Roboto Mono', 'Mukta', 'Noto Sans', 'PT Sans', 'Work Sans', 
        'Merriweather', 'Rubik', 'Noto Sans JP', 'Playfair Display', 'Quicksand', 
        'Noto Serif', 'Fira Sans', 'Barlow', 'DM Sans', 'Mulish', 'Heebo', 
        'IBM Plex Sans', 'Manrope', 'Nanum Gothic', 'Karla', 'Josefin Sans', 
        'Source Code Pro', 'Arimo', 'Oxygen', 'Hind Siliguri', 'Dosis', 
        'Space Grotesk', 'Crimson Text', 'Libre Franklin', 'Bitter', 'Prompt', 
        'Titillium Web', 'PT Serif', 'Libre Baskerville', 'Inconsolata', 
        'Assistant', 'Abel', 'Archivo', 'Cabin', 'Maven Pro', 'Catamaran'
    ].sort();

    // Initialize with Inter as default font
    document.documentElement.style.setProperty('--selected-font', 'Cabin');
    
    // Font selection handler
    const fontSelect = document.getElementById('font-input');
    if (!fontSelect) return;

    // Load all fonts using WebFontLoader
    WebFont.load({
        google: {
            families: [
                'Inter:400,500,600',
                'Abel', 'Archivo', 'Arimo', 'Assistant', 'Barlow', 'Bitter', 
                'Cabin', 'Catamaran', 'Crimson Text', 'DM Sans', 'Dosis', 
                'Fira Sans', 'Heebo', 'Hind Siliguri', 'IBM Plex Sans', 
                'Inconsolata', 'Josefin Sans', 'Karla', 'Lato', 
                'Libre Baskerville', 'Libre Franklin', 'Manrope', 'Maven Pro', 
                'Merriweather', 'Montserrat', 'Mukta', 'Mulish', 'Nanum Gothic', 
                'Noto Sans', 'Noto Sans JP', 'Noto Serif', 'Nunito', 'Open Sans', 
                'Oswald', 'Oxygen', 'PT Sans', 'PT Serif', 'Playfair Display', 
                'Poppins', 'Prompt', 'Quicksand', 'Raleway', 'Roboto', 
                'Roboto Condensed', 'Roboto Mono', 'Rubik', 'Source Code Pro', 
                'Source Sans Pro', 'Space Grotesk', 'Titillium Web', 'Ubuntu', 
                'Work Sans'
            ]
        },
        active: function() {
            applyFont('Cabin');
            console.log('Fonts loaded');
        }
    });

    function applyFont(selectedFont) {
        document.documentElement.style.setProperty('--brand-font', 
            `"${selectedFont}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`);
    }

    fontSelect.addEventListener('change', function(e) {
        const selectedFont = this.value || 'Inter';
        applyFont(selectedFont);
    });

    function hexToRGBA(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function updateSelectedCount() {
        const allowedTypes = getAllowedAccountTypes();
        
        // Get ALL account options that match the allowed types, regardless of visibility
        const accountOptions = Array.from(document.querySelectorAll('.account-option'))
            .filter(option => allowedTypes.includes(option.getAttribute('data-type')));
        
        // Count only checked boxes among ALL allowed account types
        const selectedCount = accountOptions
            .filter(option => option.querySelector('input[type="checkbox"]').checked)
            .length;
        
        // Total count is the length of ALL allowed account options
        const totalCount = accountOptions.length;
        
        const pill = document.querySelector('.accounts-counter .pill');
        const prevCount = parseInt(pill.querySelector('.pill-number-animate')?.textContent || '0');
        
        const animationClass = selectedCount > prevCount ? 'slide-from-bottom' : 'slide-from-top';
        
        const countText = `${selectedCount}/${totalCount} accounts selected`;
        
        const [number, ...rest] = countText.split('/');
        pill.innerHTML = `
            <span class="pill-number-animate ${animationClass}">${number.trim()}</span>/${rest.join('')}
        `;

        // Update proceed button state based on selected accounts
        const proceedButton = document.querySelector('.proceed-button');
        const activeScreen = document.querySelector('.screen[data-active="true"]');
        
        if (activeScreen && activeScreen.id === 'account-selection-screen') {
            proceedButton.disabled = selectedCount === 0;
        }
    }

    // Modify the usecaseInput event listener to ensure proper order of operations
    usecaseInput.addEventListener('change', function() {
        const selectedUseCase = this.value;
        currentUseCase = selectedUseCase;  // Update the current use case variable
        console.log("Use case changed to:", selectedUseCase);
        
        // Update account options by use case
        updateAccountOptionsByUseCase();
        
        // Update account type container
        updateAccountTypeContainer();
        
        // Update filter tabs based on the selected use case
        updateFilterTabs();
        
        // Update consent containers based on selected use case
        updateConsentContainers();
        
        // Update consent purpose section
        updateConsentPurpose();
        
        // Update account counts
        updateDiscoveredAccountsCount();
        
        // Special handling for credit line to ensure MF and equity are visible
        if (selectedUseCase === 'credit-line') {
            console.log('Applying credit line special handling');
            
            // Force MF and equity to be visible and checked
            document.querySelectorAll('.account-option').forEach(option => {
                const type = option.getAttribute('data-type');
                if (type === 'mf' || type === 'equity') {
                    option.style.display = 'flex';
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    if (checkbox) {
                        checkbox.checked = true;
                        checkbox.disabled = false;
                    }
                } else {
                    option.style.display = 'none';
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    if (checkbox) {
                        checkbox.checked = false;
                        checkbox.disabled = true;
                    }
                }
            });
            
            // Update section visibility
            document.querySelectorAll('.bank-section').forEach(section => {
                const hasMfOrEquity = Array.from(section.querySelectorAll('.account-option'))
                    .some(option => {
                        const type = option.getAttribute('data-type');
                        return (type === 'mf' || type === 'equity') && option.style.display === 'flex';
                    });
                
                section.style.display = hasMfOrEquity ? 'block' : 'none';
            });
            
            // Log the state after special handling
            const visibleOptions = document.querySelectorAll('.account-option[style*="flex"]');
            const checkedBoxes = document.querySelectorAll('.account-option[style*="flex"] input[type="checkbox"]:checked:not(:disabled)');
            console.log('After credit line handling - Visible options:', visibleOptions.length);
            console.log('After credit line handling - Checked boxes:', checkedBoxes.length);
        }
        
        // Update the proceed button
        updateProceedButton();
        
        // Update the page title based on the use case
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) {
            switch (selectedUseCase) {
                case 'loan-approval':
                    pageTitle.textContent = 'Select Bank Accounts';
                    break;
                case 'portfolio-management':
                    pageTitle.textContent = 'Select Accounts';
                    break;
                case 'credit-line':
                    pageTitle.textContent = 'Select DEMAT Accounts';
                    break;
                case 'credit-card':
                    pageTitle.textContent = 'Select Bank Accounts';
                    break;
                default:
                    pageTitle.textContent = 'Select Accounts';
            }
        }
    });

    updateSelectedCount();

    const mainContent = document.querySelector('.main-content');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    function updateScrollIndicator() {
        const mainContent = document.querySelector('.main-content');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        const scrollableHeight = mainContent.scrollHeight - mainContent.clientHeight;
        const isAtBottom = Math.abs(mainContent.scrollTop - scrollableHeight) <= 1;
        
        if (isAtBottom || scrollableHeight <= 0) {
            // No overflow or at bottom, hide the indicator
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateY(100%)';
            // Add a slight delay before hiding completely to allow for animation
            setTimeout(() => {
                if (scrollableHeight <= 0) {
                    scrollIndicator.style.display = 'none';
                }
            }, 300);
        } else {
            // Has overflow and not at bottom, show the indicator
            scrollIndicator.style.display = 'flex';
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateY(0)';
        }
    }

    mainContent.addEventListener('scroll', updateScrollIndicator);
    updateScrollIndicator();

    // Add resize event listener to update scroll indicator when window size changes
    window.addEventListener('resize', updateScrollIndicator);

    function handleSelectAll(bankSection) {
        const selectAllButton = bankSection.querySelector('.select-all');
        const accountOptions = bankSection.querySelectorAll('.account-option');
        const hasUncheckedOptions = Array.from(accountOptions)
            .some(option => !option.querySelector('input[type="checkbox"]').checked);

        // Get the current brand color
        const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--brand-color').trim() || '#722DAA';

        // If any options are unchecked, select all. Otherwise, unselect all
        accountOptions.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            const checkmark = option.querySelector('.checkbox-checkmark');
            checkbox.checked = hasUncheckedOptions;
            
            // Update the checked class and styles based on checkbox state
            if (hasUncheckedOptions) {
                option.classList.add('checked');
                // Apply current brand color to border
                option.style.borderColor = currentColor;
                
                // Update checkbox style
                if (checkmark) {
                    checkmark.style.backgroundColor = currentColor;
                    checkmark.style.borderColor = currentColor;
                }
            } else {
                option.classList.remove('checked');
                option.style.borderColor = '#E5E7EB'; // Reset to default gray border
                
                // Update checkbox style
                if (checkmark) {
                    checkmark.style.backgroundColor = 'white';
                    checkmark.style.borderColor = '#E5E7EB';
                }
            }
        });

        // Update styles for all options in this bank section
        updateAccountOptionStyles(bankSection);

        // Update button text based on new state
        updateSelectAllButtonText(bankSection);
    }

    // Screen Management
    const phoneInput = document.getElementById('phone-input');
    const proceedButton = document.querySelector('.proceed-button');
    const mobileScreen = document.getElementById('mobile-input-screen');
    const accountScreen = document.getElementById('account-selection-screen');
    const rejectButton = document.querySelector('.reject-button');
    const poweredBy = document.querySelector('.powered-by');
    let currentScreen = Array.from(document.querySelectorAll('[data-active]'))
        .find(screen => screen.dataset.active === 'true')?.id || 'mobile-input-screen';

    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
        removeError(this);
        proceedButton.disabled = this.value.length !== 10;
    });

    const backButton = document.querySelector('.back-btn');

    function hideOtpInput() {
        const otpInputGroup = document.querySelector('.otp-input-group');
        const otpInput = document.getElementById('otp-input');
        
        otpInputGroup.classList.remove('show');
        
        setTimeout(() => {
            otpInputGroup.style.display = 'none';
            otpInput.value = '';
        }, 300);
    }

    function initializeAccordion() {
        const confirmationDetails = document.querySelector('.confirmation-details');
        const toggleButton = confirmationDetails.querySelector('.toggle-details');
        let autoCollapseTimeout;
        
        // Remove any existing event listeners
        const newToggleButton = toggleButton.cloneNode(true);
        toggleButton.parentNode.replaceChild(newToggleButton, toggleButton);
        
        // Ensure the click handler always works
        newToggleButton.addEventListener('click', (e) => {
            // Prevent any default behavior
            e.preventDefault();
            // Clear any pending auto-collapse
            clearTimeout(autoCollapseTimeout);
            // Toggle the collapsed state
            confirmationDetails.classList.toggle('collapsed');
        });

        // Set initial auto-collapse
        autoCollapseTimeout = setTimeout(() => {
            // Only auto-collapse if it hasn't been manually toggled
            if (!confirmationDetails.classList.contains('collapsed')) {
                confirmationDetails.classList.add('collapsed');
            }
        }, 2000);
    }

    function switchScreen(fromScreen, toScreen, isForward = true) {
        if (!fromScreen || !toScreen) return;
        
        // For debugging, log the transition
        console.log(`Switching from ${fromScreen.id} to ${toScreen.id}, isForward: ${isForward}`);
        console.log(`Current screen index before switch: ${currentScreenIndex}`);
        
        // Close any open OTP drawer when switching screens
        closeOTPDrawer();
        
        // Check if we should skip bank selection for credit line use case
        if (toScreen.id === 'bank-selection-screen') {
            const allowedTypes = getAllowedAccountTypes();
            
            // For credit line use case, we should always skip bank selection since it only uses MF and equity
            if (currentUseCase === 'credit-line' || !allowedTypes.includes('bank')) {
                // Skip to account selection screen instead
                toScreen = document.getElementById('account-selection-screen');
                // Adjust currentScreenIndex to match this change if we're advancing forward
                if (isForward) {
                    const accountSelectionIndex = screensArray.findIndex(screen => screen.id === 'account-selection-screen');
                    if (accountSelectionIndex !== -1) {
                        console.log(`Credit line use case - skipping bank selection, updating currentScreenIndex from ${currentScreenIndex} to ${accountSelectionIndex}`);
                        currentScreenIndex = accountSelectionIndex - 1; // -1 because the caller will increment it
                    }
                }
                console.log(`Skipping bank selection for ${currentUseCase}, redirecting to ${toScreen.id}`);
            }
        }
        
        // Add a minimum height constraint to the container if needed.
        const container = document.querySelector('.container');
        if (container) {
            container.style.minHeight = '700px';
        }
        
        // Slide the current screen out.
        fromScreen.classList.add(isForward ? 'slide-out-left' : 'slide-out-right');
        setTimeout(() => {
            fromScreen.dataset.active = 'false';
            fromScreen.classList.remove(isForward ? 'slide-out-left' : 'slide-out-right');
            fromScreen.style.display = 'none';
            
            // Prepare the target screen
            toScreen.style.display = 'flex';
            toScreen.dataset.active = 'true';
            toScreen.classList.add(isForward ? 'slide-in-right' : 'slide-in-left');
            
            // Update the reject button state based on the upcoming screen.
            const rejectButton = document.querySelector('.reject-button');
            if (toScreen.id === 'confirmation-screen') {
                rejectButton.style.display = 'flex';
                setTimeout(() => {
                    rejectButton.classList.add('visible');
                    // Initialize accordion elements after the transition.
                    initializeAccordion();
                    // Update the consent purpose text
                    updateConsentPurpose();
                }, 300); // Match the transition time
            } else {
                rejectButton.classList.remove('visible');
                setTimeout(() => {
                    rejectButton.style.display = 'none';
                }, 300);
            }
            
            setTimeout(() => {
                toScreen.classList.remove(isForward ? 'slide-in-right' : 'slide-in-left');
                
                // Optional: update scroll and layout adjustments for main content.
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    if (toScreen.id === 'mobile-input-screen') {
                        mainContent.style.overflowY = 'hidden';
                        scrollIndicator.style.display = 'none';
                        mainContent.scrollTo({
                            top: 0,
                            behavior: 'instant'
                        });
                    } else if (toScreen.id === 'account-selection-screen') {
                        mainContent.style.overflowY = 'auto';
                        if (isForward) {
                            requestAnimationFrame(() => {
                                mainContent.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            });
                        }
                        mainContent.style.height = '100%';
                        // Let updateScrollIndicator determine visibility 
                        updateScrollIndicator();
                    } else {
                        mainContent.style.overflowY = 'auto';
                        requestAnimationFrame(() => {
                            mainContent.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        });
                        // Let updateScrollIndicator determine visibility for all screens
                        updateScrollIndicator();
                    }
                }
                // Call updateProceedButton after the screen transition is complete.
                updateProceedButton();
            }, 300);
        }, 300);
        
        // If we're switching to the account selection screen, update the phone number
        if (toScreen.id === 'account-selection-screen') {
            const userPhoneNumber = document.getElementById('phone-input').value;
            // Format for discovered accounts section
            const maskedNumber = userPhoneNumber.length > 0 
                ? "+91 XXXXXX" + userPhoneNumber.slice(-4)
                : "+91 XXXXXXXXXX";
            const phoneNumberElement = document.querySelector('.discovered-accounts .phone-number');
            if (phoneNumberElement) {
                // Keep the edit button by only updating the text node
                phoneNumberElement.childNodes[0].nodeValue = maskedNumber;
            }
        }
        
        // If switching to confirmation screen, update the consent purpose
        if (toScreen.id === 'confirmation-screen') {
            updateConsentPurpose();
            
            // Initialize consent checkboxes and update button state
            setTimeout(() => {
                console.log('Setting up consent checkboxes for confirmation screen');
                // Re-initialize consent checkboxes
                setupConsentCheckboxes();
                // Set up observer for any changes
                setupConsentCheckboxObserver();
                // Make sure the button state is correct
                updateProceedButton();
                
                // Double-check button state again after a short delay
                setTimeout(() => {
                    console.log('Double-checking button state for confirmation screen');
                    updateProceedButton();
                }, 500);
            }, 300);
        }
        
        // Translate the content of the new screen if not in English
        if (currentLanguage !== 'en') {
            // Small delay to ensure the new screen is visible first
            setTimeout(() => {
                translatePage();
            }, 100);
        }
    }

    // Global array of screens and an index to track the current screen
    const screensArray = [
        document.getElementById('mobile-input-screen'),
        document.getElementById('bank-selection-screen'),
        document.getElementById('account-selection-screen'),
        document.getElementById('confirmation-screen'),
        document.getElementById('success-screen')
    ];
    let currentScreenIndex = 0;

    function showError(input, message) {
        removeError(input);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        const inputGroup = input.closest('.phone-input-group, .otp-input-group');
        inputGroup.classList.add('error');
        inputGroup.parentNode.insertBefore(errorDiv, inputGroup.nextSibling);
    }

    function removeError(input) {
        const inputGroup = input.closest('.phone-input-group, .otp-input-group');
        if (inputGroup) {
            inputGroup.classList.remove('error');
            const errorMessage = inputGroup.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    }

    function isValidIndianMobileNumber(number) {
        return /^[6-9]\d{9}$/.test(number);
    }

    const otpInput = document.getElementById('otp-input');
    
    // Function to validate OTP and update button state
    function validateOtpAndUpdateButton() {
        const otpValue = otpInput.value.trim();
        const proceedButton = document.querySelector('.proceed-button');
        
        if (proceedButton) {
            // Button should only be enabled when exactly 6 digits are entered
            proceedButton.disabled = otpValue.length !== 6;
            console.log('OTP validation - Length:', otpValue.length, 'Button disabled:', proceedButton.disabled);
        }
    }
    
    otpInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 6); // Limit to 6 digits
        removeError(this);
        validateOtpAndUpdateButton();
    });

    // Add this to ensure button is disabled when OTP input is cleared
    otpInput.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            setTimeout(validateOtpAndUpdateButton, 0); // Use setTimeout to run after the value is updated
        }
    });

    function updateFilterTabs() {
        const allowedTypes = getAllowedAccountTypes();
        const filterTabsContainer = document.querySelector('.filter-tabs-container');

        // If there is only one allowed account type, hide the filter tabs container.
        if (allowedTypes.length <= 1) {
            filterTabsContainer.style.display = 'none';
            return;
        }

        // Otherwise make sure the container is visible.
        filterTabsContainer.style.display = 'block';

        // Now update each filter-tab as before.
        document.querySelectorAll('.filter-tab').forEach(tab => {
            const filter = tab.getAttribute('data-filter');
            // Always show the "all" tab.
            if (filter === 'all') {
                tab.style.display = 'inline-block';
            } else {
                tab.style.display = allowedTypes.includes(filter) ? 'inline-block' : 'none';
            }
            
            // REMOVED: We use event delegation instead of attaching listeners to each tab
            // tab.addEventListener('click', function() {...});
        });
    }
    
    // Setup event delegation for filter tabs
    const filterTabsContainer = document.querySelector('.filter-tabs-container');
    if (filterTabsContainer) {
        filterTabsContainer.addEventListener('click', function(e) {
            const tab = e.target.closest('.filter-tab');
            if (!tab) return;
            
            // Remove active class from all tabs
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Scroll the tab into view with smooth behavior
            tab.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            
            // Filter accounts
            const filterType = tab.dataset.filter;
            const bankSectionsContainer = document.getElementById('bank-sections-container');
            
            // Get allowed account types for current use case
            const allowedTypes = getAllowedAccountTypes();
            
            // First, apply transitions to all sections
            const allSections = bankSectionsContainer.querySelectorAll('.bank-section');
            allSections.forEach(section => {
                // Add hidden class instead of display: none for smooth transition
                section.classList.add('hidden');
                
                // For dynamically generated sections, check their data attributes
                const accountType = section.querySelector('.account-option')?.getAttribute('data-type');
                // For static sections, check their classes
                const sectionClasses = section.classList;
                
                // Set a timeout to allow the transition to occur before we actually hide the element
                setTimeout(() => {
                    if (filterType === 'all') {
                        // Show section if either condition is met
                        if ((sectionClasses.contains('banks') && allowedTypes.includes('bank')) ||
                            (sectionClasses.contains('mf') && allowedTypes.includes('mf')) ||
                            (sectionClasses.contains('equity') && allowedTypes.includes('equity')) ||
                            (accountType && allowedTypes.includes(accountType))) {
                            section.classList.remove('hidden');
                        }
                    } else {
                        // For specific filter types
                        const sectionClass = filterType === 'bank' ? 'banks' : filterType;
                        if ((sectionClasses.contains(sectionClass) && allowedTypes.includes(filterType)) ||
                            (accountType === filterType && allowedTypes.includes(filterType))) {
                            section.classList.remove('hidden');
                        }
                    }
                }, 100); // Short delay to ensure animation works properly
            });
            
            // Update account type container with smooth transitions
            updateAccountTypeContainerWithAnimation(filterType);
        });
    }

    /**
     * Returns the human‑readable label for a given account type.
     */
    function getTypeLabel(type) {
        const labels = {
            bank: 'Bank Accounts',
            mf: 'Mutual Funds',
            equity: 'Equity',
            other: 'Other Accounts'
        };
        return labels[type] || type;
    }

    /**
     * Updates the confirmation details based on the accounts selected in the
     * account‑selection screen. Instead of showing the account type (which
     * was set to 'bank', 'mf', or 'equity'), we now display the actual bank name.
     * Also updates the header count to reflect the total selected accounts.
     */
    function updateSelectedAccountsList() {
        // Get the allowed account types based on the current use case.
        const allowedTypes = getAllowedAccountTypes().map(t => t.toLowerCase());

        // Retrieve the selected accounts from the account‑selection screen by checking which checkboxes are checked.
        const selectedAccountElements = Array.from(
            document.querySelectorAll('.account-option input[type="checkbox"]:checked')
        ).map(checkbox => checkbox.closest('.account-option'));

        // Map the account options to an object containing the details we need.
        const selectedAccounts = selectedAccountElements
            .map(option => {
                // Get the account type; if not present, get the text from the .account-type element.
                const type = option.getAttribute('data-type') || (option.querySelector('.account-type')?.textContent || '').toLowerCase();
                
                // Get bank section and its info elements with null checks
                const bankSection = option.closest('.bank-section');
                if (!bankSection) return null; // Skip if bank section not found
                
                const bankInfo = bankSection.querySelector('.bank-info');
                if (!bankInfo) return null; // Skip if bank info not found
                
                
                const bankNameElement = bankInfo.querySelector('span');
                const bankLogoElement = bankInfo.querySelector('img');
                const accountNumberElement = option.querySelector('.account-number');
                
                // Handle both cases: when logo is an img or when it's an icon
                let bankLogo = 'icici-logo.svg'; // Default fallback
                if (bankLogoElement) {
                    bankLogo = bankLogoElement.src;
                } else if (bankInfo.querySelector('[data-lucide="landmark"]')) {
                    bankLogo = 'landmark-icon.png'; // Another fallback for icon
                }
                
                return {
                    type,
                    bankName: bankNameElement ? bankNameElement.textContent : 'Unknown Bank',
                    bankLogo: bankLogo,
                    number: accountNumberElement ? accountNumberElement.textContent : 'Unknown Account'
                };
            })
            .filter(account => account !== null) // Filter out any null accounts from above
            // Only include accounts whose type is allowed for the current use case.
            .filter(account => allowedTypes.includes(account.type.toLowerCase()));

        // Group the selected accounts by type (if needed for display grouping).
        const groupedAccounts = selectedAccounts.reduce((acc, account) => {
            const typeKey = account.type.toLowerCase();
            if (!acc[typeKey]) acc[typeKey] = [];
            acc[typeKey].push(account);
            return acc;
        }, {});

        // Build the HTML for each group.
        const accountsList = document.querySelector('.selected-accounts-list');
        if (!accountsList) return; // Exit if element not found
        
        const html = Object.entries(groupedAccounts).map(([type, accounts]) => `
            <div class="account-type-section" data-type="${type}">
                <div class="type-header">
                    <span class="type-label">${getTypeLabel(type)}</span>
                    <span class="type-count">${accounts.length}</span>
                </div>
                <div class="type-accounts">
                    ${accounts.map(account => `
                        <div class="selected-account-item">
                            <div class="bank-details">
                                <img src="${account.bankLogo}" alt="${account.bankName}" class="bank-logo">
                                <div class="account-info">
                                    <!-- Display the bank name rather than the type -->
                                    <div class="bank-name">${account.bankName}</div>
                                    <div class="account-number">${account.number.replace(/Account No: /, '')}</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Update the confirmation header with the total count of selected accounts.
        const headerEl = document.querySelector('.selected-accounts-header h2');
        if (headerEl) {
            headerEl.textContent = `Selected Accounts (${selectedAccounts.length})`;
        }

        accountsList.innerHTML = html;
    }

    // Consent drawer functionality
    const consentDetailsButton = document.querySelector('.consent-details-button');
    const consentDrawer = document.querySelector('.consent-drawer');
    const drawerBackdrop = document.querySelector('.drawer-backdrop');
    const closeDrawerButton = document.querySelector('.close-drawer');

    function openDrawer() {
        // Only set display to block if it's not already visible
        if (drawerBackdrop.style.display !== 'block') {
            drawerBackdrop.style.display = 'block';
            
            // Force a reflow to ensure the browser registers the display change
            void drawerBackdrop.offsetWidth;
        }
        
        // Now add the open class to both elements to trigger transitions
        consentDrawer.classList.add('open');
        drawerBackdrop.classList.add('open');
        
        // Find and disable scroll on app-content instead of body
        const appContent = document.querySelector('.app-content');
        if (appContent) {
            appContent.style.overflow = 'hidden';
        }
    }

    function closeDrawer() {
        consentDrawer.classList.remove('open');
        drawerBackdrop.classList.remove('open');
        
        // Check if OTP drawer is still open before hiding backdrop
        const otpDrawer = document.querySelector('.otp-verification-drawer');
        const isOtpDrawerOpen = otpDrawer && otpDrawer.classList.contains('open');
        
        if (!isOtpDrawerOpen) {
            // Set a timeout to hide the backdrop after the transition completes
            setTimeout(() => {
                drawerBackdrop.style.display = 'none';
            }, 300); // Match this timing with the transition duration in CSS
        }
        
        // Re-enable scroll on app-content
        const appContent = document.querySelector('.app-content');
        if (appContent) {
            appContent.style.overflow = '';
        }
    }

    consentDetailsButton.addEventListener('click', openDrawer);
    closeDrawerButton.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);

    // Add touch/swipe support for closing
    let startY = 0;
    let currentY = 0;

    consentDrawer.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });

    consentDrawer.addEventListener('touchmove', (e) => {
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        
        if (diff > 0) { // Only allow downward swipe
            consentDrawer.style.transform = `translateY(${diff}px)`;
        }
    });

    consentDrawer.addEventListener('touchend', () => {
        const diff = currentY - startY;
        if (diff > 100) { // If swiped down more than 100px
            closeDrawer();
        } else {
            consentDrawer.style.transform = ''; // Reset position
        }
    });

    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function updateDateRange() {
        const dateRangeElements = document.querySelectorAll('.date-range');
        const endDate = new Date();
        const startDate = new Date();
        startDate.setMonth(endDate.getMonth() - 6);
        
        const formattedStartDate = startDate.toLocaleDateString('en-GB');
        const formattedEndDate = endDate.toLocaleDateString('en-GB');
        
        dateRangeElements.forEach(element => {
            element.textContent = `${formattedStartDate}-${formattedEndDate}`;
        });
    }

    // Call this when the page loads
    updateDateRange();

    const loanApprovalConsent = document.getElementById('loan-approval-consent');
    const portfolioManagementConsent = document.getElementById('portfolio-management-consent');
    const creditLineConsent = document.getElementById('credit-line-consent');
    const creditCardConsent = document.getElementById('credit-card-consent');
    const headline = document.getElementById('mobile-input-screen').querySelector('h1');

    // Helper: returns allowed account types based on the current use case.
    function getAllowedAccountTypes() {
        switch (currentUseCase) {
            case 'loan-approval':
            case 'credit-card':
                return ['bank'];
            case 'portfolio-management':
                return ['bank', 'mf', 'equity'];
            case 'credit-line':
                return ['mf', 'equity'];
            default:
                return ['bank', 'mf', 'equity'];
        }
    }

    /**
     * Updates the account options (the .account-option elements) 
     * based on the current use case.
     */
    function updateAccountOptionsByUseCase() {
        const allowedTypes = getAllowedAccountTypes();
        console.log('Updating account options by use case:', currentUseCase);
        console.log('Allowed account types:', allowedTypes);

        // Special handling for credit line - need to ensure MF and equity are properly shown
        if (currentUseCase === 'credit-line') {
            console.log('Special handling for credit line use case');
            // Make sure MF and equity accounts are visible
            document.querySelectorAll('.account-option').forEach(option => {
                const type = option.getAttribute('data-type');
                if (type === 'mf' || type === 'equity') {
                    option.style.display = 'flex';
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    if (checkbox) {
                        checkbox.checked = true;
                        checkbox.disabled = false;
                    }
                } else {
                    option.style.display = 'none';
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    if (checkbox) {
                        checkbox.checked = false;
                        checkbox.disabled = true;
                    }
                }
            });

            // Ensure bank sections are hidden and non-bank sections are visible
            document.querySelectorAll('.bank-section').forEach(section => {
                const hasVisibleAccounts = Array.from(section.querySelectorAll('.account-option'))
                    .some(option => option.style.display === 'flex');
                section.style.display = hasVisibleAccounts ? 'block' : 'none';
            });

            // Log visible and checked accounts
            const visibleOptions = document.querySelectorAll('.account-option[style*="flex"]');
            const checkedBoxes = document.querySelectorAll('.account-option[style*="flex"] input[type="checkbox"]:checked:not(:disabled)');
            console.log('Credit line - Visible options:', visibleOptions.length);
            console.log('Credit line - Checked boxes:', checkedBoxes.length);
            
            // Update the "Select All" button text for all visible bank sections
            document.querySelectorAll('.bank-section').forEach(section => {
                if (section.style.display !== 'none') {
                    updateSelectAllButtonText(section);
                }
            });
            
            // Force update of the proceed button
            updateProceedButton();
            return;
        }

        // Loop through each account option and update its display and checked state
        document.querySelectorAll('.account-option').forEach(option => {
            const type = option.getAttribute('data-type');
            const checkbox = option.querySelector('input[type="checkbox"]');
            
            if (allowedTypes.includes(type)) {
                // Show and enable options of allowed types
                option.style.display = 'flex';
                
                // Make sure checkbox is enabled and checked by default
                if (checkbox) {
                    checkbox.disabled = false;
                    checkbox.checked = true;
                }
            } else {
                // Hide and disable options of disallowed types
                option.style.display = 'none';
                
                // Uncheck and disable checkboxes for hidden options
                if (checkbox) {
                    checkbox.checked = false;
                    checkbox.disabled = true;
                }
            }
        });
        
        // Log debugging info about account options
        const visibleOptions = document.querySelectorAll('.account-option[style*="flex"]');
        const checkedOptions = document.querySelectorAll('.account-option input[type="checkbox"]:checked:not(:disabled)');
        console.log('Visible account options:', visibleOptions.length);
        console.log('Checked account options:', checkedOptions.length);
        console.log('All checkboxes (checked or not):', document.querySelectorAll('.account-option input[type="checkbox"]').length);

        // Update bank sections visibility based on visible accounts
        document.querySelectorAll('.bank-section').forEach(section => {
            // Check if any account within this section is visible
            const hasVisibleAccounts = Array.from(section.querySelectorAll('.account-option'))
                .some(option => option.style.display === 'flex');
            
            // Only show bank sections that have at least one visible account
            section.style.display = hasVisibleAccounts ? 'block' : 'none';
        });
        
        // Force update of the proceed button state to reflect the actual checked accounts
        updateProceedButton();
    }

    /**
     * Updates the account-type container in the mobile-input screen so that it
     * only shows the active account types.
     */
    function updateAccountTypeContainer() {
        const allowedTypes = getAllowedAccountTypes();
        // Mapping for icon name and display label for each account type.
        const typeMapping = {
            bank: {
                icon: 'landmark',
                label: 'Bank Accounts'
            },
            mf: {
                icon: 'hand-coins',
                label: 'Mutual Funds'
            },
            equity: {
                icon: 'chart-candlestick',
                label: 'Equity'
            }
        };

        const container = document.querySelector('.account-type-container .account-type-list');
        if (container) {
            let html = '';
            allowedTypes.forEach(type => {
                const mapping = typeMapping[type];
                if (mapping) {
                    html += `<div class="account-type-item">
                                <i data-lucide="${mapping.icon}" class="account-type-icon" style="color: darkslategray; height: 16px; width: 16px;"></i>
                                <span>${mapping.label}</span>
                             </div>`;
                }
            });
            container.innerHTML = html;
            // Re-initialize lucide icons so the new icons render correctly.
            lucide.createIcons();
        }
    }

    /**
     * Updates the filter tabs in the account selection screen so that only 
     * allowed account-type filters are visible.
     */
    function updateFilterTabs() {
        const allowedTypes = getAllowedAccountTypes();
        const filterTabsContainer = document.querySelector('.filter-tabs-container');

        // If there is only one allowed account type, hide the filter tabs container.
        if (allowedTypes.length <= 1) {
            filterTabsContainer.style.display = 'none';
            return;
        }

        // Otherwise make sure the container is visible.
        filterTabsContainer.style.display = 'block';

        // Now update each filter-tab as before.
        document.querySelectorAll('.filter-tab').forEach(tab => {
            const filter = tab.getAttribute('data-filter');
            // Always show the "all" tab.
            if (filter === 'all') {
                tab.style.display = 'inline-block';
            } else {
                tab.style.display = allowedTypes.includes(filter) ? 'inline-block' : 'none';
            }
            
            // REMOVED: We use event delegation instead of attaching listeners to each tab
            // tab.addEventListener('click', function() {...});
        });
    }

    // On initial load, update account options, account type container and filter tabs.
    updateAccountOptionsByUseCase();
    updateAccountTypeContainer();
    updateFilterTabs();
    updateDiscoveredAccountsCount();

    // Function to update consent containers based on selected use case
    function updateConsentContainers() {
        const selectedUseCase = usecaseInput.value;

        loanApprovalConsent.style.display = 'none';
        portfolioManagementConsent.style.display = 'none';
        creditLineConsent.style.display = 'none';
        creditCardConsent.style.display = 'none';

        // Update drawer content based on selected use case
        const drawerContent = document.querySelector('.drawer-content'); // Reference to the drawer content
        let content = '';

        // Show the relevant consent container and update drawer content
        switch (selectedUseCase) {
            case 'loan-approval':
                loanApprovalConsent.style.display = 'block';
                content = `
                    <div class="consent-section">
                        <h3>Loan Evaluation</h3>
                        <p>We request access to:</p>
                        <ul>
                            <li>Bank statement for the period <span class="date-range">14/08/2023-14/02/2024</span> (Profile, Summary, Transactions)</li>
                            <li>Data will be fetched once</li>
                            <li>Consent valid for 7 days</li>
                            <li>Data life is 1 day</li>
                            <li>Your data will be stored</li>
                            <li>Account types: Deposits, Term Deposits</li>
                        </ul>
                    </div>
                    <div class="consent-section">
                        <h3>Loan Monitoring</h3>
                        <p>We request access to:</p>
                        <ul>
                            <li>Monthly bank statements (Profile, Summary, Transactions)</li>
                            <li>Data will be fetched once per month</li>
                            <li>Consent valid for loan tenure</li>
                            <li>Data life is 1 month</li>
                            <li>Your data will be stored</li>
                            <li>Account types: Deposits, Term Deposits</li>
                        </ul>
                    </div>
                    
                `;
                break;
            case 'portfolio-management':
                portfolioManagementConsent.style.display = 'block';
                content = `
                    <div class="consent-section">
                        <h3>Portfolio Management</h3>
                        <p>We request access to:</p>
                        <ul>
                            <li>Bank statement for the period <span class="date-range">14/08/2023-14/02/2024</span> (Profile, Summary)</li>
                            <li>Data will be fetched four times a month</li>
                            <li>Consent valid for 2 years</li>
                            <li>Data life is 1 month</li>
                            <li>Your data will be stored</li>
                            <li>Account types: Deposits, Term Deposits</li>
                        </ul>
                    </div>
                `;
                break;
            case 'credit-line':
                creditLineConsent.style.display = 'block';
                content = `
                    <div class="consent-section">
                        <h3>Credit Line Approval</h3>
                        <p>We request access to:</p>
                        <ul>
                            <li>Financial statement once a month for the next two years.</li>
                            <li>Data life is 1 week.</li>
                        </ul>
                    </div>
                `;
                break;
            case 'credit-card':
                creditCardConsent.style.display = 'block';
                content = `
                    <div class="consent-section">
                        <h3>Credit Card Application</h3>
                        <p>We request access to:</p>
                        <ul>
                            <li>Last 6 months Bank Statement (fetched once).</li>
                            <li>Consent valid for 7 days and data life is 1 day.</li>
                        </ul>
                    </div>
                `;
                break;
        }

        // Update the drawer content
        drawerContent.innerHTML = content;
    }

    // Initialize consent containers on page load
    updateConsentContainers();

    window.onload = function() {
        console.log('Window loaded, initializing popup');
        const popup = document.getElementById('how-it-works-popup');
        const backdrop = document.querySelector('.drawer-backdrop');
        
        // Make sure user count element exists
        const userCountElement = document.getElementById('user-count');
        if (userCountElement) {
            console.log('User count element found:', userCountElement);
        } else {
            console.error('User count element NOT found, check your HTML!');
        }
        
        popup.style.display = 'block';
        backdrop.classList.add('open'); // Fade in the backdrop
        
        setTimeout(() => {
            console.log('Adding show class to popup content');
            popup.querySelector('.popup-content').classList.add('show'); // Fade in the content
            
            // Delayed user count animation for better impact - reduced delay
            setTimeout(() => {
                console.log('Triggering user count animation');
                animateUserCount(52834276); // Start the animation with delay
            }, 600); // Reduced delay from 1800ms to 600ms
            
        }, 10); // Small timeout to ensure the display is set before adding the class
    };

    const body = document.querySelector('body');
        if (body) {
            body.style.overflow = 'hidden';
        }

    
    document.querySelector('.get-started-button').onclick = function() {
        const popup = document.getElementById('how-it-works-popup');
        const popupContent = popup.querySelector('.popup-content');
        const backdrop = document.querySelector('.drawer-backdrop');

        popupContent.classList.remove('show'); // Start fade out for content
        popupContent.classList.add('hide'); // Add hide class for fade out
        backdrop.classList.remove('open'); // Fade out the backdrop

        setTimeout(() => {
            popup.style.display = 'none'; // Hide the popup after fade out
            const body = document.querySelector('body');
            if (body) {
                body.style.overflow = 'auto';
            }
        }, 500); // Match the duration of the fade-out transition
    };

    // Add this code to handle the color input wrapper click
    const colorInputWrapper = document.getElementById('color-input').parentElement; // Get the parent wrapper of the color input
    colorInputWrapper.addEventListener('click', function() {
        document.getElementById('color-input').click(); // Trigger the click on the hidden color input
    });

    // Handle Send OTP button click - using a proper global flag to prevent duplicate listeners
    const sendOtpButton = document.querySelector('.proceed-button');
    const customerInput = document.getElementById('phone-input');

    // Replace with your Google Apps Script URL
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbwT17orum0gqOtbZp2hD3kGrzmvpY5-KEonOF4D6-Mv09nMF7wWBBTbLQ7bs9kUaEF-/exec';
    // Set this to false for demo mode to skip the actual Google Sheets API call
    const enableGoogleSheetsIntegration = false;

    // Creating a custom event to handle the OTP submission
    // This ensures we don't have duplicate event listeners
    function setupOTPButtonHandler() {
        // Remove any existing listeners first by cloning and replacing
        const oldButton = document.querySelector('.proceed-button');
        
        // Check if the button exists
        if (!oldButton) {
            console.warn('Send OTP button not found');
            return null; // Return null to indicate failure
        }
        
        const newButton = oldButton.cloneNode(true);
        oldButton.parentNode.replaceChild(newButton, oldButton);
        
        // Add the event listener to the new button
        newButton.addEventListener('click', function() {
            const currentScreen = screensArray[currentScreenIndex];
            
            // Only handle OTP sending if we're on the mobile input screen
            if (currentScreen.id === 'mobile-input-screen') {
                // Get the phone input directly rather than using global variable
                const phoneInput = document.getElementById('phone-input');
                const mobileNumber = phoneInput?.value;
                
                if (!mobileNumber) {
                    showError(phoneInput, 'Please enter your mobile number');
                    return;
                }
                
                if (!isValidIndianMobileNumber(mobileNumber)) {
                    showError(phoneInput, 'Please enter a valid 10-digit mobile number');
                    return;
                }
                
                // Show OTP input field if not already shown
                const otpInputGroup = document.querySelector('.otp-input-group');
                const otpInput = document.getElementById('otp-input');
                
                if (!otpInputGroup.classList.contains('show')) {
                    // First click – show the OTP input and send mobile number to Google Sheets
                    otpInputGroup.style.display = 'flex';
                    otpInputGroup.offsetHeight; // Force reflow
                    otpInputGroup.classList.add('show');
                    this.textContent = 'Verify OTP';
                    this.disabled = true; // Initially disabled
                    otpInput.focus();
                    otpInput.value = ''; // Ensure it's empty
                    
                    // Force the button to stay disabled until proper OTP length
                    // Removed: newButton.disabled = false; // Enable button immediately for demo purposes
                    
                    console.log(`Mobile Number: ${mobileNumber}`); // Log the mobile number
                    
                    // Remove the automatic enabling
                    // Removed: setTimeout(() => {
                    //     this.disabled = false;
                    // }, 500);
                    
                    // Call the validation function to ensure the button stays disabled
                    validateOtpAndUpdateButton();
                    
                    return;
                }
                
                // Second click – verify OTP
                if (otpInput.value.length !== 6) {
                    showError(otpInput, 'Please enter a valid 6-digit OTP');
                    return;
                }
                
                // If OTP validation passes, proceed to the next screen
                const nextScreen = screensArray[currentScreenIndex + 1];
                if (nextScreen) {
                    switchScreen(currentScreen, nextScreen);
                    currentScreenIndex++;
                    // Update proceed button text for next screen
                    updateProceedButton();
                }
            }
            // For all other screens, handle navigation normally
            else {
                switch (currentScreen.id) {
                    case 'bank-selection-screen': {
                        // For credit line use case, skip bank selection validation since banks aren't relevant
                        if (currentUseCase === 'credit-line') {
                            console.log('Credit line use case - skipping bank selection validation');
                            break;
                        }
                        
                        // Example validation: require at least one bank to have been selected
                        if (selectedBankNames.size === 0) {
                            alert('Please select at least one bank to proceed');
                            return;
                        }
                        break;
                    }
                    case 'account-selection-screen': {
                        // Gather the selected accounts and ensure there is at least one
                        console.log('Validating account selection...');
                        console.log('Current use case:', currentUseCase);
                        
                        const visibleCheckboxes = document.querySelectorAll('.account-option[style*="flex"] input[type="checkbox"]');
                        console.log('Total visible account checkboxes:', visibleCheckboxes.length);
                        
                        const checkedBoxes = document.querySelectorAll('.account-option[style*="flex"] input[type="checkbox"]:checked:not(:disabled)');
                        console.log('Checked visible account checkboxes:', checkedBoxes.length);
                        
                        // Debug output of what options are visible
                        console.log('Visible account options by type:');
                        document.querySelectorAll('.account-option[style*="flex"]').forEach(option => {
                            const type = option.getAttribute('data-type');
                            const isChecked = option.querySelector('input[type="checkbox"]').checked;
                            console.log(`- Type: ${type}, Checked: ${isChecked}`);
                        });
                        
                        if (checkedBoxes.length === 0) {
                            alert('Please select at least one account to proceed');
                            
                            // If this is credit line, force a refresh of the account options
                            if (currentUseCase === 'credit-line') {
                                console.log('Credit line use case detected - forcing account option refresh');
                                // Make sure MF and equity checkboxes are checked
                                document.querySelectorAll('.account-option[data-type="mf"], .account-option[data-type="equity"]').forEach(option => {
                                    const checkbox = option.querySelector('input[type="checkbox"]');
                                    if (checkbox) {
                                        checkbox.checked = true;
                                        checkbox.disabled = false;
                                        option.style.display = 'flex';
                                    }
                                });
                                
                                // Hide bank sections, show MF/equity sections
                                document.querySelectorAll('.bank-section').forEach(section => {
                                    const hasVisibleMfOrEquity = Array.from(section.querySelectorAll('.account-option[data-type="mf"], .account-option[data-type="equity"]')).length > 0;
                                    section.style.display = hasVisibleMfOrEquity ? 'block' : 'none';
                                });
                                
                                updateProceedButton();
                            }
                            return;
                        }
                        
                        const selectedAccounts = Array.from(checkedBoxes)
                            .map(checkbox => {
                                const accountOption = checkbox.closest('.account-option');
                                const bankSection = accountOption.closest('.bank-section');
                                const bankInfo = bankSection.querySelector('.bank-info');
                                
                                // Make sure we can handle both image and icon logos
                                let bankLogo;
                                const imgLogo = bankInfo.querySelector('img');
                                const iconLogo = bankInfo.querySelector('.bank-logo');
                                
                                if (imgLogo) {
                                    bankLogo = imgLogo.src;
                                } else if (iconLogo) {
                                    bankLogo = iconLogo.outerHTML;
                                }
                                
                                return {
                                    bankName: bankInfo.querySelector('span').textContent,
                                    bankLogo: bankLogo,
                                    type: accountOption.querySelector('.account-type').textContent,
                                    number: accountOption.querySelector('.account-number').textContent
                                };
                            });
                            
                        console.log('Selected accounts:', selectedAccounts);
                        updateSelectedAccountsList(selectedAccounts);
                        
                        // Start the sequential OTP verification process instead of going directly to confirmation
                        startSequentialOTPVerification();
                        
                        // Don't proceed to next screen immediately - OTP verification will handle that
                        return;
                    }
                    // Additional validations for other screens can be added here if needed.
                }
                
                
                // If validations pass, move to the next screen if available in the array.
                if (currentScreenIndex < screensArray.length - 1) {
                    const fromScreen = screensArray[currentScreenIndex];
                    const toScreen = screensArray[++currentScreenIndex];
                    switchScreen(fromScreen, toScreen, true);
                }
            }
        });
        
        return newButton; // Return the new button in case we need it
    }

    // Initialize OTP button handler after ALL navigation logic is defined
    setupOTPButtonHandler();

    const getInTouchPill = document.getElementById('get-in-touch-pill');
    const contactInfo = getInTouchPill.querySelector('.contact-info');
    const closeButton = contactInfo.querySelector('.close-contact-info');
    

    getInTouchPill.addEventListener('click', function() {
        const isVisible = contactInfo.style.display === 'block';
        contactInfo.style.display = isVisible ? 'none' : 'block';
    });

    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the pill from collapsing
        contactInfo.style.display = 'none'; // Hide the contact info
    });

    // Copy button functionality
    const copyButtons = contactInfo.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the pill from collapsing
            const textToCopy = this.getAttribute('data-text');
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Create tooltip element
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Copied!';
                tooltip.className = 'tooltip'; // Add a class for styling
                document.body.appendChild(tooltip);
                
                // Position the tooltip
                const rect = this.getBoundingClientRect();
                tooltip.style.left = `${rect.left + window.scrollX}px`;
                tooltip.style.top = `${rect.top + window.scrollY - 30}px`; // Adjust position above the button
                
                // Show the tooltip and remove it after 2 seconds
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });

    // Function to animate the user count with more pronounced easing
    function animateUserCount(finalNumber) {
        const userCountElement = document.getElementById('user-count');
        let currentNumber = 0;
        const duration = 1500; // Total duration of the animation in milliseconds
        const startTime = performance.now();
        
        // Add the counting class to trigger the pulsating animation
        userCountElement.classList.add('counting');
        
        function updateCount(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1); // Normalize progress to [0, 1]

            // Easing function: quartic ease in and out
            const easedProgress = progress < 0.5 
                ? 8 * progress * progress * progress * progress // Ease in
                : 1 - Math.pow(-2 * progress + 2, 4) / 2; // Ease out

            currentNumber = Math.floor(easedProgress * finalNumber);
            userCountElement.textContent = currentNumber.toLocaleString(); // Format number with commas

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                // Ensure it ends at the final number
                userCountElement.textContent = finalNumber.toLocaleString();
                
                // Add the completion class for the bounce effect
                userCountElement.classList.add('count-complete');
                
                // Remove classes after animation completes
                setTimeout(() => {
                    userCountElement.classList.remove('counting', 'count-complete');
                    
                    // Start the continuous increment after the initial animation
                    startContinuousIncrement(finalNumber);
                }, 1000);
            }
        }

        // Function to continuously increment the number with varying intervals
        function startContinuousIncrement(startNumber) {
            let number = startNumber;
            
            // First increment after 2 seconds
            setTimeout(() => {
                number++;
                
                // Add the counting class briefly for a small pulse effect
                userCountElement.classList.add('counting');
                
                // Update the display
                userCountElement.textContent = number.toLocaleString();
                
                // Remove the counting class after a short duration
                setTimeout(() => {
                    userCountElement.classList.remove('counting');
                }, 300);
                
                // Start random interval increments after the first one
                scheduleNextIncrement();
            }, 2000);
            
            // Function to schedule the next increment at a random interval
            function scheduleNextIncrement() {
                // Random interval between 10-20 seconds
                const randomInterval = Math.floor(10000 + Math.random() * 10000);
                
                // Store the timeout ID on the window object so it can be cleared if needed
                window.userCountTimeoutId = setTimeout(() => {
                    number++;
                    
                    // Add the counting class briefly for a small pulse effect
                    userCountElement.classList.add('counting');
                    
                    // Update the display
                    userCountElement.textContent = number.toLocaleString();
                    
                    // Remove the counting class after a short duration
                    setTimeout(() => {
                        userCountElement.classList.remove('counting');
                    }, 300);
                    
                    // Schedule the next increment
                    scheduleNextIncrement();
                }, randomInterval);
            }
            
            // Store the current number on the window object so it can be accessed if needed
            window.currentUserCount = number;
        }

        requestAnimationFrame(updateCount);
    }

    /**
     * Populates the bank list with the top 30 Indian banks.
     */
    const banks = [
        { name: "State Bank of India", logo: "sbi-logo.svg" },
        { name: "HDFC Bank", logo: "hdfc-logo.svg" },
        { name: "ICICI Bank", logo: "icici-logo.svg" },
        { name: "Axis Bank", logo: "axis-logo.svg" },
        { name: "Kotak Mahindra Bank", logo: "kotak-logo.svg" },
        { name: "Bank of Baroda", logo: "bob-logo.svg" },
        { name: "Punjab National Bank", logo: "landmark" },
        { name: "Canara Bank", logo: "landmark" },
        { name: "Union Bank of India", logo: "landmark" },
        { name: "Central Bank of India", logo: "landmark" },
        { name: "Bank of India", logo: "landmark" },
        { name: "Indian Bank", logo: "landmark" },
        { name: "IDBI Bank", logo: "landmark" },
        { name: "UCO Bank", logo: "landmark" },
        { name: "Punjab & Sind Bank", logo: "landmark" },
        { name: "Indian Overseas Bank", logo: "landmark" },
        { name: "Bank of Maharashtra", logo: "landmark" },
        { name: "Yes Bank", logo: "landmark" },
        { name: "IDFC First Bank", logo: "landmark" },
        { name: "IndusInd Bank", logo: "landmark" },
        { name: "RBL Bank", logo: "landmark" },
        { name: "Federal Bank", logo: "landmark" },
        { name: "South Indian Bank", logo: "landmark" },
        { name: "DCB Bank", logo: "landmark" },
        { name: "Karur Vysya Bank", logo: "landmark" },
        { name: "City Union Bank", logo: "landmark" },
        { name: "Bandhan Bank", logo: "landmark" },
        { name: "Dhanlaxmi Bank", logo: "landmark" },
        { name: "Jammu & Kashmir Bank", logo: "landmark" },
        { name: "Kalyan Janata Bank", logo: "landmark" }
    ];

    // Global set to keep track of selected banks across renders.
    let selectedBankNames = new Set();
    // Global array to keep track of the order of selection
    let selectedBanksOrder = [];

    // Global set to keep track of banks that have already been rendered
    let displayedBanks = new Set();

    function renderBankList(banksToRender) {
        const bankListContainer = document.querySelector('.bank-list');
        if (!bankListContainer) return;

        // Clear any existing bank items
        bankListContainer.innerHTML = '';

        // If no banks are found, display the "Not found" view and clear the global set
        if (banksToRender.length === 0) {
            bankListContainer.innerHTML = `
                <div class="not-found">
                    <span>No banks found!</span>
                </div>
            `;
            displayedBanks.clear();
            return;
        }

        // Render each bank item
        banksToRender.forEach(bank => {
            const bankItem = document.createElement('div');
            // If this bank wasn't already displayed, add the pop-in animation
            if (!displayedBanks.has(bank.name)) {
                bankItem.classList.add('bank-item', 'pop-in');
            } else {
                bankItem.classList.add('bank-item');
            }

            // Build the bank item HTML (using full bank name; CSS will handle truncation)
            if (bank.logo === "landmark") {
                bankItem.innerHTML = `
                    <div class="bank-logo-container">
                        <i data-lucide="landmark" class="bank-logo" style="color: var(--brand-color);"></i>
                    </div>
                    <span>${bank.name}</span>
                `;
            } else {
                bankItem.innerHTML = `
                    <div class="bank-logo-container">
                        <img src="${bank.logo}" alt="${bank.name} Logo" class="bank-logo">
                    </div>
                    <span>${bank.name}</span>
                `;
            }

            // If this bank is selected, add the "selected" class
            if (selectedBankNames.has(bank.name)) {
                bankItem.classList.add('selected');
            }

            bankItem.addEventListener('click', function () {
                if (selectedBankNames.has(bank.name)) {
                    selectedBankNames.delete(bank.name);
                    // Also remove from the order array
                    const index = selectedBanksOrder.indexOf(bank.name);
                    if (index > -1) {
                        selectedBanksOrder.splice(index, 1);
                    }
                    bankItem.classList.remove('selected');
                } else {
                    selectedBankNames.add(bank.name);
                    // Add to the end of the order array
                    selectedBanksOrder.push(bank.name);
                    bankItem.classList.add('selected');
                }
                onBankSelectionChanged();
            });
            
            bankListContainer.appendChild(bankItem);

            // Remove the pop-in class for new items after the animation is complete (400ms)
            if (!displayedBanks.has(bank.name)) {
                setTimeout(() => {
                    bankItem.classList.remove('pop-in');
                }, 400);
            }
        });

        // Update the global set with the names of banks currently being rendered
        displayedBanks = new Set(banksToRender.map(bank => bank.name));

        // Reinitialize Lucide icons for dynamic elements
        lucide.createIcons();

        // Refresh the proceed button state after updating the selected bank list.
        updateProceedButton();
    }
    
    // Initially display only the top 6 banks.
    renderBankList(banks.slice(0, 6));
    
    // Add bank search functionality.
    const bankSearchInput = document.getElementById('bank-search');
    const searchInputGroup = document.querySelector('.search-input-group');

    /**
     * Updates the search icon with a fade-out then fade-in animation.
     */
    function updateSearchIcon() {
        const fadeOutTime = 200; // milliseconds for fade out duration
        const fadeInTime = 200;  // milliseconds for fade in duration
        const iconName = bankSearchInput.value.trim().length > 0 ? 'x' : 'search';
        const existingIcon = searchInputGroup.querySelector('.search-icon');

        if (existingIcon) {
            if (existingIcon.getAttribute('data-lucide') !== iconName) {
                // Add fade-out class to trigger CSS transition
                existingIcon.classList.add('fade-out');
                setTimeout(() => {
                    // Check if element still has a parent before modifying outerHTML
                    if (existingIcon.parentNode) {
                        existingIcon.outerHTML = `<i data-lucide="${iconName}" class="search-icon fade-in" style="cursor: ${iconName === 'x' ? 'pointer' : 'default'}"></i>`;
                        lucide.createIcons();
                        // Remove fade-in class after the fade in animation is done
                        setTimeout(() => {
                            const icon = searchInputGroup.querySelector('.search-icon');
                            if (icon) {
                                icon.classList.remove('fade-in');
                            }
                        }, fadeInTime);
                    }
                }, fadeOutTime);
            }
        } else {
            // If no icon exists, simply insert it with a fade-in effect
            searchInputGroup.insertAdjacentHTML('beforeend', `<i data-lucide="${iconName}" class="search-icon fade-in" style="cursor: ${iconName === 'x' ? 'pointer' : 'default'}"></i>`);
            lucide.createIcons();
            setTimeout(() => {
                const icon = searchInputGroup.querySelector('.search-icon');
                if (icon) {
                    icon.classList.remove('fade-in');
                }
            }, fadeInTime);
        }
    }

    /**
     * Listen for input changes in the search field.
     * Filter the bank list accordingly and update the icon.
     */
    if (bankSearchInput) {
        // Make sure the input is focusable on mobile
        bankSearchInput.setAttribute('inputmode', 'text');
        
        // Add focus event to ensure mobile keyboard appears
        bankSearchInput.addEventListener('touchstart', function(e) {
            console.log('Touch start on bank search input');
            // Prevent default only if needed
            // e.preventDefault();
            this.focus();
        });
        
        bankSearchInput.addEventListener('input', function () {
            const searchVal = bankSearchInput.value.toLowerCase();
            const bankListHeader = document.querySelector('.bank-list-header h2');

            if (!searchVal) {
                renderBankList(banks.slice(0, 6));
                if (bankListHeader) bankListHeader.textContent = 'Popular Banks';
            } else {
                const filteredBanks = banks.filter(bank =>
                    bank.name.toLowerCase().includes(searchVal)
                );
                renderBankList(filteredBanks);
                if (bankListHeader) bankListHeader.textContent = 'Results';
            }
            updateSearchIcon();
        });
    }

    /**
     * Event delegation on the search input group.
     * When the x icon is clicked, clear the search field and ensure it remains focused.
     */
    if (searchInputGroup) {
        // Using both click and touchend events to ensure it works on all devices
        ['click', 'touchend', 'touchstart'].forEach(eventType => {
            searchInputGroup.addEventListener(eventType, function (e) {
                // Log the event for debugging
                console.log(`${eventType} event on search input group`);
                
                // For touch events, prevent default behavior to avoid any interference
                if (eventType === 'touchend' || eventType === 'touchstart') {
                    // Don't prevent default on the input itself to allow typing
                    if (!e.target.matches('#bank-search')) {
                        e.preventDefault();
                    }
                }
                
                // Handle clicking on the search icon
                const clickedIcon = e.target.closest('.search-icon');
                if (clickedIcon && bankSearchInput.value.trim().length > 0) {
                    console.log(`${eventType} event on X icon, clearing search`);
                    bankSearchInput.value = '';
                    bankSearchInput.dispatchEvent(new Event('input'));
                    updateSearchIcon();
                    
                    // Focus the input after a slight delay to ensure mobile keyboard appears
                    setTimeout(() => {
                        bankSearchInput.focus();
                    }, 10);
                }
                
                // If clicking on the search input group but not on the input itself or icon,
                // focus the input (helps with mobile)
                if (!e.target.matches('#bank-search') && !clickedIcon && eventType === 'touchstart') {
                    bankSearchInput.focus();
                }
            });
        });
    }

    function updateSelectedBankList() {
        const selectedBankListContainer = document.querySelector('.selected-bank-list');
        if (!selectedBankListContainer) return;

        // Track previously selected banks for animation purposes
        const previouslySelected = new Set();
        selectedBankListContainer.querySelectorAll('.selected-bank-item').forEach(item => {
            const bankName = item.querySelector('span')?.textContent.trim();
            if (bankName) previouslySelected.add(bankName);
        });

        // Clear the container
        selectedBankListContainer.innerHTML = '';

        if (selectedBankNames.size === 0) {
            const placeholder = document.createElement('div');
            placeholder.className = 'no-bank-selected';
            placeholder.textContent = 'No banks selected';
            selectedBankListContainer.appendChild(placeholder);
        } else {
            // Use the selectedBanksOrder array to maintain selection order
            selectedBanksOrder.forEach(bankName => {
                // Find the bank details from the banks array
                const bank = banks.find(b => b.name === bankName);
                if (!bank) return; // Skip if bank not found
                
                let bankLogoHTML = '';
                if (bank.logo === "landmark") {
                    bankLogoHTML = `<i data-lucide="landmark" class="bank-logo" style="color: var(--brand-color);"></i>`;
                } else {
                    bankLogoHTML = `<img src="${bank.logo}" alt="${bank.name} Logo">`;
                }

                const selectedItem = document.createElement('div');
                selectedItem.classList.add('selected-bank-item');
                
                // Add pop-in animation for newly added banks
                if (!previouslySelected.has(bank.name)) {
                    selectedItem.classList.add('pop-in');
                    // Remove the animation class after it completes
                    setTimeout(() => {
                        selectedItem.classList.remove('pop-in');
                    }, 400); // Animation duration is 400ms
                }
                
                selectedItem.innerHTML = `
                    <div class="bank-logo-container">
                        ${bankLogoHTML}
                    </div>
                    <span>${bank.name}</span>
                    <button class="remove-bank">
                        <i data-lucide="x"></i>
                    </button>
                `;
                
                // Attach event listener to remove the bank selection.
                const removeBtn = selectedItem.querySelector('.remove-bank');
                removeBtn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent bubbling to parent elements.
                    
                    // Add pop-out animation before removing
                    selectedItem.style.animation = 'popIn 0.4s ease-out reverse';
                    
                    // Wait for animation to complete before removing from data structure
                    setTimeout(() => {
                        selectedBankNames.delete(bank.name);
                        // Also remove from the order array
                        const index = selectedBanksOrder.indexOf(bank.name);
                        if (index > -1) {
                            selectedBanksOrder.splice(index, 1);
                        }
                        // Remove selected class from bank list items (if currently rendered)
                        document.querySelectorAll('.bank-list .bank-item').forEach(item => {
                            const itemName = item.querySelector('span').textContent.trim();
                            if (itemName === bank.name) {
                                item.classList.remove('selected');
                            }
                        });
                        updateSelectedBankList();
                    }, 400); // Animation duration is 400ms
                });

                selectedBankListContainer.appendChild(selectedItem);
            });
            
            // After adding all items, scroll to the rightmost position to show the last added item
            // Use setTimeout to ensure the DOM has updated completely before scrolling
            setTimeout(() => {
                // For horizontal scrolling, use scrollLeft instead of scrollTop
                selectedBankListContainer.scrollLeft = selectedBankListContainer.scrollWidth;
            }, 0);
        }

        // Reinitialize Lucide icons for dynamic elements.
        lucide.createIcons();

        // Refresh the proceed button state after updating the selected bank list.
        updateProceedButton();
    }

    // Call updateSelectedBankList when the DOM is ready
    updateSelectedBankList();

    const selectedBankList = document.querySelector('.selected-bank-list');
    const selectedBanksTitle = document.querySelector('.selected-banks h2');

    // Function to recalculate and update the header count by counting only bank items.
    function updateSelectedBanksCount() {
        // Select only elements with the 'bank-item' class inside the list.
        const count = selectedBankList.querySelectorAll('.selected-bank-item').length;
        selectedBanksTitle.textContent = `Selected Banks (${count})`;
    }
    
    // MutationObserver will automatically update the count on any changes (e.g. items added or removed)
    const observer = new MutationObserver(() => {
        updateSelectedBanksCount();
    });

    observer.observe(selectedBankList, { childList: true });
    
    // Update count on initial load
    updateSelectedBanksCount();

    // Helper function to update the proceed button text based on the active screen
    function updateProceedButton() {
        const activeScreen = document.querySelector('.screen[data-active="true"]');
        const proceedButton = document.querySelector('.proceed-button');
        if (!activeScreen || !proceedButton) return;

        let buttonText = '';
        
        switch (activeScreen.id) {
            case 'mobile-input-screen':
                const otpInputGroup = document.querySelector('.otp-input-group');
                
                if (otpInputGroup && otpInputGroup.classList.contains('show')) {
                    // If OTP input is visible, button should say "Verify OTP" and use our validation function
                    buttonText = 'Verify OTP';
                    validateOtpAndUpdateButton(); // Call our validation function to set disabled state correctly
                    
                    // Extra check to ensure button is disabled if OTP input is empty
                    const otpValue = document.getElementById('otp-input')?.value.trim() || '';
                    if (otpValue.length !== 6) {
                        proceedButton.disabled = true;
                    }
                } else {
                    // Default case - showing "Send OTP" for phone number input
                    buttonText = 'Send OTP';
                    const phoneInput = document.getElementById('phone-input');
                    proceedButton.disabled = !(phoneInput && phoneInput.value.trim().length === 10);
                }
                break;

            case 'bank-selection-screen':
                buttonText = 'Continue';
                const selectedBanks = document.querySelectorAll('.selected-bank-item');
                proceedButton.disabled = selectedBanks.length === 0;
                break;

            case 'account-selection-screen':
                buttonText = 'Proceed';
                // Only count visible and enabled checkboxes
                const selectedAccounts = document.querySelectorAll('.account-option[style*="flex"] input[type="checkbox"]:checked:not(:disabled)').length;
                console.log('Proceed button update - Selected accounts count:', selectedAccounts);
                proceedButton.disabled = selectedAccounts === 0;
                break;

            case 'confirmation-screen':
                buttonText = 'Approve';
                proceedButton.style.display = 'block';
                
                // Check if any consent checkboxes are selected in visible consent containers
                const visibleConsentContainers = document.querySelectorAll('.consent-container[style*="block"]');
                const checkedConsentCheckboxes = document.querySelectorAll('.consent-container[style*="block"] .consent-option .checkbox-container input[type="checkbox"]:checked');
                
                console.log('Consent containers visible:', visibleConsentContainers.length);
                console.log('Checked consent checkboxes:', checkedConsentCheckboxes.length);
                
                // Only disable if there are visible consent containers but none are checked
                if (visibleConsentContainers.length > 0) {
                    proceedButton.disabled = checkedConsentCheckboxes.length === 0;
                    console.log('Approve button disabled:', proceedButton.disabled);
                }
                break;
                
            default:
                proceedButton.style.display = 'none';
                break;
        }

        // Set the original English text
        proceedButton.setAttribute('data-original-text', buttonText);
        
        // Set the translated text if we're in Hindi mode
        if (currentLanguage === 'hi' && translations.hi[buttonText]) {
            proceedButton.textContent = translations.hi[buttonText];
        } else {
            proceedButton.textContent = buttonText;
        }
    }

    // Example: call updateProceedButton on page load or whenever a screen transition occurs.
    updateProceedButton();

    // You might also want to add event listeners to input elements so that
    // as soon as a user enters a valid phone number or selects an account,
    // the state of the button is updated. For instance:
    document.getElementById('phone-input')?.addEventListener('input', updateProceedButton);

    // Similarly, if selecting banks or accounts triggers events, ensure those events also call updateProceedButton.

    function updateDiscoveredAccountsCount() {
        const allowedTypes = getAllowedAccountTypes();
        const totalAllowedAccounts = document.querySelectorAll(
            allowedTypes.map(type => `.account-option[data-type="${type}"]`).join(',')
        ).length;
        
        // Update the discovered accounts text
        const discoveredAccountsSpan = document.querySelector('.discovered-accounts span');
        if (discoveredAccountsSpan) {
            discoveredAccountsSpan.textContent = `Showing ${totalAllowedAccounts} accounts discovered for`;
        }
    }

    function generateBankSections() {
        const bankSectionsContainer = document.getElementById('bank-sections-container');
        const allowedTypes = getAllowedAccountTypes();
        
        console.log('Generating bank sections with allowed types:', allowedTypes);
        
        // Keep existing MF and equity sections if they're allowed in current use case
        const existingNonBankSections = Array.from(bankSectionsContainer.querySelectorAll('.bank-section'))
            .filter(section => {
                const accountType = section.querySelector('.account-option')?.getAttribute('data-type');
                return accountType && accountType !== 'bank' && allowedTypes.includes(accountType);
            });

        // Clear only bank sections
        bankSectionsContainer.querySelectorAll('.bank-section').forEach(section => {
            const accountType = section.querySelector('.account-option')?.getAttribute('data-type');
            if (accountType === 'bank') {
                section.remove();
            }
        });

        // Only generate bank sections if 'bank' is an allowed type
        if (allowedTypes.includes('bank')) {
            // Create sections for each selected bank
            selectedBankNames.forEach(bankName => {
                const bank = banks.find(b => b.name === bankName);
                if (!bank) return;
    
                const bankSection = document.createElement('div');
                bankSection.className = 'bank-section';
                
                // Generate mock accounts based on bank type
                const mockAccounts = generateMockAccounts(bank.name);
                
                bankSection.innerHTML = `
                    <div class="bank-info">
                        <div class="header-left-group">
                            ${bank.logo === "landmark" 
                                ? `<i data-lucide="landmark" class="bank-logo" style="color: var(--brand-color);"></i>`
                                : `<img src="${bank.logo}" alt="${bank.name}" class="bank-logo">`
                            }
                            <span>${bank.name}</span>
                        </div>
                        <button class="select-all">Unselect All</button>
                    </div>
                    <div class="account-options">
                        ${mockAccounts.map(account => `
                            <label class="account-option" data-type="${account.type}">
                                <div class="checkbox-container">
                                    <input type="checkbox" name="account" checked>
                                    <span class="checkbox-checkmark"></span>
                                </div>
                                <div class="account-details">
                                    <div class="account-type">${account.accountType}</div>
                                    <div class="account-number">Account No: ${account.accountNumber}</div>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                `;
    
                // Insert bank sections at the beginning of the container
                bankSectionsContainer.insertBefore(bankSection, bankSectionsContainer.firstChild);
            });
        }

        // Re-append existing non-bank sections
        existingNonBankSections.forEach(section => {
            bankSectionsContainer.appendChild(section);
        });

        // Reinitialize Lucide icons for dynamic elements
        lucide.createIcons();
        
        // Ensure all checkboxes are properly checked in the DOM for allowed types
        // and unchecked for disallowed types
        document.querySelectorAll('.account-option').forEach(option => {
            const type = option.getAttribute('data-type');
            const checkbox = option.querySelector('input[type="checkbox"]');
            
            if (checkbox) {
                if (allowedTypes.includes(type)) {
                    checkbox.checked = true;
                    checkbox.disabled = false;
                    option.style.display = 'flex';
                } else {
                    checkbox.checked = false;
                    checkbox.disabled = true;
                    option.style.display = 'none';
                }
            }
        });

        // Update the "Select All" buttons for all bank sections
        // to ensure their text is consistent with the checkbox states
        document.querySelectorAll('.bank-section').forEach(section => {
            updateSelectAllButtonText(section);
            updateAccountOptionStyles(section);
            
            // Verify if section has any visible accounts
            const hasVisibleAccounts = Array.from(section.querySelectorAll('.account-option'))
                .some(option => option.style.display === 'flex');
            
            // Hide sections with no visible accounts
            section.style.display = hasVisibleAccounts ? 'block' : 'none';
        });

        // Update the counts after generating sections
        updateDiscoveredAccountsCount();
        updateSelectedCount();
        
        console.log('Bank sections generated with checkboxes:', 
                    document.querySelectorAll('.account-option input[type="checkbox"]').length,
                    'Checked visible checkboxes:', 
                    document.querySelectorAll('.account-option[style*="flex"] input[type="checkbox"]:checked:not(:disabled)').length);
        
        // Make sure the proceed button state is updated
        updateProceedButton();
    }

    function generateMockAccounts(bankName) {
        // Generate random account numbers
        const generateAccountNumber = () => 'XXXXXXXX' + Math.floor(1000 + Math.random() * 9000);
        
        // Default account types for each bank
        const accounts = [
            {
                type: 'bank',
                accountType: 'Savings Account',
                accountNumber: generateAccountNumber()
            },
            {
                type: 'bank',
                accountType: 'Current Account',
                accountNumber: generateAccountNumber()
            }
        ];
        return accounts;
    }

    // Add this to your existing bank selection click handler
    function onBankSelectionChanged() {
        generateBankSections();
        updateSelectedBankList();
    }

    backButton.addEventListener('click', function () {
        if (currentScreenIndex > 0) {
            const fromScreen = screensArray[currentScreenIndex];
            let targetScreenIndex;
            
            // Use a more explicit approach for determining the target screen
            if (fromScreen.id === 'confirmation-screen') {
                // When going back from confirmation screen, always go to account selection screen
                targetScreenIndex = screensArray.findIndex(screen => screen.id === 'account-selection-screen');
                
                // Reset OTP verification state
                selectedInstitutions = [];
                currentInstitutionIndex = 0;
                verifiedInstitutions = [];
                closeOTPDrawer();
            }
            else if (fromScreen.id === 'account-selection-screen') {
                const allowedTypes = getAllowedAccountTypes();
                if (!allowedTypes.includes('bank')) {
                    // Skip back past bank selection screen to mobile input
                    targetScreenIndex = screensArray.findIndex(screen => screen.id === 'mobile-input-screen');
                } else {
                    // Go back to bank selection
                    targetScreenIndex = screensArray.findIndex(screen => screen.id === 'bank-selection-screen');
                }
            }
            else if (fromScreen.id === 'bank-selection-screen') {
                // Go back to mobile input
                targetScreenIndex = screensArray.findIndex(screen => screen.id === 'mobile-input-screen');
            }
            else if (fromScreen.id === 'success-screen') {
                // From success screen, go back to confirmation
                targetScreenIndex = screensArray.findIndex(screen => screen.id === 'confirmation-screen');
            }
            else {
                // Default fallback - go back one screen
                targetScreenIndex = currentScreenIndex - 1;
            }
            
            // Ensure target index is valid
            if (targetScreenIndex >= 0 && targetScreenIndex < screensArray.length) {
                // Update the current screen index
                currentScreenIndex = targetScreenIndex;
                const targetScreen = screensArray[targetScreenIndex];
                
                // Switch to the target screen
                switchScreen(fromScreen, targetScreen, false);
            }
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-phone')) {
            const currentScreen = screensArray[currentScreenIndex];
            const targetIndex = screensArray.findIndex(
                (screen) => screen.id === 'mobile-input-screen'
            );
            if (targetIndex !== -1 && currentScreen.id !== 'mobile-input-screen') {
                switchScreen(currentScreen, screensArray[targetIndex], false);
                currentScreenIndex = targetIndex;
                hideOtpInput();
            }
        }
    });

    document.querySelector('.link-more').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const currentScreen = screensArray[currentScreenIndex];
        // Ensure that the action only applies if we're on the confirmation screen.
        if (currentScreen.id === 'confirmation-screen') {
            const targetIndex = screensArray.findIndex(
                (screen) => screen.id === 'account-selection-screen'
            );
            if (targetIndex !== -1) {
                // Reset OTP verification state
                selectedInstitutions = [];
                currentInstitutionIndex = 0;
                verifiedInstitutions = [];
                skippedInstitutions = [];
                
                // Update current screen index before switching
                currentScreenIndex = targetIndex;
                
                switchScreen(currentScreen, screensArray[targetIndex], false);
            }
        }
    });

    // Sequential OTP verification for financial institutions
    let selectedInstitutions = [];
    let currentInstitutionIndex = 0;
    let verifiedInstitutions = [];
    let skippedInstitutions = [];
    
    function initializeOTPVerification() {
        // Set up event listeners for OTP verification
        const verifyOTPButton = document.querySelector('.verify-otp-button');
        const otpInput = document.querySelector('.sequential-otp-input');
        const unableToReceiveLink = document.querySelector('.unable-to-receive a');
        
        // Initialize OTP timer
        let resendTimerInterval;
        
        verifyOTPButton.addEventListener('click', verifyCurrentInstitutionOTP);
        
        // Handle "Unable to receive OTP" link
        unableToReceiveLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show brief notification that we're skipping
            const verifyButton = document.querySelector('.verify-otp-button');
            const originalText = verifyButton.textContent;
            verifyButton.disabled = true;
            verifyButton.style.backgroundColor = "#FFFFFF";
            verifyButton.style.color = "#666666";
            verifyButton.textContent = 'Skipping...';
            
            // Track the skipped institution
            skippedInstitutions.push(selectedInstitutions[currentInstitutionIndex]);
            
            // After a short delay, proceed to the next institution
            setTimeout(() => {
                verifyButton.style.backgroundColor = "";
                verifyButton.style.color = "";
                verifyButton.textContent = originalText;
                verifyButton.disabled = false;
                // Skip current institution and proceed to the next one
                currentInstitutionIndex++;
                showOTPDrawerForCurrentInstitution();
            }, 800);
        });
        
        // Add input validation for OTP
        otpInput.addEventListener('input', function(e) {
            // Only allow digits
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
            
            // Enable/disable verify button based on OTP length
            verifyOTPButton.disabled = e.target.value.length !== 6;
            
            // Clear error message when user types
            const errorMessage = document.querySelector('.otp-error-message');
            errorMessage.classList.remove('show');
        });
    }

    function startResendOTPTimer() {
        // First, ensure the .otp-resend element has the timer span
        const otpResendElement = document.querySelector('.otp-resend');
        if (otpResendElement) {
            otpResendElement.innerHTML = '<span>Resend OTP in <span class="resend-timer">00:20</span></span>';
        }
        
        // Now get the timer element after it has been created
        const timerElement = document.querySelector('.resend-timer');
        let timeLeft = 20; // 20 seconds
        
        
        // Clear any existing interval
        if (window.resendTimerInterval) {
            clearInterval(window.resendTimerInterval);
        }
        
        // Update timer display
        function updateTimer() {
            if (!timerElement) {
                console.error('Timer element not found');
                clearInterval(window.resendTimerInterval);
                return;
            }
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(window.resendTimerInterval);
                const otpResend = document.querySelector('.otp-resend');
                if (otpResend) {
                    otpResend.innerHTML = '<a href="#" class="resend-otp-link" style="color: var(--brand-color);">Resend OTP</a>';
                    
                    // Add event listener for resend link
                    const resendLink = document.querySelector('.resend-otp-link');
                    if (resendLink) {
                        resendLink.addEventListener('click', function(e) {
                            e.preventDefault();
                            // Logic to resend OTP
                            // For demo, we'll just restart the timer
                            startResendOTPTimer();
                        });
                    }
                }
            }
            
            timeLeft--;
        }
        
        // Initial update
        updateTimer();
        
        // Set interval for timer
        window.resendTimerInterval = setInterval(updateTimer, 1000);
    }

    function startSequentialOTPVerification() {
        console.log("Starting sequential OTP verification");
        
        // Reset verification state
        currentInstitutionIndex = 0;
        verifiedInstitutions = [];
        skippedInstitutions = [];
        
        // Get all selected financial institutions
        selectedInstitutions = getSelectedInstitutions();
        console.log(`Found ${selectedInstitutions.length} institutions requiring OTP`);
        
        if (selectedInstitutions.length === 0) {
            // If no institutions selected, go to confirmation screen directly
            console.log("No institutions to verify, proceeding to confirmation screen");
            currentScreenIndex = screensArray.findIndex(screen => screen.id === 'confirmation-screen');
            switchScreen(document.getElementById('account-selection-screen'), document.getElementById('confirmation-screen'));
            return;
        }
        
        // Make sure OTP drawer is closed before starting (in case it was left open)
        closeOTPDrawer();
        
        // Start verification process after a short delay
        setTimeout(() => {
            showOTPDrawerForCurrentInstitution();
        }, 300);
    }

    function getSelectedInstitutions() {
        // Extract information about selected financial institutions
        const selectedInstitutionsData = [];
        // Only get visible and enabled checkboxes that are checked
        const selectedAccountOptions = document.querySelectorAll('.account-option[style*="flex"] input[type="checkbox"]:checked:not(:disabled)');
        
        console.log(`Found ${selectedAccountOptions.length} checked visible accounts for OTP verification`);
        
        // Create a map to group by institution
        const institutionsMap = new Map();
        
        selectedAccountOptions.forEach(checkbox => {
            const accountOption = checkbox.closest('.account-option');
            const bankSection = accountOption.closest('.bank-section');
            const bankInfo = bankSection.querySelector('.bank-info');
            
            // Handle both image and icon logos
            let bankLogo;
            const imgLogo = bankInfo.querySelector('img');
            const iconLogo = bankInfo.querySelector('.bank-logo');
            
            if (imgLogo) {
                bankLogo = imgLogo.src;
            } else if (iconLogo) {
                // For icon logos, use a placeholder or extract the SVG
                bankLogo = 'placeholder-icon.png'; // Fallback placeholder
            }
            
            const bankName = bankInfo.querySelector('span').textContent;
            
            if (!institutionsMap.has(bankName)) {
                institutionsMap.set(bankName, {
                    name: bankName,
                    logo: bankLogo,
                    accounts: []
                });
            }
            
            const accountType = accountOption.querySelector('.account-type').textContent;
            const accountNumber = accountOption.querySelector('.account-number').textContent;
            
            institutionsMap.get(bankName).accounts.push({
                type: accountType,
                number: accountNumber
            });
        });
        
        // Convert map to array
        return Array.from(institutionsMap.values());
    }

    function showOTPDrawerForCurrentInstitution() {
        if (currentInstitutionIndex >= selectedInstitutions.length) {
            // All institutions verified, proceed to confirmation screen
            closeOTPDrawer();
            const accountSelectionScreen = document.getElementById('account-selection-screen');
            const confirmationScreen = document.getElementById('confirmation-screen');
            
            // Make sure the currentScreenIndex is updated correctly
            currentScreenIndex = screensArray.findIndex(screen => screen.id === 'confirmation-screen');
            
            // Filter out skipped institutions before showing the confirmation screen
            filterAccountsByVerifiedInstitutions();
            
            switchScreen(accountSelectionScreen, confirmationScreen);
            return;
        }
        
        const currentInstitution = selectedInstitutions[currentInstitutionIndex];
        const otpDrawer = document.querySelector('.otp-verification-drawer');
        const drawerBackdrop = document.querySelector('.drawer-backdrop');
        
        // Update drawer content
        const institutionLogo = otpDrawer.querySelector('.institution-logo');
        const institutionName = otpDrawer.querySelector('.institution-name');
        const currentStep = otpDrawer.querySelector('.current-step');
        const totalSteps = otpDrawer.querySelector('.total-steps');
        const otpInput = otpDrawer.querySelector('.sequential-otp-input');
        const errorMessage = otpDrawer.querySelector('.otp-error-message');
        const bankName = otpDrawer.querySelector('.bank-name');
        const phoneNumber = otpDrawer.querySelector('.phone-number');
        const unableToReceiveElement = otpDrawer.querySelector('.unable-to-receive');
        
        institutionLogo.src = currentInstitution.logo;
        institutionName.textContent = currentInstitution.name;
        currentStep.textContent = currentInstitutionIndex + 1;
        totalSteps.textContent = selectedInstitutions.length;
        bankName.textContent = currentInstitution.name;
        
        // Get the user's entered phone number instead of using a hardcoded value
        const userPhoneNumber = document.getElementById('phone-input').value;
        // Format the phone number to show only last 4 digits and mask the rest
        const maskedNumber = userPhoneNumber.length > 0 
            ? "+91 XXXXXX" + userPhoneNumber.slice(-4)
            : "XXXXXXXXXX";
        phoneNumber.textContent = maskedNumber;
        
        otpInput.value = '';
        errorMessage.classList.remove('show');
        
        // Disable verify button initially
        const verifyButton = otpDrawer.querySelector('.verify-otp-button');
        verifyButton.disabled = true;
        
        // Check if this is the final OTP screen and if all previous OTPs were skipped
        const isFinalOTPScreen = currentInstitutionIndex === selectedInstitutions.length - 1;
        const allPreviousOTPsSkipped = currentInstitutionIndex > 0 && 
                                      skippedInstitutions.length === currentInstitutionIndex && 
                                      verifiedInstitutions.length === 0;
        
        // Hide "Unable to receive OTP" link if this is the final OTP screen and all previous OTPs were skipped
        if (isFinalOTPScreen && allPreviousOTPsSkipped) {
            unableToReceiveElement.style.display = 'none';
        } else {
            unableToReceiveElement.style.display = 'block';
        }
        
        // Only set display to block if it's not already visible
        if (drawerBackdrop.style.display !== 'block') {
            drawerBackdrop.style.display = 'block';
            
            // Force a reflow to ensure the browser registers the display change
            void drawerBackdrop.offsetWidth;
        }
        
        // Now add the open class to both elements to trigger transitions
        drawerBackdrop.classList.add('open');
        otpDrawer.classList.add('open');
        
        // Start resend OTP timer
        startResendOTPTimer();
        
        // Focus on the input after drawer animation completes
        setTimeout(() => {
            otpInput.focus();
        }, 400); // Matches the animation duration
    }

    function verifyCurrentInstitutionOTP() {
        const otpInput = document.querySelector('.sequential-otp-input');
        const otp = otpInput.value;
        const errorMessage = document.querySelector('.otp-error-message');
        
        // For demo purposes, any 6-digit OTP is valid
        if (otp.length === 6 && /^\d+$/.test(otp)) {
            // OTP is valid, move to next institution
            verifiedInstitutions.push(selectedInstitutions[currentInstitutionIndex]);
            
            // Show a success message briefly
            const verifyButton = document.querySelector('.verify-otp-button');
            const originalText = verifyButton.textContent;
            verifyButton.disabled = true;
            verifyButton.style.backgroundColor = "#FFFFFF";
            verifyButton.style.color = "darkgreen";
            verifyButton.textContent = 'Verified ✓';
            
            // After a short delay, proceed to the next institution
            setTimeout(() => {
                verifyButton.style.backgroundColor = "";
                verifyButton.style.color = "";
                verifyButton.textContent = originalText;
                currentInstitutionIndex++;
                // Show next institution or complete process
                showOTPDrawerForCurrentInstitution();
            }, 1000);
        } else {
            // Display error message
            errorMessage.textContent = 'Please enter a valid 6-digit OTP';
            errorMessage.classList.add('show');
        }
    }

    function closeOTPDrawer() {
        const otpDrawer = document.querySelector('.otp-verification-drawer');
        const drawerBackdrop = document.querySelector('.drawer-backdrop');
        
        if (!otpDrawer || !drawerBackdrop) return;
        
        // Reset the OTP input
        const otpInput = otpDrawer.querySelector('.sequential-otp-input');
        if (otpInput) otpInput.value = '';
        
        // Clear any error messages
        const errorMessage = otpDrawer.querySelector('.otp-error-message');
        if (errorMessage) errorMessage.classList.remove('show');
        
        // Close the drawer with animation
        otpDrawer.classList.remove('open');
        drawerBackdrop.classList.remove('open');
        
        // Check if consent drawer is still open before hiding backdrop
        const isConsentDrawerOpen = consentDrawer && consentDrawer.classList.contains('open');
        
        if (!isConsentDrawerOpen) {
            // Hide backdrop after animation completes
            setTimeout(() => {
                drawerBackdrop.style.display = 'none';
            }, 300); // Match the transition duration in CSS
        }
    }
    
    /**
     * Filters account data for the confirmation screen to only show accounts from verified institutions.
     * This ensures that skipped institutions' accounts are excluded from the confirmation screen
     * without affecting the original selected accounts in the account-selection screen.
     */
    function filterAccountsByVerifiedInstitutions() {
        // If no institutions were selected or all OTP verifications were skipped, don't filter anything
        if (selectedInstitutions.length === 0) {
            return;
        }
        
        // If OTP verification was not needed or no institutions were verified/skipped, don't filter
        if (verifiedInstitutions.length === 0 && skippedInstitutions.length === 0) {
            return;
        }
        
        console.log(`Filtering accounts: ${verifiedInstitutions.length} verified, ${skippedInstitutions.length} skipped`);
        
        // Get all verified institution names
        const verifiedNames = verifiedInstitutions.map(inst => inst.name);
        
        // Instead of unchecking boxes, we'll create a filtered version of the data for the confirmation screen
        // by temporarily marking skipped institutions' accounts with a data attribute
        
        // Get all bank sections
        const bankSections = document.querySelectorAll('.bank-section');
        
        // First, remove any existing data-skipped attributes to start fresh
        bankSections.forEach(section => {
            section.removeAttribute('data-skipped');
        });
        
        // Mark sections for skipped institutions
        bankSections.forEach(section => {
            const bankInfo = section.querySelector('.bank-info');
            if (bankInfo) {
                const bankName = bankInfo.querySelector('span').textContent;
                
                // If this bank is not in the verified list, mark it as skipped
                if (!verifiedNames.includes(bankName)) {
                    section.setAttribute('data-skipped', 'true');
                    console.log(`Marked institution as skipped: ${bankName}`);
                }
            }
        });
        
        // Now override the updateSelectedAccountsList function temporarily to filter out skipped institutions
        const originalUpdateSelectedAccountsList = updateSelectedAccountsList;
        
        updateSelectedAccountsList = function() {
            // Get the allowed account types based on the current use case.
            const allowedTypes = getAllowedAccountTypes().map(t => t.toLowerCase());
    
            // Retrieve the selected accounts, but exclude those from skipped institutions
            const selectedAccountElements = Array.from(
                document.querySelectorAll('.account-option input[type="checkbox"]:checked')
            )
            .map(checkbox => checkbox.closest('.account-option'))
            .filter(option => {
                // Skip accounts from institutions that were marked as skipped
                const bankSection = option.closest('.bank-section');
                return !bankSection || !bankSection.hasAttribute('data-skipped');
            });
    
            // Map the account options to an object containing the details we need.
            const selectedAccounts = selectedAccountElements
                .map(option => {
                    // Get the account type; if not present, get the text from the .account-type element.
                    const type = option.getAttribute('data-type') || (option.querySelector('.account-type')?.textContent || '').toLowerCase();
                    
                    // Get bank section and its info elements with null checks
                    const bankSection = option.closest('.bank-section');
                    if (!bankSection) return null; // Skip if bank section not found
                    
                    const bankInfo = bankSection.querySelector('.bank-info');
                    if (!bankInfo) return null; // Skip if bank info not found
                    
                    const bankNameElement = bankInfo.querySelector('span');
                    const bankLogoElement = bankInfo.querySelector('img');
                    const accountNumberElement = option.querySelector('.account-number');
                    
                    // Handle both cases: when logo is an img or when it's an icon
                    let bankLogo = 'icici-logo.svg'; // Default fallback
                    if (bankLogoElement) {
                        bankLogo = bankLogoElement.src;
                    } else if (bankInfo.querySelector('[data-lucide="landmark"]')) {
                        bankLogo = 'landmark-icon.png'; // Another fallback for icon
                    }
                    
                    return {
                        type,
                        bankName: bankNameElement ? bankNameElement.textContent : 'Unknown Bank',
                        bankLogo: bankLogo,
                        number: accountNumberElement ? accountNumberElement.textContent : 'Unknown Account'
                    };
                })
                .filter(account => account !== null) // Filter out any null accounts from above
                // Only include accounts whose type is allowed for the current use case.
                .filter(account => allowedTypes.includes(account.type.toLowerCase()));
    
            // Group the selected accounts by type (if needed for display grouping).
            const groupedAccounts = selectedAccounts.reduce((acc, account) => {
                const typeKey = account.type.toLowerCase();
                if (!acc[typeKey]) acc[typeKey] = [];
                acc[typeKey].push(account);
                return acc;
            }, {});
    
            // Build the HTML for each group.
            const accountsList = document.querySelector('.selected-accounts-list');
            if (!accountsList) return; // Exit if element not found
            
            const html = Object.entries(groupedAccounts).map(([type, accounts]) => `
                <div class="account-type-section" data-type="${type}">
                    <div class="type-header">
                        <span class="type-label">${getTypeLabel(type)}</span>
                        <span class="type-count">${accounts.length}</span>
                    </div>
                    <div class="type-accounts">
                        ${accounts.map(account => `
                            <div class="selected-account-item">
                                <div class="bank-details">
                                    <img src="${account.bankLogo}" alt="${account.bankName}" class="bank-logo">
                                    <div class="account-info">
                                        <!-- Display the bank name rather than the type -->
                                        <div class="bank-name">${account.bankName}</div>
                                        <div class="account-number">${account.number.replace(/Account No: /, '')}</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
    
            // Update the confirmation header with the total count of selected accounts.
            const headerEl = document.querySelector('.selected-accounts-header h2');
            if (headerEl) {
                headerEl.textContent = `Selected Accounts (${selectedAccounts.length})`;
            }
    
            accountsList.innerHTML = html;
            
            // Restore the original function after this call completes
            updateSelectedAccountsList = originalUpdateSelectedAccountsList;
            
            // Clean up the data-skipped attributes
            bankSections.forEach(section => {
                section.removeAttribute('data-skipped');
            });
        };
        
        // Call the temporarily modified function
        updateSelectedAccountsList();
    }

    // Add a click event listener to the "Get Started" button in the popup
    document.querySelector('.get-started-button').addEventListener('click', function() {
        const popup = document.getElementById('how-it-works-popup');
        popup.style.display = 'none';
        
        // Get selected use case
        const selectedUseCase = document.getElementById('usecase-input').value;
        console.log('Selected use case on start:', selectedUseCase);
        currentUseCase = selectedUseCase;
        
        // Update the account type selection based on the use case
        document.querySelectorAll('.account-type-item').forEach(item => {
            const icon = item.querySelector('.account-type-icon');
            const text = item.querySelector('span').textContent.toLowerCase();
            const type = text.includes('bank') ? 'bank' : text.includes('mutual') ? 'mf' : 'equity';
            
            const isAllowed = getAllowedAccountTypes().includes(type);
            item.style.opacity = isAllowed ? '1' : '0.4';
        });
        
        // Apply special handling for credit line immediately
        if (selectedUseCase === 'credit-line') {
            console.log('Initial setup for credit line use case');
            updateAccountOptionsByUseCase();
            setTimeout(() => {
                // Make doubly sure MF and equity accounts are selected for credit line
                document.querySelectorAll('.account-option').forEach(option => {
                    const type = option.getAttribute('data-type');
                    if (type === 'mf' || type === 'equity') {
                        option.style.display = 'flex';
                        const checkbox = option.querySelector('input[type="checkbox"]');
                        if (checkbox) {
                            checkbox.checked = true;
                            checkbox.disabled = false;
                        }
                    } else {
                        option.style.display = 'none';
                        const checkbox = option.querySelector('input[type="checkbox"]');
                        if (checkbox) {
                            checkbox.checked = false;
                            checkbox.disabled = true;
                        }
                    }
                });
                
                updateProceedButton();
            }, 500);
        }
        
        // Update consent containers based on the selected use case
        updateConsentContainers();
        
        // Start the number counter animation for active users
        animateUserCount(84632);
    });

    // Call initially to set default values
    updateConsentPurpose();

    // Call initially to set default values (only if we're on the confirmation screen)
    if (document.getElementById('confirmation-screen') && 
        document.getElementById('confirmation-screen').dataset.active === 'true' &&
        document.querySelector('.consent-purpose')) {
        updateConsentPurpose();
    }

    // Add functionality to grey out consent content when checkbox is unchecked
    function setupConsentCheckboxes() {
        // Clear any existing event listeners by cloning and replacing nodes
        const consentOptions = document.querySelectorAll('.consent-option');
        consentOptions.forEach(option => {
            const checkbox = option.querySelector('.checkbox-container input[type="checkbox"]');
            if (checkbox) {
                const newCheckbox = checkbox.cloneNode(true);
                checkbox.parentNode.replaceChild(newCheckbox, checkbox);
            }
        });
        
        // Now add event listeners to the fresh checkboxes
        const consentCheckboxes = document.querySelectorAll('.consent-option .checkbox-container input[type="checkbox"]');
        console.log('Setting up', consentCheckboxes.length, 'consent checkboxes');
        
        // Add class to parent consent option when checkbox is unchecked
        function updateConsentOptionState(checkbox) {
            const consentOption = checkbox.closest('.consent-option');
            if (checkbox.checked) {
                consentOption.classList.remove('unchecked');
            } else {
                consentOption.classList.add('unchecked');
            }
        }
        
        // Setup each checkbox
        consentCheckboxes.forEach(checkbox => {
            // Set initial state
            updateConsentOptionState(checkbox);
            
            // Add change event listener
            checkbox.addEventListener('change', function() {
                console.log('Consent checkbox changed. Checked:', this.checked);
                updateConsentOptionState(this);
                
                // Update the proceed button state whenever a consent checkbox changes
                if (document.getElementById('confirmation-screen').dataset.active === 'true') {
                    // Force update with a small delay to ensure DOM is updated
                    setTimeout(() => {
                        console.log('Calling updateProceedButton from checkbox change');
                        updateProceedButton();
                    }, 10);
                }
            });
        });
        
        // Force an update of the button state
        if (document.getElementById('confirmation-screen').dataset.active === 'true') {
            console.log('Force updating proceed button after checkbox setup');
            updateProceedButton();
        }
    }
    
    // Call initially and whenever consent containers might be updated
    setupConsentCheckboxes();
    
    // Call this after any updates to the consent containers
    const originalUpdateConsentContainers = updateConsentContainers;
    updateConsentContainers = function() {
        console.log('Updating consent containers');
        originalUpdateConsentContainers.apply(this, arguments);
        
        // Use a longer timeout to ensure DOM is fully updated
        setTimeout(() => {
            console.log('Setting up consent checkboxes after container update');
            setupConsentCheckboxes();
            
            // Update proceed button state when consent containers are updated
            if (document.getElementById('confirmation-screen').dataset.active === 'true') {
                console.log('Updating proceed button after consent container update');
                updateProceedButton();
            }
        }, 50); // Increased timeout to ensure DOM is updated first
    };

    // Add a new function for animated account type container updates
    function updateAccountTypeContainerWithAnimation(filterType) {
        const allowedTypes = getAllowedAccountTypes();
        const typeMapping = {
            bank: {
                icon: 'landmark',
                label: 'Bank Accounts'
            },
            mf: {
                icon: 'hand-coins',
                label: 'Mutual Funds'
            },
            equity: {
                icon: 'chart-candlestick',
                label: 'Equity'
            }
        };

        const container = document.querySelector('.account-type-container .account-type-list');
        if (container) {
            // First, fade out existing content
            const existingItems = container.querySelectorAll('.account-type-item');
            existingItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-5px)';
            });
            
            // Then, after a short delay, update the content
            setTimeout(() => {
                let html = '';
                // If "all" filter is selected, show all allowed types
                if (filterType === 'all') {
                    allowedTypes.forEach(type => {
                        const mapping = typeMapping[type];
                        if (mapping) {
                            html += `<div class="account-type-item fade-in">
                                        <i data-lucide="${mapping.icon}" class="account-type-icon" style="color: darkslategray; height: 16px; width: 16px;"></i>
                                        <span>${mapping.label}</span>
                                     </div>`;
                        }
                    });
                } else {
                    // Otherwise, only show the selected type if it's allowed
                    if (allowedTypes.includes(filterType)) {
                        const mapping = typeMapping[filterType];
                        if (mapping) {
                            html += `<div class="account-type-item fade-in">
                                        <i data-lucide="${mapping.icon}" class="account-type-icon" style="color: darkslategray; height: 16px; width: 16px;"></i>
                                        <span>${mapping.label}</span>
                                     </div>`;
                        }
                    }
                }
                container.innerHTML = html;
                // Re-initialize lucide icons so the new icons render correctly
                lucide.createIcons();
            }, 200); // Short delay for a smooth transition
        }
    }

    // Update the original updateAccountTypeContainer function to use display property instead of directly manipulating innerHTML
    function updateAccountTypeContainer() {
        const allowedTypes = getAllowedAccountTypes();
        // Mapping for icon name and display label for each account type.
        const typeMapping = {
            bank: {
                icon: 'landmark',
                label: 'Bank Accounts'
            },
            mf: {
                icon: 'hand-coins',
                label: 'Mutual Funds'
            },
            equity: {
                icon: 'chart-candlestick',
                label: 'Equity'
            }
        };

        const container = document.querySelector('.account-type-container .account-type-list');
        if (container) {
            let html = '';
            allowedTypes.forEach(type => {
                const mapping = typeMapping[type];
                if (mapping) {
                    html += `<div class="account-type-item">
                                <i data-lucide="${mapping.icon}" class="account-type-icon" style="color: darkslategray; height: 16px; width: 16px;"></i>
                                <span>${mapping.label}</span>
                             </div>`;
                }
            });
            container.innerHTML = html;
            // Re-initialize lucide icons so the new icons render correctly.
            lucide.createIcons();
        }
    }

    // Function to open rejection confirmation drawer
    function openRejectionDrawer() {
        const rejectionDrawer = document.querySelector('.rejection-drawer');
        const drawerBackdrop = document.querySelector('.drawer-backdrop');
        
        // Make backdrop visible immediately (before adding the 'open' class for the transition)
        drawerBackdrop.style.display = 'block';
        
        // Trigger reflow to ensure the display change takes effect before the transition starts
        drawerBackdrop.offsetHeight;
        
        // Update the brand name in the rejection drawer
        const nameInput = document.getElementById('name-input');
        const brandName = nameInput ? nameInput.value || 'ICICI Bank' : 'ICICI Bank';
        const rejectionBrandName = document.getElementById('rejection-brand-name');
        if (rejectionBrandName) {
            rejectionBrandName.textContent = brandName;
        }
        
        rejectionDrawer.classList.add('open');
        drawerBackdrop.classList.add('open');
        
        // Ensure Lucide icons are created
        if (window.lucide) {
            lucide.createIcons();
        }
        
        // Disable scrolling on app-content
        const appContent = document.querySelector('.app-content');
        if (appContent) {
            appContent.style.overflow = 'hidden';
        }
    }
    
    // Function to close rejection confirmation drawer
    function closeRejectionDrawer() {
        const rejectionDrawer = document.querySelector('.rejection-drawer');
        const drawerBackdrop = document.querySelector('.drawer-backdrop');
        
        rejectionDrawer.classList.remove('open');
        drawerBackdrop.classList.remove('open');
        
        // Check if other drawers are open before hiding backdrop
        const consentDrawer = document.querySelector('.consent-drawer');
        const otpDrawer = document.querySelector('.otp-verification-drawer');
        const isConsentDrawerOpen = consentDrawer && consentDrawer.classList.contains('open');
        const isOtpDrawerOpen = otpDrawer && otpDrawer.classList.contains('open');
        
        if (!isConsentDrawerOpen && !isOtpDrawerOpen) {
            // Set a timeout to hide the backdrop after the transition completes
            setTimeout(() => {
                drawerBackdrop.style.display = 'none';
            }, 300); // Match this timing with the transition duration in CSS
        }
        
        // Re-enable scroll on app-content
        const appContent = document.querySelector('.app-content');
        if (appContent) {
            appContent.style.overflow = '';
        }
    }

    // Function to handle actual rejection
    function handleRejection() {
        console.log('Handling rejection...');
        
        // Close the drawer
        closeRejectionDrawer();
        
        // For demo purposes, let's go back to the mobile input screen
        const confirmationScreen = document.getElementById('confirmation-screen');
        const mobileInputScreen = document.getElementById('mobile-input-screen');
        
        switchScreen(confirmationScreen, mobileInputScreen, false);
        
        // Hide the OTP input
        hideOtpInput();
        
        // Reset the phone input field
        const phoneInput = document.getElementById('phone-input');
        if (phoneInput) {
            phoneInput.value = '';
        }
        
        // Reset the global state for navigation
        setTimeout(() => {
            console.log('Resetting global navigation state...');
            
            // Reset screen index to the first screen (mobile input)
            currentScreenIndex = 0;
            
            // Re-initialize screens array to ensure it's in the correct state
            screensArray = Array.from(document.querySelectorAll('.screen'));
            
            // Get the button directly
            const proceedButton = document.querySelector('.proceed-button');
            if (proceedButton) {
                // Reset button text and state
                proceedButton.textContent = 'Send OTP';
                proceedButton.disabled = false;
                
                // Remove ALL event listeners by cloning
                const newButton = proceedButton.cloneNode(true);
                if (proceedButton.parentNode) {
                    proceedButton.parentNode.replaceChild(newButton, proceedButton);
                }
                
                // Important: Re-initialize the button with proper handling for all screens
                // This will ensure the proceed button works on all screens
                setupOTPButtonHandler();
                
                // Reset any other necessary state for navigation
                updateProceedButton();
            }
            
            // Hide reject button
            const rejectButton = document.querySelector('.reject-button');
            if (rejectButton) {
                rejectButton.style.display = 'none';
            }
            
            console.log('Navigation reset complete');
        }, 500);
    }
    
    // Set up rejection drawer event listeners immediately
    const rejectionButton = document.querySelector('.reject-button');
    const closeRejectionButton = document.querySelector('.close-rejection');
    const cancelRejectionButton = document.querySelector('.cancel-rejection');
    const confirmRejectionButton = document.querySelector('.confirm-rejection');
    
    if (rejectionButton) {
        // Open rejection drawer when reject button is clicked
        rejectionButton.addEventListener('click', openRejectionDrawer);
    }
    
    if (closeRejectionButton) {
        // Close rejection drawer when close button is clicked
        closeRejectionButton.addEventListener('click', closeRejectionDrawer);
    }
    
    if (cancelRejectionButton) {
        // Close rejection drawer when cancel button is clicked
        cancelRejectionButton.addEventListener('click', closeRejectionDrawer);
    }
    
    if (confirmRejectionButton) {
        // Handle rejection when confirm button is clicked
        confirmRejectionButton.addEventListener('click', handleRejection);
    }
    
    const rejectionDrawerBackdrop = document.querySelector('.drawer-backdrop');
    if (rejectionDrawerBackdrop) {
        // Close rejection drawer when backdrop is clicked
        rejectionDrawerBackdrop.addEventListener('click', function(e) {
            // Make sure we're clicking the backdrop itself, not a child element
            if (e.target === this) {
                closeRejectionDrawer();
                
                // Also close the consent drawer if it's open
                if (typeof closeDrawer === 'function') {
                    closeDrawer();
                }
                
                // And close OTP drawer if it's open
                const otpDrawer = document.querySelector('.otp-verification-drawer');
                if (otpDrawer && otpDrawer.classList.contains('open') && typeof closeOTPDrawer === 'function') {
                    closeOTPDrawer();
                }
            }
        });
    }

    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function updateDateRange() {
        const dateRangeElements = document.querySelectorAll('.date-range');
        const endDate = new Date();
        const startDate = new Date();
        startDate.setMonth(endDate.getMonth() - 6);
        
        const formattedStartDate = startDate.toLocaleDateString('en-GB');
        const formattedEndDate = endDate.toLocaleDateString('en-GB');
        
        dateRangeElements.forEach(element => {
            element.textContent = `${formattedStartDate}-${formattedEndDate}`;
        });
    }

    // Call this when the page loads
    updateDateRange();

    // Initialize brand name and color
    if (nameInput.value) {
        headerBrandName.textContent = nameInput.value;
        document.getElementById('success-brand-name').textContent = nameInput.value;
        
        // Initialize rejection brand name
        const rejectionBrandName = document.getElementById('rejection-brand-name');
        if (rejectionBrandName) {
            rejectionBrandName.textContent = nameInput.value;
        }
    }

    // Download Button Logic
    const downloadButton = document.querySelector('.download-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // Google Drive file ID - replace this with your actual file ID
            // This is the part between /d/ and /view in your Google Drive share link
            const fileId = '1W91R0kr0OP_-94WRk1xyi9-NzC1jty_LahFIMnQKriw';
            
            // Method 1: Open file in a new tab (most reliable)
            // This will open Google Drive's download interface
            const driveViewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
            window.open(driveViewUrl, '_blank');
        });
    }

    // Add a MutationObserver to monitor consent checkbox changes
    function setupConsentCheckboxObserver() {
        console.log('Setting up consent checkbox observer');
        
        // Disconnect any existing observer
        if (window.consentCheckboxObserver) {
            window.consentCheckboxObserver.disconnect();
        }
        
        // Create a new observer
        window.consentCheckboxObserver = new MutationObserver(function(mutations) {
            if (document.getElementById('confirmation-screen').dataset.active === 'true') {
                console.log('Mutation detected in consent checkboxes');
                updateProceedButton();
            }
        });
        
        // Get all consent containers
        const consentContainers = document.querySelectorAll('.consent-container');
        
        // Observe each container for changes
        consentContainers.forEach(container => {
            window.consentCheckboxObserver.observe(container, { 
                attributes: true, 
                childList: true, 
                subtree: true,
                attributeFilter: ['checked', 'class', 'style'] 
            });
        });
    }
    
    // Call the function to set up the observer
    setupConsentCheckboxObserver();
    
    // Call this whenever consent containers are updated
    const originalUpdateConsentContainers2 = updateConsentContainers;
    updateConsentContainers = function() {
        originalUpdateConsentContainers2.apply(this, arguments);
        
        // Reset the observer after containers are updated
        setTimeout(() => {
            setupConsentCheckboxObserver();
        }, 100);
    };
    
    // Set up event handler directly for proceed button on confirmation screen
    document.querySelector('.proceed-button').addEventListener('click', function() {
        // If we're on the confirmation screen, double-check if any consents are selected
        if (document.getElementById('confirmation-screen').dataset.active === 'true') {
            const checkedConsents = document.querySelectorAll('.consent-container[style*="block"] .consent-option .checkbox-container input[type="checkbox"]:checked');
            if (checkedConsents.length === 0) {
                console.log('Prevent proceed: No consents selected');
                this.disabled = true;
                // Show an alert message
                alert('Please select at least one consent option to proceed.');
            }
        }
    });

    // The setupAccountOptionCheckboxes function is already defined earlier in the code,
    // so we don't need to redefine it here.

});

// Test comment
