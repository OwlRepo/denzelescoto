
<template>
    <div class="flex flex-col py-10">
        <div id="header" class="flex flex-col bg-[#010208] px-[30px] md:px-[200px]">
            <b class="text-[32px] mb-2">
                {{ study.title }}
            </b>
            <p class="text-[18px] text-[#C5C5C5] mb-20">
                {{ study.description }}
            </p>
            <div class="flex flex-row space-x-24">
                <div class="flex flex-col space-y-2">
                    <b class="text-[18px]">Role</b>
                    <p class="text-[14px] text-[#C5C5C5]">{{ study.role }}</p>
                </div>
                <div class="flex flex-col space-y-2">
                    <b class="text-[18px]">Project</b>
                    <p class="text-[14px] text-[#C5C5C5]">{{ study.project }}</p>
                </div>
                <div class="flex flex-col space-y-2">
                    <b class="text-[18px]">Timeline</b>
                    <p class="text-[14px] text-[#C5C5C5]">{{ study.timeline }}</p>
                </div>
                <div class="flex flex-col space-y-2">
                    <b class="text-[18px]">Tools Used</b>
                    <p class="text-[14px] text-[#C5C5C5]">{{ study.toolsUsed.toString() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import constants from "~/lib/constants"
import getQueryVariable from "~/lib/getQueryVariable";

const {caseStudies} = constants

const study = caseStudies.filter((study) => study.slug === getQueryVariable("slug"))[0]

definePageMeta({
    layout: 'case-studies',
})
</script>