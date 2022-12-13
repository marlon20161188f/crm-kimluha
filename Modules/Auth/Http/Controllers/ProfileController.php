<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Modules\Auth\Http\Requests\PasswordRequest;
use Modules\Auth\Http\Requests\ProfileRequest;
use Modules\Auth\Http\Resources\ProfileResource;
use Modules\Role\Models\Role;
use Modules\User\Models\User;

class ProfileController extends Controller
{
    public function tables()
    {
        return [
            'roles' => Role::query()->get()
        ];
    }

    public function record()
    {
        $user = auth()->user();

        return (new ProfileResource($user));
    }

    public function store(ProfileRequest $request)
    {
        $id = $request->input('id');
        $record = User::query()->firstOrNew(['id' => $id]);
        $record->fill($request->all());
        $record->save();

        return [
            'success' => true,
            'message' => 'Perfil actualizado'
        ];
    }

    public function updatePassword(PasswordRequest $request)
    {
        $password = $request->input('password');
        $password_new = $request->input('password_new');
        $password_new_2 = $request->input('password_new_2');

        if(!Hash::check($password, auth()->user()->password)) {
            return [
                'success' => false,
                'message' => 'La contraseña ingresada es incorrecta'
            ];
        }
        if($password_new !== $password_new_2) {
            return [
                'success' => false,
                'message' => 'Las contraseñas ingresadas no coinciden'
            ];
        }

        User::query()->where('id', auth()->id())
            ->update([
                'password' => Hash::make($password_new)
            ]);

        return [
            'success' => true,
            'message' => 'La contraseña fue actualizada'
        ];
    }
}
