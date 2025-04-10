"use strict";
var KTCreateApp = function () {
    var e, t, o, r, a, i, n = [];
    return {
        init: function () {
            (t = document.querySelector("#kt_modal_create_app_stepper"), o = document.querySelector("#kt_modal_create_app_form"), r = t.querySelector('[data-kt-stepper-action="submit"]'), a = t.querySelector('[data-kt-stepper-action="next"]'), (i = new KTStepper(t)).on("kt.stepper.changed", (function (e) {
                3 === i.getCurrentStepIndex() ? (r.classList.remove("d-none"), r.classList.add("d-inline-block"), a.classList.add("d-none")) : 4 === i.getCurrentStepIndex() ? (r.classList.add("d-none"), a.classList.add("d-none")) : (r.classList.remove("d-inline-block"), r.classList.remove("d-none"), a.classList.remove("d-none"))
            })), i.on("kt.stepper.next", (function (e) {
                console.log("stepper.next");
                var t = n[e.getCurrentStepIndex() - 1];
                t ? t.validate().then((function (t) {
                    console.log("validated!"), "Valid" == t ? i.goNext() : "" .then((function () {
                    }))
                })) : (e.goNext(), KTUtil.scrollTop())
            })), i.on("kt.stepper.previous", (function (e) {
                console.log("stepper.previous"), e.goPrevious(), KTUtil.scrollTop()
            })), r.addEventListener("click", (function (e) {
                n[2].validate().then((function (t) {
                    console.log("validated!"), "Valid" == t ? (e.preventDefault(), r.disabled = !0, r.setAttribute("data-kt-indicator", "on"), setTimeout((function () {
                        r.removeAttribute("data-kt-indicator"), r.disabled = !1, o.submit()
                    }), 500)) : "" .then((function () {
                        KTUtil.scrollTop()
                    }))
                }))
            })), $(o.querySelector('[name="jawaban[3][0][]"]')).on("change", (function () {
                n[0].revalidateField("jawaban[3][0][]")
            })), $(o.querySelector('[name="jawaban[6][0][]"]')).on("change", (function () {
                n[0].revalidateField("jawaban[6][0][]")
            })), $(o.querySelector('[name="jawaban[7][2][]"]')).on("change", (function () {
                n[0].revalidateField("jawaban[7][2][]")
            })), $(o.querySelector('[name="jawaban[7][3][]"]')).on("change", (function () {
                n[0].revalidateField("jawaban[7][3][]")
            })), n.push(FormValidation.formValidation(o, {
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
            })), n.push(FormValidation.formValidation(o, {
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
            })), n.push(FormValidation.formValidation(o, {
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
                    "jawaban[20][0][]": {validators: {notEmpty: { message: "Jawaban tidak boleh kosong"}}},
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            })))
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTCreateApp.init()
}));