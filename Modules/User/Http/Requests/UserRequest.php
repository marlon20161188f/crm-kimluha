<?php

namespace Modules\User\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $id = $this->get('id');
        return [
            'number' => [
                'required',
            ],
            'name' => [
                'required',
            ],
            'lastname' => [
                'required',
            ],
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($id),
            ],
            'role_id' => [
                'required',
            ],
            'password' => [
                'required_if:id,>,0',
                'min:6',
                'confirmed',
            ]
        ];
    }
}
