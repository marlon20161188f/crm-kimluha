<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\State\Models\State;

class CreateStatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('states', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description');
            $table->unsignedBigInteger('color_id');
            $table->timestamps();

            $table->foreign('color_id')->references('id')->on('colors');
        });

        State::query()->insert([
            ['name' => 'Estado 1', 'color_id' => 1, 'description' => 'Estado 1 - 1', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Estado 2', 'color_id' => 2, 'description' => 'Estado 1 - 2', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Estado 3', 'color_id' => 3, 'description' => 'Estado 1 - 3', 'created_at' => now(), 'updated_at' => now()]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('states');
    }
}
