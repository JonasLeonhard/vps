<?php

require 'vendor/autoload.php';

use Dotenv\Dotenv;
use Kirby\Cms\App as Kirby;

# Load .env file
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$base = __DIR__;
$storage = $base . '/storage';

$kirby = new Kirby([
  'roots' => [
    'index'    => __DIR__,
    'base'     => $base,
    'content'  => $base . '/content',
    'site'     => $base . '/site',
    'assets' => $base . '/assets',
    'media' => $base . '/media',
    'storage'  => $storage,
    'accounts' => $storage . '/accounts',
    'cache'    => $storage . '/cache',
    'sessions' => $storage . '/sessions'
  ]
]);

echo $kirby->render();
