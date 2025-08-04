<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Planning;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class PlanningController extends Controller
{
    /**
     * Récupérer tous les plannings
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Planning::query();

            // Filtres optionnels
            if ($request->has('status')) {
                $query->where('status', $request->status);
            }

            if ($request->has('start_date') && $request->has('end_date')) {
                $query->byDateRange($request->start_date, $request->end_date);
            }

            // Pagination
            $perPage = $request->get('per_page', 10);
            $plannings = $query->orderBy('start_date', 'asc')->paginate($perPage);

            return response()->json([
                'success' => true,
                'message' => 'Plannings récupérés avec succès',
                'data' => $plannings
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la récupération des plannings',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Créer un nouveau planning
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'start_date' => 'required|date|after_or_equal:today',
                'end_date' => 'required|date|after_or_equal:start_date',
                'start_time' => 'nullable|date_format:H:i',
                'end_time' => 'nullable|date_format:H:i|after:start_time',
                'status' => 'in:active,inactive,completed',
                'location' => 'nullable|string|max:255',
                'participants' => 'nullable|array',
                'participants.*' => 'string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Erreurs de validation',
                    'errors' => $validator->errors()
                ], 422);
            }

            $planning = Planning::create($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Planning créé avec succès',
                'data' => $planning
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la création du planning',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Récupérer un planning spécifique
     */
    public function show($id): JsonResponse
    {
        try {
            $planning = Planning::find($id);

            if (!$planning) {
                return response()->json([
                    'success' => false,
                    'message' => 'Planning non trouvé'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Planning récupéré avec succès',
                'data' => $planning
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la récupération du planning',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Modifier un planning
     */
    public function update(Request $request, $id): JsonResponse
    {
        try {
            $planning = Planning::find($id);

            if (!$planning) {
                return response()->json([
                    'success' => false,
                    'message' => 'Planning non trouvé'
                ], 404);
            }

            $validator = Validator::make($request->all(), [
                'title' => 'sometimes|string|max:255',
                'description' => 'nullable|string',
                'start_date' => 'sometimes|date',
                'end_date' => 'sometimes|date|after_or_equal:start_date',
                'start_time' => 'nullable|date_format:H:i',
                'end_time' => 'nullable|date_format:H:i|after:start_time',
                'status' => 'in:active,inactive,completed',
                'location' => 'nullable|string|max:255',
                'participants' => 'nullable|array',
                'participants.*' => 'string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Erreurs de validation',
                    'errors' => $validator->errors()
                ], 422);
            }

            $planning->update($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Planning modifié avec succès',
                'data' => $planning->fresh()
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la modification du planning',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Supprimer un planning
     */
    public function destroy($id): JsonResponse
    {
        try {
            $planning = Planning::find($id);

            if (!$planning) {
                return response()->json([
                    'success' => false,
                    'message' => 'Planning non trouvé'
                ], 404);
            }

            $planning->delete();

            return response()->json([
                'success' => true,
                'message' => 'Planning supprimé avec succès'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la suppression du planning',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}