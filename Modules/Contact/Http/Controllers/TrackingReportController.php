<?php

namespace Modules\Contact\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Modules\Contact\DataTables\TrackingReportDataTable;
use Modules\Contact\Exports\TrackingReportExport;
use Modules\Contact\Models\Tracking;
use Modules\User\Models\User;

class TrackingReportController extends Controller
{
    use TrackingReportDataTable;

    public function export(Request $request)
    {
        $sortBy = $request->input('sortBy');
        $descending = $request->input('descending')?'desc' : 'asc';
        $filters = collect($request->input('filters'));
        $operator = $filters->firstWhere('field', 'operator_id');
        $operator_id = $operator ? $operator['value'] : null;

        $records = Tracking::query()
            ->with('contact', 'action')
            ->whereHas('contact', function (Builder $q) use ($operator_id) {
                $q->whereOperator($operator_id);
            })
            ->orderBy($sortBy, $descending)
            ->get();

        $operator = User::query()->find($operator_id);
        $operator_name = 'Todos';
        if($operator) {
            $operator_name = $operator->name;
        }

        $data = [];
        $data['operator_name'] = $operator_name;
        foreach ($records as $record) {
            $data['records'][] = [
                'number' => $record->contact->number,
                'name' => $record->contact->lastname.', '.$record->contact->name,
                'email_1' => $record->contact->email_1,
                'cellphone_1' => $record->contact->cellphone_1,
                'date_of_tracking' => $record->date_of_tracking->format('d/m/Y'),
                'action_name' => $record->action->name,
                'commentary' => $record->commentary
            ];
        }

        $filename = 'Reporte_seguimiento_' . date('YmdHis');

        return (new TrackingReportExport())
            ->data($data)
            ->download($filename . '.xlsx');
    }
}
