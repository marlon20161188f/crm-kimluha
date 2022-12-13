<?php

namespace Modules\Contact\Http\Controllers;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Modules\Contact\DataTables\ContactDataTable;
use Modules\Contact\Exports\ContactExport;
use Modules\Contact\Http\Requests\ContactRequest;
use Modules\Contact\Http\Resources\ContactResource;
use Modules\Contact\Imports\ContactImport;
use Modules\Contact\Models\Action;
use Modules\Contact\Models\ChipType;
use Modules\Contact\Models\Contact;
use Modules\Contact\Models\MobileOperator;
use Modules\Contact\Models\Phase;
use Modules\Contact\Models\PlanSale;
use Modules\Contact\Models\PlanType;
use Modules\Contact\Models\Rejection;
use Modules\State\Models\State;
use Modules\User\Models\User;
use Maatwebsite\Excel\Excel;

class ContactController extends Controller
{
    use ContactDataTable;

    public function indexTables()
    {
        $states = State::query()->get()->transform(function ($row) {
            return [
                'id' => $row->id,
                'name' => $row->name,
                'color' => $row->color,
            ];
        });

        $contacts = Contact::query()->get();

        $operators = User::query()
            ->where('role_id', 'operator')
            ->where('is_active', true)
            ->get()->transform(function ($row) {
                return [
                    'id' => $row->id,
                    'name' => $row->name,
                ];
            });

        return [
            'states' => $states,
            'count_contacts' => count($contacts),
            'operators' => $operators,
        ];
    }

    public function tables()
    {
        $_chip_types = ChipType::query()->get();
        $chip_types[] = ['id' => null, 'name' => 'No definido'];
        foreach ($_chip_types as $row) {
            $chip_types[] = [
                'id' => $row->id,
                'name' => $row->name,
            ];
        }

        $_plan_types = PlanType::query()->get();
        $plan_types[] = ['id' => null, 'name' => 'No definido'];
        foreach ($_plan_types as $row) {
            $plan_types[] = [
                'id' => $row->id,
                'name' => $row->name,
            ];
        }

        $_plan_sales = PlanSale::query()->get();
        $plan_sales[] = ['id' => null, 'name' => 'No definido'];
        foreach ($_plan_sales as $row) {
            $plan_sales[] = [
                'id' => $row->id,
                'name' => $row->name,
            ];
        }

        $_mobile_operators = MobileOperator::query()->get();
        $mobile_operators[] = ['id' => null, 'name' => 'No definido'];
        foreach ($_mobile_operators as $row) {
            $mobile_operators[] = [
                'id' => $row->id,
                'name' => $row->name,
            ];
        }

        $_operators = User::query()
            ->where('role_id', 'operator')
            ->where('is_active', true)
            ->get();

        $operators[] = ['id' => null, 'name' => 'No definido'];
        foreach ($_operators as $row) {
            $operators[] = [
                'id' => $row->id,
                'name' => "$row->lastname, $row->name",
            ];
        }

        if (auth()->user()->role_id !== 'operator') {
            $_phases = Phase::query()->get();
        } else {
            $_phases = Phase::query()->where('id', '<>', '01')->get();
        }

        $phases = $_phases->transform(function ($row) {
            return [
                'id' => $row->id,
                'name' => $row->name,
            ];
        });

        $_states = State::query()->get();
        $states[] = ['id' => null, 'name' => 'No definido'];
        foreach ($_states as $row) {
            $states[] = [
                'id' => $row->id,
                'name' => $row->name,
            ];
        }

        $_actions = Action::query()->get();
        $actions[] = ['id' => null, 'name' => 'No definido'];
        foreach ($_actions as $row) {
            $actions[] = [
                'id' => $row->id,
                'name' => $row->name,
            ];
        }

        $rejections = Rejection::query()->get()->transform(function ($row) {
            return [
                'id' => $row->id,
                'name' => $row->name,
            ];
        });

        return [
            'operators' => $operators,
            'mobile_operators' => $mobile_operators,
            'plan_types' => $plan_types,
            'plan_sales' => $plan_sales,
            'chip_types' => $chip_types,
            'states' => $states,
            'actions' => $actions,
            'phases' => $phases,
            'rejections' => $rejections
        ];
    }

    public function record($id)
    {
        $record = new ContactResource(Contact::query()->findOrFail($id));

        return $record;
    }

