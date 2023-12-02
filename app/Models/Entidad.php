<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entidad extends Model
{
    use HasFactory;

    protected $table = 'entidad';

    public function user()
    {
        return $this->hasOne(User::class, 'entidad_id');
    }

    public function telefonos()
    {
        return $this->hasMany(EntidadTelefono::class, 'entidad_id');
    }

    public function direcciones()
    {
        return $this->hasMany(EntidadDireccion::class, 'entidad_id');
    }

    public function tareas()
    {
        return $this->hasMany(Tarea::class, 'entidad_id');
    }

    public function movimientos_entrega()
    {
        return $this->hasMany(Movimiento::class, 'entidad_entrega_id');
    }

    public function movimientos_recibe()
    {
        return $this->hasMany(Movimiento::class, 'entidad_recibe_id');
    }
}
