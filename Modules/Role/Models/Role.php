<?php

namespace Modules\Role\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public $incrementing = false;
    public $timestamps = false;

    protected $fillable = [
        'id',
        'name',
    ];
}
