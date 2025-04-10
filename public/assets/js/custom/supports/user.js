const form = document.getElementById('kt_docs_formvalidation');

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
            },
            'kode_prodi': {
                validators: {
                    notEmpty: {
                        message: 'Pilih program studi terlebih dahulu'
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
}),$(form.querySelector('[name="kode_prodi"]')).on('change', function () {
    validator.revalidateField('kode_prodi');
});


const submitButton = document.getElementById('kt_docs_formvalidation_submit');
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


const formUp = document.getElementById('kt_docs_formvalidation_update_user');

var validatorup = FormValidation.formValidation(
    formUp,
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
            },
            'kode_prodi': {
                validators: {
                    notEmpty: {
                        message: 'Pilih program studi terlebih dahulu'
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
    validatorup.revalidateField('id_group');
}),$(form.querySelector('[name="kode_prodi"]')).on('change', function () {
    validatorup.revalidateField('kode_prodi');
});

const submitButtonUp = document.getElementById('kt_docs_formvalidation_user_submit');
submitButtonUp.addEventListener('click', function (e) {
    e.preventDefault();

    if (validatorup) {
        validatorup.validate().then(function (status) {
            console.log('validated!');

            if (status == 'Valid') {
                submitButtonUp.setAttribute('data-kt-indicator', 'on');

                submitButtonUp.disabled = true;
                
                setTimeout(function () {
                    submitButtonUp.removeAttribute('data-kt-indicator');

                    submitButtonUp.disabled = false;                

                    formUp.submit(); // Submit form
                }, 2000);
            }
        });
    }
});