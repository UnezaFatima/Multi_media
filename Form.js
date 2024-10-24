// function validateForm() {
//     document.getElementById('errorName').textContent = '';
//     document.getElementById('errorMail').textContent = '';
//     document.getElementById('errorNum').textContent = '';

//     const name = document.getElementById('infoName').value.trim();
//     const email = document.getElementById('infoMail').value.trim();
//     const phone = document.getElementById('infoNum').value.trim();

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phonePattern = /^\+?\d{1,4}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,9}[\s.-]?\d{1,9}$/;

//     let isValid = true; 


//     if (name === '') {
//         document.getElementById('errorName').textContent = 'Name is required';
//         isValid = false;
//     }

   
//     if (email === '') {
//         document.getElementById('errorMail').textContent = 'Email is required';
//         isValid = false;
//     } else if (!emailPattern.test(email)) {
//         document.getElementById('errorMail').textContent = 'Invalid email address';
//         isValid = false;
//     }

   
//     if (phone === '') {
//         document.getElementById('errorNum').textContent = 'Phone number is required';
//         isValid = false;
//     } else if (!phonePattern.test(phone)) {
//         document.getElementById('errorNum').textContent = 'Invalid phone number';
//         isValid = false;
//     }

  
//     return isValid;
// }


    function validateForm() {
    // Clear previous error messages
    document.getElementById('errorName').textContent = '';
    document.getElementById('errorMail').textContent = '';
    document.getElementById('errorNum').textContent = '';

    // Get form values
    const name = document.getElementById('infoName').value.trim();
    const email = document.getElementById('infoMail').value.trim();
    const phone = document.getElementById('infoNum').value.trim();

    // Regular expressions for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?\d{1,4}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,9}[\s.-]?\d{1,9}$/;

    let isValid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('errorName').textContent = 'Name is required';
        isValid = false;
    }

    // Validate Email
    if (email === '') {
        document.getElementById('errorMail').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('errorMail').textContent = 'Invalid email address';
        isValid = false;
    }

    // Validate Phone Number
    if (phone === '') {
        document.getElementById('errorNum').textContent = 'Phone number is required';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('errorNum').textContent = 'Invalid phone number';
        isValid = false;
    }

    // Return false if form is invalid to prevent submission
    return isValid;
}

// ......................................................................................

document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step1');
    const formSections = {
        personalInfo: document.getElementById('Container2'),
        selectPlan: document.getElementById('selctplan')
    };
    
    let currentStep = 0;
    const nextStepButton = document.getElementById('nextStepBtn');
    const backButton = document.querySelector('.goback');
    const nextButton = document.querySelector('.nextstep');
    const switchToggle = document.getElementById('switch');
    const planYearElements = document.querySelectorAll('.Month .Mbtn');
    const planMonthElements = document.querySelectorAll('.btn1 .planbtn');

    function showStep(index) {
        steps.forEach((step, i) => {
            step.style.display = i === index ? 'block' : 'none';
        });
    }

    function validateForm() {
        let valid = true;

        // Validate form fields here
        const name = document.getElementById('infoName').value;
        const email = document.getElementById('infoMail').value;
        const phone = document.getElementById('infoNum').value;

        if (name === '') {
            document.getElementById('errorName').textContent = 'Name is required';
            valid = false;
        } else {
            document.getElementById('errorName').textContent = '';
        }

        if (email === '') {
            document.getElementById('errorMail').textContent = 'Email is required';
            valid = false;
        } else {
            document.getElementById('errorMail').textContent = '';
        }

        if (phone === '') {
            document.getElementById('errorNum').textContent = 'Phone number is required';
            valid = false;
        } else {
            document.getElementById('errorNum').textContent = '';
        }

        return valid;
    }

    

    function handleNext() {
        if (currentStep === 0) {
            if (!validateForm()) return;
            formSections.personalInfo.style.display = 'none';
            formSections.selectPlan.style.display = 'block';
        } else if (currentStep === 1) {
            // Handle step 2 specifics if needed
        }
        
        currentStep++;
        showStep(currentStep);
    }

    function handleBack() {
        if (currentStep === 1) {
            formSections.personalInfo.style.display = 'block';
            formSections.selectPlan.style.display = 'none';
        }
        
        currentStep--;
        showStep(currentStep);
    }

    function reset() {
        if (switchToggle.checked) {
            planMonthElements.forEach(btn => btn.style.display = 'none');
            planYearElements.forEach(btn => btn.style.display = 'block');
        } else {
            planMonthElements.forEach(btn => btn.style.display = 'block');
            planYearElements.forEach(btn => btn.style.display = 'none');
        }
    }

    nextStepButton.addEventListener('click', function(event) {
        event.preventDefault();
        handleNext();
    });

    backButton.addEventListener('click', function() {
        handleBack();
    });

    nextButton.addEventListener('click', function() {
        handleNext();
    });

    switchToggle.addEventListener('change', reset);

    showStep(currentStep);
});



// .....................................................................................................


document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.getElementById('switch');
    const monthlyButtons = document.querySelectorAll('.btn1 button');
    const yearlyButtons = document.querySelectorAll('.Month button');
    const planYear = document.getElementById('planYear');

    
    switchElement.addEventListener('change', () => {
        if (switchElement.checked) {
            
            planYear.style.display = 'flex';
            document.querySelector('.btn1').style.display = 'none';
        } else {
             planYear.style.display = 'none';
            document.querySelector('.btn1').style.display = 'flex';
        }
    });

   
    function selectPlan(planId) {
         console.log('Plan selected:', planId);
    }

    monthlyButtons.forEach(button => {
        button.addEventListener('click', () => selectPlan(button.id));
    });

    yearlyButtons.forEach(button => {
        button.addEventListener('click', () => selectPlan(button.id));
    });

  
    function next() {
          console.log('Next Step');
    }

    function back() {
        
        console.log('Go Back');
    }

    document.querySelector('.nextstep').addEventListener('click', next);
    document.querySelector('.goback').addEventListener('click', back);
});


