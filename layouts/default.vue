<template>
    <div class="px-[30px] md:px-[200px]">
        <NavigationBar />
        <slot />
    </div>
</template>

<script setup>
const colorMode = useColorMode()

onMounted(() => {
    colorMode.preference = 'dark'
})
</script>