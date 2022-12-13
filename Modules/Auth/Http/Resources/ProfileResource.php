<?php

namespace Modules\Auth\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
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
            'email' => $this->email,
            'role_id' => $this->role_id,
            'is_active' => $this->is_active,
        ];
    }
}
