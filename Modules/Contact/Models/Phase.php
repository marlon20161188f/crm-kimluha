<?php

namespace Modules\Contact\Models;

use Illuminate\Database\Eloquent\Model;

class Phase extends Model
{
    public $incrementing = false;
    protected $fillable = [
        'id',
        'name',
    ];
}
