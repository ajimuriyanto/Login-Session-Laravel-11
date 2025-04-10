<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="UTF-8">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="{{asset('public/assets/media/ujb.png')}}" />
    <title>Sistem Informasi</title>
		<link href="{{asset('public/assets/plugins/global/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />
		<link href="{{asset('public/assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
	</head>
	<body id="kt_body" class="bg-body">
		<div class="d-flex flex-column flex-root">

			<div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url(assets/media/illustrations/sketchy-1/14.png">
				<!--begin::Content-->
				    @yield('content')
				<!--end::Content-->

				<div class="d-flex flex-center flex-column-auto p-10">
					<div class="d-flex align-items-center fw-bold fs-6">
						<a href="" class="text-muted text-hover-primary px-2">About</a>
						<a href="" class="text-muted text-hover-primary px-2">Contact</a>
						<a href="" class="text-muted text-hover-primary px-2">Contact Us</a>
					</div>
				</div>
			</div>
		</div>
		<script src="{{asset('public/assets/plugins/global/plugins.bundle.js')}}"></script>
		<script src="{{asset('public/assets/js/scripts.bundle.js')}}"></script>
		<script src="{{asset('public/assets/js/custom/authentication/sign-in/general.js')}}"></script>
	</body>
</html>
<?php
if(session('msg_error_user')){
	echo "<script>
		$(document).ready(function(){
			Swal.fire(
				'Username anda salah',
				'',
				'error'
			)
			return false;
		});
	</script>";
	session()->forget('msg_error_user');
}
if(session('msg_error_pass')){
	echo "<script>
		$(document).ready(function(){
			Swal.fire(
				'Password anda salah',
				'',
				'error'
			)
			return false;
		});
	</script>";
	session()->forget('msg_error_pass');
}

?>