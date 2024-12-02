<script setup>
import {ref} from 'vue'

const timer = ref(0)
setInterval(() => timer.value++, 1000)
</script>

<template>
    <div>This is the layout serves as header to all pages.</div>
    <div>The timer = {{ timer }}</div>

    <slot>This is the slot</slot>
</template>