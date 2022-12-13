<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Role\Models\Role;
use Modules\User\DataTables\UserDataTable;
use Modules\User\Http\Requests\UserRequest;
use Modules\User\Http\Resources\UserResource;
use Modules\User\Models\User;

class UserController extends Controller
{
    use UserDataTable;

    public function tables()
    {
        $user = auth()->user();
        if($user->role_id === 'admin') {
            $query = Role::query()->whereIn('id', ['admin', 'supervisor', 'operator'])->get();
        } else {
            $query = Role::query()->whereIn('id', ['operator'])->get();
        }
        $roles = $query->transform(function ($row) {
            return [
                'id' => $row->id,
                'name' => $row->name,
            ];
        });

        return [
            'roles' => $roles
        ];
    }

    public function record($id)
    {
        $record = new UserResource(User::query()->with('role')->findOrFail($id));

        return $record;
    }

    public function store(UserRequest $request)
    {
        $id = $request->input('id');
        $record = User::query()->firstOrNew(['id' => $id]);
        $record->fill($request->except(['password', 'api_token']));

        if (!$id) {
            $record->password = bcrypt($request->has('password')?$request->input('password'):'123456');
        }
        $record->save();

        return [
            'success' => true,
            'message' => ($id) ? 'Usuario actualizado' : 'Usuario registrado'
        ];
    }

    public function destroy($id)
    {
        $record = User::query()->findOrFail($id);
        $record->delete();

        return [
            'success' => true,
            'message' => 'Usuario eliminado con éxito'
        ];
    }

    public function lock($id)
    {
        $record = User::query()->findOrFail($id);

        User::query()->where('id', $id)->update([
            'is_active' => !$record->is_active
        ]);

        return [
            'success' => true,
            'message' => 'Usuario actualizado con éxito'
        ];
    }
}
