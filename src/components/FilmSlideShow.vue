<template>
  <div class="karosel">
    <div :class="['karosel-container', { loaded: erIndlæst }]">
      <div
        v-for="(film, index) in filmTilDisplay"
        :key="film.titel + index"
        class="KaroselFilm"
      >
        <img :src="film.filmPoster" :alt="film.titel" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue"
import films from "@/assets/film"

const erIndlæst = ref(false)

const filmTilDisplay = computed(() => {
  return Array(16).fill(films).flat()
})

onMounted(() => {
  const billeder = document.querySelectorAll(".KaroselFilm img")
  let loadedCount = 0

  billeder.forEach((img) => {
    img.onload = () => {
      loadedCount++
      if (loadedCount === billeder.length) {
        erIndlæst.value = true
      }
    }
  })
})
</script>

<style scoped>
.karosel {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px auto 0;
}

.karosel-container {
  display: flex;
  animation: none;
}

.karosel-container.loaded {
  animation: scroll 250s linear infinite;
}

.KaroselFilm {
  margin: 0 10px;
}

.KaroselFilm img {
  height: 250px;
  border-radius: 10px;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
