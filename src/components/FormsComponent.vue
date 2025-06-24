<script setup lang="ts">

import ButtonComponent from '@/components/ButtonComponent.vue'
import { useAxiosStore } from '@/stores/axiosStore.ts'
import { ref } from 'vue'
import router from '@/router'
const userEmail = ref('' as string)
const userPassword = ref('' as string)

const store = useAxiosStore();

const handlerLogin = async () => {
  try {
    const response = await store.http.post('/login', {
      email: userEmail.value,
      password: userPassword.value,
    })

    console.log(response.data)
    // const token = response.data.token;

    await router.push({ name: 'home' })
  }catch (error) {
    console.log('error', error)
  }
}
</script>

<template>

  <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="handlerLogin">
    <!--EMAIL-->
    <div>
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >E-mail</label
      >
      <!--RECEBE O EMAIL-->
      <input
        v-model="userEmail"
        type="email"
        name="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com"
      />
    </div>

    <!--SENHA-->
    <div>
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Senha</label>

      <!--RECEBE O SENHA-->
      <input
        v-model="userPassword"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
        </div>
      </div>
      <a
        href="#"
        class="text-sm font-medium text-white hover:underline dark:text-primary-500"
      >Forgot password?</a
      >
    </div>
    <ButtonComponent
      label="Entrar"
    />

    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Don’t have an account yet?
      <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >Sign up</a
      >
    </p>

  </form>
</template>

<style scoped>

</style>
