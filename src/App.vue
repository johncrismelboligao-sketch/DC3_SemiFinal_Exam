<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header class="navbar">
      <h1 class="brand"> School Equipment Reservation</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/reservations">Reservations</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 20px;
  padding: 20px;
}
</style>