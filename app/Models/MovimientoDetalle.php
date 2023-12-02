<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovimientoDetalle extends Model
{
    use HasFactory;

    protected $table = 'movimiento_detalle';

    public function movimiento()
    {
        return $this->belongsTo(Movimiento_Cabecera::class, 'movimiento_id');
    }

    public function articulo()
    {
        return $this->belongsTo(Articulo::class, 'articulo_id');
    }
}
