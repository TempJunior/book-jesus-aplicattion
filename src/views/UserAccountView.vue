<script setup lang="ts">
import NavBarComponent from '@/components/NavBarComponent.vue'
import UpdatingForms from '@/components/UpdatingForms.vue'
import { useAxiosStore } from '@/stores/axiosStore.ts'
import { ref } from 'vue'

const store = useAxiosStore()
const user = store.userData

const userName = ref('' as string)

if (user) {
  userName.value = user.nome
} else {
  userName.value = 'No Data'
}
</script>

<template>
  <div class="bg-gray-800 h-screen">
    <NavBarComponent />
    <UpdatingForms
    :userName="userName"
    />
  </div>
</template>

<style scoped></style>
