<?php

use Kirby\Cms\App as Kirby;
use Kirby\Cms\Block;
use Kirby\Content\Field;
use Kirby\Cms\Files;
use Kirby\Cms\File;

/**
 * Appends srcset based on picked srcset in image
 */
$transformImage = function (File $image) {
  $imageArray = $image->toArray();
  $imageArray['srcset'] = $image->srcset($image->content->get('srcset')->value); // pick selected srcset from config.php
  return $imageArray;
};

/*
 * Expand block fields like:
 * type: images
 */
$extend = function (Block $block) use ($transformImage) {
  $blockType = $block->type();

  if ($blockType == 'images') {
    /** @var Files */
    $images = $block->content()->get('images')->toFiles();
    $block->content()->update(['images' => $images->map($transformImage)->values()]);
  }
  return $block;
};

Kirby::plugin('jonasleonhard/fieldMethodsExtended', [
  'fieldMethods' => [
    'toBlocksExtended' => function (Field $field) use ($extend) {
      return $field
        ->toBlocks()
        ->map($extend);
    },
    'toFileExtended' => function (Field $field) use ($transformImage) {
      $file = $field->toFile();
      if (!$file) return $file;

      return $transformImage($file);
    }
  ]
]);
