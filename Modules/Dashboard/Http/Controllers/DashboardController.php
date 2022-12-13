<?php

namespace Modules\Dashboard\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Contact\Models\Contact;
use Modules\User\Models\User;

class DashboardController extends Controller
{
    public function data(Request $request)
    {
        $user = auth()->user();
        if($user->role_id === 'operator') {
            $operator_id = $user->id;
        } else {
            $operator_id = $request->input('operator_id');
        }
        $contacts = Contact::query()->whereOperator($operator_id)->get();

//        $contacts_01 = $contacts->where('phase_id', '01')->count();
        $contacts_02 = $contacts->where('phase_id', '02')->count();
        $contacts_03 = $contacts->where('phase_id', '03')->count();
        $contacts_04 = $contacts->where('phase_id', '04')->count();
        $series = [$contacts_02, $contacts_03, $contacts_04];

        $_operators = User::query()
            ->where('role_id', 'operator')
            ->where('is_active', true)
            ->get();

        $operators[] = ['id' => null, 'name' => 'Todos'];
        foreach ($_operators as $row) {
            $operators[] = [
                'id' => $row->id,
                'name' => "$row->lastname, $row->name",
            ];
        }

        return [
            'role_id' => $user->role_id,
            'count_contacts' => count($contacts),
//            'contacts_01' => $contacts_01,
            'contacts_02' => $contacts_02,
            'contacts_03' => $contacts_03,
            'contacts_04' => $contacts_04,
            'series' => $series,
            'operators' => $operators
        ];
    }
}
