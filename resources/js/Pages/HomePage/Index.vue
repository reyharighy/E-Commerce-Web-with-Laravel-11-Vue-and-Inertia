<script>
import { Link } from '@inertiajs/vue3'

export default {
    methods: {
        asset(path) {
            return `/${path}`;
        },
    },
};
</script>

<style scoped>
.bg-cover {
    background-size: cover;
    background-position: center;
}
</style>

<template>
    
    <!--Hero Sections-->
    <div class="relative overflow-hidden bg-[#73c1b4]">
        <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <!--Hero Text-->
                <div class="sm:max-w-lg">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Search and Find Your Favorites</h1>
                    <p class="mt-4 text-xl text-gray-500">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                </div>
                
                <!-- Decorative Image Grid -->
                <div>
                    <div class="mt-10">
                        <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                <div class="flex items-center space-x-6 lg:space-x-8">
                                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                            <img :src="asset('images/example.jpg')" alt="" class="size-full object-cover">
                                        </div>
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="asset('images/example.jpg')" alt="" class="size-full object-cover">
                                        </div>
                                    </div>
                                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="asset('images/example.jpg')" alt="" class="size-full object-cover">
                                        </div>
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="asset('images/example.jpg')" alt="" class="size-full object-cover">
                                        </div>
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="asset('images/example.jpg')" alt="" class="size-full object-cover">
                                        </div>
                                    </div>
                                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="asset('images/example.jpg')" alt="" class="size-full object-cover">
                                        </div>
                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                            <img :src="asset('images/example.jpg')" alt="" class="size-full object-cover">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Promo Sections-->
    <div class="relative h-screen">
        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5">
            <h1 class="text-4xl sm:text-6xl font-bold text-gray-900">Mid Season Sale</h1>
            <p class="mt-4 text-xl max-w-3xl text-gray-500 pb-3">
                Discover exclusive deals and elevate your style with our limited-time offers.
            </p>
            <Link href="#" class="inline-block rounded-md border border-transparent bg-[#00adb5] px-8 py-3 mt-4 text-center font-semibold text-[#dfecea] hover:bg-[#008a8e] hover:text-[#ffffff]">Shop Collection</Link>
        </div>
    </div>
    
</template>