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
        const selectedCount = document.querySelectorAll('.account-option input[type="checkbox"]:checked').length;
        const totalCount = document.querySelectorAll('.account-option').length;
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
        poweredBy.style.visibility = 'visible';
        poweredBy.style.opacity = '1';
    let currentScreen = Array.from(document.querySelectorAll('[data-active]'))
        .find(screen => screen.dataset.active === 'true')?.id || 'mobile-input-screen';

    if (currentScreen === 'mobile-input-screen') {
        proceedButton.textContent = 'Send OTP';
        proceedButton.disabled = !phoneInput?.value || phoneInput.value.length !== 10;
        poweredBy.style.visibility = 'hidden';
        poweredBy.style.opacity = '0';
        
    } else if (currentScreen === 'account-selection-screen') {
        proceedButton.textContent = 'Proceed';
        proceedButton.disabled = false;
        
        // Show back button and powered by
        const backButton = document.querySelector('.back-btn');
        backButton.style.visibility = 'visible';
        backButton.style.opacity = '1';

        const poweredBy = document.querySelector('.powered-by');
        poweredBy.style.visibility = 'visible';
        poweredBy.style.opacity = '1';
    } else if (currentScreen === 'confirmation-screen') {
        proceedButton.textContent = 'Approve Consent';
        proceedButton.disabled = false;
        initializeAccordion();
        rejectButton.style.display = 'flex';
    }

    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
        removeError(this);
        proceedButton.disabled = this.value.length !== 10;
    });

    const backButton = document.querySelector('.back-btn');
    backButton.style.visibility = 'hidden';
    backButton.style.opacity = '0';

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
        
        // Add minimum height constraint to container
        const container = document.querySelector('.container');
        if (container) {
            container.style.minHeight = '700px'; // Adjust this value as needed
        }
        
        fromScreen.classList.add(isForward ? 'slide-out-left' : 'slide-out-right');
        
        setTimeout(() => {
            fromScreen.dataset.active = 'false';
            fromScreen.classList.remove(isForward ? 'slide-out-left' : 'slide-out-right');
            fromScreen.style.display = 'none';
            
            toScreen.style.display = 'flex';
            toScreen.dataset.active = 'true';
            toScreen.classList.add(isForward ? 'slide-in-right' : 'slide-in-left');
            
            // Update current screen before updating buttons
            currentScreen = toScreen.id;
            
            // Update button states
            const proceedButton = document.querySelector('.proceed-button');
            const rejectButton = document.querySelector('.reject-button');
            
            if (toScreen.id === 'confirmation-screen') {
                proceedButton.textContent = 'Approve Consent';
                rejectButton.style.display = 'flex';
                setTimeout(() => {
                    rejectButton.classList.add('visible');
                    // Initialize accordion after screen transition completes
                    initializeAccordion();
                }, 300); // Match the transition duration
            } else {
                // Remove visible class first, then hide after transition
                rejectButton.classList.remove('visible');
                setTimeout(() => {
                    rejectButton.style.display = 'none';
                }, 300); // Match the transition duration
                
                if (toScreen.id === 'mobile-input-screen') {
                    proceedButton.textContent = 'Send OTP';
                } else if (toScreen.id === 'account-selection-screen') {
                    proceedButton.textContent = 'Proceed';
                }
            }
            
            setTimeout(() => {
                toScreen.classList.remove(isForward ? 'slide-in-right' : 'slide-in-left');
                
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
            }, 300);
        }, 300);
    }

    proceedButton.addEventListener('click', function() {
        if (currentScreen === 'mobile-input-screen') {
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
                // First click - Show OTP input
                otpInputGroup.style.display = 'flex';
                otpInputGroup.offsetHeight; // Force reflow
                otpInputGroup.classList.add('show');
                this.textContent = 'Verify OTP';
                this.disabled = true;
                
                // Focus on OTP input
                otpInput.focus();
                
                // Simulate OTP sent (in real app, this would be an API call)
                console.log('Sending OTP for number:', phoneInput.value);
                return;
            }

            // Second click - Verify OTP
            if (otpInput.value.length === 6) {
                // Switch to account selection screen
                switchScreen(
                    document.getElementById('mobile-input-screen'),
                    document.getElementById('account-selection-screen'),
                    true
                );
                
                currentScreen = 'account-selection-screen';
                this.textContent = 'Proceed';
                
                // Update phone display
                const phoneDisplay = document.querySelector('.phone-number');
                const maskedNumber = phoneInput.value.replace(/(\d{6})(\d{4})/, 'XXXXXX$2');
                phoneDisplay.innerHTML = `+91 ${maskedNumber}<button class="edit-phone">edit</button>`;
                
                // Show back button and powered by
                const backButton = document.querySelector('.back-btn');
                backButton.style.visibility = 'visible';
                backButton.style.opacity = '1';

                const poweredBy = document.querySelector('.powered-by');
                poweredBy.style.visibility = 'visible';
                poweredBy.style.opacity = '1';
            } else {
                showError(otpInput, 'Please enter a valid 6-digit OTP');
            }
        } else if (currentScreen === 'account-selection-screen') {
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

            switchScreen(
                document.getElementById('account-selection-screen'),
                document.getElementById('confirmation-screen'),
                true
            );
            currentScreen = 'confirmation-screen';
            
            this.textContent = 'Approve Consent';
        } else if (currentScreen === 'confirmation-screen') {
            const confirmationScreen = document.getElementById('confirmation-screen');
            const successScreen = document.getElementById('success-screen');
            switchScreen(confirmationScreen, successScreen, true);
            currentScreen = 'success-screen';
            
            // Hide the proceed and reject buttons
            const proceedButton = document.querySelector('.proceed-button');
            const rejectButton = document.querySelector('.reject-button');
            proceedButton.style.display = 'none';
            rejectButton.style.display = 'none';
            
            // Hide the back button
            backButton.style.visibility = 'hidden';
        }
    });

    backButton.addEventListener('click', function() {
        if (currentScreen === 'confirmation-screen') {
            const confirmationScreen = document.getElementById('confirmation-screen');
            const accountSelectionScreen = document.getElementById('account-selection-screen');
            switchScreen(confirmationScreen, accountSelectionScreen, false);
            currentScreen = 'account-selection-screen';
            proceedButton.textContent = 'Proceed';
        }
        else if (currentScreen === 'account-selection-screen') {
            const accountSelectionScreen = document.getElementById('account-selection-screen');
            const mobileInputScreen = document.getElementById('mobile-input-screen');
            switchScreen(accountSelectionScreen, mobileInputScreen, false);
            currentScreen = 'mobile-input-screen';
            proceedButton.textContent = 'Send OTP';
            hideOtpInput();
            backButton.style.visibility = 'hidden';
            backButton.style.opacity = '0';

            const poweredBy = document.querySelector('.powered-by');
            poweredBy.style.visibility = 'hidden';
            poweredBy.style.opacity = '0';
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-phone')) {
            switchScreen(
                document.getElementById('account-selection-screen'),
                document.getElementById('mobile-input-screen'),
                false
            );
            currentScreen = 'mobile-input-screen';
            
            proceedButton.textContent = 'Send OTP';
            proceedButton.disabled = phoneInput.value.length !== 10;

            hideOtpInput();

            backButton.style.visibility = 'hidden';
            backButton.style.opacity = '0';
            
        }
    });

    document.querySelector('.link-more').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Stop event bubbling
        
        const confirmationScreen = document.getElementById('confirmation-screen');
        const accountSelectionScreen = document.getElementById('account-selection-screen');
        
        if (confirmationScreen.dataset.active === 'true') {
            switchScreen(confirmationScreen, accountSelectionScreen, false);
            currentScreen = 'account-selection-screen';
            proceedButton.textContent = 'Proceed';
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

    function updateButtons() {
        const proceedButton = document.querySelector('.proceed-button');
        const rejectButton = document.querySelector('.reject-button');

        if (currentScreen === 'confirmation-screen') {
            proceedButton.textContent = 'Approve Consent';
            rejectButton.style.display = 'flex';
        } else {
            rejectButton.style.display = 'none';
            if (currentScreen === 'mobile-input-screen') {
                proceedButton.textContent = 'Send OTP';
            } else if (currentScreen === 'account-selection-screen') {
                proceedButton.textContent = 'Proceed';
            }
        }
    }

    document.querySelector('.reject-button').addEventListener('click', function() {
        if (currentScreen === 'confirmation-screen') {
            // Handle rejection - you can customize this based on your needs
            console.log('Consent rejected');
            // Optionally navigate back or show a confirmation dialog
            const confirmationScreen = document.getElementById('confirmation-screen');
            const accountSelectionScreen = document.getElementById('account-selection-screen');
            switchScreen(confirmationScreen, accountSelectionScreen, false);
            currentScreen = 'account-selection-screen';
        }
    });

    // Also ensure the min-height is set on initial load
    const container = document.querySelector('.container');
    if (container) {
        container.style.minHeight = '700px'; // Adjust this value as needed
    }

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

    function updateSelectedAccountsList(selectedAccounts) {
        const accountsList = document.querySelector('.selected-accounts-list');

         // Update the header count
        const selectedAccountsHeader = document.querySelector('.selected-accounts-header h2');
        selectedAccountsHeader.textContent = `Accounts Selected (${selectedAccounts.length})`;
        
        // Group accounts by type using the data-type attribute from the original selection
        const groupedAccounts = selectedAccounts.reduce((acc, account) => {
            // Find the original account option by iterating through all options
            const accountOption = Array.from(document.querySelectorAll('.account-option[data-type]'))
                .find(option => option.querySelector('.account-number').textContent === account.number);
            
            const type = accountOption?.dataset.type || 'other';
            
            if (!acc[type]) acc[type] = [];
            acc[type].push(account);
            return acc;
        }, {});

        // Create sections for each type
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
                                    <div class="account-type">${account.type}</div>
                                    <div class="account-number">${account.number.replace(/Account No: /, '')}</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

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
                headline.textContent = 'Get Instant Loan Approval';
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
                headline.textContent = 'View and manage your entire portfolio';
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
                headline.textContent = 'Get a credit line for your business';
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
                headline.textContent = 'Instant Credit Card Approval';
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
});