<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TestController;
use App\Http\Controllers\PersonaController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/Home', function () {
    return Inertia::render('Sidebar');
});
Route::get('/login', function () {
    return Inertia::render('Login');
});
Route::get('/register', function () {
    return Inertia::render('Register');
});
Route::get('/register', function () {
    return Inertia::render('Register');
});
Route::get('/aaa', [TestController::class, 'index'])->name('test-index');

#SECCION PERSONAS

Route::get('/persona', [PersonaController::class, 'index'])->name('persona');
Route::get('/ListadoPersona', [PersonaController::class, 'ListadoPersona'])->name('ListadoPersona');