<?php

namespace Modules\Contact\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    public $incrementing = false;
    public $timestamps = false;

    public function provinces()
    {
        return $this->hasMany(Province::class);
    }
}
