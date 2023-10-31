<?php

// Access-Control Headers for PHP Server
if ($_ENV['isLocal'] === 'true') {
  header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400'); // cache for 1 day

  // Access-Control headers are received during OPTIONS requests
  if ($_SERVER['REQUEST_METHOD'] ?? null == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      header("HTTP/1.1 200 OK");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-type, Authorization, Origin, X-Requested-With, X-Language, Accept-Language'");
  }
}

return [
  'debug' => $_ENV['isLocal'] === 'true',
  'api' => [
    'basicAuth' => true,
    'allowInsecure' => true
  ],
  'url' => '/',
  'languages' => [
    'detect' => true
  ],
  'cache' => [
    'pages' => [
      'active' => true,
    ]
  ],
  'home' => 'admin-panel',
  'kql' => [
    'methods' => [
      'allowed' => [
        'Kirby\\Cms\\Languages::toJson',
        'Kirby\\Cms\\App::meta_information',
        'Kirby\\Cms\\Languages::de',
        'Kirby\\Cms\\App::kirby.languages'
      ]
    ],
    'classes' => [
      'allowed' => [
        'Kirby\\Content\\Content',
        'Kirby\\Content\\Field',
        'Kirby\\Cms\\Language'
      ]
    ]
  ],
  'panel' => [
    'install' => true
  ],
  'auth' => [
    'debug' => $_ENV['isLocal'] === 'true',
  ],
  'thumbs' => [ // in toBlocksExtended this will be appended to images srcsets depending on the selected srcset in you files/default.yml -> srcset select
    'srcsets' => [
      'default' => [
        '300w'  => ['width' => 300, 'format' => 'webp', 'quality' => 90, 'crop' => 'center'],
        '600w'  => ['width' => 600, 'format' => 'webp', 'quality' => 90, 'crop' => 'center'],
        '900w'  => ['width' => 900, 'format' => 'webp', 'quality' => 90, 'crop' => 'center'],
        '1200w' => ['width' => 1200, 'format' => 'webp', 'quality' => 90, 'crop' => 'center'],
        '1800w' => ['width' => 1800, 'format' => 'webp', 'quality' => 90, 'crop' => 'center']
      ],
      'square' => [
        '300w'  => ['width' => 300, 'height' => 300, 'format' => 'webp', 'quality' => 90, 'crop' => 'center'],
        '600w'  => ['width' => 600, 'height' => 600, 'format' => 'webp', 'quality' => 90, 'crop' => 'center'],
        '900w'  => ['width' => 900, 'height' => 900, 'format' => 'webp', 'quality' => 90, 'crop' => 'center'],
        '1200w' => ['width' => 1200, 'height' => 1200, 'format' => 'webp', 'quality' => 90, 'crop' => 'center'],
        '1800w' => ['width' => 1800, 'height' => 1800, 'format' => 'webp', 'quality' => 90, 'crop' => 'center']
      ]
    ]
  ]
];
