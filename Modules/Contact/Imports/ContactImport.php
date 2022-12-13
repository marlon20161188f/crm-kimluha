<?php

namespace Modules\Contact\Imports;

use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Modules\Contact\Models\Contact;

class ContactImport implements ToCollection
{
    use Importable;

    protected $data;

    public function collection(Collection $rows)
    {
        unset($rows[0]);
        $result = [];
        $count = 0;
        $count_success = 0;
        $count_error = 0;

        foreach ($rows as $row) {
            $count += 1;
            DB::beginTransaction();
            try {
                $index = ($row[0]) ?: null;
                if ($index) {
                    $number = trim($row[1]);
                    $name = trim($row[2]);
                    $lastname = trim($row[3]);
                    $email_1 = trim($row[4]);
                    $cellphone_1 = trim($row[5]);
                    $cellphone_2 = trim($row[6]);
                    $phone = trim($row[7]);
                    $address = trim($row[8]);
                    $date_plan_start = date('Y-m-d',($row[9]-25568) * 86400);
                    $date_plan_end = date('Y-m-d',($row[10]-25568) * 86400);

                    if (is_null($name) || $name === '') {
                        throw new Exception("El campo nombre es requerido.");
                    }
                    if (is_null($lastname) || $lastname === '') {
                        throw new Exception("El campo apellido es requerido.");
                    }
                    if (is_null($cellphone_1) || $cellphone_1 === '') {
                        throw new Exception("El campo celular 1 es requerido.");
                    }

                    $record = Contact::query()->where('cellphone_1', $cellphone_1)->first();
                    if($record) {
                        throw new Exception("El contacto ya se encuentra registrado: {$cellphone_1}");
                    }
                    $contact = Contact::query()->create([
                        'number' => $number,
                        'name' => $name,
                        'lastname' => $lastname,
                        'email_1' => $email_1,
                        'cellphone_1' => $cellphone_1,
                        'cellphone_2' => $cellphone_2,
                        'phone' => $phone,
                        'address' => $address,
                        'search' => $name.' '.$lastname,
                        'date_plan_start' => $date_plan_start? date("Y-m-d ", strtotime($date_plan_start)):null,
                        'date_plan_end' => $date_plan_end? date("Y-m-d ", strtotime($date_plan_end)):null,
                        'phase_id' => '01'
                    ]);

                    DB::commit();
                    $count_success += 1;
                    $message = "{$index} - Ok, {$contact->name} {$contact->lastname} registrado correctamente.";
                    $result[$count] = [
                        'success' => true,
                        'message' => $message,
                    ];
                }
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                $count_error += 1;
                $message = "$count - Error, {$e->getMessage()}].";
                $result[$count] = [
                    'success' => false,
                    'message' => $message
                ];
            }
        }
        $total = $count_success + $count_error;


        $this->data = [
            'success' => true,
            'message' => "Se registraron {$count_success} de un total de {$total} registros",
            'logs' => $result
        ];
    }

    public function getData()
    {
        return $this->data;
    }
}
