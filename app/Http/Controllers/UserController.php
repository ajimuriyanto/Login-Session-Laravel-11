<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AuthModel;
use App\Models\GroupModel;

class UserController extends Controller
{
    function index(){
        if (!session('logged_in')) {
            return redirect()->to('auth');
        }

        $users = AuthModel::leftJoin('m_group_user', 'm_group_user.id_group', 'm_user.id_group')
            ->select('m_user.*', 'm_group_user.nm_module')
            // ->orderBy('kode_produk', 'asc')
            ->get();

        $group = GroupModel::all();

        $data = [
			'page'          => 'Pengaturan',
			'groupuser'     => $group,
			'viewuser'      => $users
        ];
        return view('user', $data);
    }
    // ================================================================================

    function edit($post_id){
        $data = AuthModel::findOrFail($post_id);
        return response()->json([
            'success' => true,
            'data'    => $data  
        ]); 
    }
    // ================================================================================
    function update(Request $request){
        $id_user = $request->input('id_user');
        $nama = $request->input('nama');
        $username = $request->input('username');
        $id_group = $request->input('id_group');
 
        $post = AuthModel::findOrFail($id_user);

        $post->update([
            'id_group' => $id_group,
            'username' => $username,
            'nama' => $nama,
        ]);

        return redirect()->to('user');
    }
}