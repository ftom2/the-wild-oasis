<template>
    <Form @submit="handleSubmit">
        <FormRowVertical label="Email address">
            <Input type="email" id="email" autocomplete="username" v-model="email" />
        </FormRowVertical>
        <FormRowVertical label="Password">
            <Input type="password" id="password" autocomplete="current-password" v-model="password" />
        </FormRowVertical>
        <FormRowVertical>
            <Button size="large">Login</Button>
        </FormRowVertical>
    </Form>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import Input from "../../ui/Input"
import FormRowVertical from "../../ui/FormRowVertical"

const email = ref("")
const password = ref("")

function handleSubmit() {
    // Your submission logic goes here
}
</script>
