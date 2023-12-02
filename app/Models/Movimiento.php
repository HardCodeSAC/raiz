<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movimiento extends Model
{
    use HasFactory;

    protected $table = 'movimiento';

    public function entidad_entrega()
    {
        return $this->belongsTo(Entidad::class, 'entidad_entrega_id');
    }

    public function entidad_recibe()
    {
        return $this->belongsTo(Entidad::class, 'entidad_recibe_id');
    }

    public function movimientos_detalle()
    {
        return $this->hasMany(MovimientoDetalle::class, 'movimiento_id');
    }
}
