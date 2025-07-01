<template>
  <div>
    <NavForHomePageAndLogin />
    <section class="bg-gray-800">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img class="w-8 h-8 mr-2" src="/src/assets/read.png" alt="logo" />
          Book Jesus
        </a>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Entre em sua conta
            </h1>
            <FormsComponent />
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped></style>
<script setup lang="ts">
import FormsComponent from '@/components/FormsComponent.vue'
import NavForHomePageAndLogin from '@/components/NavForHomePageAndLogin.vue'
</script>
