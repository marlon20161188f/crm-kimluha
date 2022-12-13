<?php

namespace Modules\Contact\Models;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    public $incrementing = false;
    public $timestamps = false;

    public function districts()
    {
        return $this->hasMany(District::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
