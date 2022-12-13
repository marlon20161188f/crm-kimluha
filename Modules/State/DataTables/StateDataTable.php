<?php

namespace Modules\State\DataTables;

use App\Traits\PaginationTrait;
use Illuminate\Http\Request;
use Modules\State\Http\Resources\StateCollection;
use Modules\State\Models\State;

trait StateDataTable
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
                'label' => 'Color de estado',
                'name' => 'color',
                'field' => 'color',
                'align' => 'center',
                'style' => 'width: 140px',
                'sortable' => false
            ],
            [
                'label' => 'Descripción',
                'name' => 'description',
                'field' => 'description',
                'align' => 'left',
                'sortable' => false
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

        $query = State::query()
            ->where('name', 'like', "%{$value}%")
            ->orderBy($this->sortBy, $this->descending);

        if($this->isPagination) {
            return (new StateCollection($query->paginate($this->limit)))->additional($this->metaAdditional);
        }

        return new StateCollection($query->get());
    }
}
