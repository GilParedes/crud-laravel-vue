<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // call User seeder
        $this->call(
            [
                UserSeeder::class,
                ProdutcSeeder::class,
                MovieSeeder::class
            ]    
        );
    }
}
