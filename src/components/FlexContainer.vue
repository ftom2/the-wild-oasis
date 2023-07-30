<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Props {
    direction?: "row" | "column"
    justify?: "start" | "end" | "center" | "between" | "around"
    align?: "start" | "end" | "center" | "stretch"
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
}
const props = withDefaults(defineProps<Props>(), {
    direction: "row",
    justify: "start",
    align: "center",
    wrap: "nowrap"
})

const classes = computed(() => ({
    flex: true,
    "flex-col": props.direction === "column",
    "flex-row": props.direction === "row",
    "justify-start": props.justify === "start",
    "justify-end": props.justify === "end",
    "justify-center": props.justify === "center",
    "justify-between": props.justify === "between",
    "justify-around": props.justify === "around",
    "items-start": props.align === "start",
    "items-end": props.align === "end",
    "items-center": props.align === "center",
    "items-stretch": props.align === "stretch",
    "flex-wrap": props.wrap === "wrap",
    "flex-wrap-reverse": props.wrap === "wrap-reverse",
    "flex-nowrap": props.wrap === "nowrap",
    "gap-4": props.direction === "column"
}))
</script>
