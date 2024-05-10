<template>
    <div class="w-full hidden md:flex justify-between py-10">
        <NuxtLink to="/"
            class="bg-clip-text w-fit bg-gradient-to-r from-[#9B1DFF] to-[#FFD705] text-transparent font-bold">Denzel
            Escoto</NuxtLink>
        <div class="flex flex-row space-x-[24px] font-bold">
            <NuxtLink v-for="page in pages.filter((page) => page.name !== 'Home')" :to="page.path">{{ page.name }}
            </NuxtLink>
        </div>
    </div>
    <div class="w-full flex md:hidden justify-between py-5">
        <b class="bg-clip-text w-fit bg-gradient-to-r from-[#9B1DFF] to-[#FFD705] text-transparent">Denzel Escoto</b>
        <Dialog>
            <DialogTrigger>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 8H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 16H11" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </DialogTrigger>
            <DialogContent
                class="w-full h-full bg-transparent flex flex-col items-center justify-center text-4xl backdrop-blur-[1px] border-none">
                <NuxtLink v-for="page in pages" :to="page.path"
                    :class="{ 'font-bold text-5xl': page.path === route.path }">
                    {{ page.name }}
                </NuxtLink>
            </DialogContent>
        </Dialog>

    </div>
</template>

<script setup>

const route = useRoute()
const pages = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Works',
        path: '/works'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'CV',
        path: '/cv'
    }
]
</script>