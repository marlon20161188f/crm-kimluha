<?php

namespace Modules\User\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
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
                'name' => $row->name,
                'email' => $row->email,
                'username' => $row->username,
//                'api_token' => $row->api_token,
                'role_id' => $row->role_id,
                'role_name' => $row->role->name,
                'is_active' => $row->is_active,
                'created_at' => $row->created_at->format('Y-m-d H:i:s'),
                'updated_at' => $row->updated_at->format('Y-m-d H:i:s'),
            ];
        });
    }
}
