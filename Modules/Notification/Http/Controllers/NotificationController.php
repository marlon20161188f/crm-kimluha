<?php

namespace Modules\Notification\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Modules\Contact\Models\Contact;
use Modules\Notification\Mail\NotificationMail;
use Modules\State\Models\State;

class NotificationController extends Controller
{
    public function tables()
    {
        $_states = State::query()->get();
        $states[] = ['id' => null, 'name' => 'Seleccionar'];
        foreach ($_states as $row) {
            $states[] = [
                'id' => $row->id,
                'name' => $row->name,
            ];
        }

        return [
            'states' => $states,
        ];
    }

    public function sendMail(Request $request)
    {
//        return $request->all();
        try {
            $user = auth()->user();
            $state_id = $request->input('state_id');
            $subject = $request->input('subject');
            $message = $request->input('message');
            $file_path = null;

            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $ext = $file->getClientOriginalExtension();
                $name = 'image_' . date('YmdHis') . '.' . $ext;
                $file->storeAs('public/uploads', $name);
                $file_path = asset('storage/uploads/'.$name);
            }

            $data = [
                'subject' => $subject,
                'message' => $message,
                'file_path' => $file_path,
                'from_email' => env('MAIL_FROM_ADDRESS'),
                'from_name' => 'CRM Mypefact',
                'template' => "notification::mail.notification"
            ];

            $operator_id = $user->id;
            if($user->role_id !== 'operator') {
                $operator_id = null;
            }
            $contacts = Contact::query()
                ->where('state_id', $state_id)
                ->whereOperator($operator_id)
                ->get();

            $count = 0;
            foreach ($contacts as $contact) {
                if($contact->email_1) {
                    $mail = new NotificationMail($data);
                    Mail::to($contact->email_1)->send($mail);
                    $count += 1;
                }
            }

            $success = true;
            $message = 'Se enviaron '.$count.' correos satisfactoriamente';
        } catch (\Exception $e) {
            $success = false;
            $message = $e->getMessage();
        }

        return [
            'success' => $success,
            'message' => $message,
        ];
    }
}
