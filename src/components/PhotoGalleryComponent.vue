<script setup lang="ts">
import { ref } from 'vue'

const photos = ref([
  {
    id: 1,
    src: '/src/assets/galeria_photos/jesus_nao_e_quem_voce_pensa.png',
  },
  {
    id: 2,
    src: '/src/assets/galeria_photos/o_peregrino.png',
  },
  {
    id: 3,
    src: '/src/assets/galeria_photos/puro_e_simples.png',
  },
  {
    id: 4,
    src: '/src/assets/galeria_photos/igreja_que_calam_as_mulheres.png',
  },
  {
    id: 5,
    src: '/src/assets/galeria_photos/manso_e_humilde.png',
  },
  {
    id: 6,
    src: '/src/assets/galeria_photos/ponto_fraco_de_deus.png',
  },
  {
    id: 7,
    src: '/src/assets/galeria_photos/ela_e_a_imagem_dele.png',
  },
  {
    id: 8,
    src: '/src/assets/galeria_photos/jesus_que_as_mulheres_viram.png',
  },
  {
    id: 9,
    src: '/src/assets/galeria_photos/deus_e_tres.png',
  },
])
</script>

<template>
  <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button
      type="button"
      class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
    >
      All categories
    </button>
    <button
      type="button"
      class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
    >
      Shoes
    </button>
    <button
      type="button"
      class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
    >
      Bags
    </button>
    <button
      type="button"
      class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
    >
      Electronics
    </button>
    <button
      type="button"
      class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
    >
      Gaming
    </button>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div v-for="photo in photos" :key="photo.id">
      <img class="h-auto max-w-full rounded-lg" :src="photo.src" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
