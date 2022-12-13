<?php

namespace Modules\Contact\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Contact\Http\Requests\TrackingRequest;
use Modules\Contact\Http\Resources\TrackingCollection;
use Modules\Contact\Http\Resources\TrackingResource;
use Modules\Contact\Models\Action;
use Modules\Contact\Models\Tracking;

class TrackingController extends Controller
{
    public function records($contact_id)
    {
        $records = Tracking::query()->with(['action'])->where('contact_id', $contact_id)->get();

        return (new TrackingCollection($records));
    }

    public function tables()
    {
        $actions = Action::query()
            ->orderBy('is_default', 'desc')
            ->get()->transform(function ($row) {
                return [
                    'id' => $row->id,
                    'name' => $row->name,
                    'alternative_name' => $row->alternative_name,
                    'icon' => $row->icon,
                    'is_default' => $row->is_default,
                ];
            });

        return [
            'actions' => $actions,
        ];
    }

    public function record($id)
    {
        $record = new TrackingResource(Tracking::query()->findOrFail($id));

        return $record;
    }

    public function store(TrackingRequest $request)
    {
        $id = $request->input('id');
        $record = Tracking::query()->firstOrNew(['id' => $id]);
        $record->fill($request->all());
        $record->save();

        return [
            'success' => true,
            'message' => ($id) ? 'Seguimiento actualizado' : 'Seguimiento registrado'
        ];
    }

    public function destroy($id)
    {
        $record = Tracking::query()->findOrFail($id);
        $record->delete();

        return [
            'success' => true,
            'message' => 'Seguimiento eliminado con éxito'
        ];
    }
}
