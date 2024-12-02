<script setup>
defineProps({
    exampleProps: String
})
</script>

<template>
    <div>Home Page</div>
    <div>
        The message is "{{ exampleProps }}".
    </div>
</template>