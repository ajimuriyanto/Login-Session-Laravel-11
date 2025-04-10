const formup = document.getElementById("kt_docs_formvalidation_update");

// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
var validatorup = FormValidation.formValidation(formup, {
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
const submitButtonup = document.getElementById(
  "kt_docs_formvalidation_update_submit"
);
submitButtonup.addEventListener("click", function (u) {
  // Prevent default button action
  u.preventDefault();

  // Validate form before submit
  if (validatorup) {
    validatorup.validate().then(function (status) {
      console.log("validated!");

      if (status == "Valid") {
        // Show loading indication
        submitButtonup.setAttribute("data-kt-indicator", "on");

        // Disable button to avoid multiple click
        submitButtonup.disabled = true;

        // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
        setTimeout(function () {
          // Remove loading indication
          submitButtonup.removeAttribute("data-kt-indicator");

          // Enable button
          submitButtonup.disabled = false;

          formup.submit(); // Submit form
        }, 500);
      }
    });
  }
});
