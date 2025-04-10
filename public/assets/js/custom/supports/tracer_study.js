// Define form element
const form = document.getElementById("kt_docs_formvalidation_text");

$(form.querySelector('[name="tahun_lulus"]')).on("change", function () {
  validator.revalidateField("tahun_lulus");
}),
  $(form.querySelector('[name="kode_prodi"]')).on("change", function () {
    validator.revalidateField("kode_prodi");
  }),
  $(form.querySelector('[name="jawaban[4][1][]"]')).on("change", function () {
    validator.revalidateField("jawaban[4][1][]");
  }),
  $(form.querySelector('[name="jawaban[4][2][]"]')).on("change", function () {
    validator.revalidateField("jawaban[4][2][]");
  }),
  $(form.querySelector('[name="jawaban[7][]"]')).on("change", function () {
    validator.revalidateField("jawaban[7][]");
  }),
  $(form.querySelector('[name="jawaban[8][]"]')).on("change", function () {
    validator.revalidateField("jawaban[8][]");
  }),
  $(form.querySelector('[name="jawaban[9][3][]"]')).on("change", function () {
    validator.revalidateField("jawaban[9][3][]");
  }),
  $(form.querySelector('[name="jawaban[9][4][]"]')).on("change", function () {
    validator.revalidateField("jawaban[9][4][]");
  }),
  $(form.querySelector('[name="jawaban[9][5][]"]')).on("change", function () {
    validator.revalidateField("jawaban[9][5][]");
  });
// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
var validator = FormValidation.formValidation(form, {
  ignore: ".hidden",
  fields: {
    nim: {
      validators: {
        notEmpty: {
          message: "Nim harus diisi",
        },
        stringLength: {
          min: 8,
          max: 8,
          message: "Nim tidak boleh lebih dan kurang dari 8 digit",
        },
        digits: {
          message: "Nim hanya berupa angka",
        },
      },
    },
    tahun_lulus: {
      validators: {
        notEmpty: {
          message: "Pilih tahun lulus dahulu",
        },
      },
    },
    nama: {
      validators: {
        notEmpty: {
          message: "Nama mahasiswa tidak boleh kosong",
        },
      },
    },
    email: {
      validators: {
        notEmpty: {
          message: "Email tidak boleh kosong",
        },
        emailAddress: {
          message: "Email tidak valid",
        },
      },
    },
    kode_prodi: {
      validators: {
        notEmpty: {
          message: "Pilih program studi dahulu",
        },
      },
    },
    telp: {
      validators: {
        notEmpty: {
          message: "No Telp tidak boleh kosong",
        },
        stringLength: {
          min: 11,
          max: 12,
          message: "No Telp maksimal 12 digit",
        },
        digits: {
          message: "No Telp hanya berupa angka",
        },
      },
    },
    nik: {
      validators: {
        notEmpty: {
          message: "No induk kependudukan tidak boleh kosong",
        },
        stringLength: {
          min: 15,
          max: 16,
          message:
            "No induk kependudukan tidak boleh lebih dan kurang dari 16 digit",
        },
        digits: {
          message: "No induk kependudukan hanya berupa angka",
        },
      },
    },
    "jawaban[1][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[2][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
        stringLength: {
          max: 2,
          message: "Jawaban tidak boleh lebih dari 2 digit",
        },
        digits: {
          message: "Jawaban hanya berupa angka",
        },
      },
    },
    "jawaban[3][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
        stringLength: {
          max: 9,
          message: "Jawaban tidak boleh lebih dari 9 digit",
        },
        digits: {
          message: "Jawaban hanya berupa angka",
        },
      },
    },
    "jawaban[4][1][]": {
      validators: {
        notEmpty: {
          message: "Pilih nama provinsi",
        },
      },
    },
    "jawaban[4][2][]": {
      validators: {
        notEmpty: {
          message: "Pilih nama kota/kabupaten",
        },
      },
    },
    "jawaban[5][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[5][12][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
      },
    },
    "jawaban[6][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
      },
    },
    "jawaban[7][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[8][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[9][3][]": {
      validators: {
        notEmpty: {
          message: "Pilih sumber biaya dahulu",
        },
      },
    },
    "jawaban[9][4][]": {
      validators: {
        notEmpty: {
          message: "Pilih perguruan tinggi dahulu",
        },
      },
    },
    "jawaban[9][5][]": {
      validators: {
        notEmpty: {
          message: "Pilih program studi dahulu",
        },
      },
    },
    "jawaban[9][6][]": {
      validators: {
        notEmpty: {
          message: "Tanggal masuk tidak boleh kosong",
        },
      },
    },
    "jawaban[10][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[10][28][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
      },
    },
    "jawaban[11][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[12][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[13][7][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[13][8][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[13][9][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[13][10][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[13][11][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[13][12][]": {
      validators: {
        notEmpty: {
          message: "Pilih salah satu jawaban",
        },
      },
    },
    "jawaban[13][13][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[13][14][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[13][15][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[13][16][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[13][17][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[13][18][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[13][19][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[13][20][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[14][21][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[14][22][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[14][23][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[14][24][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[14][25][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[14][26][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[14][27][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[15][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[15][143][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
        stringLength: {
          max: 3,
          message: "Jawaban tidak boleh lebih dari 3 digit",
        },
        digits: {
          message: "Jawaban hanya berupa angka",
        },
      },
    },
    "jawaban[15][144][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
        stringLength: {
          max: 3,
          message: "Jawaban tidak boleh lebih dari 3 digit",
        },
        digits: {
          message: "Jawaban hanya berupa angka",
        },
      },
    },
    "jawaban[16][]": {
      validators: {
        notEmpty: {
          message: "Centang satu atau lebih jawaban",
        },
      },
    },
    "jawaban[16][160][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
      },
    },
    "jawaban[17][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
        stringLength: {
          max: 3,
          message: "Jawaban tidak boleh lebih dari 3 digit",
        },
        digits: {
          message: "Jawaban hanya berupa angka",
        },
      },
    },
    "jawaban[18][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
        stringLength: {
          max: 3,
          message: "Jawaban tidak boleh lebih dari 3 digit",
        },
        digits: {
          message: "Jawaban hanya berupa angka",
        },
      },
    },
    "jawaban[19][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
        stringLength: {
          max: 3,
          message: "Jawaban tidak boleh lebih dari 3 digit",
        },
        digits: {
          message: "Jawaban hanya berupa angka",
        },
      },
    },
    "jawaban[20][]": {
      validators: {
        notEmpty: {
          message: "Centang salah satu jawaban",
        },
      },
    },
    "jawaban[20][165][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
      },
    },
    "jawaban[21][]": {
      validators: {
        notEmpty: {
          message: "Centang satu atau lebih jawaban",
        },
      },
    },
    "jawaban[21][178][]": {
      validators: {
        notEmpty: {
          message: "Jawaban harus diisi",
        },
      },
    },
  },

  plugins: {
    trigger: new FormValidation.plugins.Trigger(),
    bootstrap: new FormValidation.plugins.Bootstrap5({
      rowSelector: ".fv-row",
      eleInvalidClass: "",
      eleValidClass: "",
    }),
  },
});

// Submit button handler
const submitButton = document.getElementById(
  "kt_docs_formvalidation_text_submit"
);
submitButton.addEventListener("click", function (e) {
  // Prevent default button action
  e.preventDefault();

  // Validate form before submit
  if (validator) {
    validator.validate().then(function (status) {
      console.log("validated!");

      if (status == "Valid") {
        // Show loading indication
        submitButton.setAttribute("data-kt-indicator", "on");

        // Disable button to avoid multiple click
        submitButton.disabled = true;

        // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
        setTimeout(function () {
          // Remove loading indication
          submitButton.removeAttribute("data-kt-indicator");

          // Enable button
          submitButton.disabled = false;

          form.submit(); // Submit form
        }, 1000);
      }
    });
  }
});
