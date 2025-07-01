<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import ApresentationComponent from '@/components/ApresentationComponent.vue'
import NavForHomePageAndLogin from '@/components/NavForHomePageAndLogin.vue'
</script>

<template>
  <div>
    <NavForHomePageAndLogin />

    <main class="h-screen">
      <ApresentationComponent />

      <FooterComponent />
    </main>
  </div>

</template>

<style scoped></style>
