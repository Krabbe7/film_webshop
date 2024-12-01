<template>
  <div class="home">
    <h2>Film-webshop</h2>
    <!--https://github.com/quelchx/vue-writer-->
    <VueWriter :array="['HTML', 'CSS', 'Javascript']">
      <span id="writer">Lavet i <span id="vue">Vue</span> med </span>
    </VueWriter>
    <div id="film-slider">
      <FilmSlideShow />
    </div>
  </div>
  <button id="callToActionForside" @click="tilFilmUdvalg">
    Se vores filmudvalg
  </button>
</template>

<script setup>
import { onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import router from "@/router"
import { VueWriter } from "vue-writer"
import FilmSlideShow from "@/components/FilmSlideShow.vue"

const route = useRoute()

// Funktion til at opdatere titel
const updaterTitel = () => {
  document.title = "Film-webshop"
}
// Opdater titel, når komponenten indlæses
onMounted(() => {
  updaterTitel()
})

const tilFilmUdvalg = () => {
  router.push({ name: "film" })
}
</script>

<style>
#vue {
  color: #00df9a;
  margin: 0;
}

.typed,
.cursor {
  margin: 1px;
}

.is-typed {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
}

.is-typed span.typed {
  color: #00df9a;
}

.is-typed span.cursor {
  display: inline-block;
  width: 1.5px;

  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

#film-slider {
  position: relative;
  z-index: -1;
}

#callToActionForside {
  font-size: 0.9em;
  padding: 15px;
  background-color: #313131;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  margin-top: 55px;
}

#callToActionForside:hover {
  background-color: #151515;
}

@keyframes blink {
  49% {
    background-color: #21d83a;
  }

  50% {
    background-color: transparent;
  }

  99% {
    background-color: transparent;
  }
}

#writer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
}
</style>
