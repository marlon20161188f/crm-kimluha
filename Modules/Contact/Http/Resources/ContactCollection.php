<?php

namespace Modules\Contact\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ContactCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function toArray($request)
    {
        return $this->collection->transform(function($row, $key) {
            return [
                'id' => $row->id,
                'number' => $row->number,
                'name' => $row->lastname.', '.$row->name,
                'email_1' => $row->email_1,
                'cellphone_1' => $row->cellphone_1,
                'action_icon' => optional($row->action)->icon,
                'action_name' => optional($row->action)->name,
                'mobile_operator_name' => optional($row->mobile_operator)->name,
                'date_of_action' => optional($row->date_of_action)->format('d/m/Y'),
                'date_plan_end' => optional($row->date_plan_end)->format('d/m/Y'),
                'time_of_action' => $row->time_of_action,
            ];
        });
    }
}
