<?php

use Illuminate\Support\Facades\Route;

Route::prefix('user')->group(function () {

    Route::middleware('auth:sanctum')->group(function () {

        Route::get('init_data_table', 'UserController@initTable');
        Route::post('records', 'UserController@records');
        Route::get('tables', 'UserController@tables');
        Route::get('record/{user}', 'UserController@record');
        Route::post('/', 'UserController@store');
        Route::get('lock/{user}', 'UserController@lock');
        Route::delete('{user}', 'UserController@destroy');

    });
});
