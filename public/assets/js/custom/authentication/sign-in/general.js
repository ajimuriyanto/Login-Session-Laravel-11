const formin = document.getElementById('kt_sign_in_form');

    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
    var validatorin = FormValidation.formValidation(
        formin,
        {
            fields: {
                'username': {
                    validators: {
                        notEmpty: {
                            message: 'Username tidak boleh kosong'
                        }
                    }
                },                
                'password': {
                    validators: {
                        notEmpty: {
                            message: 'Password tidak boleh kosong'
                        }
                    }
                }
            },

            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: '.fv-row',
                    eleInvalidClass: '',
                    eleValidClass: ''
                })
            }
        }
    );

    // Submit button handler
    const submitButtonin = document.getElementById('kt_sign_in_submit');
    submitButtonin.addEventListener('click', function (i) {
        // Prevent default button action
        i.preventDefault();

        // Validate form before submit
        if (validatorin) {
            validatorin.validate().then(function (status) {
                console.log('validated!');

                if (status == 'Valid') {
                    // Show loading indication
                    submitButtonin.setAttribute('data-kt-indicator', 'on');

                    // Disable button to avoid multiple click
                    submitButtonin.disabled = true;

                    // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                    setTimeout(function () {
                        // Remove loading indication
                        submitButtonin.removeAttribute('data-kt-indicator');

                        // Enable button
                        submitButtonin.disabled = false;                    

                        formin.submit(); // Submit form
                    }, 500);
                }
            });
        }
    });  