const formin = document.getElementById("kt_docs_formvalidation_input");

// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
var validatorin = FormValidation.formValidation(formin, {
  fields: {
    nama_lengkap: {
      validators: {
        notEmpty: {
          message: "Nama lengkap tidak boleh kosong",
        },
      },
    },
    nim: {
      validators: {
        notEmpty: {
          message: "Nim tidak boleh kosong",
        },
      },
    },
    tempat_lahir: {
      validators: {
        notEmpty: {
          message: "Tempat lahir tidak boleh kosong",
        },
      },
    },
    tgl_lahir: {
      validators: {
        notEmpty: {
          message: "Tanggal lahir tidak boleh kosong",
        },
      },
    },
    alamat: {
      validators: {
        notEmpty: {
          message: "Alamat tidak boleh kosong",
        },
      },
    },
    no_hp: {
      validators: {
        notEmpty: {
          message: "No hp tidak boleh kosong",
        },
      },
    },
    email: {
      validators: {
        notEmpty: { message: "Email tidak boleh kosong" },
        emailAddress: { message: "Format email tidak valid" },
      },
    },
    angkatan: {
      validators: {
        notEmpty: {
          message: "Angkatan tidak boleh kosong",
        },
      },
    },
    kode_fakultas: {
      validators: {
        notEmpty: {
          message: "Nama fakultas tidak boleh kosong",
        },
      },
    },
    kode_prodi: {
      validators: {
        notEmpty: {
          message: "Program Studi tidak boleh kosong",
        },
      },
    },
    tgl_lulus: {
      validators: {
        notEmpty: {
          message: "Tanggal lulus tidak boleh kosong",
        },
      },
    },
    judul: {
      validators: {
        notEmpty: {
          message: "Judul skripsi/Tugas akhir/Tesis tidak boleh kosong",
        },
      },
    },
    dosen_utama: {
      validators: {
        notEmpty: {
          message: "Dosen Pembimbing tidak boleh kosong",
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
const submitButtonin = document.getElementById(
  "kt_docs_formvalidation_input_submit"
);
submitButtonin.addEventListener("click", function (i) {
  // Prevent default button action
  i.preventDefault();

  // Validate form before submit
  if (validatorin) {
    validatorin.validate().then(function (status) {
      console.log("validated!");

      if (status == "Valid") {
        // Show loading indication
        submitButtonin.setAttribute("data-kt-indicator", "on");

        // Disable button to avoid multiple click
        submitButtonin.disabled = true;

        // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
        setTimeout(function () {
          // Remove loading indication
          submitButtonin.removeAttribute("data-kt-indicator");

          // Enable button
          submitButtonin.disabled = false;

          formin.submit(); // Submit form
        }, 500);
      }
    });
  }
});
