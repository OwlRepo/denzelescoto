<template>
    <div class="flex w-full mt-40 md:mt-20" id="case-studies">
        <h4 class="font-bold text-[27px] md:text-[32px] mb-10">Other Projects</h4>
    </div>
    <Carousel class="w-full space-x-2 flex md:hidden">
        <CarouselContent>
            <CarouselItem v-for="(project, index) in otherProjects" :key="index">
                <div class="flex-col pl-7  flex md:hidden group">
                    <NuxtImg :src="project.imgSrc" class="w-[342px] h-[378px] mb-4 object-cover rounded" />
                    <b class="text-[20px] group-hover:text-[#EB5757] mb-1"> {{ project.title }} </b>
                </div>
            </CarouselItem>
        </CarouselContent>
    </Carousel>
    <svg class="ml-auto mt-8 animate-pulse block md:hidden" width="71" height="24" viewBox="0 0 71 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M59.7071 4.29289C59.3166 3.90237 58.6834 3.90237 58.2929 4.29289C57.9024 4.68342 57.9024 5.31658 58.2929 5.70711L63.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H63.5858L58.2929 18.2929C57.9024 18.6834 57.9024 19.3166 58.2929 19.7071C58.6834 20.0976 59.3166 20.0976 59.7071 19.7071L66.7071 12.7071C66.8902 12.524 66.9874 12.2877 66.9989 12.048C66.9996 12.032 67 12.016 67 12M66.9249 11.619C66.8761 11.5004 66.8035 11.3893 66.7071 11.2929L59.7071 4.29289M66.9249 11.619C66.9714 11.732 66.9979 11.8553 66.9999 11.9845L66.9249 11.619Z"
            fill="url(#paint0_linear_1_460)" />
        <defs>
            <linearGradient id="paint0_linear_1_460" x1="4" y1="12" x2="42.5551" y2="12.8704"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#9B1DFF" />
                <stop offset="1" stop-color="#FFD705" />
            </linearGradient>
        </defs>
    </svg>
    <div class="h-[412px] md:h-fit md:flex flex-col w-full items-start overflow-auto relative no-scrollbar pb-1 hidden">
        <div class="flex space-x-10">
            <Dialog v-for="(project) in otherProjects" :key="project.title">
                <DialogTrigger role="button" as-child>
                    <div class="flex-col pl-7 w-[590.85px] hidden md:flex group">
                        <NuxtImg :src="project.imgSrc" class="w-[590px] h-[378px] mb-4 rounded-md" />
                        <b class="text-[20px] group-hover:text-[#EB5757] mb-1"> {{ project.title }} </b>
                    </div>
                </DialogTrigger>
                <DialogContent class="max-w-[90vw] bg-transparent border-none h-full p-10">
                    <NuxtImg :src="project.imgSrc" class="w-full h-full object-cover mb-4 rounded-md" />
                </DialogContent>
            </Dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import constants from '~/lib/constants';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

const { otherProjects } = constants
const imgSlug = ref('')
</script>