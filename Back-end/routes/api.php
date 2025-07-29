<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AdminAuthController;

Route::prefix('admin')->group(function () {
    Route::post('register', [AdminAuthController::class, 'register']); // Inscription admin
    Route::post('login', [AdminAuthController::class, 'login']);       // Connexion admin

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('logout', [AdminAuthController::class, 'logout']); // Déconnexion admin
        Route::get('user', function (Request $request) {
            return $request->user();
        });
    });
});
