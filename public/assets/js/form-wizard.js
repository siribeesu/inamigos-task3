document.addEventListener('DOMContentLoaded', () => {
    const steps = Array.from(document.querySelectorAll('.form-step'));
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const progressSteps = Array.from(document.querySelectorAll('.progress-step'));
    const progressFill = document.getElementById('progressFill');
    const form = document.getElementById('joinForm');

    let currentStep = 0;

    // Form inputs for review
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    const state = document.getElementById('state');

    function updateProgress() {
        progressSteps.forEach((step, idx) => {
            if (idx < currentStep) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (idx === currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });

        // Update progress bar width
        const progress = (currentStep / (steps.length - 1)) * 100;
        if(progressFill) {
            progressFill.style.width = progress + '%';
        }
    }

    function showStep(stepIndex) {
        steps.forEach((step, idx) => {
            step.classList.toggle('active', idx === stepIndex);
        });

        // Button visibility
        if (stepIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-block';
        }

        if (stepIndex === steps.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
            populateReview();
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }

        updateProgress();
    }

    function validateCurrentStep() {
        // Find all required inputs in the current step
        const currentInputs = steps[currentStep].querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        currentInputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.reportValidity();
            }
        });
        
        // Special validation for radio buttons in step 3
        if (currentStep === 2) {
            const interestRadios = document.querySelectorAll('input[name="interest"]');
            let radioValid = false;
            interestRadios.forEach(radio => {
                if(radio.checked) radioValid = true;
            });
            if(!radioValid) {
                isValid = false;
                alert("Please select an interest.");
            }
        }

        return isValid;
    }

    function populateReview() {
        // Elements in review step
        document.getElementById('rev-name').textContent = fullName.value;
        document.getElementById('rev-email').textContent = email.value;
        document.getElementById('rev-phone').textContent = phone.value;
        document.getElementById('rev-location').textContent = city.value + ', ' + state.value;
        
        const selectedInterest = document.querySelector('input[name="interest"]:checked');
        if(selectedInterest) {
            document.getElementById('rev-interest').textContent = selectedInterest.value;
        }
    }

    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (validateCurrentStep()) {
                currentStep++;
                showStep(currentStep);
            }
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    }
});
