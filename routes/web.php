<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UploadController;

Route::get('/', function () {
    return view('welcome');
});

Route::view('auth','auth.login');
// Route::view('home','beranda');

Route::post('sigin', [AuthController::class, 'sigin']);
Route::get('sigin', [AuthController::class, 'sigin']);
Route::get('logout', [AuthController::class, 'logout']);

Route::get('home', [DashboardController::class, 'index']);
Route::get('user', [UserController::class, 'index']);
Route::get('edit/{id}', [UserController::class, 'edit']);
Route::post('executor', [UserController::class, 'update']);
Route::post('view-file', [UploadController::class, 'index']);
