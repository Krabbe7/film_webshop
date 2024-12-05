<template>
  <div id="container">
    <div class="film-container">
      <div class="film-info-container">
        <h2 class="film-titel">{{ film.titel }}</h2>
        <div class="imgOgBeskrivelse-container">
          <!-- Film image section -->
          <div class="film-image-container">
            <img :src="film.filmPoster" alt="Film Poster" class="film-image" />
          </div>

          <!-- Film description and price section in a column -->
          <div class="film-details">
            <p class="film-beskrivelse">{{ film.beskrivelse }}</p>
            <p class="film-pris">Pris: {{ film.pris }} kr</p>
          </div>
        </div>

        <div class="film-tags">
          <p class="skuespillere-header">Skuespillere:</p>
          <div class="skuespillere">
            <p
              class="skuespiller"
              v-for="(skuespiller, index) in film.skuespillere"
              :key="index"
            >
              {{ skuespiller }}
            </p>
          </div>

          <p class="tags-header">Genre:</p>
          <div class="tags">
            <p class="tag" v-for="(tag, index) in film.tags" :key="index">
              {{ tag }}
            </p>
          </div>
          <div class="button-wrapper">
            <button class="lægIKurv" @click="kurvStore.tilfojTilKurv(film)">
              Læg i kurv
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { computed, watch, onMounted } from "vue"
import { useFilmStore } from "../store/FilmStore"
import { useKurvStore } from "@/store/KurvStore"

const route = useRoute()
const filmStore = useFilmStore()
const kurvStore = useKurvStore()

//Opdater fanen med filmtitel og hvis filmtitel ikke findes, så: Film-webshop
const updaterTitel = () => {
  document.title = film.value
    ? `${film.value.titel} - Film-webshop`
    : "Film-webshop"
}

onMounted(() => {
  updaterTitel()
})

const film = computed(() => {
  const filmSlug = route.params.slug // Hent slug fra route params
  return filmStore.getFilmBySlug(filmSlug) // Find filmen baseret på slug
})

// Lytter til route-ændringer for at opdatere titlen
watch(() => route.params.slug, updaterTitel)
</script>

<style scoped>
.imgOgBeskrivelse-container {
  display: flex;
  padding: 20px;
  gap: 30px;
  align-items: flex-start;
}
.film-image-container img {
  width: 115px;
  height: auto;
  margin: 0;
  border-radius: 4px;
  margin-top: 10px;
}

.film-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 190px;
  align-self: stretch;
}

.film-beskrivelse {
  font-size: 1em;
  margin: 0;
}

.film-pris {
  margin: 0;
  padding-bottom: 5px;
  text-align: left;
  font-size: 1.2em;
  color: #000000;
  font-weight: 600;
}

.film-container {
  margin: 20px auto 100px;
  padding: 20px 0 20px;
  max-width: 400px;
  box-shadow: 0 0 10px #6b6b6b1a;
}

.film-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  background-color: #f9f9f9;
  text-align: left;
  margin: auto;
}

.film-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.film-detail-image {
  display: flex;
  align-items: flex-start;
}

.film-titel {
  text-align: center;
  margin: 0;
  font-size: 1.25em;
}

.film-image {
  height: auto;
  margin: 0;
  border-radius: 4px;

  margin-top: 10px;
}

.film-beskrivelse {
  font-size: 0.95em;
  height: auto;
  text-align: left;
  margin: 0;
}

.film-tags {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.skuespillere-header {
  color: #000000;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 10px;
  text-align: left;
}

.skuespiller {
  background-color: #2863a7;
  color: white;
  border-radius: 12px;
  padding: 5px 10px;
  margin: 0px;
  font-size: 0.9m;
  text-align: center;
}

.skuespillere {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  height: auto;
  font-size: 0.8em;
}
.tags-header {
  color: #000000;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 10px;
  text-align: left;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 0;
}

.tag {
  background-color: #2863a7;
  color: white;
  border-radius: 12px;
  padding: 5px 10px;
  margin: 0px;
  font-size: 0.8em;
  text-align: center;
}

.lægIKurv {
  margin-top: 20px;
}

@media (max-width: 500px) {
  .film-container {
    max-width: 350px;
    height: auto;
  }

  .imgOgBeskrivelse-container {
    display: flex;
    flex-direction: column;

    padding: 0 20px 20px;
    align-items: center;
  }

  .film-details {
    width: 100%;
    justify-content: flex-start;
    height: auto;
    gap: 10px;
  }

  .film-titel {
    font-size: 1em;
  }

  .film-image-container img {
    width: 100px;
  }

  .film-beskrivelse {
    font-size: 0.8em;
  }

  .skuespillere-header,
  .tags-header {
    margin: 0;
    font-size: 0.85em;
  }

  .skuespiller,
  .tags {
    margin: 15px 0;
    font-size: 0.83em;
  }

  .film-pris {
    font-size: 0.97em;
    margin-top: 10px;
  }

  .lægIKurv {
    margin: 0 auto 0;
  }
}
</style>
