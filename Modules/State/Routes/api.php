<?php

use Illuminate\Support\Facades\Route;

Route::prefix('state')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('init_data_table', 'StateController@initTable');
        Route::post('records', 'StateController@records');
        Route::get('tables', 'StateController@tables');
        Route::get('record/{state}', 'StateController@record');
        Route::post('/', 'StateController@store');
        Route::delete('{state}', 'StateController@destroy');
    });
});
