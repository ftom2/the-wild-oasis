<template>
    <button :class="classes" @click="handleClick"><slot /></button>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Props {
    size?: "small" | "medium" | "large"
    variant?: "primary" | "secondary" | "danger"
}

const props = withDefaults(defineProps<Props>(), {
    size: "medium",
    variant: "primary"
})

const emit = defineEmits(["click"])

const handleClick = (e: Event) => {
    e.preventDefault()
    emit("click")
}

const classes = computed(() => {
    const classNames: string[] = ["cursor-pointer rounded-sm shadow-sm"]
    switch (props.size) {
        case "small":
            classNames.push("text-xs py-1 px-2")
            break
        case "large":
            classNames.push("text-base py-3 px-6 font-medium")
            break

        default:
            classNames.push("text-sm py-3 px-4 font-medium")
            break
    }
    switch (props.variant) {
        case "secondary":
            classNames.push("text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50")
            return classNames.join(" ")
        case "danger":
            classNames.push("text-red-100 bg-red-700 hover:bg-red-800")
            return classNames.join(" ")

        default:
            classNames.push("text-brand-50 bg-brand-600 hover:bg-brand-700")
            return classNames.join(" ")
    }
})
</script>
