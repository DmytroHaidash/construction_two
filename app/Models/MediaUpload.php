<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class MediaUpload extends Model implements HasMedia
{
    use InteractsWithMedia;

	/**
	 * Media config
	 */
	public function registerMediaCollections(): void
	{
		$this
			->addMediaCollection('uploads')
			->registerMediaConversions(function (Media $media = null) {
				$this
					->addMediaConversion('thumb')
					->crop(Manipulations::CROP_CENTER, 100, 100)
					->width(100)
					->height(100);

				$this
					->addMediaConversion('preview')
					->width(300)
					->height(300);
			});
	}
}
