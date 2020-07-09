<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Movie;
use Faker\Generator as Faker;

$factory->define(Movie::class, function (Faker $faker) {
    return [
        'nombre' => $faker->text($maxNbChars = 30),
        'fecha_publicacion' => $faker->date($format = 'm-d-Y', $max = 'now'),
        'estado' => 'activo',
        'turno' => $faker->time($format = 'H:i:s', $max = 'now'),
    ];
});
