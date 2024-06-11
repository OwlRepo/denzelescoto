<template>
    <div class="bg-[#010208]">
        <div class="px-[30px] md:px-[200px]">
            <NavigationBar />
        </div>
        <div>
            <NuxtImg  :src="study.pageBanner" class="h-[378px] mb-4 object-cover w-full"/>
        </div>
        <div>
            <slot/>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import constants from '~/lib/constants';
import getQueryVariable from '~/lib/getQueryVariable';

const colorMode = useColorMode()
const {caseStudies} = constants

const study = caseStudies.filter((study) => study.slug === getQueryVariable("slug"))[0]

onMounted(() => {
    colorMode.preference = 'dark'
})
</script>