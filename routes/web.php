<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UsuarioController;
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
// Route::get('/register', function () {
//     return Inertia::render('Register');
// });
Route::get('/registrar', [LoginController::class, 'mostrarRegistro'])->name('registro.mostrar');

/******************************** USUARIOS ************************************/
Route::get('/usuarios', function () {
    return Inertia::render('Usuarios/Listar');
})->name('usuarios.listar');
Route::get('/usuarios/listado', [UsuarioController::class, 'index'])->name('usuarios.listado');
/***************************************************************************/

Route::get('/aaa', [TestController::class, 'index'])->name('test-index');

#SECCION PERSONAS

Route::get('/persona', [PersonaController::class, 'index'])->name('persona');
Route::get('/ListadoPersona', [PersonaController::class, 'ListadoPersona'])->name('ListadoPersona');
