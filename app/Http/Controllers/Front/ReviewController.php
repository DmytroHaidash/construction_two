<?php

namespace App\Http\Controllers\Front;

use App\Models\Review;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\View\View;

class ReviewController extends Controller
{
    public function index(): View
    {
        $reviews = Review::query()->get();

        return view('app.reviews.index', compact('reviews'));
    }
}
