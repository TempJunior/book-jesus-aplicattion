<script setup lang="ts">

import NavBarComponent from '@/components/NavBarComponent.vue'
import UpdatingForms from '@/components/UpdatingForms.vue'
import { useAxiosStore } from '@/stores/axiosStore.ts'
import { ref } from 'vue'

const store = useAxiosStore();
const user = store.userData;

const userName  = ref('' as string);

if (user){
  userName.value = user.nome;
}else {
  userName.value = 'No Data';
}

</script>

<template>
<div class="bg-gray-50 dark:bg-gray-800 h-full">
  <NavBarComponent/>

  <section class="flex flex-col p-12 items-start gap-12 h-screen">
    <div>
      <h1 class="text-6xl text-white">{{ userName }}</h1>
    </div>
    <hr class="w-full border-white">

    <UpdatingForms/>
  </section>

</div>
</template>

<style scoped>

</style>
