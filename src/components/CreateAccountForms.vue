<script setup lang="ts">
import router from '@/router'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ref } from 'vue'
import { useAxiosStore } from '@/stores/axiosStore.ts'

const userEmail = ref('' as string)
const userPassword = ref('' as string)
const userName = ref('' as string)
const userTel = ref('' as string)

const store = useAxiosStore()

const handlerCreateAccount = async () => {
  try {
    const res = await store.http.post('/account', {
      email: userEmail.value,
      password: userPassword.value,
      name: userName.value,
      telefone: userTel.value,
    })

    console.log('Successfully created', res.data)

    await router.push('/login')
  }catch(err) {
    console.log(err)
  }
}

</script>

<template>
  <form class="max-w-sm mx-auto" action="#" @submit.prevent="handlerCreateAccount">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >E-mail</label
      >
      <input
        v-model="userEmail"
        type="email"
        name="email"
        id="email"
        class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
        placeholder="name@flowbite.com"
      />
    </div>

    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Sua Senha</label
      >
      <input
        v-model="userPassword"
        type="password"
        name="password"
        id="password"
        class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
        required
      />
    </div>

    <div class="mb-5">
      <label
        for="repeat-password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Nome completo</label
      >
      <input
        v-model="userName"
        type="text"
        name="name"
        id="repeat-password"
        class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
        required
      />
    </div>

    <div class="mb-5">
      <label
        for="repeat-password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Telefone</label
      >
      <input
        v-model="userTel"
        placeholder="(11)1234-5678"
        type="tel"
        name="tel"
        id="repeat-password"
        class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
        required
      />
    </div>

    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input
          id="terms"
          type="checkbox"
          value=""
          class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >I agree with the
        <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
          >terms and conditions</a
        ></label
      >
    </div>

    <div class="flex gap-18">
      <ButtonComponent label="Criar nova conta" />
      <div class="flex">
        <a
          @click="router.push({ name: 'login' })"
          href="#"
          class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Voltar
        </a>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
