<?php

namespace Modules\Contact\Models;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    public $incrementing = false;
    public $timestamps = false;

    public function province()
    {
        return $this->belongsTo(Province::class);
    }
}
