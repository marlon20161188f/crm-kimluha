<?php

namespace Modules\Contact\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContactRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $id = $this->get('id');
        return [
//            'number' => [
//                'required',
//                Rule::unique('contacts')->ignore($id),
//            ],
            'name' => [
                'required',
            ],
            'lastname' => [
                'required',
            ],
//            'operator_id' => [
//                'required',
//            ],
//            'mobile_operator_id' => [
//                'required',
//            ],
            'cellphone_1' => [
                'required',
            ],
//            'date_plan_end' => [
//                'required',
//            ],
        ];
    }
}
