<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Entidad;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class EntidadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PersonaModule/ListadoPersona');
    }
    public function result()
    {
        $Entidad = Entidad::where('tipo_entidad', '=','PERSONA')->get();
        return compact('Entidad');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('PersonaModule/CrearPersona');   
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        /*
        VALIDADOR
        if($request->name==""){
            $msj1 = 'El nombre del banco no puede ser vacio';
            return response()->json($msj1, 500);
        }
        $valido = 0;
        $pattern = "/^[a-zA-Z0-9\sñáéíóúÁÉÍÓÚ]+$/";
        if(preg_match($pattern, $request->name)){
            $valido=1;
        }else{
            $msj1 = 'Cantidad de caracteres no valida';
            return response()->json($msj1, 500);
        }
        $buscador = Bank::where('name','=',$request->name)->first();
        $deleted = Bank::onlyTrashed()->get();
        foreach($deleted as $row){
            if($row->name == $request->name){
                $msj1 = 'Error Banco ya fue creado';
                return response()->json($msj1, 500);
            }
        }
        */
        //
        if(true){
            $persona = new Entidad();
            $persona->tipo_entidad = "PERSONA";
            $persona->primer_nombre = $request->primer_nombre;
            $persona->segundo_nombre = $request->segundo_nombre;
            $persona->apellido_paterno = $request->apellido_paterno;
            $persona->apellido_materno = $request->apellido_materno;
            $persona->tipo_doc = $request->tipo_doc;
            $persona->identificador = $request->identificador;
            $persona->estado = "ACTIVO";
            $persona->save();
        return response()->json($request);
        }else{
            return response()->json('Error persona ya fue creada', 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
