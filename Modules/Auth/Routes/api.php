<?php

use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {

    Route::post('login', 'AuthController@login');

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('logout', 'AuthController@logout');
        Route::get('data', 'AuthController@data');
//        Route::get('menu', 'AuthController@menu');
        Route::get('tables', 'AuthController@tables');
        Route::post('update_password', 'ProfileController@updatePassword');
        Route::prefix('profile')->group(function () {
            Route::get('tables', 'ProfileController@tables');
            Route::get('/', 'ProfileController@record');
            Route::post('/', 'ProfileController@store');
        });
    });
});


