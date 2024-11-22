<template>
  <div id="ordreOversigt">
    <ul>
      <li v-for="(film, index) in kobteFilm" :key="index" class="film-item">
        <div class="film-info-container">
          <h2 class="film-titel">{{ film.titel }}</h2>
          <div class="film-detail-image">
            <img
              :src="film.filmPoster"
              alt="Film Poster"
              class="kurv-film-image"
            />
            <div class="film-detaljer">
              <p class="film-beskrivelse">{{ film.beskrivelse }}</p>
              <p class="film-pris">Pris: {{ film.pris }} kr</p>
              <p class="film-antal">
                Antal:

                <span class="antalFilm">{{ film.antal }}</span>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useKurvStore } from "@/store/KurvStore"

const kurvStore = useKurvStore()
const kobteFilm = computed(() => kurvStore.kobteFilm)
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.film-titel {
  font-size: 17px;
  text-align: center;
  margin: 0;
}

.film-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  max-width: 350px;

  background-color: #f9f9f9;
  text-align: left;
  margin: auto;
  margin-top: 30px;
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
}

.kurv-film-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
  border-radius: 4px;
}

.film-detaljer {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.film-detaljer p {
  display: flex;
  gap: 7px;
}

.film-beskrivelse {
  font-size: 0.9em;

  height: 125px;
  margin: 0;
}

.film-antal {
  display: flex;
  align-items: center;
  margin: 0;
}

.antalFilm {
  font-size: 17px;
  margin: 0 10px;
}

.film-pris {
  font-size: 1em;
  color: #000000;
  margin-bottom: 10px;
  font-weight: 600;
}

@media (max-width: 600px) {
  #orderoversigt {
    order: 1;
  }
}

@media (max-width: 480px) {
  .film-item {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    max-width: 250px;
  }

  .film-detail-image {
    flex-direction: column;
    align-items: center;
  }

  .kurv-film-image {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .film-detaljer {
    gap: 10px;
    width: 100%;
  }

  .film-beskrivelse {
    text-align: left;
    height: auto;
  }

  .film-pris {
    font-size: 0.85em;
    margin: 0;
    text-align: center;
  }
  .antalFilm {
    margin: 0 10px;
    font-size: 0.9em;
  }
  .film-antal {
    font-size: 0.9em;
  }

  .antal {
    font-size: 0.9em;
  }
}
</style>
