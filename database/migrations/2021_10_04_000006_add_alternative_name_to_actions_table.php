<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Modules\Contact\Models\Action;

class AddAlternativeNameToActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('actions', function (Blueprint $table) {
            $table->string('alternative_name')->nullable();
            $table->boolean('is_default')->default(false);
        });

        $alternatives = ['mail' => 'E-mail', 'phone' => 'Llamada', 'videocam' => 'Reunión virtual',
            'group' => 'Reunión presencial', 'whatsapp' => 'Whatsapp'];

        foreach ($alternatives as $icon => $name) {
            Action::query()->where('icon', $icon)->update([
                'alternative_name' => $name,
                'is_default' => ($icon === 'phone')
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('actions', function (Blueprint $table) {
            $table->dropColumn('alternative_name');
        });
    }
}
