<?php

use Illuminate\Support\Facades\Route;

Route::prefix('role')->group(function () {

    Route::middleware('auth:sanctum')->group(function () {

        Route::get('init_data_table', 'RoleController@initTable');
        Route::get('records', 'RoleController@records');
        Route::get('tables', 'RoleController@tables');
        Route::get('record/{role}', 'RoleController@record');
        Route::post('/', 'RoleController@store');
        Route::delete('{role}', 'RoleController@destroy');
        Route::get('permissions/{role}', 'RoleController@permissions');
        Route::post('permissions', 'RoleController@storePermissions');

    });
});
