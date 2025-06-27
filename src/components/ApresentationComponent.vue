<script setup lang="ts">


import router from '@/router'

const goToLogin = () => {
  router.push({ name: 'login' })
}
</script>

<template>
  <section
    class="bg-center bg-no-repeat bg-[url('@/assets/gifs_livros_view/crime_e_castigo.png')] bg-gray-700 bg-blend-multiply"
  >
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
      >
        Junior Oliveira
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Este projeto foi desenvolvido com uma arquitetura robusta e moderna, utilizando Java e
        Spring Framework no back-end. A API REST conta com autenticação segura por meio de JWT
        tokens (Spring Security), controle de versões do banco de dados via migrations e endpoints
        completos para gerenciamento de usuários, livros, autores e controle de empréstimos.
      </p>

      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        No front-end, foi utilizada uma stack atual: Vue.js com TypeScript, TailwindCSS para
        estilização e as principais ferramentas do ecossistema Vue, como Pinia (para armazenamento
        local), Vue Router (para navegação SPA), VeeValidate (para validação de formulários), Axios
        (para integração com a API) e um sistema de notificações para melhor experiência do usuário.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Crie sua conta
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>

        <a
          @click="goToLogin"
          href="#"
          class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Entre em sua conta
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
