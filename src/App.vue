<script setup lang="ts">
import FlexContainer from "./components/FlexContainer.vue"

function handleClick() {
    console.log("Clicked!")
}
</script>

<template>
    <div class="text-grey-700 transition-colors duration-300 min-h-screen leading-6 text-base p-3">
        <FlexContainer direction="column" align="start">
            <RouterView />
        </FlexContainer>
    </div>
</template>
