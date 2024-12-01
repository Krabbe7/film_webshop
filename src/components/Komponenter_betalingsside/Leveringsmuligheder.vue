<template>
  <div class="leveringsMuligheder">
    <div
      class="input-group"
      v-for="(option, index) in leveringsMuligheder"
      :key="index"
    >
      <div>
        <input
          type="radio"
          name="levering"
          :id="option.id"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="$emit('update:modelValue', option.value)"
        />
      </div>
      <label :for="option.id">{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({ modelValue: String })

const leveringsMuligheder = ref([
  {
    id: "standard",
    value: "PostNord standardlevering (49)",
    label: "PostNord standardlevering (49 kr., 3-5 dage)",
  },
  {
    id: "express",
    value: "PostNord expresslevering (70)",
    label: "PostNord expresslevering (70 kr., 1-2 dage)",
  },
  {
    id: "afhentning",
    value: "Afhentning i butik (0)",
    label: "Afhentning i butik (Gratis, samme dag)",
  },
  {
    id: "omdelingPrivat",
    value: "dao - Omdeling til privat (39)",
    label: "dao - Omdeling til privat (39 kr., 3-5 dage)",
  },
  {
    id: "daoPakkeshop",
    value: "dao pakkeshop (29)",
    label: "dao pakkeshop (29 kr., 2-3 dage)",
  },
  {
    id: "glsPakkeshop",
    value: "GLS pakkeshop (29)",
    label: "GLS pakkeshop (29 kr., 2-3 dage)",
  },
])
</script>

<style>
.leveringsMuligheder {
  margin: 20px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.leveringsMuligheder .input-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.leveringsMuligheder .input-group input[type="radio"] {
  margin-right: 10px;
}

.leveringsMuligheder .input-group label {
  margin-left: 5px;
  text-align: left;
  font-size: 0.9em;
  cursor: pointer;
}
</style>
