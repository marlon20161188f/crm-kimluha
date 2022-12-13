<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\Contact\Models\MobileOperator;

class CreateMobileOperatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mobile_operators', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        MobileOperator::query()->insert([
            ['id' => 1, 'name' => 'Entel'],
            ['id' => 2, 'name' => 'Claro'],
            ['id' => 3, 'name' => 'Movistar'],
            ['id' => 4, 'name' => 'Bitel'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mobile_operators');
    }
}
