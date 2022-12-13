<?php

namespace Modules\Auth\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PasswordRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $id = $this->get('id');
        return [
            'password' => [
                'required',
            ],
            'password_new' => [
                'required_if:id,>,0',
                'min:6',
            ],
        ];
    }
}
