<template>
    <div class="timer">
        <p>Timers page</p>
        <div> {{ time }} </div>
        <button @click="reset"> Сбросить время </button>
    </div>
</template> 

<script>
import { mapState, mapActions } from 'pinia'
import { useTimerStore } from '../store/TimerStore.ts'

export default {
    name: 'TimerView',
    computed: {
        ...mapState(useTimerStore, ['time'])
    },
    methods: {
        ...mapActions(useTimerStore, ['setTime']),
        reset() {
            this.setTime(0)
        }
    }
}
</script>
  