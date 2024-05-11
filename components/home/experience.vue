<template>
    <div class="flex w-full mt-40 md:mt-20" id="experience">
        <h4 class="font-bold text-[27px] md:text-[32px] mb-10">Professional Experience</h4>
    </div>
    <Carousel class="w-full space-x-2 flex md:hidden">
        <CarouselContent>
            <CarouselItem v-for="(_, index) in 5" :key="index">
                <div class="flex-col border-l border-l-[#AF2DFF] pl-7 space-y-5 md:w-[523px] flex">
                    <b class="text-[18px]">Pickfans Pty Ltd</b>
                    <div class="flex space-x-2 text-[16px] items-center">
                        <p class="text-[#C5C5C5] text-[14px]">July 2023 - May 2024</p>
                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="white" />
                        </svg>
                        <b>Product Designer</b>
                    </div>
                    <p class="text-[#C5C5C5] text-[14px]">Back in 2012, I decided to try my hand at creating
                        custom
                        Tumblr themes and tumbled head first into the rabbit hole of coding and web development.
                        Fast-forward to today, and I’ve had the privilege of building software for
                        an advertising
                        agency,</p>
                    <div class="flex space-x-2">
                        <b class="py-[7px] px-6 w-fit text-center bg-white/20 rounded-full text-[13px]">
                            Figma
                        </b>
                        <b class="py-[7px] px-6 w-fit text-center bg-white/20 rounded-full text-[13px]">
                            Jira
                        </b>
                        <b class="py-[7px] px-6 w-fit text-center bg-white/20 rounded-full text-[13px]">
                            Rive
                        </b>
                    </div>
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
    <div class="h-[412px] md:h-[493px] flex flex-col w-full items-start pb-28 overflow-auto relative">
        <div class="flex space-x-10">
            <div v-for="_ in 10"
                class="flex-col border-l border-l-[#AF2DFF] pl-7 space-y-5 md:w-[523px] hidden md:flex">
                <b class="text-[18px]">Pickfans Pty Ltd</b>
                <div class="flex space-x-2 text-[16px] items-center">
                    <p class="text-[#C5C5C5] text-[14px]">July 2023 - May 2024</p>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white" />
                    </svg>
                    <b>Product Designer</b>
                </div>
                <p class="text-[#C5C5C5] text-[14px]">Back in 2012, I decided to try my hand at creating custom
                    Tumblr themes and tumbled head first into the rabbit hole of coding and web development.
                    Fast-forward to today, and I’ve had the privilege of building software for an advertising
                    agency,</p>
                <div class="flex space-x-2">
                    <b class="py-[7px] px-6 w-fit text-center bg-white/20 rounded-full text-[13px]">
                        Figma
                    </b>
                    <b class="py-[7px] px-6 w-fit text-center bg-white/20 rounded-full text-[13px]">
                        Jira
                    </b>
                    <b class="py-[7px] px-6 w-fit text-center bg-white/20 rounded-full text-[13px]">
                        Rive
                    </b>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>