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
  ]
];
