<script setup>
let request = ref('')
function submit() {
    console.log(request.value);
}
</script>
<template>
    <v-form @submit.prevent="submit">
        <v-text-field v-model="request" placeholder="Введите" variant="outlined" density="compact"
            hint="Помидор, мясо, макароны">
            <!-- <template #append-icon>
                </template> -->
        </v-text-field>
        <!-- <v-btn icon flat class="ml-2">
            <v-icon icon="fas fa-search" />
        </v-btn> -->
    </v-form>
</template>