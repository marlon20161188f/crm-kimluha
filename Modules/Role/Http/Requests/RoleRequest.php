<?php

namespace Modules\Role\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RoleRequest extends FormRequest
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
                Rule::unique('roles')->ignore($id),
            ]
        ];
    }
}
