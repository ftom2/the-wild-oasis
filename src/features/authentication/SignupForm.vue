<script setup lang="ts">
//create a vue 3 component like the react component open on the left
import { ref } from "vue"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"

const email = ref("")
const password = ref("")
</script>

<template>
    <Form>
        <FormRow label="Email address">
            <Input type="email" id="email" autocomplete="username" v-model="email" />
        </FormRow>
        <FormRow label="Password">
            <Input type="password" id="password" autocomplete="current-password" v-model="password" />
        </FormRow>

        <FormRow label="Repeat Password">
            <Input type="password" id="password" autocomplete="current-password" v-model="password" />
        </FormRow>
        <FormRow>
            <Button variation="secondary" type="reset"> Cancel </Button>
            <Button>Create new user</Button>
        </FormRow>
    </Form>
</template>
