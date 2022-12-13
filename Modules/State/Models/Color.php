<?php

namespace Modules\State\Models;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
        'color',
    ];
}
