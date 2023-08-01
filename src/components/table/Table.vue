<template>
    <table class="table-auto w-full border rounded-md border-grey-50 text-sm bg-grey-0 dark:bg-dark-grey-0 overflow-hidden">
        <thead class="border-b border-grey-100 bg-grey-50 dark:bg-dark-grey-50 text-left py-3 px-6">
            <tr>
                <th v-for="header in props.headers" :key="header.id" class="px-4 py-2">
                    {{ header.name }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row.id">
                <td v-for="header in headers" :key="header.id + row.id" class="py-3 px-6 text-left">{{ row[header.id]
                }}</td>

            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
export type HeaderProps = {
    name: string;
    id: string;
};
const props = defineProps<{
    headers: HeaderProps[];
    rows: Record<string, any> & { id: string }[];
}>();
</script>
