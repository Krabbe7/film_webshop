<template>
  <div id="leveringsadresse">
    <h3>Leveringsadresse</h3>
    <InputFelt
      label="Navn"
      id="leveringsnavn"
      v-model="modelValue.leveringsnavn"
      :error="errors.leveringsNavn"
      placeholder="Indtast navn til leveringsadresse"
    />
    <InputFelt
      label="Adresse"
      id="leveringsadresse"
      v-model="modelValue.leveringsadresse"
      :error="errors.leveringsAdresse"
      placeholder="Indtast leveringsadresse"
    />
    <InputFelt
      label="By"
      id="leveringsby"
      v-model="modelValue.leveringsby"
      :error="errors.leveringsBy"
      placeholder="Indtast postnummer til leveringsadresse"
    />
    <InputFelt
      label="Postnummer"
      id="leverings-postnummer"
      v-model="modelValue.leveringspostnummer"
      type="number"
      :error="errors.leveringsPostnummer"
      placeholder="Indtast postnummer til leveringsadresse"
    />
  </div>
</template>

<script setup>
import InputFelt from "./InputFelt.vue"

const props = defineProps({
  modelValue: Object,
  errors: Object,
})
const emit = defineEmits(["update:modelValue"])
</script>
<style>
.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
}

.input-group input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px 5px;
  margin-right: 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
</style>
