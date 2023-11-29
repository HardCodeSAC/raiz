<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonaController extends Controller
{
    public function index()
    {
        $Persona = [
            'Nombre' => 'Bryan',
            'SegundoNombre' => 'Walter',
            'ApellidoPaterno' => 'Mejia',
            'ApellidoMaterno' => 'Manzanares',
            'Identificador' => '72385497',
            'TipoDocumento' => 'DNI',
            'Apellidos' => 'Mejia Manzanares',
        ];
        return Inertia::render('PersonaModule/Persona', compact('Persona'));

    }
    public function ListadoPersona()
    {
        $Persona = [
            'Nombre' => 'Bryan',
            'SegundoNombre' => 'Walter',
            'ApellidoPaterno' => 'Mejia',
            'ApellidoMaterno' => 'Manzanares',
            'Identificador' => '72385497',
            'TipoDocumento' => 'DNI',
            'Apellidos' => 'Mejia Manzanares',
        ];
        return Inertia::render('PersonaModule/ListadoPersona', compact('Persona'));

    }
}