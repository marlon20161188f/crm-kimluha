<?php

namespace Modules\Contact\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class ContactExport implements FromView, ShouldAutoSize
{
    use Exportable;

    protected $data;

    public function data($data)
    {
        $this->data = $data;

        return $this;
    }

    public function view(): View
    {
        return view('contact::exports.contact', $this->data);
    }
}
