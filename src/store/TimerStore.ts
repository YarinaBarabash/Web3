import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timerStore', {
  state: () => ({ time: 0 }), //() - это чтобы не писать return 
  getters: {
    getTime: (state) => state.time,
  },
  actions: {
    setTime(time) {
      this.time = time

      if (window.localStorage === undefined) {
        throw new Error('local storage is not defined')
      }

      window.localStorage.setItem('time', this.time)
    },
  },
})  