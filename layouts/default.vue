<template>
    <div class=" bg-[#020514]">
        <div class="px-[30px] md:px-[200px] bg-[#020514]">
            <NavigationBar />
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