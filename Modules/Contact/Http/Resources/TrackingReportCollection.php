<?php

namespace Modules\Contact\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TrackingReportCollection extends ResourceCollection
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
                'number' => $row->contact->number,
                'name' => $row->contact->lastname.', '.$row->contact->name,
                'email_1' => $row->contact->email_1,
                'cellphone_1' => $row->contact->cellphone_1,
                'date_of_tracking' => $row->date_of_tracking->format('d/m/Y'),
                'action_icon' => $row->action->icon,
                'action_name' => $row->action->name,
                'commentary' => $row->commentary
            ];
        });
    }
}
