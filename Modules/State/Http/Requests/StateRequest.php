<?php

namespace Modules\State\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StateRequest extends FormRequest
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
            ],
            'description' => [
                'required',
            ],
            'color_id' => [
                'required',
            ],
        ];
    }
}
