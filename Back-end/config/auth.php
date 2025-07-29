<?php

return [

    'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
    ],

        'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        // Ajoute ceci pour le guard admin
        'admin' => [
            'driver' => 'sanctum',
            'provider' => 'admins',
        ],
    ],

        'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],

        // Ajoute ceci
        'admins' => [
            'driver' => 'eloquent',
            'model' => App\Models\Admin::class,
        ],
    ],

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],

        // Tu peux ajouter aussi une config pour admin si besoin
        // 'admins' => [
        //     'provider' => 'admins',
        //     'table' => 'admin_password_resets',
        //     'expire' => 60,
        //     'throttle' => 60,
        // ],
    ],

    'password_timeout' => 10800,

];
