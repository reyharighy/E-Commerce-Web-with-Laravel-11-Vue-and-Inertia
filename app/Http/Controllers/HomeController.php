<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        return inertia(
            'HomePage/Index',
            [
                'exampleProps' => 'E-Commerce with Laravel 11, Vue, and Inertia'
            ]
        );
    }
}