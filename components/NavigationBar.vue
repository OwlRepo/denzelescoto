<template>
    <div class="w-full hidden md:flex justify-between py-10">
        <NuxtLink to="/" class="gradient-text font-bold">Denzel
            Escoto</NuxtLink>
        <div class="flex flex-row space-x-[24px] font-bold">
            <p role="button" v-for="page in pages.filter((page) => page.name !== 'Home')"
                @click.prevent="page.sectionId ? scrollToAnchor(page.sectionId) : windowOpen(page.redirectTo)" :key="page.sectionId">{{
                    page.name }}
            </p>
        </div>
    </div>
    <div class="w-full flex md:hidden justify-between py-5">
        <NuxtLink to="/" class="gradient-text font-bold">Denzel
            Escoto</NuxtLink>
        <Dialog :open="isDialogOpen" @update:open="toggleDialog($event, '')">
            <DialogTrigger>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 8H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 16H11" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </DialogTrigger>
            <DialogContent
                class="py-20 bg-transparent flex flex-col items-center justify-center text-4xl backdrop-blur-[2px] border-none">
                <p @click.prevent="page.sectionId ? toggleDialog($event, page.sectionId) : windowOpen(page.redirectTo)" v-for="page in pages"
                    :class="{ 'font-bold text-5xl': page.path === route.path }" :key="page.sectionId">
                    {{ page.name }}
                </p>
            </DialogContent>
        </Dialog>

    </div>
</template>

<script setup>
const isDialogOpen = ref(false)
const route = useRoute()
const pages = [
    {
        name: 'Home',
        path: '/',
        sectionId: 'hero'
    },
    {
        name: 'About',
        path: '/about',
        sectionId: 'experience'
    },
    {
        name: 'Works',
        path: '/works',
        sectionId: 'case-studies'
    },
    {
        name: 'Contact',
        path: '/contact',
        sectionId: 'footer'
    },
    {
        name: 'CV',
        path: '/cv',
        redirectTo:'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/Denzel%20Escoto%20CV.pdf?alt=media&token=0a01d7cf-b2fe-4df2-9bf9-2173192603c7'
    }
]
const { scrollToAnchor } = useAnchorScroll({
    toAnchor: {
        scrollOptions: {
            behavior: 'smooth',
            offsetTop: 0,
        }
    }
})

function toggleDialog(e, sectionId) {
    if (sectionId) {
        isDialogOpen.value = !isDialogOpen.value
        scrollToAnchor(sectionId)
    }
    else {
        isDialogOpen.value = !isDialogOpen.value
    }
}


function windowOpen(url) {
    isDialogOpen.value = !isDialogOpen.value
    window.open(url, '_blank').focus()
}


useSeoMeta({
    title:'Denzel Escoto',
    ogTitle:'Denzel Escoto',
    description:'Denzel Escoto is a designer who craft a good experience. Specializes in Figma.',
})
</script>