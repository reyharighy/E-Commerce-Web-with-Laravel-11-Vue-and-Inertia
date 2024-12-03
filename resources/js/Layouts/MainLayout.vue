<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'

import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'

import {
    Bars3Icon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    XMarkIcon,

} from '@heroicons/vue/24/outline'

import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const shopSubMenu = [
    { name: 'Shop-1', id:"shop-1", description: 'Description of Shop-1', href: '#', icon: ShoppingBagIcon }, // Undefined href
]

const navbarMenu = [
    { name: "Top Sales", id:"top-sales", href: '#' },   // Undefined href
    { name: "Offers", id:"offers", href: '#' },         // Undefined href
    { name: "Sellers", id:"sellers", href: '#' }        // Undefined href
]

const mobileMenuOpen = ref(false)
</script>

<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            
            <!--Company Logo-->
            <div class="flex lg:flex-1">
                <Link href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">The company name is Shop.CO.</span>
                    <div class="text-[30px] font-integralcf-extrabold">SHOP<span class="text-[#00adb5]">.CO</span></div>
                </Link>
            </div>
            
            <!--3 Icon for Mobile Devices-->
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu.</span>
                    <Bars3Icon class="size-6" aria-hidden="true" />
                </button>
            </div>

            <!--Popup/Dropdown Menu-->
            <PopoverGroup class="hidden items-center justify-around lg:flex lg:gap-x-12">
                <Popover class="relative">
                    <PopoverButton class="flex items-center gap-x-1 text-sm/1 font-semibold text-gray-900">
                        Shop <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
                    </PopoverButton>
        
                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div v-for="item in shopSubMenu" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div class="flex-auto">
                                        <Link :href="item.href" class="block font-semibold text-gray-900">
                                            {{ item.name }}
                                            <span class="absolute inset-0" />
                                        </Link>
                                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>
                
                <!--Non Dropdown Menu-->
                <Link v-for="menu in navbarMenu" :key="menu.id" class="text-sm/1 font-semibold text-gray-900">{{ menu.name }}</Link>
            </PopoverGroup>

            <!--Cart and Log In-->
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link href="#"><component :is="ShoppingCartIcon" class="hidden size-6 text-gray-600 group-hover:text-indigo-600"/></Link>   <!--Undefined href-->
                <Link href="#" class="text-sm/1 pl-5 font-extrabold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>     <!--Undefined href-->
            </div>
        </nav>

        <!--Sidebar Menu for Mobile Devices-->
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    
                    <!--Company Logo-->
                    <Link href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">The company name is Shop.CO.</span>
                        <div class="text-[30px] font-integralcf-extrabold">SHOP<span class="text-[#00adb5]">.CO</span></div>
                    </Link>
                    
                    <!--Close Button-->
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 right-0" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close main menu.</span>
                        <XMarkIcon class="size-6" aria-hidden="true" />
                    </button>
                </div>
                
                <!--Sidebar Menu-->
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">

                            <!--Dropdown Menu-->
                            <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                    Shop <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2">
                                    <DisclosureButton v-for="item in [...shopSubMenu]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                                </DisclosurePanel>
                            </Disclosure>

                            <!--Non Dropdown Menu-->
                            <div v-for="menu in navbarMenu" :key="menu.id">
                                <Link :href="menu.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ menu.name }}</Link>
                            </div>
                        </div>
                        
                        <!--Log In-->
                        <div class="py-6">
                            <Link href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</Link> <!--Undefined href-->
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>