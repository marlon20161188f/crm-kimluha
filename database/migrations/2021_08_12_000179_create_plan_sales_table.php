<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\Contact\Models\PlanSale;

class CreatePlanSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_sales', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        PlanSale::query()->insert([
            ['id' => 1, 'name' => 'Alta nueva'],
            ['id' => 2, 'name' => 'Portabilidad'],
            ['id' => 3, 'name' => 'Migración'],
            ['id' => 4, 'name' => 'Renovación'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plan_sales');
    }
}
