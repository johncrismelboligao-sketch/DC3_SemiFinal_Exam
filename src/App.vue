<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/reservations">Reservations</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <hr>

    <RouterView />
  </div>
</template>