const formin = document.getElementById('kt_docs_formvalidation_input');

    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
    var validatorin = FormValidation.formValidation(
        formin,
        {
            fields: {
                'tahun': {
                    validators: {
                        notEmpty: {
                            message: 'Tahun tidak boleh kosong'
                        }
                    }
                },
                'semester': {
                    validators: {
                        notEmpty: {
                            message: 'Semester tidak boleh kosong'
                        }
                    }
                },
                'tahun_akademik': {
                    validators: {
                        notEmpty: {
                            message: 'Tahun Akademik tidak boleh kosong'
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
    const submitButtonin = document.getElementById('kt_docs_formvalidation_input_submit');
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
    
const formup = document.getElementById('kt_docs_formvalidation_update');

    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
    var validatorup = FormValidation.formValidation(
        formup,
        {
            fields: {
                'tahun': {
                    validators: {
                        notEmpty: {
                            message: 'Tahun tidak boleh kosong'
                        }
                    }
                },
                'semester': {
                    validators: {
                        notEmpty: {
                            message: 'Semester tidak boleh kosong'
                        }
                    }
                },
                'tahun_akademik': {
                    validators: {
                        notEmpty: {
                            message: 'Tahun Akademik tidak boleh kosong'
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
    const submitButtonup = document.getElementById('kt_docs_formvalidation_update_submit');
    submitButtonup.addEventListener('click', function (u) {
        // Prevent default button action
        u.preventDefault();

        // Validate form before submit
        if (validatorup) {
            validatorup.validate().then(function (status) {
                console.log('validated!');

                if (status == 'Valid') {
                    // Show loading indication
                    submitButtonup.setAttribute('data-kt-indicator', 'on');

                    // Disable button to avoid multiple click
                    submitButtonup.disabled = true;

                    // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                    setTimeout(function () {
                        // Remove loading indication
                        submitButtonup.removeAttribute('data-kt-indicator');

                        // Enable button
                        submitButtonup.disabled = false;                    

                        formup.submit(); // Submit form
                    }, 500);
                }
            });
        }
    });    