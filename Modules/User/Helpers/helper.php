<?php

use Modules\User\Models\User;

if (!function_exists('__user_only_sellers')) {
    function __user_only_sellers()
    {
        return User::query()->whereNotRoleSuper()->where('is_active', true)->get();
    }
}
