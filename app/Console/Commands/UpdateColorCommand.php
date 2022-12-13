<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Modules\State\Models\Color;

class UpdateColorCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'color:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Actualizar de colores';

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

        $colors = ['#B5B5B5', '#505050', '#684778','#47A3FF','#00BE3F','#2045FE','#30FF37', '#FFC830','#FF7C30','#FF3030','#393939'];

        foreach ($colors as $index => $color) {
            Color::query()->where('id', $index)->update([
                'color' => $color
            ]);
        }

        $this->info('Finalizando Proceso');
        $this->info('Hora de término: ' . date('Y-m-d H:i:s'));
    }
}
