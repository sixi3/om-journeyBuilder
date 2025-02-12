document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

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
                headerLogo.src = 'icici-logo.png';
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
        

        const selectedAccount = document.querySelector('.account-option.selected');
        if (selectedAccount) {
            selectedAccount.style.borderColor = color;
            const rgb = hexToRGB(color);
            selectedAccount.style.backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`;
        }

        document.querySelectorAll('.checkbox-checkmark .checked').forEach(checkbox => {
            checkbox.style.color = color;
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
        document.getElementById('page-title').textContent = 'Select Accounts';
    });

    // Function to update styles of account options based on checkbox state
    function updateAccountOptionStyles(bankSection) {
        const accountOptions = bankSection.querySelectorAll('.account-option');
        accountOptions.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                option.classList.add('selected');
                option.style.borderColor = color;
                const rgb = hexToRGB(color);
                option.style.backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`;
            } else {
                option.classList.remove('selected');
                option.style.borderColor = '';
                option.style.backgroundColor = '';
            }
        });
    }

    // Handle account selection
    document.querySelectorAll('.account-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            updateAccountOptionStyles(this);
            
            // Update Select All button text
            const bankSection = this.closest('.bank-section');
            const selectAllButton = bankSection.querySelector('.select-all');
            const accountOptions = bankSection.querySelectorAll('.account-option');
            const hasUncheckedOptions = Array.from(accountOptions)
                .some(option => !option.querySelector('input[type="checkbox"]').checked);
            selectAllButton.textContent = hasUncheckedOptions ? 'Select All' : 'Unselect All';
            
            updateSelectedCount();
        });
    });

    // Initialize styles for checkboxes on page load
    document.querySelectorAll('.account-option').forEach(option => {
        updateAccountOptionStyles(option);
    });

    // Initialize with default color
    const defaultColor = '#AE282E';
    colorInput.value = defaultColor;
    colorValue.textContent = defaultColor;
    document.documentElement.style.setProperty('--brand-color', defaultColor);
    const rgb = hexToRGB(defaultColor);
    document.documentElement.style.setProperty('--brand-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    updateBrandColor(defaultColor);

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
        const selectedCount = Array.from(document.querySelectorAll('.account-option input[type="checkbox"]:checked'))
            .filter(checkbox => getComputedStyle(checkbox.closest('.account-option')).display !== 'none').length;
        const totalCount = Array.from(document.querySelectorAll('.account-option'))
            .filter(option => getComputedStyle(option).display !== 'none').length;
        const pill = document.querySelector('.accounts-counter .pill');
        const prevCount = parseInt(pill.querySelector('.pill-number-animate')?.textContent || '0');
        
        const animationClass = selectedCount > prevCount ? 'slide-from-bottom' : 'slide-from-top';
        
        const countText = `${selectedCount}/${totalCount} accounts selected`;
        
        const [number, ...rest] = countText.split('/');
        pill.innerHTML = `
            <span class="pill-number-animate ${animationClass}">${number.trim()}</span>/${rest.join('')}
        `;
    }

    updateSelectedCount();

    const mainContent = document.querySelector('.main-content');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    function updateScrollIndicator() {
        const mainContent = document.querySelector('.main-content');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        const scrollableHeight = mainContent.scrollHeight - mainContent.clientHeight;
        const isAtBottom = Math.abs(mainContent.scrollTop - scrollableHeight) <= 1;
        
        if (isAtBottom || scrollableHeight <= 0) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateY(100%)';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateY(0)';
        }
    }

    mainContent.addEventListener('scroll', updateScrollIndicator);
    updateScrollIndicator();

    function handleSelectAll(bankSection) {
        const selectAllButton = bankSection.querySelector('.select-all');
        const accountOptions = bankSection.querySelectorAll('.account-option');
        const hasUncheckedOptions = Array.from(accountOptions)
            .some(option => !option.querySelector('input[type="checkbox"]').checked);

        // If any options are unchecked, select all. Otherwise, unselect all
        accountOptions.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            checkbox.checked = hasUncheckedOptions;
            updateAccountOptionStyles(option);
        });

        // Update button text based on new state
        selectAllButton.textContent = hasUncheckedOptions ? 'Unselect All' : 'Select All';
    }

    // Update the bank section initialization
    document.querySelectorAll('.bank-section').forEach(bankSection => {
        const selectAllButton = bankSection.querySelector('.select-all');
        
        // Add click handler
        selectAllButton.addEventListener('click', function(e) {
            e.preventDefault();
            handleSelectAll(bankSection);
            updateSelectedCount();
        });

        // Set initial button text
        const accountOptions = bankSection.querySelectorAll('.account-option');
        const hasUncheckedOptions = Array.from(accountOptions)
            .some(option => !option.querySelector('input[type="checkbox"]').checked);
        selectAllButton.textContent = hasUncheckedOptions ? 'Select All' : 'Unselect All';
    });

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
                }, 300);
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
                        scrollIndicator.style.display = 'flex';
                        updateScrollIndicator();
                    } else {
                        mainContent.style.overflowY = 'auto';
                        requestAnimationFrame(() => {
                            mainContent.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        });
                    }
                }
                // Call updateProceedButton after the screen transition is complete.
                updateProceedButton();
            }, 300);
        }, 300);
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

    proceedButton.addEventListener('click', function() {
        const currentScreen = screensArray[currentScreenIndex];
        
        // Perform validations based on the current screen
        switch (currentScreen.id) {
            case 'mobile-input-screen': {
                if (!phoneInput.value) {
                    showError(phoneInput, 'Please enter your mobile number');
                    return;
                }
                if (!isValidIndianMobileNumber(phoneInput.value)) {
                    showError(phoneInput, 'Please enter a valid 10-digit mobile number');
                    return;
                }
                
                const otpInputGroup = document.querySelector('.otp-input-group');
                const otpInput = document.getElementById('otp-input');
                if (!otpInputGroup.classList.contains('show')) {
                    // First click – show the OTP input
                    otpInputGroup.style.display = 'flex';
                    otpInputGroup.offsetHeight; // Force reflow
                    otpInputGroup.classList.add('show');
                    this.textContent = 'Verify OTP';
                    this.disabled = true;
                    otpInput.focus();
                    // Simulate sending OTP (in real life, you'd call an API)
                    console.log('Sending OTP for number:', phoneInput.value);
                    return;
                }
                // Second click – verify OTP
                if (otpInput.value.length !== 6) {
                    showError(otpInput, 'Please enter a valid 6-digit OTP');
                    return;
                }
                break;
            }
            case 'bank-selection-screen': {
                // Example validation: require at least one bank to have been selected
                if (selectedBankNames.size === 0) {
                    alert('Please select at least one bank to proceed');
                    return;
                }
                break;
            }
            case 'account-selection-screen': {
                // Gather the selected accounts and ensure there is at least one
                const selectedAccounts = Array.from(document.querySelectorAll('.account-option input[type="checkbox"]:checked'))
                    .map(checkbox => {
                        const accountOption = checkbox.closest('.account-option');
                        const bankSection = accountOption.closest('.bank-section');
                        const bankInfo = bankSection.querySelector('.bank-info');
                        return {
                            bankName: bankInfo.querySelector('span').textContent,
                            bankLogo: bankInfo.querySelector('img').src,
                            type: accountOption.querySelector('.account-type').textContent,
                            number: accountOption.querySelector('.account-number').textContent
                        };
                    });
                
                if (selectedAccounts.length === 0) {
                    alert('Please select at least one account to proceed');
                    return;
                }
                updateSelectedAccountsList(selectedAccounts);
                break;
            }
            // Additional validations for other screens can be added here if needed.
        }
        
        // If validations pass, move to the next screen if available in the array.
        if (currentScreenIndex < screensArray.length - 1) {
            const fromScreen = screensArray[currentScreenIndex];
            const toScreen = screensArray[++currentScreenIndex];
            switchScreen(fromScreen, toScreen, true);
        }
    });

    backButton.addEventListener('click', function () {
        if (currentScreenIndex > 0) {
            const fromScreen = screensArray[currentScreenIndex];
            const targetScreen = screensArray[currentScreenIndex - 1];
            switchScreen(fromScreen, targetScreen, false);
            currentScreenIndex--;
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
                switchScreen(currentScreen, screensArray[targetIndex], false);
                currentScreenIndex = targetIndex;
            }
        }
    });

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
    otpInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 6); // Limit to 6 digits
        removeError(this);
        proceedButton.disabled = this.value.length !== 6;
    });

    // Add this to ensure button is disabled when OTP input is cleared
    otpInput.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            proceedButton.disabled = true;
        }
    });

    function initializeFilterTabs() {
        const accountTypes = {
            'all': '.account-option',
            'bank': '.account-option[data-type="bank"]',
            'mf': '.account-option[data-type="mf"]',
            'equity': '.account-option[data-type="equity"]'
        };

        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Update active state
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Filter accounts
                const filterType = this.dataset.filter;
                const selector = accountTypes[filterType];
                
                document.querySelectorAll('.account-option').forEach(option => {
                    option.style.display = 'none';
                });
                
                document.querySelectorAll(selector).forEach(option => {
                    option.style.display = 'flex';
                });

                // Hide empty bank sections
                document.querySelectorAll('.bank-section').forEach(section => {
                    // Check if section has any visible accounts
                    const visibleAccounts = section.querySelectorAll(selector);
                    section.style.display = visibleAccounts.length > 0 ? 'block' : 'none';
                });
            });
        });
    }

    initializeFilterTabs();

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
                return {
                    type,
                    // Retrieve the bank details from the parent bank section.
                    bankName: option.closest('.bank-section').querySelector('.bank-info span').textContent,
                    bankLogo: option.closest('.bank-section').querySelector('.bank-info img').src,
                    number: option.querySelector('.account-number').textContent
                };
            })
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

    function getTypeLabel(type) {
        const labels = {
            'bank': 'Bank Accounts',
            'mf': 'Mutual Funds',
            'equity': 'Equity',
            'other': 'Other Accounts'
        };
        return labels[type] || type;
    }

    // Consent drawer functionality
    const consentDetailsButton = document.querySelector('.consent-details-button');
    const consentDrawer = document.querySelector('.consent-drawer');
    const drawerBackdrop = document.querySelector('.drawer-backdrop');
    const closeDrawerButton = document.querySelector('.close-drawer');

    function openDrawer() {
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

    const usecaseInput = document.getElementById('usecase-input');
    const loanApprovalConsent = document.getElementById('loan-approval-consent');
    const portfolioManagementConsent = document.getElementById('portfolio-management-consent');
    const creditLineConsent = document.getElementById('credit-line-consent');
    const creditCardConsent = document.getElementById('credit-card-consent');
    const headline = document.getElementById('mobile-input-screen').querySelector('h1');

    // Global state for currently selected use case.
    let currentUseCase = usecaseInput.value; // e.g., "loan-approval" by default

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

        // Loop through each account option and update its display.
        document.querySelectorAll('.account-option').forEach(option => {
            const type = option.getAttribute('data-type');
            if (allowedTypes.includes(type)) {
                option.style.display = 'flex';
            } else {
                option.style.display = 'none';
            }
        });

        // Also update each bank section so that empty sections are hidden.
        document.querySelectorAll('.bank-section').forEach(section => {
            const accountOptions = Array.from(section.querySelectorAll('.account-option'));
            const hasVisible = accountOptions.some(o => getComputedStyle(o).display !== 'none');
            section.style.display = hasVisible ? 'block' : 'none';
        });

        // Output which account types are active.
        const activeAccountTypes = new Set();
        document.querySelectorAll('.account-option').forEach(option => {
            if (getComputedStyle(option).display !== 'none') {
                activeAccountTypes.add(option.getAttribute('data-type'));
            }
        });
        console.log("Active account types:", Array.from(activeAccountTypes).join(', '));
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
        });
    }

    /**
     * When the use case changes, update the global state, refresh consent containers,
     * update the account options, the mobile account type container, and the filter tabs.
     */
    usecaseInput.addEventListener('change', function() {
        currentUseCase = this.value;
        updateConsentContainers(); // Updates consent texts & container.
        updateAccountOptionsByUseCase();
        updateAccountTypeContainer();
        updateFilterTabs();

        // Reset filter tabs to "all" for consistency.
        document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
        const allTab = document.querySelector('.filter-tab[data-filter="all"]');
        if (allTab) {
            allTab.classList.add('active');
        }
    });

    // On initial load, update account options, account type container and filter tabs.
    updateAccountOptionsByUseCase();
    updateAccountTypeContainer();
    updateFilterTabs();

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

    // Ensure usecaseInput is defined before adding the event listener
    if (usecaseInput) {
        usecaseInput.addEventListener('change', updateConsentContainers);
    }

    // Initialize consent containers on page load
    updateConsentContainers();

    window.onload = function() {
        const popup = document.getElementById('how-it-works-popup');
        const backdrop = document.querySelector('.drawer-backdrop');
        popup.style.display = 'block';
        backdrop.classList.add('open'); // Fade in the backdrop
        setTimeout(() => {
            popup.querySelector('.popup-content').classList.add('show'); // Fade in the content
            animateUserCount(52834276); // Start the animation
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

    // Handle Send OTP button click
    const sendOtpButton = document.querySelector('.proceed-button');
    const customerInput = document.getElementById('phone-input');

    // Replace with your Google Apps Script URL
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbwT17orum0gqOtbZp2hD3kGrzmvpY5-KEonOF4D6-Mv09nMF7wWBBTbLQ7bs9kUaEF-/exec';

    // Flag to check if the event listener is already added
    let isListenerAdded = false;

    if (!isListenerAdded) {
        sendOtpButton.addEventListener('click', () => {
            const mobileNumber = customerInput.value;
            console.log(`Mobile Number: ${mobileNumber}`); // Log the mobile number

            // Send the mobile number to Google Sheets
            fetch(googleSheetUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `mobileNumber=${encodeURIComponent(mobileNumber)}`,
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });

        // Set the flag to true after adding the listener
        isListenerAdded = true;
    }

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
        const duration = 1000; // Total duration of the animation in milliseconds
        const startTime = performance.now();

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
                userCountElement.textContent = finalNumber.toLocaleString(); // Ensure it ends at the final number
            }
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
                    bankItem.classList.remove('selected');
                } else {
                    selectedBankNames.add(bank.name);
                    bankItem.classList.add('selected');
                }
                updateSelectedBankList();
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

        // Reinitialize Lucide icons for dynamically added elements
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
                    // Replace the icon after fade-out completed
                    existingIcon.outerHTML = `<i data-lucide="${iconName}" class="search-icon fade-in" style="cursor: ${iconName === 'x' ? 'pointer' : 'default'}"></i>`;
                    lucide.createIcons();
                    // Remove fade-in class after the fade in animation is done
                    setTimeout(() => {
                        const icon = searchInputGroup.querySelector('.search-icon');
                        if (icon) {
                            icon.classList.remove('fade-in');
                        }
                    }, fadeInTime);
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
        searchInputGroup.addEventListener('click', function (e) {
            const clickedIcon = e.target.closest('.search-icon');
            if (clickedIcon && bankSearchInput.value.trim().length > 0) {
                console.log('X icon clicked, clearing search');
                bankSearchInput.value = '';
                bankSearchInput.dispatchEvent(new Event('input'));
                updateSearchIcon();
                bankSearchInput.focus(); // Keep the search input active after clearing.
            }
        });
    }

    function updateSelectedBankList() {
        const selectedBankListContainer = document.querySelector('.selected-bank-list');
        if (!selectedBankListContainer) return;

        // Clear the container
        selectedBankListContainer.innerHTML = '';

        if (selectedBankNames.size === 0) {
            const placeholder = document.createElement('div');
            placeholder.className = 'no-bank-selected';
            placeholder.textContent = 'No banks selected';
            selectedBankListContainer.appendChild(placeholder);
        } else {
            // Loop through the global banks array to find details for each selected bank.
            banks.forEach(bank => {
                if (selectedBankNames.has(bank.name)) {
                    let bankLogoHTML = '';
                    if (bank.logo === "landmark") {
                        bankLogoHTML = `<i data-lucide="landmark" class="bank-logo" style="color: var(--brand-color);"></i>`;
                    } else {
                        bankLogoHTML = `<img src="${bank.logo}" alt="${bank.name} Logo">`;
                    }

                    const selectedItem = document.createElement('div');
                    selectedItem.classList.add('selected-bank-item');
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
                        selectedBankNames.delete(bank.name);
                        // Remove selected class from bank list items (if currently rendered)
                        document.querySelectorAll('.bank-list .bank-item').forEach(item => {
                            const itemName = item.querySelector('span').textContent.trim();
                            if (itemName === bank.name) {
                                item.classList.remove('selected');
                            }
                        });
                        updateSelectedBankList();
                    });

                    selectedBankListContainer.appendChild(selectedItem);
                }
            });
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

        switch (activeScreen.id) {
            case 'mobile-input-screen':
                // For the mobile input screen, show "Send OTP" and disable the button until a valid phone number is entered.
                proceedButton.textContent = 'Send OTP';
                const phoneInput = document.getElementById('phone-input');
                // Enable only if the phone input is exactly 10 digits (adjust your validation as needed)
                proceedButton.disabled = !(phoneInput && phoneInput.value.trim().length === 10);
                break;
            
            case 'bank-selection-screen':
                // For the bank selection screen, show "Fetch Accounts" and disable until at least one bank is selected.
                proceedButton.textContent = 'Fetch Accounts';
                // (Assuming selected banks are rendered as elements with the class ".selected-bank-item")
                const selectedBanks = document.querySelectorAll('.selected-bank-item');
                proceedButton.disabled = selectedBanks.length === 0;
                break;
            
            case 'account-selection-screen':
                // For the account selection screen, show "Link Accounts" and disable until at least one account is checked.
                proceedButton.textContent = 'Proceed';
                break;
            
            case 'confirmation-screen':
                // For the confirmation screen, show "Approve and Share Data"
                // and disable the button until all the required consents are checked.
                proceedButton.textContent = 'Approve Consent';
                break;
            
            default:
                proceedButton.textContent = 'Continue';
                proceedButton.disabled = false;
                break;
        }
    }

    // Example: call updateProceedButton on page load or whenever a screen transition occurs.
    updateProceedButton();

    // You might also want to add event listeners to input elements so that
    // as soon as a user enters a valid phone number or selects an account,
    // the state of the button is updated. For instance:
    document.getElementById('phone-input')?.addEventListener('input', updateProceedButton);

    // Similarly, if selecting banks or accounts triggers events, ensure those events also call updateProceedButton.

});

