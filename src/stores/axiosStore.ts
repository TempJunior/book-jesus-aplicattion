import { defineStore } from 'pinia'
import axios, { type AxiosInstance } from 'axios'
import { ref } from 'vue'
import type IUserData from '@/interfaces/IUserData.ts'

const options = {
  persist: {
    key: 'localStore',
    storage: localStorage,
  },
}

export const useAxiosStore = defineStore('axiosStore', () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: { 'Content-Type': 'application/json' },
  })

  const userData = ref<IUserData | null>(null)

  const tokenJWT = ref<string | null>(null)


  function setTokenJWT(token: string | null): void {
    tokenJWT.value = token

    if (token) {
      localStorage.setItem('tokenJWT', token)
    }else {
      localStorage.removeItem('tokenJWT')
    }
  }

  function setUserData (data: IUserData) {
    userData.value = data
  }

  function clearUserData () {
    userData.value = null
    tokenJWT.value = null
    localStorage.removeItem('tokenJWT')
  }

  const http = ref<AxiosInstance>(axiosInstance)

  return { http, userData, setUserData, clearUserData, tokenJWT, setTokenJWT }
},
  options,
)

