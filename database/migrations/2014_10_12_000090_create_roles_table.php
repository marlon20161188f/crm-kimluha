<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->string('id', 10)->primary();
            $table->string('name');
        });

        DB::table('roles')->insert([
            ['id' => 'admin', 'name' => 'Administrador'],
            ['id' => 'supervisor', 'name' => 'Supervisor'],
            ['id' => 'operator', 'name' => 'Asesor'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
