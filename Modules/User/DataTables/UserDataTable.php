<?php

namespace Modules\User\DataTables;

use App\Traits\PaginationTrait;
use Illuminate\Http\Request;
use Modules\User\Http\Resources\UserCollection;
use Modules\User\Models\User;

trait UserDataTable
{
    use PaginationTrait;

    public function initTable()
    {
        return  [
            'columns' => $this->getColumns(),
            'filters' => $this->getFilter()
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
                'style' => 'width: 140px',
                'sortable' => true
            ],
            [
                'label' => 'Correo electrónico',
                'name' => 'email',
                'field' => 'email',
                'align' => 'left',
                'sortable' => true
            ],
//            [
//                'label' => 'Usuario',
//                'name' => 'username',
//                'field' => 'username',
//                'align' => 'left',
//                'style' => 'width: 80px',
//                'sortable' => true
//            ],
            [
                'label' => 'Perfil',
                'name' => 'role_name',
                'field' => 'role_name',
                'align' => 'left',
                'style' => 'width: 140px',
                'sortable' => true
            ],
            [
                'label' => 'Acciones',
                'name' => 'actions',
                'field' => 'actions',
                'align' => 'right',
                'style' => 'width: 80px',
                'sortable' => false,
            ],
        ];
    }

    public function getFilter()
    {
        return [
            [
                'label' => 'Nombre',
                'field' => 'input',
                'type' => 'input',
                'value' => '',
                'class' => 'col-24'
            ]
        ];
    }

    public function records(Request $request)
    {
        $this->initPagination();

        $filters = collect($request->input('filters'));
        $input = $filters->firstWhere('field', 'input');
        $value = $input?$input['value']:'';

        $query = User::query()
            ->with('role')
            ->where('name', 'like', "%{$value}%")
            ->orderBy($this->sortBy, $this->descending);

        $user = auth()->user();
        if($user->role_id === 'admin') {
            $query->whereIn('role_id', ['admin', 'supervisor', 'operator']);
        }
        if($user->role_id === 'supervisor') {
            $query->whereIn('role_id', ['operator']);
        }

        if($this->isPagination) {
            return (new UserCollection($query->paginate($this->limit)))->additional($this->metaAdditional);
        }

        return new UserCollection($query->get());
    }
}
