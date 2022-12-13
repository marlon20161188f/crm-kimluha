<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\Contact\Models\Action;

class CreateActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('icon');
        });

        Action::query()->insert([
            ['name' => 'Enviar email', 'icon' => 'mail'],
            ['name' => 'Llamar', 'icon' => 'phone'],
            ['name' => 'Reunión virtual', 'icon' => 'videocam'],
            ['name' => 'Reunión presencial', 'icon' => 'group'],
            ['name' => 'Whatsapp', 'icon' => 'whatsapp'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actions');
    }
}
