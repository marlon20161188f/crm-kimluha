<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('number')->nullable();
            $table->string('name');
            $table->string('lastname');
            $table->date('date_of_birth')->nullable();
            $table->string('email_1')->nullable();
            $table->string('cellphone_1');
            $table->string('cellphone_2')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->unsignedBigInteger('operator_id')->nullable();
            $table->unsignedBigInteger('mobile_operator_id')->nullable();
            $table->unsignedBigInteger('plan_type_id')->nullable();
            $table->unsignedBigInteger('plan_sale_id')->nullable();
            $table->decimal('plan_price', 18, 2)->default(0);
            $table->unsignedBigInteger('chip_type_id')->nullable();
            $table->date('date_plan_start')->nullable();
            $table->date('date_plan_end')->nullable();
            $table->char('phase_id', 2);
            $table->char('rejection_id', 2)->nullable();
            $table->unsignedBigInteger('state_id')->nullable();
            $table->unsignedBigInteger('action_id')->nullable();
            $table->date('date_of_action')->nullable();
            $table->time('time_of_action')->nullable();
            $table->longText('search')->nullable();
            $table->timestamps();

            $table->foreign('operator_id')->references('id')->on('users');
            $table->foreign('mobile_operator_id')->references('id')->on('mobile_operators');
            $table->foreign('plan_type_id')->references('id')->on('plan_types');
            $table->foreign('plan_sale_id')->references('id')->on('plan_sales');
            $table->foreign('chip_type_id')->references('id')->on('chip_types');
            $table->foreign('phase_id')->references('id')->on('phases');
            $table->foreign('state_id')->references('id')->on('states');
            $table->foreign('rejection_id')->references('id')->on('rejections');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}
