<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AuthModel;
use App\Models\GroupModel;

class UploadController extends Controller
{
    function index(){
        if (!session('logged_in')) {
            return redirect()->to('auth');
        }        

        $data = [
			'page'          => 'Upload File'
        ];
        return view('uploads', $data);
    }
    // ================================================================================
}