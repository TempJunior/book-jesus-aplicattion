<script setup lang="ts">
import { useAxiosStore } from '@/stores/axiosStore.ts'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import type { IPage } from '@/interfaces/IPage.ts'
import type ILivro from '@/interfaces/ILivro.ts'
import type IEmprestimo from '@/interfaces/IEmprestimo.ts'
import router from '@/router'

const store = useAxiosStore()

const userName = ref('' as string)
const user = store.userData
const livroId = ref<number | null>(null)

const livros = ref<IPage<ILivro> | null>(null)
const userId = user?.id

if (user) {
  userName.value = user.nome
} else {
  userName.value = 'No Data'
}

const handlerMakeEmprestimos = async () => {
  try {
    const response = await axios.post<IEmprestimo>(
      `http://localhost:8080/emprestimo`,
      {
        idUsuario: userId,
        idLivro: livroId.value,
      },
      {
        headers: {
          Authorization: `Bearer ${store.userData?.token}`,
        },
      },
    )

    const { id, nomeUsuario, titulosLivro, autorNome, data_emprestimo, data_devolucao, status } =
      response.data

    store.setEmprestimoData({
      id,
      nomeUsuario,
      titulosLivro,
      autorNome,
      data_emprestimo,
      data_devolucao,
      status,
    })


    console.log('Empréstimo realizado com sucesso:', response.data)
    await router.push({name : 'emprestimos'})
  } catch (error) {
    console.error('Erro ao fazer empréstimo:', error)
  }
}

const handlerGetLivros = async () => {
  try {
    const userId = store.userData?.id

    if (!userId) {
      throw new Error('Usuario não autenticado')
    }

    const response = await axios.get<IPage<ILivro>>(`http://localhost:8080/livro`, {
      headers: {
        Authorization: `Bearer ${store.userData?.token}`,
      },
    })

    livros.value = response.data

    console.log('LIVRO ID '+livros.value?.content[0].id)
  } catch (e) {
    console.error(e)
  }
}

onBeforeMount(() => {
  handlerGetLivros()
})
</script>

<template>
  <form class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Usuario</label
      >
      <input
        v-model="userId"
        type="text"
        id="disabled-input"
        aria-label="disabled input"
        class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        disabled
      />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Escolha o seu livro</label
      >
      <select
        v-model="livroId"
        id="small"
        class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled selected>Selecione</option>
        <option
          :value="livro.id"
          v-for="livro in livros?.content" :key="livro.id">
          {{ livro.titulo }}
        </option>
      </select>
    </div>
    <button
      @click="handlerMakeEmprestimos"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<style scoped></style>
