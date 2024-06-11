<template>
    <div class="flex w-full mt-40 md:mt-20" id="case-studies">
        <h4 class="font-bold text-[27px] md:text-[32px] mb-10">Case Study</h4>
    </div>
    <div class=" md:h-fit grid grid-cols-1 md:grid-cols-1 gap-14 w-full items-start pb-1">
            <div @click.prevent="goToCaseStudy(study.slug)" role="button" v-for="(study, index) in caseStudies" :key="index" class="flex-col flex group">
                <NuxtImg :src="study.imgSrc" class="h-[378px] mb-4 object-cover rounded-[8px]"/>
                <b class="text-[20px] group-hover:text-[#EB5757] mb-1"> {{ study.title }} </b>
                <p class="text-[#6B6B6B] text-[16px] mb-3">UX Design, Case Study</p>
                <small class="whitespace-pre-line text-[14px]">{{ study.description }}</small>
            </div>
    </div>

</template>

<script setup lang="ts">
import constants from '~/lib/constants';

const {caseStudies} = constants

function goToCaseStudy(slug:string){
    navigateTo('/case-studies?slug='+slug)
}
</script>