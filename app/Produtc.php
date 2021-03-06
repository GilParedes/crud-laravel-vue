<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produtc extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'description', 'price', 'status'
    ];
}
