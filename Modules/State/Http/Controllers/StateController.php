<?php

namespace Modules\State\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\State\DataTables\StateDataTable;
use Modules\State\Http\Requests\StateRequest;
use Modules\State\Http\Resources\StateResource;
use Modules\State\Models\Color;
use Modules\State\Models\State;

class StateController extends Controller
{
    use StateDataTable;

    public function tables()
    {
        $colors = Color::query()->get()->transform(function ($row) {
            return [
                'id' => $row->id,
                'name' => $row->name,
                'color' => $row->color,
            ];
        });

        return [
            'colors' => $colors
        ];
    }

    public function record($id)
    {
        $record = new StateResource(State::query()->findOrFail($id));

        return $record;
    }

    public function store(StateRequest $request)
    {
        $id = $request->input('id');
        $record = State::query()->firstOrNew(['id' => $id]);
        $record->fill($request->all());
        $record->save();

        return [
            'success' => true,
            'message' => ($id) ? 'Estado actualizado' : 'Estado registrado'
        ];
    }

    public function destroy($id)
    {
        $record = State::query()->findOrFail($id);
        $record->delete();

        return [
            'success' => true,
            'message' => 'Estado eliminado con éxito'
        ];
    }
}
