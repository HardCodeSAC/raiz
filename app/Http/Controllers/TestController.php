<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        $datosDesdeLaravel = [
            'titulo' => 'Bienvenido desde Laravel',
            'contenido' => 'Estos son algunos datos desde Laravel hacia React.',
        ];
        return Inertia::render('Test', compact('datosDesdeLaravel'));

    }

}
