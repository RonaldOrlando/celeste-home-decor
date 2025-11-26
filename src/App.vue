<template>
  <div class="min-h-screen flex flex-col bg-grisSuave">
    <Navbar />
    <div class="flex-1">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
