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
					<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Tambah User">
						<!--begin::Add customer-->
						<a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addMyModal">
							<span class="svg-icon svg-icon-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
									<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
								</svg>
							</span>Add User
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
						@foreach($viewuser as $view)
							<tr>
								<td>{{$loop->iteration }}</td>
								<td>{{$view->nama}}</td>
								<td>{{$view->username}}</td>
								<td><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="{{encrypt_decrypt('decrypt', $view->password)}}">*********</a></td>
								<td>{{$view->nm_module}}</td>
								<td>
									<div class="d-flex flex-shrink-0">                                
										<div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Edit">
											<a href="#" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" id="btn-edit-user-post" data-bs-toggle="modal" data-id="{{$view->id_user}}">
												<span class="svg-icon svg-icon-3">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"/>
														<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"/>
													</svg>
												</span>
											</a>
										</div>																                                          
										<a href="delete-berita/>" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm delete-action" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Hapus">
											<span class="svg-icon svg-icon-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"/>
													<path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"/>
													<path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"/>
												</svg>
											</span>
										</a>									
									</div>
								</td>
							<tr>
						@endforeach
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
				<h2>FORM INPUT USER</h2>
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
					<label class="fs-6 fw-bold form-label mb-0"><span class="required">Nama</span></label>
					<input type="text" class="form-control form-control-solid form-control-sm" name="nama" autocomplete="off"/>
					<input type="hidden" class="form-control form-control-solid form-control-sm" name="password" value="admin"/>								
				</div>

				<div class="mb-2 fv-row">
					<label class="fs-6 fw-bold form-label mb-0"><span class="required">Username</span></label>
					<input type="text" class="form-control form-control-solid form-control-sm" name="username" autocomplete="off"/>
				</div>
				<div class="fv-row mb-2">
					<label class="fs-6 fw-bold form-label mb-0"><span class="required">Operator</span></label>
					<select class="form-select form-select-solid form-select-sm" name="id_group" id="operator" data-control="select2" data-hide-search="true">
						<option value="">Pilih</option>
						
					</select>
				</div>
				
				<div id="addForm" class="mb-2 fv-row" >
                    <label class="fs-6 fw-bold form-label mb-0"><span class="required">Program Studi</span></label>
                    <select class="form-select form-select-solid codeprodi" data-control="select2" name="kode_prodi" data-hide-search="true"/>
                        <option value="">Pilih</option>
						
    				</select>											
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

 <!-- Modal Ubah User-->
 @include('modal.edit-user')
 <!-- END Modal Ubah User-->

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
