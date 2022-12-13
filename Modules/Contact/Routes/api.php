<?php

use Illuminate\Support\Facades\Route;

Route::prefix('contact')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('init_data_table', 'ContactController@initTable');
        Route::post('records', 'ContactController@records');
        Route::get('tables', 'ContactController@tables');
        Route::get('record/{contact}', 'ContactController@record');
        Route::post('/', 'ContactController@store');
        Route::delete('{contact}', 'ContactController@destroy');
        Route::get('index_tables', 'ContactController@indexTables');
        Route::post('update_filter_state', 'ContactController@updateFilterState');
        Route::post('export', 'ContactController@export');
        Route::post('import', 'ContactController@import');
        Route::get('to_assign', 'ContactController@toAssign');

        Route::prefix('tracking')->group(function () {
            Route::get('records/{contact}', 'TrackingController@records');
            Route::get('tables', 'TrackingController@tables');
            Route::post('/', 'TrackingController@store');
            Route::delete('{tracking}', 'TrackingController@destroy');
        });

        Route::prefix('tracking_report')->group(function () {
            Route::get('init_data_table', 'TrackingReportController@initTable');
            Route::post('records', 'TrackingReportController@records');
            Route::post('export', 'TrackingReportController@export');
        });
    });
});
