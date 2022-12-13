<?php

namespace Modules\Contact\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TrackingResource extends JsonResource
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
            'email_1' => $this->email_1,
            'email_2' => $this->email_2,
            'cellphone_1' => $this->cellphone_1,
            'cellphone_2' => $this->cellphone_2,
            'phone' => $this->phone,
            'operator_id' => $this->operator_id,
            'chip' => $this->chip,
            'mobile_operator_id' => $this->mobile_operator_id
        ];
    }
}
