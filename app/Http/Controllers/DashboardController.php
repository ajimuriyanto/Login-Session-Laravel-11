<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    function index(){
        if (!session('logged_in')) {
            return redirect()->to('auth');
        }
        $data = [
			'page'          => 'Home'
        ];
        return view('beranda', $data);

    }
}