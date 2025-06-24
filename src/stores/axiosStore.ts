import { defineStore } from 'pinia'
import axios, { type AxiosInstance } from 'axios'
import { ref } from 'vue'

export const useAxiosStore = defineStore('axiosStore', () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: { 'Content-Type': 'application/json' },
  })

  const http = ref<AxiosInstance>(axiosInstance)

  return { http }
})
