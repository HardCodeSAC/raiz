<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function mostrarRegistro(){
        $vara = 'payason';
        return Inertia::render('Register', compact('vara'));
    }
}