    public function store(ContactRequest $request)
    {
        $id = $request->input('id');
        $operator_id = $request->input('operator_id');

        $mobile_operator_id = $request->input('mobile_operator_id');
        $mobile_operator = MobileOperator::query()->find($mobile_operator_id);
        $mobile_operator_name = '';
        if ($mobile_operator) {
            $mobile_operator_name = $mobile_operator->name;
        }

        $record = Contact::query()->firstOrNew(['id' => $id]);
        $record->fill($request->all());
        if ($id) {
            if ($record->phase_id === '01' && !is_null($operator_id)) {
                $record->phase_id = '02';
            }
            if (is_null($record->operator_id)) {
                $record->phase_id = '01';
            }
        } else {
            if (!is_null($operator_id)) {
                $record->phase_id = '02';
            }
        }
        if ($request->has('date_of_action')) {
            $is_scheduled = !is_null($request->input('date_of_action'));
        } else {
            $is_scheduled = false;
        }
        $record->search = "$record->name $record->lastname $mobile_operator_name";
        $record->is_scheduled = $is_scheduled;

        $record->save();

        return [
            'success' => true,
            'message' => ($id) ? 'Contacto actualizado' : 'Contacto registrado'
        ];
    }

    public function destroy($id)
    {
        $record = Contact::query()->findOrFail($id);
        $record->delete();

        return [
            'success' => true,
            'message' => 'Contacto eliminado con éxito'
        ];
    }

    public function updateFilterState(Request $request)
    {
        $records = State::query()->with('color')->get();

        $filters = collect($request->input('filters'));

        $operator = $filters->firstWhere('field', 'operator_id');
        $operator_id = $operator ? $operator['value'] : null;

        $user = auth()->user();
        if ($user->role_id === 'operator') {
            $operator_id = $user->id;
        }

        $contacts = Contact::query()
            ->whereIn('phase_id', ['02'])
            ->whereOperator($operator_id)
            ->get();

        $array[] = [
            'id' => 'all',
            'name' => 'Todos',
            'color' => 'blue',
            'count' => count($contacts)
        ];

        foreach ($records as $c) {
            $count = $contacts->where('state_id', $c->id)->count();

            $array[] = [
                'id' => $c->id,
                'name' => $c->name,
                'color' => $c->color->color,
                'count' => $count
            ];
        }

        return $array;
    }

    public function export(Request $request)
    {
        $sortBy = $request->input('sortBy');
        $descending = $request->input('descending') ? 'desc' : 'asc';
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

        $query = Contact::query()
            ->with(['operator', 'action', 'mobile_operator'])
            ->whereOperator($operator_id)
            ->wherePhase($phase_id);
        if ($phase_id === '02') {
            $query->whereState($state_id);
        }
        $query->where('search', 'like', "%{$value}%")
            ->orderBy('is_scheduled', 'asc')
            ->orderBy($sortBy, $descending);

        $records = $query->get();

        $data = [];
        foreach ($records as $record) {
            $data['records'][] = [
                'number' => $record->number,
                'name' => $record->lastname . ', ' . $record->name,
                'email_1' => $record->email_1,
                'cellphone_1' => $record->cellphone_1,
                'action_name' => optional($record->action)->name,
                'mobile_operator_name' => optional($record->mobile_operator)->name,
                'date_of_action' => optional($record->date_of_action)->format('d/m/Y'),
                'date_plan_end' => optional($record->date_plan_end)->format('d/m/Y'),
                'time_of_action' => $record->time_of_action,
            ];
        }

        $filename = 'Reporte_contactos_' . date('YmdHis');

        return (new ContactExport())
            ->data($data)
            ->download($filename . '.xlsx');
    }

    public function import(Request $request)
    {
        if ($request->hasFile('file')) {
            $import = new ContactImport();
            $import->import($request->file('file'), null, Excel::XLSX);
            return $import->getData();
        }
        return [
            'success' => false,
            'message' => 'Error al importar el archivo.',
        ];
    }

    public function toAssign()
    {
        try {
            //$max_assigned = config('configuration.max_assigned');
            $max_assigned = 100;
            $count_not_assigned = Contact::query()->where('phase_id', '01')->count();
            if($count_not_assigned === 0) {
                throw new Exception('No se encontraron contactos para asignar.');
            }
            $operators = User::query()
                ->where('role_id', 'operator')
                ->where('is_active', true)
                ->get();


            $total_assigned = 0;
            $data = [];
            foreach ($operators as $operator) {
                $count_assigned = Contact::query()
                    ->where('operator_id', $operator->id)
                    ->where('phase_id', '02')
                    ->count();
                $data[] = [
                    'operator_id' => $operator->id,
                    'count_assigned' => $count_assigned,
                ];
                $total_assigned += $count_assigned;
            }

//            return $data;

            $assigned_by_operator = floor(($total_assigned + $count_not_assigned) / count($operators));
            $assigned_by_operator = ($assigned_by_operator > $max_assigned)?$max_assigned:$assigned_by_operator;

            foreach ($data as $row) {
                $take = $assigned_by_operator - $row['count_assigned'];
                if($take > 0) {
                    Contact::query()->where('phase_id', '01')->take($take)->update([
                        'operator_id' => $row['operator_id'],
                        'phase_id' => '02'
                    ]);
                }
            }
            return [
                'success' => true,
                'message' => 'Se asignó correctamente los contactos.'
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}
