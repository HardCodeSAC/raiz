<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntidadTelefono extends Model
{
    use HasFactory;

    protected $table = 'entidad_telefono';

    public function entidad()
    {
        return $this->belongsTo(Entidad::class, 'entidad_id');
    }
}
