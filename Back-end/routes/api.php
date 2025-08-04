<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AdminAuthController;
use App\Http\Controllers\Api\PlanningController;

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
    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:sanctum');

    // Routes pour la gestion des plannings (Admin uniquement)
    Route::prefix('admin')->group(function () {
        Route::apiResource('plannings', PlanningController::class);
    });

