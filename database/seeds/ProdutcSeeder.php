<?php

use Illuminate\Database\Seeder;
use App\Produtc;
class ProdutcSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Produtc::class, 50)->create();
    }
}
