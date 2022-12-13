<?php

use Modules\Contact\Models\Contact;
use Modules\State\Models\State;
use Modules\User\Models\User;

if (!function_exists('str_to_upper_utf8')) {
    function str_to_upper_utf8($text)
    {
        if (is_null($text)) {
            return null;
        }
        return mb_strtoupper($text, 'utf-8');
    }
}

if (!function_exists('str_to_lower_utf8')) {
    function str_to_lower_utf8($text)
    {
        if (is_null($text)) {
            return null;
        }
        return mb_strtolower($text, 'utf-8');
    }
}


if (!function_exists('helper_options_operator_with_all')) {
    function helper_options_operator_with_all($all = false)
    {
        $records = User::query()->where('role_id', 'operator')->get();

        $array[] = [
            'id' => 'all',
            'name' => 'Todos'
        ];
        foreach ($records as $c) {
            $array[] = [
                'id' => $c->id,
                'name' => "$c->lastname, $c->name",
            ];
        }

        return $array;
    }
}

if (!function_exists('helper_options_state_with_all')) {
    function helper_options_state_with_all()
    {
        $records = State::query()->with('color')->get();

        $user = auth()->user();
        $query_contact = Contact::query();
        if ($user->role_id === 'operator') {
            $query_contact->where('operator_id', $user->id)
                ->whereIn('state_id', ['02']);
        }
        $array[] = [
            'id' => 'all',
            'name' => 'Todos',
            'color' => 'blue',
            'count' => $query_contact->count()
        ];
        foreach ($records as $c) {
            $query = Contact::query()->where('state_id', $c->id);
            if ($user->role_id === 'operator') {
                $query->where('operator_id', $user->id)
                    ->whereIn('state_id', ['02']);
            }
            $count = $query->count();
            $array[] = [
                'id' => $c->id,
                'name' => $c->name,
                'color' => $c->color->color,
                'count' => $count
            ];
        }

        return $array;
    }
}
