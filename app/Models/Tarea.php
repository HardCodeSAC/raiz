<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    use HasFactory;
    protected $table = 'tarea';

    public function entidad()
    {
        return $this->belongsTo(Entidad::class, 'entidad_id');
    }

    public function usuario_creador()
    {
        return $this->belongsTo(User::class, 'usuario_crea_id');
    }
}
