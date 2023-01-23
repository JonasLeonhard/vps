<?php

return [
  'debug' => $_ENV['isLocal'] === 'true', # only for local-development
  'api' => [
    'basicAuth' => true,
    'allowInsecure' => $_ENV['isLocal'] === 'true' # only for local-development
  ],
  'languages' => [
    'detect' => true
  ]
];
