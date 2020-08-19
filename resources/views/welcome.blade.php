@extends('layouts.app')
@section('content')
    <div class="flex bg-gray-100 border-b border-gray-100 py-4">
        <div class="container mx-auto">
            <router-link class="mr-4" to="/" exact>Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </div>
    <div class="container mx-auto mt-10">
        <router-view></router-view>
    </div>
@endsection