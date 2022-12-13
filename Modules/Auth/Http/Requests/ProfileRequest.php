<?php

namespace Modules\Auth\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $id = $this->get('id');
        return [
            'name' => [
                'required',
                Rule::unique('users')->ignore($id),
            ],
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($id),
            ],
            'password' => [
                'required_if:id,>,0',
                'min:6',
                'confirmed',
            ]
        ];
    }
}
