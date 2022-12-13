<?php

use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('data', 'DashboardController@data');
    });
});
