const form = document.getElementById('kt_edit_formvalidation');

var validator = FormValidation.formValidation(
    form,
    {
        fields: {
            'nama': {
                validators: {
                    notEmpty: {
                        message: 'Nama tidak boleh kosong'
                    }
                }
            },
            'username': {
                validators: {
                    notEmpty: {
                        message: 'Semester tidak boleh kosong'
                    }
                }
            },
            'id_group': {
                validators: {
                    notEmpty: {
                        message: 'Pilih operator terlebih dahulu'
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


$(form.querySelector('[name="id_group"]')).on('change', function () {
    validator.revalidateField('id_group');
});


const submitButton = document.getElementById('kt_edit_formvalidation_submit');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (validator) {
        validator.validate().then(function (status) {
            console.log('validated!');

            if (status == 'Valid') {
                submitButton.setAttribute('data-kt-indicator', 'on');

                submitButton.disabled = true;
                
                setTimeout(function () {
                    submitButton.removeAttribute('data-kt-indicator');

                    submitButton.disabled = false;                

                    
                    form.submit(); // Submit form
                }, 2000);
            }
        });
    }
});