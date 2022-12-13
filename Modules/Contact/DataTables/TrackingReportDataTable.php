<?php

namespace Modules\Contact\DataTables;

use App\Traits\PaginationTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Modules\Contact\Http\Resources\TrackingReportCollection;
use Modules\Contact\Models\Tracking;

trait TrackingReportDataTable
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
                'label' => 'Número',
                'name' => 'number',
                'field' => 'number',
                'align' => 'left',
                'style' => 'width: 100px',
                'sortable' => false
            ],
            [
                'label' => 'Nombre',
                'name' => 'name',
                'field' => 'name',
                'align' => 'left',
                'sortable' => false
            ],
            [
                'label' => 'Correo electrónico',
                'name' => 'email_1',
                'field' => 'email_1',
                'align' => 'left',
                'style' => 'width: 80px',
                'sortable' => false,
            ],
            [
                'label' => 'Celular',
                'name' => 'cellphone_1',
                'field' => 'cellphone_1',
                'align' => 'left',
                'style' => 'width: 80px',
                'sortable' => false,
            ],
            [
                'label' => 'Fecha',
                'name' => 'date_of_tracking',
                'field' => 'date_of_tracking',
                'align' => 'left',
                'style' => 'width: 80px',
                'sortable' => true,
            ],
            [
                'label' => 'Medio',
                'name' => 'action_name',
                'field' => 'action_name',
                'align' => 'left',
                'style' => 'width: 80px',
                'sortable' => false,
            ],
            [
                'label' => 'Comentario',
                'name' => 'commentary',
                'field' => 'commentary',
                'align' => 'left',
                'style' => 'width: 80px',
                'sortable' => false,
            ],
        ];
    }

    public function getFilter()
    {
        return [
            [
                'label' => 'Operador',
                'field' => 'operator_id',
                'type' => 'select',
                'options' => helper_options_operator_with_all(),
                'value' => 'all',
                'class' => 'col-8'
            ],
//            [
//                'label' => 'Nombre',
//                'field' => 'input',
//                'type' => 'input',
//                'value' => '',
//                'class' => 'col-16'
//            ],
//            [
//                'label' => 'Estado',
//                'field' => 'state_id',
//                'type' => 'list',
//                'options' => helper_options_state(),
//                'class' => 'col-24'
//            ]
        ];
    }

    public function records(Request $request)
    {
        $this->initPagination('date_of_tracking', true);

        $filters = collect($request->input('filters'));

        $operator = $filters->firstWhere('field', 'operator_id');
        $operator_id = $operator ? $operator['value'] : null;

        $query = Tracking::query()
            ->with('contact', 'action')
            ->whereHas('contact', function (Builder $q) use ($operator_id) {
                $q->whereOperator($operator_id);
            })
            ->orderBy($this->sortBy, $this->descending);

        if($this->isPagination) {
            return (new TrackingReportCollection($query->paginate($this->limit)))->additional($this->metaAdditional);
        }

        return new TrackingReportCollection($query->get());
    }
}
