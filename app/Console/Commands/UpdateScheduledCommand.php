<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Modules\Contact\Models\Contact;
use Modules\State\Models\Color;

class UpdateScheduledCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scheduled:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Actualizar de programación';

    /**
     * Create a new command instance.
     *
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('Hora de inicio: ' . date('Y-m-d H:i:s'));
        $this->info('Inicializando Proceso');

        $contacts = Contact::query()->get();
        foreach ($contacts as $row) {
            Contact::query()->where('id', $row->id)->update([
                'is_scheduled' => !is_null($row->date_of_action)
            ]);
        }

        $this->info('Finalizando Proceso');
        $this->info('Hora de término: ' . date('Y-m-d H:i:s'));
    }
}
