<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;

final class LogoutController extends Controller
{
    public function __invoke()
    {
        auth()->logout();
        return response()->noContent(200);
    }
}
