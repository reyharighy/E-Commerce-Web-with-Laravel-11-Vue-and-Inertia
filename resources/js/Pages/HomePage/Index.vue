<script setup>
    defineProps({
        message: String
    })
</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <div>The content of the home page</div>
        <div>This is the message -> {{ message }}</div>
    </div>
</template>