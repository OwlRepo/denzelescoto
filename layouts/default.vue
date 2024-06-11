<template>
    <div class=" bg-[#020514]">
        <NavigationBar />
        <div class="px-[30px] md:px-[200px] pt-32 bg-[#020514]">
            <slot />
        </div>
        <Footer/>
    </div>
</template>

<script setup>
const colorMode = useColorMode()

onMounted(() => {
    colorMode.preference = 'dark'
})
</script>