<?php

namespace Modules\Contact\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TrackingCollection extends ResourceCollection
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
                'date_of_tracking' => $row->date_of_tracking->format('d/m/Y'),
                'action_icon' => $row->action->icon,
                'action_name' => $row->action->name,
                'commentary' => $row->commentary
            ];
        });
    }
}
