<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\Contact\Models\ChipType;

class CreateChipTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chip_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        ChipType::query()->insert([
            ['id' => 1, 'name' => 'Sólo Chip'],
            ['id' => 2, 'name' => 'Chip + equipo'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chip_types');
    }
}
