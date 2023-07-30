<template>
    <component :is="type" :class="styles">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Props {
    type?: "h1" | "h2" | "h3"
}
const props = withDefaults(defineProps<Props>(), {
    type: "h1"
})

const styles = computed(() => {
    const classes = ["break-words hyphens-auto"]
    switch (props.type) {
        case "h1":
            classes.push("text-5xl font-semibold")
            break
        case "h2":
            classes.push("text-3xl font-semibold")
            break
        case "h3":
            classes.push("text-2xl font-semibold")
            break
    }
    return classes.join(" ")
})
</script>
