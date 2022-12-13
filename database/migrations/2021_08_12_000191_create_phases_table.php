<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\Contact\Models\Phase;

class CreatePhasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phases', function (Blueprint $table) {
            $table->char('id', 2)->primary();
            $table->string('name');
        });

        Phase::query()->insert([
            ['id' => '01', 'name' => 'No asignado'],
            ['id' => '02', 'name' => 'Asignado'],
            ['id' => '03', 'name' => 'Rechazado'],
            ['id' => '04', 'name' => 'Cerrado'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phases');
    }
}
