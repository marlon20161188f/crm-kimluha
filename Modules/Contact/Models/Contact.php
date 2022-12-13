<?php

namespace Modules\Contact\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\State\Models\State;
use Modules\User\Models\User;

class Contact extends Model
{
    protected $table = 'contacts';

    protected $fillable = [
        'id',
        'number',
        'name',
        'lastname',
        'date_of_birth',
        'email_1',
        'cellphone_1',
        'cellphone_2',
        'phone',
        'address',
        'location_id',
        'operator_id',
        'mobile_operator_id',
        'plan_type_id',
        'plan_sale_id',
        'plan_price',
        'chip_type_id',
        'date_plan_start',
        'date_plan_end',
        'phase_id',
        'rejection_id',
        'state_id',
        'action_id',
        'date_of_action',
        'time_of_action',
        'search'
    ];

    protected $casts = [
        'chip' => 'boolean',
        'date_plan_start' => 'date',
        'date_plan_end' => 'date',
        'date_of_action' => 'date',
        'date_of_birth' => 'date',
        'plan_price' => 'float'
    ];

    public function operator()
    {
        return $this->belongsTo(User::class, 'operator_id');
    }

    public function mobile_operator()
    {
        return $this->belongsTo(MobileOperator::class);
    }

    public function chip_type()
    {
        return $this->belongsTo(ChipType::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function action()
    {
        return $this->belongsTo(Action::class);
    }

    public function phase()
    {
        return $this->belongsTo(Phase::class);
    }

    public function scopeWhereOperator($query, $operator_id)
    {
        if($operator_id && $operator_id !== 'all') {
            return $query->where('operator_id', $operator_id);
        }
        return $query;
    }

    public function scopeWherePhase($query, $phase_id)
    {
        if($phase_id && $phase_id !== 'all') {
            return $query->where('phase_id', $phase_id);
        }
        return $query;
    }

    public function scopeWhereState($query, $state_id)
    {
        if($state_id && $state_id !== 'all') {
            return $query->where('state_id', $state_id);
        }
        return $query;
    }
}
