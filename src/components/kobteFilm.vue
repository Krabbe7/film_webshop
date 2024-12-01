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
  padding: 20px 30px;
  margin: 20px auto; /* Center elementet og giv plads mellem dem */
  width: 280px; /* Sikrer en ensartet bredde */
  background-color: #f9f9f9;
  text-align: left;
}

.film-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.film-detail-image {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

.film-titel {
  text-align: center;
  height: auto;
  margin-bottom: 20px;
}

.kurv-film-image {
  width: 85px;
  height: auto;

  border-radius: 4px;
}

.film-detaljer {
  display: flex;
  flex-direction: column;
  gap: 25px;
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

/* Responsiv design */
@media (max-width: 600px) {
  .film-item {
    flex-direction: column;
    width: 100%; /* Gør boksene mere fleksible på små skærme */

    text-align: center;
    padding: 20px 0;
  }

  .film-detaljer {
    text-align: center; /* Juster tekstplacering */
  }
}

@media (max-width: 400px) {
  .film-item {
    margin: 10px auto;
    max-width: 250px; /* Mindre bredde for ekstra små skærme */
    width: 100%;
    padding: 20px 0;
  }
  .film-detaljer {
    gap: 5px;
  }

  .film-detail-image {
    flex-direction: column; /* Skift til en kolonne-layout */
    align-items: center;
    gap: 15px;
  }
}
</style>
