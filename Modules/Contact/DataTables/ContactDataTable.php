<?php

namespace Modules\Contact\DataTables;

use App\Traits\PaginationTrait;
use Illuminate\Http\Request;
use Modules\Contact\Http\Resources\ContactCollection;
use Modules\Contact\Models\Contact;

trait ContactDataTable
{
    use PaginationTrait;

    public function initTable()
    {
        return [
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
                'sortable' => true
            ],
            [
                'label' => 'Nombre',
                'name' => 'name',
                'field' => 'name',
                'align' => 'left',
                'sortable' => true
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
                'label' => 'Operador Móvil',
                'name' => 'mobile_operator_name',
                'field' => 'mobile_operator_name',
                'align' => 'left',
                'style' => 'width: 100px',
                'sortable' => false,
            ],
            [
                'label' => 'F. fin de plan',
                'name' => 'date_plan_end',
                'field' => 'date_plan_end',
                'align' => 'left',
                'style' => 'width: 100px',
                'sortable' => true,
            ],
            [
                'label' => 'Acción',
                'name' => 'action_name',
                'field' => 'action_name',
                'align' => 'left',
                'style' => 'width: 100px',
                'sortable' => false,
            ],
            [
                'label' => 'Fecha',
                'name' => 'date_of_action',
                'field' => 'date_of_action',
                'align' => 'left',
                'style' => 'width: 80px',
                'sortable' => true,
            ],
            [
                'label' => 'Hora',
                'name' => 'time_of_action',
                'field' => 'time_of_action',
                'align' => 'left',
                'style' => 'width: 80px',
                'sortable' => false,
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
        $user = auth()->user();
        $states = helper_options_state_with_all();
        $phases = [
            ['title' => 'Todos',      'icon' => 'far fa-user',          'color' => '#47A3FF', 'value' => 'all'],
            ['title' => 'Asignados',  'icon' => 'fas fa-user-plus',     'color' => '#00A251', 'value' => '02'],
            ['title' => 'Rechazados', 'icon' => 'fas fa-user-times',    'color' => '#FF3030', 'value' => '03'],
            ['title' => 'Cerrados',   'icon' => 'fas fa-hands-helping', 'color' => '#274BFF', 'value' => '04'],
        ];

        $phase_value = 'all';
        if($user->role_id === 'operator') {
            array_splice($phases, 0, 1);
            $phase_value = '02';
        }

        $filter = [
            [
                'label' => 'Asesor',
                'field' => 'operator_id',
                'type' => 'select',
                'options' => helper_options_operator_with_all(),
                'value' => 'all',
                'class' => 'col-8 q-mb-md'
            ],
            [
                'label' => 'Etapas',
                'field' => 'phase_id',
                'type' => 'other',
                'options' => $phases,
                'value' => $phase_value,
                'class' => 'col-16'
            ],
            [
                'label' => 'Buscar',
                'field' => 'input',
                'type' => 'input',
                'value' => '',
                'class' => 'col-8'
            ],
            [
                'label' => 'Estado',
                'field' => 'state_id',
                'type' => 'list',
                'options' => [],//$states,
                'value' => 'all',
                'class' => 'col-24 q-mt-md'
            ],
//            [
//                'label' => 'Etapa',
//                'field' => 'phase_id',
//                'type' => 'other',
//                'options' => [],
//                'value' => ($user->role_id === 'operator') ?'02':'all',
//                'class' => 'col-24'
//            ]
        ];

        if ($user->role_id === 'operator') {
            array_splice($filter, 0, 1);
        }

        return $filter;
    }

    public function records(Request $request)
    {
        $this->initPagination('date_of_action', false);

        $filters = collect($request->input('filters'));

        $operator = $filters->firstWhere('field', 'operator_id');
        $operator_id = $operator ? $operator['value'] : null;

        $state = $filters->firstWhere('field', 'state_id');
        $state_id = $state ? $state['value'] : null;

        $phase = $filters->firstWhere('field', 'phase_id');
        $phase_id = $phase ? $phase['value'] : null;

        $input = $filters->firstWhere('field', 'input');
        $value = $input ? $input['value'] : '';

        $user = auth()->user();
        if ($user->role_id === 'operator') {
            $operator_id = $user->id;
        }

//        return $operator_id;
        $query = Contact::query()
            ->with(['operator', 'action', 'mobile_operator'])
            ->whereOperator($operator_id)
            ->wherePhase($phase_id);
        if ($phase_id === '02') {
            $query->whereState($state_id);
        }
        $query->where('search', 'like', "%{$value}%")
            ->orderBy('is_scheduled', 'asc')
            ->orderBy($this->sortBy, $this->descending);

//        if ($user->role_id === 'operator') {
//            //$query->whereIn('state_id', ['02']);
//        }

        if ($this->isPagination) {
            return (new ContactCollection($query->paginate($this->limit)))->additional($this->metaAdditional);
        }

        return new ContactCollection($query->get());
    }
}
