<?php

namespace Modules\State\Models;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $fillable = [
        'name',
        'description',
        'color_id',
    ];

    public function color()
    {
        return $this->belongsTo(Color::class);
    }
}
