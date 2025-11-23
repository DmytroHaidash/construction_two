@extends('layouts.app', ['page_title' => trans('breadcrumb.reviews')])

@section('content')
    <section id="single-blog" class="page-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">@lang('breadcrumb.main')</a></li>
                            <li class="breadcrumb-item">@lang('breadcrumb.reviews')</li>
                        </ol>
                    </nav>
                    <a href="{{url()->previous()}}" class="back-navigation mb-4">
                        @lang('breadcrumb.back')
                    </a>
                </div>
            </div>
            <div class="reviews">
                @foreach($reviews as $review)
                    <div class="row position-relative" id="{{$review->id}}">
                        <div сlass="col-3">
                            <div class="title-review">
                                <h4>{{ $review->title }}</h4>
                                <div class="rating">
                                    <svg width="22" height="22">
                                        <use xlink:href="#star-icon" ></use>
                                    </svg>
                                    <svg width="22" height="22">
                                        <use xlink:href="#star-icon"></use>
                                    </svg>
                                    <svg width="22" height="22">
                                        <use xlink:href="#star-icon"></use>
                                    </svg>
                                    <svg width="22" height="22">
                                        <use xlink:href="#star-icon"></use>
                                    </svg>
                                    <svg width="22" height="22">
                                        <use xlink:href="#star-icon"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="col-9 description">
                            <div class="description-review">
                                {!!  $review->content->body  !!}
                            </div>
                        </div>
                    </div>
                    <div class="decor"></div>
                @endforeach
            </div>
        </div>
    </section>
@endsection