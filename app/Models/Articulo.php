<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    use HasFactory;

    protected $table = 'articulo';

    public function movimientos_detalle()
    {
        return $this->hasMany(MovimientoDetalle::class, 'articulo_id');
    }

    public function equivalencias()
    {
        return $this->hasMany(ArticuloEquivalencia::class, 'articulo_id');
    }

    public function caracteristicas()
    {
        return $this->hasMany(ArticuloCaracteristica::class, 'articulo_id');
    }
}
