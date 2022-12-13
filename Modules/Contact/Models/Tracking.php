<?php

namespace Modules\Contact\Models;

use Illuminate\Database\Eloquent\Model;

class Tracking extends Model
{
    protected $table = 'tracking';
    protected $fillable = [
        'id',
        'contact_id',
        'date_of_tracking',
        'action_id',
        'commentary',
    ];

    protected $casts = [
        'date_of_tracking' => 'date',
    ];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function action()
    {
        return $this->belongsTo(Action::class);
    }
}
