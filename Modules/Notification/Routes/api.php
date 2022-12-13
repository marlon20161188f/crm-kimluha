<?php

use Illuminate\Support\Facades\Route;

Route::prefix('notification')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('tables', 'NotificationController@tables');
        Route::post('send_mail', 'NotificationController@sendMail');
    });
});
