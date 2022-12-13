<?php

namespace Modules\Role\Http\Controllers;

use App\Http\Controllers\Controller;
use Hyn\Tenancy\Contracts\CurrentHostname;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Modules\Role\DataTables\RoleDataTable;
use Modules\Role\Http\Requests\RoleRequest;
use Modules\Role\Http\Resources\RoleResource;
use Modules\Role\Models\Role;
use Modules\System\Http\Controllers\ModuleController;
use Modules\System\Models\Client;
use Modules\System\Models\Module;

class RoleController extends Controller
{
    use RoleDataTable;

    public function record($id)
    {
        $record = new RoleResource(Role::query()->findOrFail($id));

        return $record;
    }

    public function store(RoleRequest $request)
    {
        $id = $request->input('id');
        $record = Role::query()->firstOrNew(['id' => $id]);
        $record->fill($request->all());
        if(!$id) {
            $record->id = Str::slug($request->input('name'));
            $record->permissions = ['dashboard'];
        }
        $record->save();

        return [
            'success' => true,
            'message' => ($id) ? 'Rol actualizado' : 'Rol registrado'
        ];
    }

    public function destroy($id)
    {
        $record = Role::query()->findOrFail($id);
        $record->delete();

        return [
            'success' => true,
            'message' => 'Rol eliminado con éxito'
        ];
    }

    public function permissions($role_id)
    {
        $modules = (new ModuleController())->getRecords(get_modules_by_client());
        $role = Role::query()->find($role_id);

        return [
            'modules' => $modules,
            'permissions' => ($role->permissions) ? $role->permissions : []
        ];
    }

    public function storePermissions(Request $request)
    {
        $role_id = $request->input('role_id');
        $permissions = $request->input('permissions');

        Role::query()->find($role_id)->update([
            'permissions' => $permissions
        ]);

        return [
            'success' => true,
            'message' => 'Se actualizaron correctamente los permisos'
        ];
    }
}
