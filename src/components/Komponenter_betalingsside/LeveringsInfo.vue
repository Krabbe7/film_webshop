<template>
  <div id="leveringsadresse">
    <h3>Leveringsadresse</h3>
    <InputFelt
      label="Navn"
      id="leveringsnavn"
      v-model="modelValue.leveringsnavn"
      :error="errors.leveringsNavn"
      placeholder="Indtast navn"
    />
    <InputFelt
      label="Adresse"
      id="leveringsadresse"
      v-model="modelValue.leveringsadresse"
      :error="errors.leveringsAdresse"
      placeholder="Indtast adresse"
    />
    <div class="postByContainer">
      <InputFelt
        label="Postnummer"
        id="leverings-postnummer"
        v-model="modelValue.leveringspostnummer"
        type="number"
        :error="errors.leveringsPostnummer"
        placeholder="Indtast postnummer"
      />
      <InputFelt
        label="By"
        id="leveringsby"
        v-model="modelValue.leveringsby"
        :error="errors.leveringsBy"
        placeholder="Indtast by"
      />
    </div>
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
h3 {
  font-size: 1em;
}
.postByContainer {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.postByContainer > * {
  flex: 1;
  margin: 0;
  min-width: 0;
}
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
@media screen and (max-width: 768px) {
  .postByContainer {
    flex-direction: column;
    gap: 0;
  }
}
</style>
