<template>
    <Form @submit="onSubmit">
        <FormRow label="Password (min 8 characters)" :error="errors?.password?.message">
            <Input type="password" id="password" autocomplete="current-password" :disabled="isUpdating" v-model="password" />
        </FormRow>

        <FormRow label="Confirm password" :error="errors?.passwordConfirm?.message">
            <Input type="password" autocomplete="new-password" id="passwordConfirm" :disabled="isUpdating" v-model="passwordConfirm" />
        </FormRow>

        <FormRow>
            <Button @click="resetForm" type="reset" variation="secondary"> Cancel </Button>
            <Button :disabled="isUpdating">Update password</Button>
        </FormRow>
    </Form>
</template>

<script setup lang="ts">
import { useForm, ErrorMessage } from "vue-hooks-form"
import { ref } from "vue"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import { useUpdateUser } from "./useUpdateUser"

const { register, handleSubmit, formState, getValues, reset } = useForm()
const { errors } = formState

const { updateUser, isUpdating } = useUpdateUser()

const password = ref("")
const passwordConfirm = ref("")

function onSubmit() {
    const formData = { password: password.value }
    updateUser(formData, { onSuccess: resetForm })
}

function resetForm() {
    password.value = ""
    passwordConfirm.value = ""
    reset()
}
</script>
