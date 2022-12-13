<?php

namespace Modules\Contact\Models;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'id',
        'name',
        'icon',
    ];

    protected $casts = [
        'is_default' => 'boolean'
    ];
}
