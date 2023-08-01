<template>
    <div class=" my-12 mx-auto w-16 aspect-square rounded-full" />
</template>

<script setup lang="ts">
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig as any)

const brand = theme.colors.brand[600];

</script>

<style scoped lang="scss">
@keyframes rotate {
    to {
        transform: rotate(1turn);
    }
}

div {
    background: radial-gradient(farthest-side, v-bind(brand) 94%, #0000) top/10px 10px no-repeat,
        conic-gradient(#0000 30%, v-bind(brand));
    mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
    animation: rotate 1.5s infinite linear;
}
</style>

