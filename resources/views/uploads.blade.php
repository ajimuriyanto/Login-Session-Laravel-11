@extends('layouts.app')
    @section('content')
        <!--begin::Content-->
        <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<!--begin::Post-->
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<!--begin::Container-->
		<div id="kt_content_container" class="container-xxl">
			<!--begin::Category-->
			<div class="card card-flush">
				<!--begin::Card header-->
				<div class="card-header align-items-center py-5 gap-2 gap-md-5">
					<!--begin::Card title-->
					<div class="card-title">
						<!--begin::Search-->
						<div class="d-flex align-items-center position-relative my-1">
							<!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
							<span class="svg-icon svg-icon-1 position-absolute ms-4">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
									<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
								</svg>
							</span>
							<!--end::Svg Icon-->
							<input type="text" data-kt-ecommerce-category-filter="search" class="form-control form-control-solid w-250px ps-14" placeholder="Pencarian" />
						</div>
						<!--end::Search-->
					</div>
					<!--end::Card title-->
					
					<!--begin::Card toolbar-->
					<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Upload File">
						<!--begin::Add customer-->
						<a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addMyModal">
							<span class="svg-icon svg-icon-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
									<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
								</svg>
							</span>Upload File
						</a>						
						<!--end::Add customer-->
					</div>
					<!--end::Card toolbar-->
					
				</div>
				
				<div class="card-body pt-0">
					<table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_category_table">
						<thead>
							<tr class="text-start text-gray-400 fw-bolder fs-7 gs-0">
								<th class='min-w-30px'>No</th>
								<th class='min-w-250px'>Nama</th>
								<th class='min-w-150px'>Username</th>
								<th class='min-w-150px'>Password</th>
								<th class='min-w-80px'>Operator</th>								
								<th class='min-w-5px'>Action</th>
							</tr>
						</thead>
						<tbody class="fw-bold text-gray-600">
						
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="modal fade" id="addMyModal" role="dialog">
  <div class="modal-dialog modal-dialog-centered mw-650px">
    <div class="modal-content">
		<div class="modal-header">
				<h2>FORM Upload File</h2>
				<div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal" onclick="myFunction()">
					<span class="svg-icon svg-icon-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
							<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
						</svg>
					</span>
				</div>
		</div>

      	<div class="modal-body">			
			<form id="kt_docs_formvalidation" class="form" method="post" action="admin/executor" autocomplete="off">
				<div class="mb-2 fv-row">
					<label class="fs-6 fw-bold form-label mb-0"><span class="required">Nama File</span></label>
					<input type="text" class="form-control form-control-solid form-control-sm" name="nama" autocomplete="off"/>
					<input type="hidden" class="form-control form-control-solid form-control-sm" name="password" value="admin"/>								
				</div>

				<div class="mb-2 fv-row">
					<label class="fs-6 fw-bold form-label mb-0"><span class="required">File</span></label>
					<input type="file" class="form-control form-control-solid form-control-sm" name="username" autocomplete="off"/>
				</div>				

				<div class="text-center pt-5">
					<button type="reset" data-bs-dismiss="modal" class="btn btn-light me-3">Cancel</button>
					<button id="kt_docs_formvalidation_submit" type="submit" class="btn btn-primary">
						<span class="indicator-label">Simpan</span>
						<span class="indicator-progress">
							Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
						</span>
    				</button>
				</div>	
			</form>
			<!--end::Form-->

      	</div>
    </div>
  </div>
</div>

<!-- Modal Ubah Admin-->
<div class="modal fade" id="editMyModalAdmin" role="dialog">
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
			<form id="kt_docs_formvalidation_update_admin" class="form" method="post" action="/admin/executor-edit">
					<div class="d-flex flex-column mb-3 fv-row">
						<label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Nama</span></label>
						<input type="hidden" id="id" name="id">
						<input type="text" class="form-control form-control-solid" id="nama" name="nama" autocomplete="off" require/>						
					</div>
					<div class="d-flex flex-column mb-3 fv-row">
						<label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Username</span></label>
						<input type="text" class="form-control form-control-solid" id="username" name="username" autocomplete="off" require/>
					</div>
					<div class="d-flex flex-column mb-3 fv-row">
                        <label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Operator</span></label>
                        <select class="form-select form-select-solid" data-control="select2" id="kode_group" name="id_group" data-hide-search="true" require/>
                            <option value="">Pilih Status</option>
                            
    					</select>						
                    </div>

					<div id="addFormUp" class="mb-2 fv-row" >
						<label class="fs-6 fw-bold form-label mb-0"><span class="required">Program Studi</span></label>
						<select class="form-select form-select-solid kodeprodi" data-control="select2" name="kode_prodi" data-hide-search="true"/>
							<option value="">Pilih</option>
							
						</select>											
					</div>

					<div class="text-center pt-5">
						<!--begin::Actions-->
						<button type="reset" data-bs-dismiss="modal" class="btn btn-light me-3">Cancel</button>

						<button id="kt_docs_formvalidation_admin_submit" type="submit" class="btn btn-primary">
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
 <!-- END Modal Ubah Admin-->

 

 <!-- Modal change pass -->
 <div class="modal fade" id="passwordMyModal" role="dialog">
  <div class="modal-dialog modal-dialog-centered mw-650px">
    <div class="modal-content">
		<div class="modal-header">
				<h2>FORM CHANGE PASSWORD</h2>
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
		  <form id="kt_docs_formvalidation_update_pass" class="form" method="post" action="/admin/executor-change">
					<div class="d-flex flex-column mb-2 fv-row">
						<label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Username</span></label>
						<input type="text" class="form-control form-control-solid" id="user_name" name="user_name" autocomplete="off" readonly/>
						<input type="hidden" class="form-control form-control-solid" id="code_user" name="id_user" autocomplete="off"/>
					</div>				

					<div class="d-flex flex-column mb-2 fv-row" data-kt-password-meter="true">
						<label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Password Baru</span></label>
						<div class="position-relative">
							<input class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="new_password" autocomplete="off" />
							<span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
								<i class="bi bi-eye-slash fs-2"></i>
								<i class="bi bi-eye fs-2 d-none"></i>
							</span>
						</div>
					</div>
					<div class="d-flex flex-column mb-2 fv-row" data-kt-password-meter="true">
						<label class="d-flex align-items-center fs-6 fw-bold form-label mb-0"><span class="required">Re-password Baru</span></label>
						<div class="position-relative">
							<input class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="new_re_password" autocomplete="off" />
							<span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
								<i class="bi bi-eye-slash fs-2"></i>
								<i class="bi bi-eye fs-2 d-none"></i>
							</span>
						</div>
					</div>

					<div class="text-center pt-5">
						<!--begin::Actions-->
						<button type="reset" data-bs-dismiss="modal" class="btn btn-light me-3">Cancel</button>

						<button id="kt_docs_formvalidation_pass_submit" type="submit" class="btn btn-primary">
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
 <!-- END Modal change pass -->
 @stop
