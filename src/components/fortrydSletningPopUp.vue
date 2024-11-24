<template>
  <div
    v-for="(film, index) in kurvStore.slettedeFilm"
    :key="film.id"
    class="fortryd-popup"
    :style="{ bottom: `${20 + index * 100}px` }"
  >
    <p>Filmen "{{ film.titel }}" er slettet</p>
    <button @click="kurvStore.fortrydSletning(film)">Fortryd</button>
  </div>
</template>

<script setup>
import { useKurvStore } from "@/store/KurvStore"

const kurvStore = useKurvStore()
</script>

<style scoped>
.fortryd-popup {
  background-color: #333;
  color: #fff;
  padding: 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
}

.fortryd-popup button {
  background-color: #ff6666;
  border: none;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
