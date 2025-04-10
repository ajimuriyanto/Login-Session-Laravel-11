$('.delete-action').on('click',function(){
    var getLink = $(this).attr('href');
            Swal.fire({					
                title: 'Perhatian',
                text: "Anda yakin ingin menghapus data tersebut??",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ya',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancel',
                reverseButtons: true
            }).then(result => {
                //jika klik ya maka arahkan ke proses.php
                if(result.isConfirmed){
                    window.location.href = getLink
                }
            })
            return false;
});

$(document).ready(function() {
    $("body").on("click", ".btn-edit", function (event) {    
        // get data from button edit
        const id_laporan = $(this).data('id_laporan');
        const id_berkas = $(this).data('id_berkas');
        const id_kategori = $(this).data('id_kategori');
        const nama_label = $(this).data('nama_label');
        const nama_kegiatan = $(this).data('nama_kegiatan');
        const nama_file = $(this).data('nama_file');
        // const id_group = $(this).data('id_group');
        // Set data to Form Edit
        $('#id_laporan').val(id_laporan);
        $('#id_berkas').val(id_berkas);
        $('#nama_label').val(nama_label);
        $('#nama_kegiatan').val(nama_kegiatan);
        $('#nama_file').val(nama_file);
        $('#id_kategori').val(id_kategori).trigger('change');
        // Call Modal Edit
        $('#editMyModal').modal('show');
    });    

    $("body").on("click", ".btn-password", function (event) {    
        // get data from button edit
        const id_user = $(this).data('id_user');
        const nama_user = $(this).data('nama_user');
        // Set data to Form Edit
        $('#code_user').val(id_user);
        $('#user_name').val(nama_user);
        // Call Modal Edit
        $('#passwordMyModal').modal('show');
    });  
    
    $("body").on("click", ".btn-view", function (event) {      
        // get data from button edit
        const nidn = $(this).data('nidn');
        // const nama = $(this).data('nama');
        // const username = $(this).data('username');
        // const id_group = $(this).data('id_group');
        // Set data to Form Edit
        $('#nidn').val(nidn);
        // $('#nama').val(nama);
        // $('#username').val(username);
        // $('#id_group').val(id_group).trigger('change');
        // Call Modal Edit
        $('#viewMyModal').modal('show');
    });  
    
    $("body").on("click", ".btn-edit-slide", function (event) {    
        // get data from button edit
        const id_slide = $(this).data('id_slide');
        const judul = $(this).data('judul');
        const status = $(this).data('status');        

        // Set data to Form Edit
        $('#id_slide').val(id_slide);
        $('#judul').val(judul);
        $('#status').val(status).trigger('change');
        // Call Modal Edit
        $('#editMyModalSlide').modal('show');
    });   
    
    $("body").on("click", ".btn-edit-link", function (event) {      
        // get data from button edit
      	const id_link = $(this).data('id_link');
        const nama = $(this).data('nama');
        const alamat = $(this).data('alamat');        
      
        // Set data to Form Edit
        $('#id_link').val(id_link);
        $('#nama').val(nama);
        $('#alamat').val(alamat);        
        // Call Modal Edit
        $('#editMyModalLink').modal('show');
    });
    
  	$("body").on("click", ".btn-edit-profil", function (event) {      
        // get data from button edit
      	const id_informasi = $(this).data('id_informasi');
       	const id_file = $(this).data('id_file');                                                         
        const judul = $(this).data('judul');        
      
        // Set data to Form Edit
        $('#id_informasi').val(id_informasi);
      	$('#id_file').val(id_file);
        $('#judul').val(judul);       
        // Call Modal Edit
        $('#editMyModalProfil').modal('show');
    });  	  	
  
    $("body").on("click", ".btn-edit-admin", function (event) {
        // get data from button edit
        const id = $(this).data('id');
        const nama = $(this).data('nama');
        const username = $(this).data('username');
        const kode_group = $(this).data('kode_group');
        
        // Set data to Form Edit
        $('#id').val(id);
        $('#nama').val(nama);
        $('#username').val(username);
        $('#kode_group').val(kode_group).trigger('change');
        // Call Modal Edit
        $('#editMyModalAdmin').modal('show');
    });

    $("body").on("click", ".btn-edit-user", function (event) {
        // get data from button edit
        const id = $(this).data('id');
        const nama = $(this).data('nama');
        const username = $(this).data('username');
        const kode_group = $(this).data('kode_group');
        const kode_prodi = $(this).data('kode_prodi');
        
        // Set data to Form Edit
        $('#id_user').val(id);
        $('#nama_user').val(nama);
        $('#username_user').val(username);
        $('#kode_group_user').val(kode_group).trigger('change');
        $('.kodeprodiuser').val(kode_prodi).trigger('change');
        // Call Modal Edit
        $('#editMyModalUser').modal('show');
    });
    
    $("body").on("click", ".btn-berkas", function (event) {
        // get data from button edit
        const id_laporan = $(this).data('id_laporan');
        
        // Set data to Form Edit
        $('#id_lap').val(id_laporan);
        // Call Modal Edit
        $('#editMyModalTambahBerkas').modal('show');
    });
});
