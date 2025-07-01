<script setup lang="ts">

import NavBarComponent from '@/components/NavBarComponent.vue'
import UpdatingForms from '@/components/UpdatingForms.vue'
</script>

<template>
<div class="bg-gray-50 dark:bg-gray-800 h-full">
  <NavBarComponent/>

  <section class="flex flex-col p-12 items-start gap-12 h-screen">
    <div>
      <h1 class="text-7xl">Junior</h1>
    </div>
    <UpdatingForms/>
  </section>

</div>
</template>

<style scoped>

</style>
