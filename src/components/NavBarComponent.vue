<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAxiosStore } from '@/stores/axiosStore.ts'
import { getInitialCharOfName } from '@/helpers/GetInitialCharOfName.ts'
import router from '@/router'

const store = useAxiosStore()

const isDropdownOpenLivros = ref(false)

function toggleDropdownLivros() {
  isDropdownOpenLivros.value = !isDropdownOpenLivros.value
}

const isDropdownOpenAvatar = ref(false)

function toggleDropdownAvatar() {
  isDropdownOpenAvatar.value = !isDropdownOpenAvatar.value
}

const userInitials = computed(() => {
  return store.userData?.nome
    ? getInitialCharOfName(store.userData.nome)
    : ''
})

function logout() {
  store.clearUserData()
  router.push({name: 'home' })
}

const menuVisible = ref(true)
console.log(userInitials.value)
console.log(store.userData)
</script>

<template>
  <Transition name="fade">
  <nav
    v-show="menuVisible"
    class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/src/assets/read.png" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Book Jesus</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-multi-level"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              @click="router.push({name: 'livros'})"
              class="cursor-pointer block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
              >Home</a
            >
          </li>

          <li class="relative z-30">
            <button
              @click="toggleDropdownLivros"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Livros
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              v-show="isDropdownOpenLivros"
              id="dropdownNavbar"
              class="absolute top-full left-0 z-40 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 z-50">
                <li>
                  <a
                    @click="router.push({name: 'emprestimos'})"
                    class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Emprestimos</a
                  >
                </li>
                <li>
                  <a
                    @click="router.push({name: 'cadastrar_emprestimos'})"
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Cadastrar Emprestimo</a
                  >
                </li>
              </ul>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</a
                >
              </div>
            </div>
          </li>

          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Pricing</a
            >
          </li>

          <li class="relative z-30">
            <div
              @click="toggleDropdownAvatar"
              class="cursor-pointer inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
            >
              <span class="font-medium text-sm text-gray-600 dark:text-gray-300">{{ userInitials }}</span>
              <div
                v-show="isDropdownOpenAvatar"
                id="dropdownNavbar"
                class="absolute top-full left-0 z-40 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 z-50">
                  <li>
                    <a
                      @click="router.push({ name: 'account' })"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Minha conta</a
                    >
                  </li>
                  <li>
                    <a
                      @click="logout"
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Sair</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </Transition>
</template>

<style scoped>
.fade-enter-from{
  opacity: 0;
}

.fader-enter-to{
  opacity: 1;
}

.fade-enter-active{
  transition: all 2s ease;
}

.fade-leave-from{
  opacity: 1;
}

.fader-leave-to{
  opacity: 0;
}

</style>
