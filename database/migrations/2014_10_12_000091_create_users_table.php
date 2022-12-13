<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Modules\User\Models\User;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->string('name');
            $table->string('lastname');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role_id');
            $table->boolean('is_active')->default(true);
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('role_id')->references('id')->on('roles');
        });

        User::query()->insert([
            'number' => '41784439',
            'name' => 'Carlos Alfredo',
            'lastname' => 'Erique Gaspar',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123456'),
            'role_id' => 'admin',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        User::query()->insert([
            'number' => '41784438',
            'name' => 'Luis Angel',
            'lastname' => 'Perez Castro',
            'email' => 'supervisor@gmail.com',
            'password' => Hash::make('123456'),
            'role_id' => 'supervisor',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        User::query()->insert([
            'number' => '41784430',
            'name' => 'Pedro Jorge',
            'lastname' => 'Cardenas Ruiz',
            'email' => 'operador@gmail.com',
            'password' => Hash::make('123456'),
            'role_id' => 'operator',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
