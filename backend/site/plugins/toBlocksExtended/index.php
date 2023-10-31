<?php

use Kirby\Cms\App as Kirby;
use Kirby\Cms\Block;
use Kirby\Content\Field;
use Kirby\Cms\Files;
use Kirby\Cms\File;

/*
 * Expand block fields like:
 * type: images
 */

$extend = function (Block $block) {
  $blockType = $block->type();

  if ($blockType == 'images') {
    /** @var Files */
    $images = $block->content()->get('images')->toFiles();
    $transformImage = function (File $image) {
      $imageArray = $image->toArray();
      $imageArray['srcset'] = $image->srcset($image->content->get('srcset')->value); // pick selected srcset from config.php
      return $imageArray;
    };

    $block->content()->update(['images' => $images->map($transformImage)->values()]);
  }
  return $block;
};

Kirby::plugin('jonasleonhard/toBlocksExtended', [
  'fieldMethods' => [
    'toBlocksExtended' => function (Field $field) use ($extend) {
      return $field
        ->toBlocks()
        ->map($extend);
    }
  ]
]);
