<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\State\Models\Color;

class CreateColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('color');
        });

        Color::query()->insert([
            ['name' => 'Color 1', 'color' => '#B5B5B5'],
            ['name' => 'Color 2', 'color' => '#505050'],
            ['name' => 'Color 3', 'color' => '#684778'],
            ['name' => 'Color 4', 'color' => '#47A3FF'],
            ['name' => 'Color 5', 'color' => '#00BE3F'],
            ['name' => 'Color 6', 'color' => '#2045FE'],
            ['name' => 'Color 7', 'color' => '#30FF37'],
            ['name' => 'Color 8', 'color' => '#FFC830'],
            ['name' => 'Color 9', 'color' => '#FF7C30'],
            ['name' => 'Color 10', 'color' => '#FF3030'],
            ['name' => 'Color 11', 'color' => '#393939'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colors');
    }
}
