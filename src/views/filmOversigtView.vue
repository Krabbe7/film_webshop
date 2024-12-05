<template>
  <div id="container">
    <div id="sorter">
      <label for="sortertags" id="sortertags-text">Sorter efter genre:</label>
      <select name="sortertags" id="sortertags" v-model="valgtgenre">
        <option value="Alle">Alle</option>
        <option value="Action">Action</option>
        <option value="Komedie">Komedie</option>
        <option value="Superhelte">Superhelte</option>
        <option value="Eventyr">Eventyr</option>
        <option value="Animation">Animation</option>
        <option value="Familie">Familie</option>
        <option value="Gyser">Gyser</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantik">Romantik</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Drama">Drama</option>
      </select>
      <button id="resetFilter" @click="resetFilter">Nultstil filter</button>
    </div>

    <div class="card-container">
      <div v-for="film in filteretFilm" :key="film.id" class="film-card">
        <router-link
          :to="{ name: 'filmDetaljer', params: { slug: film.slug } }"
          class="film-card-link"
          style="text-decoration: none"
        >
          <h2 class="film-titel">{{ film.titel }}</h2>
          <div class="film-image">
            <img :src="film.filmPoster" alt="Film Poster" />
          </div>
          <div class="film-info">
            <p class="film-pris">Pris: {{ film.pris }} kr</p>
            <p class="tags-header">Genre:</p>
            <div class="tags">
              <p class="tag" v-for="(tag, index) in film.tags" :key="index">
                {{ tag }}
              </p>
            </div>
          </div>
        </router-link>
        <div class="button-wrapper">
          <button class="lægIKurv" @click.stop="kurvStore.tilfojTilKurv(film)">
            Læg i kurv
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useFilmStore } from "../store/FilmStore"
import { useKurvStore } from "@/store/KurvStore"

const filmStore = useFilmStore()
const kurvStore = useKurvStore()

const valgtgenre = ref("Alle")

const updaterTitel = () => {
  document.title = "Film - Find dine favoritter"
}

//Henter filmlisten, når komponenten bliver renderet
onMounted(() => {
  if (filmStore.filmList.length === 0) {
    filmStore.loadFilms()
  }

  updaterTitel()
})

// Filtrerer film baseret på valgt genre
const filteretFilm = computed(() => {
  if (valgtgenre.value === "Alle") {
    return filmStore.filmList
  } else {
    return filmStore.filmList.filter((film) =>
      film.tags.includes(valgtgenre.value),
    )
  }
})

const resetFilter = () => {
  valgtgenre.value = "Alle"
}
</script>

<style>
#container {
  margin: 20px auto 100px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 40px auto;
  padding: 0 20px;
  justify-items: center;
  max-width: 2400px;
}

.film-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  width: 90%;
  box-shadow: 0 4px 8px #0000001a;
  transition: transform 0.2s ease-in-out;
  padding-bottom: 10px;
  text-align: center;
}

.film-card:hover {
  transform: scale(1.05);
}

.film-image img {
  width: 115px;
  height: auto;
}

.film-info {
  padding: 15px;
  text-align: left;
  height: 90px;
}

.film-titel {
  font-size: 17px;
  color: #333;
  margin: 20px 0 10px;
  text-align: center;
  height: 40px;
  padding: 0 15px;
}

.film-pris {
  font-size: 1em;
  color: #000000;
  margin: 0 0 10px;
  font-weight: 600;
}

.film-skuespillere {
  font-size: 1em;
  color: #555;
}

.tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tags-header {
  color: #000000;
  font-weight: bold;
  font-size: 0.9em;
}

.tag {
  background-color: #eff0f4;
  color: #4b4b4b;
  border-radius: 12px;
  padding: 5px 10px;
  margin: 0px;
  font-size: 0.8em;
  transition: background-color 0.3s;
}

.button-wrapper {
  display: flex;
  align-content: center;
  margin-top: 10px;
}

.lægIKurv {
  background-color: #313131;
  color: #ffffff;
  padding: 10px 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.85em;
  box-shadow: 0 4px 6px #0000001a;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border 0.3s ease,
    transform 0.3s ease;
  margin: 0 auto 10px;
  text-align: center;
  box-sizing: border-box;
}

.lægIKurv:hover {
  background-color: #ffffff;
  color: #313131;

  border: 1px solid;
}

#sortertags-text {
  margin: 0 10px;
}

#sortertags {
  width: 200px;
  padding: 5px;

  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #555;
  background-color: #f9f9f9;
  color: #333;
  z-index: 1;
  position: relative;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

#resetFilter {
  cursor: pointer;
  background-color: #2863a7;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;

  font-size: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

@media (max-width: 1350px) {
  .card-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1282px) {
  .film-info {
    height: 120px;
  }
}

@media (max-width: 1200px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .film-info {
    height: 90px;
  }
}

@media (max-width: 975px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .film-info {
    height: 130px;
  }

  .card-container {
    gap: 20px;
  }

  #sortertags-text,
  #sortertags {
    font-size: 0.9em;
  }

  #resetFilter {
    font-size: 0.75em;
  }

  .lægIKurv {
    font-size: 0.75em;
  }

  .film-info {
    height: 120px;
  }
}

@media (max-width: 823px) {
  .film-titel {
    height: 60px;
  }

  .film-info {
    height: 120px;
  }
}

@media (max-width: 705px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .film-titel {
    height: 40px;
  }

  .skuespiller,
  .tags {
    margin: 15px 0;
    font-size: 0.9em;
  }

  .film-card {
    width: 100%;
  }

  .film-info {
    height: 90px;
  }
}

@media (max-width: 570px) {
  .film-info {
    height: 120px;
  }
  #sortertags {
    margin: 10px;
  }
}

@media (max-width: 509px) {
  .film-titel {
    height: 60px;
  }
}

@media (max-width: 405px) {
  .film-titel {
    height: 80px;
  }
}

@media (max-width: 395px) {
  .card-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  .film-card {
    width: 80%;
  }

  .film-image img {
    width: 120px;
    height: auto;
  }

  .film-info {
    height: 90px;
  }

  .film-titel {
    height: 40px;
  }
}

@media (max-width: 377px) {
  .film-info {
    height: 120px;
  }
}

@media (max-width: 315px) {
  .film-titel {
    height: 60px;
  }
}

@media (max-width: 260px) {
  .film-info {
    height: 150px;
  }

  .film-titel {
    height: 80px;
  }
}

@media (max-width: 252px) {
  .film-titel {
    height: 100px;
  }
}
</style>
