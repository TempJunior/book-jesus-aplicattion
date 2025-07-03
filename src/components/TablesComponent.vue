<script setup lang="ts">
import { useAxiosStore } from '@/stores/axiosStore.ts'
import axios from 'axios'
import type { IPage } from '@/interfaces/IPage.ts'
import type IEmprestimo from '@/interfaces/IEmprestimo.ts'
import { onMounted, ref } from 'vue'

const store = useAxiosStore()
const emprestimos = ref<IPage<IEmprestimo>| null>(null)
console.log(`TOKEN JWT ${store.tokenJWT}`)
const handlerEmprestimos = async () => {
  try {
    const userId = store.userData?.id

    if (!userId){
      throw new Error('Usuario não autenticado')
    }

    const response = await axios.get<IPage<IEmprestimo>>(
      `http://localhost:8080/emprestimo/buscaPorFiltro`,
      {
        params: { usuario: userId },
        headers: {
          Authorization: `Bearer ${store.userData?.token}`
        }
      })


    emprestimos.value = response.data

  }catch (e){
    console.error(e)
  }
}

onMounted(() => {
  handlerEmprestimos()
})
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Usuario</th>
          <th scope="col" class="px-6 py-3">Autor</th>
          <th scope="col" class="px-6 py-3">Livro</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Data do Emprestimo</th>
          <th scope="col" class="px-6 py-3">Data de Devolução</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="emprestimo in emprestimos?.content" :key="emprestimo.usuario"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{emprestimo.usuario}}
          </th>
          <td class="px-6 py-4">{{emprestimo.autor}}</td>
          <td class="px-6 py-4">{{emprestimo.livro}}</td>
          <td class="px-6 py-4">{{emprestimo.statusEmprestimo}}</td>
          <td class="px-6 py-4">{{emprestimo.data_emprestimo}}</td>
          <td class="px-6 py-4">{{emprestimo.data_devolucao || 'Pendente'}}</td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
