<template>
    <div class="flex flex-col py-10">
        <div id="header" class="flex flex-col bg-[#010208] px-[30px] md:px-[100px] mb-20">
            <b class=" text-[32px] mb-2">
                {{ study.title }}
            </b>
            <p class="text-[18px] text-[#C5C5C5] mb-20">
                {{ study.description }}
            </p>
            <div class="flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-24">
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

        <div class="flex flex-col px-[30px] md:px-[100px] md:h-[591px] py-10 bg-white/5 mb-20">
            <b class="text-[18px] text-[#00B473] mb-5 w-1/2">
                Overview
            </b>
            <div class="flex flex-col space-y-2 md:w-[818px] mb-16" v-for="(overview) in study.overview"
                :key="overview.title">
                <b class="text-[32px]">{{ overview.title }}</b>
                <p class="text-[18px] text-[#C5C5C5]">{{ overview.description }}</p>
            </div>
        </div>

        <div id="research" class="flex flex-col bg-[#010208] px-[30px] md:px-[100px] mb-20">
            <b class="text-[18px] text-[#00B473] mb-5 w-1/2">
                Research
            </b>
            <div class="flex flex-col space-y-2 mb-7">
                <b class="text-[32px]">{{ study.research.userResearch.title }}</b>
                <p class="text-[18px] text-[#C5C5C5]">{{ study.research.userResearch.description }}</p>
            </div>
            <b class="text-[24px] text-[#00B473] mb-3">
                {{ study.research.userResearch.painPoints.vendors.title }}
            </b>
            <ol class="pl-5 mb-7">
                <li v-for="(painPoint, index) in study.research.userResearch.painPoints.vendors.items" :key="index"
                    class="text-[18px] text-[#C5C5C5]">
                    <p class="mb-5">{{ index + 1 }}. {{ painPoint.title }}</p>
                    <p class="pl-5">• {{ painPoint.issue }}</p>
                    <p class="pl-5 mb-5">• {{ painPoint.impact }}</p>
                </li>
            </ol>
            <b class="text-[24px] text-[#00B473] mb-3">
                {{ study.research.userResearch.painPoints.buyers.title }}
            </b>
            <ol class="pl-5 mb-14">
                <li v-for="(painPoint, index) in study.research.userResearch.painPoints.buyers.items" :key="index"
                    class="text-[18px] text-[#C5C5C5]">
                    <p class="mb-5">{{ index + 1 }}. {{ painPoint.title }}</p>
                    <p class="pl-5">• {{ painPoint.issue }}</p>
                    <p class="pl-5 mb-5">• {{ painPoint.impact }}</p>
                </li>
            </ol>


            <div class="flex flex-col space-y-2 mb-7">
                <b class="text-[32px]">{{ study.research.userPersona.title }}</b>
                <p class="text-[18px] text-[#C5C5C5]">{{ study.research.userPersona.description }}</p>
            </div>

            <b class="text-[24px] text-[#00B473] mb-5">
                Vendor Persona
            </b>
            <div
                class="rounded-[8px] md:w-[1126px] border border-[#262626] flex flex-col md:flex-row p-7 space-y-5 md:space-y-0 md:space-x-5 mb-12">
                <div class="flex flex-col text-[18px] text-[#C5C5C5] justify-between">
                    <div>
                        <NuxtImg :src="study.research.userPersona.vendorPersona.image"
                            :alt="study.research.userPersona.vendorPersona.image"
                            class="w-[124px] h-[124px] object-cover mb-5" />
                        <p>Name: {{ study.research.userPersona.vendorPersona.name }}</p>
                    </div>
                    <div>
                        <p>Demographics:</p>
                        <ul class="list-disc pl-5">
                            <li>Age:{{ study.research.userPersona.vendorPersona.demographics.age }}</li>
                            <li>Occupation:{{ study.research.userPersona.vendorPersona.demographics.occupation }}</li>
                            <li>Location:{{ study.research.userPersona.vendorPersona.demographics.location }}</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col text-[18px] text-[#C5C5C5]">
                    <p class="mb-4">Goals:</p>
                    <ul class="list-disc pl-5 mb-5">
                        <li v-for="item in study.research.userPersona.vendorPersona.goals" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                    <p class="mb-4">Pain Points:</p>
                    <ul class="list-disc pl-5">
                        <li v-for="item in study.research.userPersona.vendorPersona.painPoints" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <b class="text-[24px] text-[#00B473] mb-5">
                Buyer Persona
            </b>
            <div
                class="rounded-[8px] md:w-[1126px] border border-[#262626] flex flex-col md:flex-row p-7 space-y-5 md:space-y-0 md:space-x-5 mb-12">
                <div class="flex flex-col text-[18px] text-[#C5C5C5] justify-between">
                    <div>
                        <NuxtImg :src="study.research.userPersona.buyerPersona.image"
                            :alt="study.research.userPersona.buyerPersona.image"
                            class="w-[124px] h-[124px] object-cover mb-5" />
                        <p>Name: {{ study.research.userPersona.buyerPersona.name }}</p>
                    </div>
                    <div>
                        <p>Demographics:</p>
                        <ul class="list-disc pl-5">
                            <li>Age:{{ study.research.userPersona.buyerPersona.demographics.age }}</li>
                            <li>Occupation:{{ study.research.userPersona.buyerPersona.demographics.occupation }}</li>
                            <li>Location:{{ study.research.userPersona.buyerPersona.demographics.location }}</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col text-[18px] text-[#C5C5C5]">
                    <p class="mb-4">Goals:</p>
                    <ul class="list-disc pl-5 mb-5">
                        <li v-for="item in study.research.userPersona.buyerPersona.goals" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                    <p class="mb-4">Pain Points:</p>
                    <ul class="list-disc pl-5">
                        <li v-for="item in study.research.userPersona.buyerPersona.painPoints" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <b class="text-[24px] text-[#00B473] mb-5">
                {{ study.research.summary.title }}
            </b>
            <p class="text-[18px] text-[#C5C5C5] md:w-[914px]">{{ study.research.summary.description }}</p>
        </div>


        <div id="design-concept" class="flex flex-col bg-[#010208] px-[30px] md:px-[100px] mb-20">
            <b class="text-[18px] text-[#00B473] mb-5 w-1/2">
                Design Concept
            </b>
            <div class="flex flex-col space-y-2 mb-10" v-for="(item, index) in study.designConcept" :key="index">
                <b class="text-[32px]">{{ item.title }}</b>
                <p class="text-[18px] text-[#C5C5C5]">{{ item.description }}</p>
                <NuxtImg :src="item.bannerSrc" :alt="item.bannerSrc" class="w-[100%] h-[100%] object-cover pt-5" />
            </div>
        </div>

        <div id="reflection" class="flex flex-col bg-white/5 px-[30px] md:px-[100px] py-20">
            <b class="text-[18px] text-[#00B473] mb-5 w-1/2">
                Reflection
            </b>
            <div class="flex flex-col space-y-2 md:w-[914px]">
                <b class="text-[32px]">{{ study.reflection.takeaways.title }}</b>
                <p class="text-[18px] text-[#C5C5C5]">{{ study.reflection.takeaways.description }}</p>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import constants from "~/lib/constants"
import getQueryVariable from "~/lib/getQueryVariable";

const { caseStudies } = constants

const study = caseStudies.filter((study) => study.slug === getQueryVariable("slug"))[0]

definePageMeta({
    layout: 'case-studies',
})
</script>