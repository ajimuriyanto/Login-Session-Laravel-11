<div class="modal fade" id="editMyModalUser" role="dialog">
  <div class="modal-dialog modal-dialog-centered mw-650px">
    <div class="modal-content">
		<div class="modal-header">
				<h2>FORM EDIT USER</h2>
				<div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
					<span class="svg-icon svg-icon-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
							<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
						</svg>
					</span>
				</div>
		</div>

      	<div class="modal-body">			
			<form id="kt_edit_formvalidation" class="formUp" method="post" action="executor">
                @csrf
					<div class="d-flex flex-column mb-3 fv-row">
						<label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Nama</span></label>
						<input type="hidden" id="id_user" name="id_user">
						<input type="text" class="form-control form-control-solid" id="nama_user" name="nama" autocomplete="off" require/>						
					</div>
					<div class="d-flex flex-column mb-3 fv-row">
						<label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Username</span></label>
						<input type="text" class="form-control form-control-solid" id="username_user" name="username" autocomplete="off" require/>
					</div>
					<div class="d-flex flex-column mb-3 fv-row">
                        <label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Operator</span></label>
                        <select class="form-select form-select-solid" data-control="select2" id="kode_group_user" name="id_group" data-hide-search="true" require/>
                            <option value="">Pilih Operator</option>
                            @foreach($groupuser as $group)
                                <option value="{{$group->id_group}}">{{$group->nm_module}}</option>
                            @endforeach
    					</select>						
                    </div>					

					<div class="text-center pt-5">
						<!--begin::Actions-->
						<button type="reset" data-bs-dismiss="modal" class="btn btn-light me-3">Cancel</button>

						<button id="kt_edit_formvalidation_submit" type="submit" class="btn btn-primary">
							<span class="indicator-label">Simpan</span>
							<span class="indicator-progress">Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
						</button>
						<!--end::Actions-->
					</div>
			</form>
			<!--end::Form-->
      </div>
    </div>
  </div>
</div>

        @push('scripts')

        <script src="{{asset('public/assets/js/custom/supports/edituser.js')}}"></script>
        <script type='text/javascript'>
            $('body').on('click', '#btn-edit-user-post', function () {
                let post_id = $(this).data('id');

                $.ajax({
                    url: "edit/"+post_id,
                    type: "GET",
                    cache: false,
                    success:function(response){
                        $('#id_user').val(response.data.id_user);
                        $('#nama_user').val(response.data.nama);
                        $('#username_user').val(response.data.username);
                        $('#kode_group_user').val(response.data.id_group).trigger('change');

                        $('#editMyModalUser').modal('show');
                    }
                });
                
            });
        </script>    
        @endpush