<template>
    <AppHeading>All Cabins</AppHeading>
    <Spinner v-if="isLoading" />
    <div v-else-if="error">{{ error }}</div>
    <Table v-else :headers="headers" :rows="rows" class="mt-2" />
</template>

<script setup lang="ts">
import AppHeading from "@/components/AppHeading.vue"

import { useQuery } from "@tanstack/vue-query";
import { getCabins } from "@/services/apiCabins";
import Spinner from "@/components/Spinner.vue";
import Table, { type HeaderProps } from "@/components/table/Table.vue";
import { computed } from "vue";

const { data: cabins, isLoading, error } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
    staleTime: 1000 * 60 * 60,
});

const headers: HeaderProps[] = [{ name: "CABIN", id: 'cabin' }, { id: "capacity", name: "CAPACITY" }, { id: "price", name: "PRICE" }, { id: "discount", name: "DISCOUNT" }];
const rows = computed(() => {
    if (!cabins.value) return [];
    return cabins.value.map(cabin => {
        return {
            id: cabin.id,
            cabin: cabin.name,
            capacity: cabin.maxCapacity,
            price: cabin.regularPrice,
            discount: cabin.discount,
        }
    })
})
</script>
