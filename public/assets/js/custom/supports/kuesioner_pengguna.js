"use strict";
var KTCreateAccount = function () {
    var e, t, i, o, s, r, a = [];
    return {
        init: function () {
            (e = document.querySelector("#kt_modal_create_account")) && new bootstrap.Modal(e), t = document.querySelector("#kt_create_account_stepper"), i = t.querySelector("#kt_create_account_form"), o = t.querySelector('[data-kt-stepper-action="submit"]'), s = t.querySelector('[data-kt-stepper-action="next"]'), (r = new KTStepper(t)).on("kt.stepper.changed", (function (e) {
                3 === r.getCurrentStepIndex() ? (o.classList.remove("d-none"), o.classList.add("d-inline-block"), s.classList.add("d-none")) : 5 === r.getCurrentStepIndex() ? (o.classList.add("d-none"), s.classList.add("d-none")) : (o.classList.remove("d-inline-block"), o.classList.remove("d-none"), s.classList.remove("d-none"))
            })), r.on("kt.stepper.next", (function (e) {
                console.log("stepper.next");
                var t = a[e.getCurrentStepIndex() - 1];
                t ? t.validate().then((function (t) {
                    console.log("validated!"), "Valid" == t ? (e.goNext(), KTUtil.scrollTop()) : Swal.fire({
                        text: "Lakukan pengisian data dengan baik dan benar.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: {confirmButton: "btn btn-success"}
                    }).then((function () {
                        KTUtil.scrollTop()
                    }))
                })) : (e.goNext(), KTUtil.scrollTop())
            })), r.on("kt.stepper.previous", (function (e) {
                console.log("stepper.previous"), e.goPrevious(), KTUtil.scrollTop()
            })), a.push(FormValidation.formValidation(i, {
                fields: {
                    "jawaban[1][0][]": {validators: {notEmpty: {message: "Nama perusahaan/instansi tidak boleh kosong"}}},
                    "jawaban[2][0][]": {validators: {notEmpty: {message: "Alamat perusahaan/instansi tidak boleh kosong"}}},
                    "jawaban[3][0][]": {validators: {notEmpty: {message: "Jenis perusahaan/instansi tidak boleh kosong"}}},
                    "jawaban[4][0][]": {validators: {notEmpty: {message: "Nama pengisi kuesioner tidak boleh kosong"}}},
                    "jawaban[5][0][]": {validators: {notEmpty: { message: "Jabatan tidak boleh kosong"}}},
                    "jawaban[6][0][]": {validators: {notEmpty: { message: "Skala usaha tidak boleh kosong"}}}
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            })), a.push(FormValidation.formValidation(i, {
                fields: {
                    "jawaban[7][1][]": {validators: {notEmpty: { message: "Nama alumni tidak boleh kosong"}}},
                    "jawaban[7][2][]": {validators: {notEmpty: { message: "Program studi tidak boleh kosong"}}},
                    "jawaban[7][3][]": {validators: {notEmpty: { message: "Tahun lulus tidak boleh kosong"}}},
                    "jawaban[7][4][]": {validators: {notEmpty: { message: "Jabatan alumni tidak boleh kosong"}}},
                    "jawaban[7][5][]": {validators: {notEmpty: { message: "Bagian/Departemen tidak boleh kosong"}}},
                    "jawaban[7][6][]": {validators: {notEmpty: { message: "Lama bekerja tidak boleh kosong"}}}
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            })), a.push(FormValidation.formValidation(i, {
                fields: {
                    "jawaban[8][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[9][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[10][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[11][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[12][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[13][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[14][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[15][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[16][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[17][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[18][0][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[19][7][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[19][8][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[19][9][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[19][10][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[19][11][]": {validators: {notEmpty: { message: "Pilih salah satu jawaban"}}},
                    "jawaban[20][0][]": {validators: {notEmpty: { message: "Jawaban tidak boleh kosong"}}}
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            })), o.addEventListener("click", (function (e) {
                a[2].validate().then((function (t) {
                    console.log("validated!"), "Valid" == t ? (e.preventDefault(), o.disabled = !0, o.setAttribute("data-kt-indicator", "on"), setTimeout((function () {
                        o.removeAttribute("data-kt-indicator"), o.disabled = !1, i.submit()
                    }), 2e3)) : Swal.fire({
                        text: "Lakukan pengisian data dengan baik dan benar.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: {confirmButton: "btn btn-success"}
                    }).then((function () {
                        KTUtil.scrollTop()
                    }))
                }))
            })), $(i.querySelector('[name="jawaban[3][0][]"]')).on("change", (function () {
                a[0].revalidateField("jawaban[3][0][]")
            })), $(i.querySelector('[name="jawaban[6][0][]"]')).on("change", (function () {
                a[0].revalidateField("jawaban[6][0][]")
            })), $(i.querySelector('[name="jawaban[7][2][]"]')).on("change", (function () {
                a[1].revalidateField("jawaban[7][2][]")
            })), $(i.querySelector('[name="jawaban[7][3][]"]')).on("change", (function () {
                a[1].revalidateField("jawaban[7][3][]")
            }))
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTCreateAccount.init()
}));