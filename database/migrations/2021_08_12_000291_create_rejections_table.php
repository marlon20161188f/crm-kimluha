<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\Contact\Models\Phase;
use Modules\Contact\Models\Rejection;

class CreateRejectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rejections', function (Blueprint $table) {
            $table->char('id', 2)->primary();
            $table->string('name');
        });

        Rejection::query()->insert([
            ['id' => '01', 'name' => 'No interesado'],
            ['id' => '02', 'name' => 'Número no existe'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rejections');
    }
}
