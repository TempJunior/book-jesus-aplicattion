<script setup lang="ts">
import BookCard from '@/components/BookCard.vue'
import NavBarComponent from '@/components/NavBarComponent.vue'
import CarrosselComponent from '@/components/CarrosselComponent.vue'
import PhotoGalleryComponent from '@/components/PhotoGalleryComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div>
    <NavBarComponent />
    <main class="h-screen">
      <section class="p-5 grid grid-cols-[1fr_2fr] grid-rows-1 gap-4">
        <div class="flex items-center justify-between gap-8 col-span-1">
          <BookCard img="/src/assets/img_cards/mate_o_dragao_israel_subira.png" />
          <BookCard img="/src/assets/img_cards/um_homem_segundo_coracao_de_deus.png" />
        </div>

        <div class="flex items-center">
          <CarrosselComponent />
        </div>
      </section>

      <section class="p-4">
        <PhotoGalleryComponent />
      </section>

      <FooterComponent/>

    </main>
  </div>


</template>

<style scoped></style>
