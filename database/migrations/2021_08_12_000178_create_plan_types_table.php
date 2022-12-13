<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\Contact\Models\PlanType;

class CreatePlanTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        PlanType::query()->insert([
            ['id' => 1, 'name' => 'Prepago'],
            ['id' => 2, 'name' => 'Postpago'],
            ['id' => 3, 'name' => 'HFC'],
            ['id' => 4, 'name' => 'FTTH'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plan_types');
    }
}
