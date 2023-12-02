<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticuloCaracteristica extends Model
{
    use HasFactory;

    protected $table = 'articulo_caracteristica';

    public function articulo()
    {
        return $this->belongsTo(Articulo::class, 'articulo_id');
    }
}
