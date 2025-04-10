<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AuthModel;

class AuthController extends Controller
{
    function sigin(Request $request){        
        
        $username = $request->input('username');
        $pass = $request->input('password');
        $password = encrypt_decrypt('encrypt', $pass);

        $cekUser = AuthModel::where('username', $username)->first();
        
        if (!$cekUser) {    
            session()->put('msg_error_user', 'Username anda salah');        
			return redirect()->to('auth');

		}else{            
            if($password != $cekUser['password']){
                session()->put('msg_error_pass', 'Password anda salah');        
                return redirect()->to('auth');                
            }
        }
        
        session()->put([            
            'id_user' => $cekUser['id_user'],
            'id_group' => $cekUser['id_group'],
            'username' => $username, 
            'nama' => $cekUser['nama'],
            'logged_in' => TRUE
        ]);                

        return redirect()->to('home');
    }
    // -----------------------------------------------------------------------
    function logout(){
        session()->flush();
        return redirect()->to('auth');
    }
    
}