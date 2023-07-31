<template>
    <nav>
        <ul class="flex flex-col gap-2">
            <li v-for="item in items" :key="item.path">
                <RouterLink :to="item.path" class="flex items-center gap-3 text-grey-600 text-base font-medium py-3 px-6 transition-all duration-300">
                    <Icon :name="item.icon" class="w-6 h-6 text-grey-400 transition-all duration-300" />
                    <span>{{ item.name }}</span>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { addIcons } from "oh-vue-icons"
import { MdHomeRound, BiCalendar3, CoHome, HiUsers, HiCog } from "oh-vue-icons/icons"

addIcons(MdHomeRound, BiCalendar3, CoHome, HiUsers, HiCog)
const items = [
    {
        name: "Dashboard",
        icon: "md-home-round",
        path: "/dashboard"
    },
    {
        name: "Bookings",
        icon: "bi-calendar3",
        path: "/bookings"
    },
    {
        name: "Cabins",
        icon: "co-home",
        path: "/cabins"
    },
    {
        name: "Users",
        icon: "hi-users",
        path: "/users"
    },
    {
        name: "Settings",
        icon: "hi-cog",
        path: "/settings"
    }
]
</script>

<style scoped lang="scss">
a:hover,
a:active,
a.router-link-active:visited,
a.router-link-active:link {
    @apply text-grey-800 dark:text-dark-grey-800 bg-grey-50 dark:bg-dark-grey-50 rounded-sm;

    svg {
        @apply text-brand-600;
    }
}
</style>
