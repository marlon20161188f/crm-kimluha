<?php

namespace Modules\Role\DataTables;

use Modules\Role\Http\Resources\RoleCollection;
use Modules\Role\Models\Role;

trait RoleDataTable
{
    public function initTable()
    {
        return  [
            'columns' => $this->getColumns()
        ];
    }

    private function getColumns()
    {
        return [
            [
                'label' => 'Nombre',
                'name' => 'name',
                'field' => 'name',
                'align' => 'left',
                'sortable' => true
            ],
            [
                'label' => 'Permisos',
                'name' => 'permissions',
                'align' => 'center',
                'style' => 'width: 80px',
                'sortable' => false,
            ],
            [
                'label' => 'Acciones',
                'name' => 'actions',
                'align' => 'right',
                'style' => 'width: 80px',
                'sortable' => false,
            ],
        ];
    }

    public function records()
    {
        $records = Role::query()->whereNotIn('id', ['support', 'super', 'owner'])->get();

        return new RoleCollection($records);
    }
}
