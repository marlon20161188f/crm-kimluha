<?php

use Illuminate\Support\Facades\Route;

Route::view('{all}', 'layouts.frontend')
    ->where(['all' => '^(?!api).*$']);

//Route::get('/', function () {
//    return view('welcome');
//});
