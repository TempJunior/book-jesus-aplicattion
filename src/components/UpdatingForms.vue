<script setup lang="ts">
import { useAxiosStore } from '@/stores/axiosStore.ts'
import { ref } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import EditButton from '@/components/EditButton.vue'

export interface Props {
  userName: string
}

const props = withDefaults(defineProps<Props>(), {
  userName: '',
})

const store = useAxiosStore()
const user = store.userData

const userEmail = ref('' as string)
const userTel = ref('' as string)

if (user) {
  userEmail.value = user.email
  userTel.value = user.telefone
} else {
  userEmail.value = ' '
  userTel.value = ' '
}
</script>

<template>
  <section class="flex flex-col items-center justify-center">
    <div class="mt-8">
      <h1 class="text-3xl text-white">Login e segurança</h1>
    </div>

    <div class="flex flex-col w-[500px] rounded-2xl border border-white outline-none bg-gray-900 mt-2">
      <div class="border-b rounded-t-2xl p-4 flex justify-between items-center text-white">
        <div class="flex flex-col">
          <h1 class="text-[18px]">Nome</h1>
          <span>{{ props.userName }}</span>
        </div>
        <EditButton
        label="Editar"
        />
      </div>

      <div class="border-b rounded-t-2xl p-4 flex justify-between items-center text-white">
        <div class="flex flex-col">
          <h1 class="text-[18px]">E-mail</h1>
          <span>{{ userEmail }}</span>
        </div>
        <EditButton
          label="Editar"
        />
      </div>

      <div class="rounded-t-2xl p-4 flex justify-between items-center text-white">
        <div class="flex flex-col">
          <h1 class="text-[18px]">Telefone</h1>
          <span>{{ userTel }}</span>
        </div>
        <EditButton
          label="Editar"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
