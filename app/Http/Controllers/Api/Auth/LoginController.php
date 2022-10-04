<?php

declare(strict_types=1);


namespace App\Http\Controllers\Api\Auth;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Facades\JWTProvider;
use Tymon\JWTAuth\JWT;

final class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (! $token = JWTAuth::attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token, $request);
    }

    protected function createNewToken($token, $request){


        $myTTL = 1; //minutes
        JWTAuth::factory()->setTTL($myTTL);
        $email = $request->input('email');
        $user = User::where('email', '=', $email)->first();
        $token2 = JWTAuth::fromUser($user);

        return response()->json([
            'access_token' => $token,
            'access_token_v2' => $token2,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
