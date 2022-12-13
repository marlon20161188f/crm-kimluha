<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Modules\Contact\Models\Department;
use Modules\User\Models\User;

class AuthController extends Controller
{
    public function login()
    {
        request()->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required'
        ]);

        $user = User::query()->where('email', request()->email)->first();

        if (!$user || !Hash::check(request()->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        if(!$user->is_active) {
            throw ValidationException::withMessages([
                'email' => ['La cuenta se encuentra bloqueada'],
            ]);
        }

        return $user->createToken(request()->device_name)->plainTextToken;
    }

    public function logout()
    {
        $user = auth()->user();
        foreach ($user->tokens as $token) {
            $token->delete();
        }
        return response()->json('User logout...', 200);
    }

    public function data(Request $request)
    {
        $user = $request->user();

        return [
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'name' => $user->name,
                'role_id' => $user->role_id,
                'role_name' => $user->role->name,
            ],
        ];
    }

    public function tables()
    {
        return [
            'menu' => $this->menu(),
            'locations' => $this->locations()
        ];
    }

    private function menu()
    {
        $menu = config('menu');
        $user = auth()->user();

        $menu_array = [];
        if($user->role_id === 'admin') {
            foreach (['dashboard', 'contact', 'tracking_report', 'user', 'notification', 'configuration'] as $m) {
                $menu_array[] = $menu[$m];
            }
        }
        if($user->role_id === 'supervisor') {
            foreach (['dashboard', 'contact', 'tracking_report', 'user', 'notification', 'configuration'] as $m) {
                $menu_array[] = $menu[$m];
            }
        }
        if($user->role_id === 'operator') {
            foreach (['dashboard', 'contact', 'notification', 'configuration'] as $m) {
                $menu_array[] = $menu[$m];
            }
        }

        return $menu_array;
    }
    private function locations()
    {
        $locations = [];
        $departments = Department::query()->with(['provinces', 'provinces.districts'])->where('is_active', true)->get();
        foreach ($departments as $department) {
            foreach ($department->provinces as $province) {
                foreach ($province->districts as $district) {
                    $locations[] = [
                        'id' => $district->id,
                        'name' => str_to_upper_utf8($department->name) . ' - ' . str_to_upper_utf8($province->name) . ' - ' . str_to_upper_utf8($district->name)
                    ];
                }
            }
        }

        return $locations;
    }
}
