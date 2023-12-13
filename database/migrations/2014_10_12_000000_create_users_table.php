<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('entidad', function (Blueprint $table) {
            $table->id();
            $table->string('tipo_entidad');
            $table->string('primer_nombre');
            $table->string('segundo_nombre');
            $table->string('apellido_paterno');
            $table->string('apellido_materno');
            $table->string('tipo_doc');
            $table->string('identificador');
            $table->string('acronimo');
            $table->string('estado');
            $table->timestamps();
        });
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->integer('entidad_id')->nullable();
            $table->string('usuario')->nullable();
            $table->string('correo')->unique();
            $table->string('contraseña')->nullable();
            $table->string('estado')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
        Schema::create('entidad_direccion', function (Blueprint $table) {
            $table->id();
            $table->integer('entidad_id')->nullable();
            $table->string('ubigeo')->nullable();
            $table->string('direccion')->nullable();
            $table->string('provincia')->nullable();
            $table->string('distrito')->nullable();
            $table->string('region')->nullable();
            $table->string('pais')->nullable();
            $table->string('estado')->nullable();
            $table->string('es_principal')->nullable();
            $table->timestamps();
        });
        Schema::create('entidad_telefono', function (Blueprint $table) {
            $table->id();
            $table->integer('entidad_id')->nullable();
            $table->string('telefono')->nullable();
            $table->string('estado')->nullable();
            $table->string('es_principal')->nullable();
            $table->timestamps();
        });
        Schema::create('tarea', function (Blueprint $table) {
            $table->id();
            $table->integer('entidad_id')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('tiempo')->nullable();
            $table->string('costo')->nullable();
            $table->string('porcentaje')->nullable();
            $table->date('fecha_inicio')->nullable();
            $table->date('fecha_fin')->nullable();
            $table->string('observacion')->nullable();
            $table->string('estado')->nullable();
            $table->integer('usuario_crea_id')->nullable();
            $table->timestamps();
        });
        Schema::create('articulo', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->nullable();
            $table->integer('cantidad')->nullable(); //95 -L1 5-L2 4 - S2 5-F5
            $table->string('usa_caracteristica')->nullable(); //USA CARACTERISTICA
            $table->string('observacion')->nullable();
            $table->string('estado')->nullable();
            $table->timestamps();
        });
        Schema::create('articulo_caracteristica', function (Blueprint $table) {
            $table->id();
            $table->integer('articulo_id')->nullable();
            $table->integer('cantidad')->nullable();
            $table->string('caracteristica')->nullable();
            $table->string('observacion')->nullable();
            $table->string('estado')->nullable();
            $table->timestamps();
        });
        Schema::create('articulo_equivalencia', function (Blueprint $table) {
            $table->id();
            $table->integer('articulo_id')->nullable();
            $table->string('medida')->nullable();
            $table->string('factor')->nullable();
            $table->timestamps();
        });
        Schema::create('movimiento', function (Blueprint $table) {
            $table->id();
            $table->string('codigo')->nullable();
            $table->integer('entidad_entrega_id')->nullable();
            $table->integer('entidad_recibe_id')->nullable();
            $table->date('fecha')->nullable();
            $table->time('hora')->nullable();
            $table->string('tipo')->nullable();
            $table->string('estado')->nullable();
            $table->timestamps();
        });
        Schema::create('movimiento_detalle', function (Blueprint $table) {
            $table->id();
            $table->integer('movimiento_id')->nullable();
            $table->integer('articulo_id')->nullable();
            $table->integer('cantidad')->nullable();
            $table->string('observacion')->nullable();
            $table->string('estado')->nullable();
            $table->timestamps();
        });
        Schema::create('auxiliar', function (Blueprint $table) {
            $table->id();
            $table->string('categoria')->nullable();
            $table->string('nombre')->nullable();
            $table->string('valor')->nullable();
            $table->string('detalle')->nullable();
            $table->string('estado')->nullable();
        });
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entidad');
        Schema::dropIfExists('usuarios');
        Schema::dropIfExists('entidad_direccion');
        Schema::dropIfExists('entidad_telefono');
        Schema::dropIfExists('tarea');
        Schema::dropIfExists('articulo');
        Schema::dropIfExists('articulo_caracteristica');
        Schema::dropIfExists('articulo_equivalencia');
        Schema::dropIfExists('movimiento');
        Schema::dropIfExists('movimiento_detalle');
        Schema::dropIfExists('auxiliar');
    }
};
