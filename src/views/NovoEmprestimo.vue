<script setup lang="ts">

import NavBarComponent from '@/components/NavBarComponent.vue'
import PhotoGalleryComponent from '@/components/PhotoGalleryComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CadastrarEmprestimo from '@/components/CadastrarEmprestimo.vue'
</script>

<template>
<div>
  <NavBarComponent/>

  <section class="p-4">
    <CadastrarEmprestimo/>
  </section>

  <section class="p-4">
    <PhotoGalleryComponent />
  </section>

  <FooterComponent/>
</div>
</template>

<style scoped>

</style>
