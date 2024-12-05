<template>
  <div class="input-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :maxlength="maxlength"
      :placeholder="placeholder"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  id: String,
  type: { type: String, default: "text" },
  modelValue: String,
  maxlength: Number,
  placeholder: String,
  error: String,
})
const emit = defineEmits(["update:modelValue"])
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
label {
  font-size: 0.9em;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: none;
}

.error-message {
  color: red;
  margin-left: 2px;
  font-size: 0.9em;
}

.input-group {
  margin-bottom: 5px;
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
