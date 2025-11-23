<!-- Blog -->
<section id="review">
    <div class="container mt-4">
        <div class="row justify-content-center justify-content-xl-between">
            <div class="col-6">
                <h2 class="section-title">
                    @lang('pages.review.title')
                </h2>
            </div>
            <div class="col-6">
                <div class="description-section">
                    <p>@lang('pages.review.description')</p>
                    <a href="{{ route('app.reviews.index') }}" class="btn btn-primary">@lang('pages.review.button')</a>
                </div>
            </div>
            <div id="reviews">
                <div class="review-slider review-slider--start review-slider-main">
                    @foreach($reviews as $item)
                        <div class="review-item">
                            <a href="{{ route('app.reviews.index') }}">
                                <div class="review-card">
                                    <h4 class="title">{{$item->title}}</h4>
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

                                    <div class="decor"></div>
                                    <p class="description">{!! remove_tags($item->content->body, 200) !!}</p>
                                    <a class="link"
                                       href="{{ route('app.reviews.index') }}#{{$item->id}}">@lang('pages.review.read')</a>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
                <div class="slider-nav">
                    <div class="slider-nav-counter">
                        <ul class="slider-count">
                            <li class="slider-count-index slider-count-index--portfolioMain">1</li>
                            <li class="separator">/</li>
                            <li class="slider-count-last slider-count-last--portfolioMain">1</li>
                        </ul>
                        <div class="decor-line"></div>
                    </div>
                    <div class="slider-nav-arrow">
                        <div class="slider-nav-arrow-item slider-nav-arrow-item--prev slider-nav-arrow-item--prev--portfolioMain">
                            @lang('pages.review.previous')
                            <svg width="16" height="12" class="ml-3">
                                <use xlink:href="#slider-arrow-prev"></use>
                            </svg>
                        </div>
                        <div class="slider-nav-arrow-item slider-nav-arrow-item--next slider-nav-arrow-item--next--portfolioMain">
                            <svg width="16" height="12" class="mr-3">
                                <use xlink:href="#slider-arrow-next"></use>
                            </svg>
                            @lang('pages.portfolio.next')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>