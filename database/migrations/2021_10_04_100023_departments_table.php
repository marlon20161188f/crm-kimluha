<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->char('id', 2)->primary()->index();
            $table->string('name');
            $table->boolean('is_active')->default(true);
        });

        DB::table('departments')->insert([
            ['id' => '01', 'name' => 'AMAZONAS'],
            ['id' => '02', 'name' => 'ÁNCASH'],
            ['id' => '03', 'name' => 'APURIMAC'],
            ['id' => '04', 'name' => 'AREQUIPA'],
            ['id' => '05', 'name' => 'AYACUCHO'],
            ['id' => '06', 'name' => 'CAJAMARCA'],
            ['id' => '07', 'name' => 'CALLAO'],
            ['id' => '08', 'name' => 'CUSCO'],
            ['id' => '09', 'name' => 'HUANCAVELICA'],
            ['id' => '10', 'name' => 'HUÁNUCO'],
            ['id' => '11', 'name' => 'ICA'],
            ['id' => '12', 'name' => 'JUNÍN'],
            ['id' => '13', 'name' => 'LA LIBERTAD'],
            ['id' => '14', 'name' => 'LAMBAYEQUE'],
            ['id' => '15', 'name' => 'LIMA'],
            ['id' => '16', 'name' => 'LORETO'],
            ['id' => '17', 'name' => 'MADRE DE DIOS'],
            ['id' => '18', 'name' => 'MOQUEGUA'],
            ['id' => '19', 'name' => 'PASCO'],
            ['id' => '20', 'name' => 'PIURA'],
            ['id' => '21', 'name' => 'PUNO'],
            ['id' => '22', 'name' => 'SAN MARTIN'],
            ['id' => '23', 'name' => 'TACNA'],
            ['id' => '24', 'name' => 'TUMBES'],
            ['id' => '25', 'name' => 'UCAYALI'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departments');
    }
}
