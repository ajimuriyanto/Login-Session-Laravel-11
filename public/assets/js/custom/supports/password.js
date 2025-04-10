const formCh = document.getElementById('kt_docs_formvalidation_update_pass');

var validatorch = FormValidation.formValidation(
    formCh,
    {
        fields: {
            'new_password': {
                validators: {
                    notEmpty: {
                        message: 'Password baru tidak boleh kosong'
                    },
                    stringLength: {
                        min: 8,
                        message: "Password baru tidak boleh kurang dari 8 digit",
                    },
                }
            },
            'new_re_password': {
                validators: {
                    notEmpty: {
                        message: 'Re-password baru tidak boleh kosong'
                    },
                    stringLength: {
                        min: 8,
                        message: "Password baru tidak boleh kurang dari 8 digit",
                    },
                    identical: {
                        compare: function () {
                            return form.querySelector('[name="new_password"]').value;
                        },
                        message: 'Password baru tidak sama dengan re-password baru'
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
    validatorch.revalidateField('id_group');
}),$(form.querySelector('[name="kode_prodi"]')).on('change', function () {
    validatorch.revalidateField('kode_prodi');
});

const submitButtonCh = document.getElementById('kt_docs_formvalidation_pass_submit');
submitButtonCh.addEventListener('click', function (e) {
    e.preventDefault();

    if (validatorch) {
        validatorch.validate().then(function (status) {
            console.log('validated!');

            if (status == 'Valid') {
                submitButtonCh.setAttribute('data-kt-indicator', 'on');

                submitButtonCh.disabled = true;
                
                setTimeout(function () {
                    submitButtonCh.removeAttribute('data-kt-indicator');

                    submitButtonCh.disabled = false;                

                    formCh.submit(); // Submit form
                }, 2000);
            }
        });
    }
});