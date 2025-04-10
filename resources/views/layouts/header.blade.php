<!--begin::Header-->
<div id="kt_header" style="" class="header align-items-stretch">
	<!--begin::Container-->
	<div class="container-fluid d-flex align-items-stretch justify-content-between">
		<div class="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show aside menu">
			<div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
				<span class="svg-icon svg-icon-1">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black"/>
						<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black"/>
					</svg>
				</span>
			</div>
		</div>
		<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">	
			<h1 class="d-flex align-items-center text-dark fw-bolder fs-3 my-1">{{$page}}</h1>
			<span class="h-20px border-gray-300 border-start mx-4"></span>
			<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">											
				<li class="breadcrumb-item text-muted">
					<a href="dashboard" class="text-muted text-hover-primary">Home</a>
				</li>	
				
					<li class="breadcrumb-item"><span class="bullet bg-gray-300 w-5px h-2px"></span></li>												
					<li class="breadcrumb-item text-dark">Kalender</li>	
					<?php if($page != "Home"){ ?>
						<li class="breadcrumb-item"><span class="bullet bg-gray-300 w-5px h-2px"></span></li>		
						<li class="breadcrumb-item text-dark">TES</li>
					<?php } ?>
						
								
			</ul>		
		</div>

		<div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
			<div class="d-flex align-items-stretch" id="kt_header_nav"></div>
			<div class="d-flex align-items-stretch flex-shrink-0">
				<div class="d-flex align-items-stretch flex-shrink-0">
					<div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
					<div class="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end"><img src="{{asset('public/assets/media/ujb.png')}}" alt="user" /></div>
							<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
								<div class="menu-item px-3">
									<div class="menu-content d-flex align-items-center px-3">
										<div class="symbol symbol-50px me-5"><img alt="Logo" src="{{asset('public/assets/media/ujb.png')}}"/></div>
										<div class="d-flex flex-column">
											<div class="fw-bolder d-flex align-items-center fs-5">Admin</div>
											<span class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Administrator</span>
										</div>
									</div>
								</div>
								<div class="separator my-2"></div>
								<div class="menu-item px-5">
									<a href="{{url('logout')}}" class="menu-link px-5">
									<i class="ki-duotone ki-plus fs-2"></i> Logout
									</a>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--end::Container-->
</div>

<!--end::Header-->