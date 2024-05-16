<template>
    <div class="flex w-full mt-40 md:mt-20" id="case-studies">
        <h4 class="font-bold text-[27px] md:text-[32px] mb-10">Case Study</h4>
    </div>
    <div class=" md:h-fit grid grid-cols-1 md:grid-cols-2 gap-14 w-full items-start pb-1">
            <div v-for="(_,index) in 3" :key="_" class="flex-col flex group">
                <NuxtImg src="img-placeholder.png" class="w-[590px] h-[378px] mb-4 object-cover rounded-[8px]"/>
                <b class="text-[20px] group-hover:text-[#EB5757] mb-1"> PROJECT {{ index + 1 }} </b>
                <p class="text-[#6B6B6B] text-[16px] mb-3">UX Design, Case Study</p>
                <small class="whitespace-pre-line text-[14px]">{{ `Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. 
                
                Fast-forward to today, and I’ve had the privilege of building software for an advertising agency.` }}
                </small>
            </div>
    </div>

</template>