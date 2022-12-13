<?php

namespace Modules\Contact\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'name' => $this->name,
            'lastname' => $this->lastname,
            'date_of_birth' => $this->date_of_birth,
            'email_1' => $this->email_1,
            'email_2' => $this->email_2,
            'cellphone_1' => $this->cellphone_1,
            'cellphone_2' => $this->cellphone_2,
            'phone' => $this->phone,
            'address' => $this->address,
            'location_id' => $this->location_id,
            'operator_id' => $this->operator_id,
            'chip_type_id' => $this->chip_type_id,
            'mobile_operator_id' => $this->mobile_operator_id,
            'plan_type_id' => $this->plan_type_id,
            'plan_sale_id' => $this->plan_sale_id,
            'plan_price' => $this->plan_price,
            'date_plan_start' => $this->date_plan_start,
            'date_plan_end' => $this->date_plan_end,
            'phase_id' => $this->phase_id,
            'rejection_id' => $this->rejection_id,
            'state_id' => $this->state_id,
            'action_id' => $this->action_id,
            'date_of_action' => $this->date_of_action,
            'time_of_action' => $this->time_of_action,
        ];
    }
}
