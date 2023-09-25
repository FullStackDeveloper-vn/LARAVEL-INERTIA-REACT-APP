<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\User;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

// echo URL::current();

class InertiaController extends Controller
{
    public function index()
    {
        return Inertia::render('xx', [
            'users' => User::all()->map(function ($user) {
                return [
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    // 'edit_url' => route('users.edit', $user),
                ];
            }),
            // 'create_url' => route('users.create'),
        ]);
    }

    public function search(Request $request)
    {
        ($data = $request->toArray());

        return Inertia::render('Home', [
            'data_search' => $data
        ]);
    }
}
