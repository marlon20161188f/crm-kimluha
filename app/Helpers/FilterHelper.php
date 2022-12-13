<?php

namespace App\Helpers;

use Modules\User\Models\User;

class FilterHelper
{
    public function operators()
    {
        $contacts = User::query()
            ->where('role_id', 'operator')
            ->get();

        $records = [];
        foreach ($contacts as $row) {
            $records[] = [
                'id' => $row->id,
                'name' => $row->name,
            ];
        }

        return $records;
    }
}
