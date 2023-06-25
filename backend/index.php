<?php

require 'kirby/bootstrap.php';

use Dotenv\Dotenv;
use Kirby\Cms\App as Kirby;

# Load .env file
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

echo (new Kirby)->render();
