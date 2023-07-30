<template>
    <Form @submit="handleSubmit">
        <FormRow label="Email address">
            <Input :value="email" disabled />
        </FormRow>
        <FormRow label="Full name">
            <Input type="text" v-model="fullName" id="fullName" />
        </FormRow>
        <FormRow label="Avatar image">
            <FileInput id="avatar" accept="image/*" @change="handleFileChange" />
        </FormRow>
        <FormRow>
            <Button type="reset" variation="secondary" @click="resetForm"> Cancel </Button>
            <Button>Update account</Button>
        </FormRow>
    </Form>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import { useUser } from "./useUser"

const { user } = useUser()
const {
    email,
    user_metadata: { fullName: currentFullName }
} = user

const fullName = ref(currentFullName)
const avatar = ref(null)

function handleSubmit(e) {
    e.preventDefault()
    // Handle form submission logic here, e.g., updating the user data
    // You can access the updated fullName and avatar values using the `fullName.value` and `avatar.value` properties
}

function handleFileChange(e) {
    // You can handle file change logic here, e.g., validating the file or displaying its details
    avatar.value = e.target.files[0]
}

function resetForm() {
    fullName.value = currentFullName
    avatar.value = null
}
</script>
