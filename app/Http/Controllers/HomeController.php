<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        return Inertia::render('HomePage/Index');
    }

    public function show() {
        return Inertia::render('HomePage/Show');
    }
}
