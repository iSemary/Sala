<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class RegisterMutation {
    public function register($root, array $args) {
        return User::create($args);
    }
}
