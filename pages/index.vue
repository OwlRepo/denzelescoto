<template>
    <div class="flex flex-col items-center">
        <HomeHero />
        <HomeExperience />
        <HomeCaseStudy/>
        <HomeOtherProjects/>
    </div>
</template>

<script setup>
function windowOpen(url) {
    window.open(url, '_blank').focus()
}
</script>

<style lang="scss" scoped></style>