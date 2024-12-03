<script setup>
import {Link} from '@inertiajs/vue3'
</script>

<template>
    <nav>
        <div>SHOP<span>.CO</span></div>
        <ul>
            <li><Link href="">Shop</Link></li>          <!--Undefined href-->
            <li><Link href="">Top Sales</Link></li>     <!--Undefined href-->
            <li><Link href="">Offers</Link></li>        <!--Undefined href-->
            <li><Link href="">Seller</Link></li>>       <!--Undefined href-->
        </ul>
        <div>
            <button>
                <Link href=""><img src="" alt=""></Link>    <!--Undefined href and image-->
            </button>
            <input type="text" placeholder="Search for products...">
        </div>
        <div>
            <Link><img src="" alt=""></Link>    <!--Undefined href and image-->
            <Link><img src="" alt=""></Link>    <!--Undefined href and image-->
            <label for="">The label</label>
        </div>
    </nav>
    <slot>This is the slot</slot>
</template>