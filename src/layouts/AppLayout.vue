<template>
    <div class="grid grid-cols-[16rem,1fr] grid-rows-[auto,1fr] h-screen">
        <AppSidebar class="row-span-full" />
        <AppHeader />

        <main class="bg-grey-50 pt-16 px-12 pb-24 dark:bg-dark-grey-50">
            <RouterView />
        </main>
    </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import AppSidebar from "@/components/AppSidebar.vue"
</script>
