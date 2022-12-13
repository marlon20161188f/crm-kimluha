<?php

namespace Modules\Contact\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TrackingRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $id = $this->get('id');
        return [
            'date_of_tracking' => [
                'required',
            ],
            'action_id' => [
                'required',
            ],
        ];
    }
}
