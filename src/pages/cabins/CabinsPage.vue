<template>
    <AppHeading>Cabins</AppHeading>
    <img src="https://jxmwlmkjqwkqsidhugnh.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" alt="">
</template>

<script setup lang="ts">
import AppHeading from "@/components/AppHeading.vue"
import { getCabins } from "@/services/apiCabins";


async function getData() {
    const { data: cabins } = await getCabins();
    console.log(cabins);
};

getData();

</script>
