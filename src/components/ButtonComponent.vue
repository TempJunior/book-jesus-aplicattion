<script setup lang="ts">
export interface Props {
  label: string
}

const props = withDefaults(defineProps<Props>(), {
  label: ''
})
</script>

<template>
  <button
    type="submit"
    class="cursor-pointer w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    {{ props.label }}
  </button>
</template>

<style scoped>

</style>
