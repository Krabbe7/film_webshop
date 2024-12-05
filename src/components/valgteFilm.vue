<template>
  <ul>
    <li
      v-for="(film, index) in kurvStore.kurvArray"
      :key="film.id"
      :class="{
        'film-item-standard': !iKurvHover,
        'film-item-kurvHover': iKurvHover,
      }"
    >
      <div class="film-info-container">
        <h2
          :class="{
            'film-titel-standard': !iKurvHover,
            'film-titel-kurvHover': iKurvHover,
          }"
        >
          {{ film.titel }}
        </h2>
        <div
          :class="{
            'film-detail-image-standard': !iKurvHover,
            'film-detail-image-kurvHover': iKurvHover,
          }"
        >
          <img
            :src="film.filmPoster"
            alt="Film Poster"
            :class="{
              'film-image-standard': !iKurvHover,
              'film-image-kurvHover': iKurvHover,
            }"
          />
          <div
            :class="{
              'film-detaljer-standard': !iKurvHover,
              'film-detaljer-kurvHover': iKurvHover,
            }"
          >
            <p
              :class="{
                'film-pris-standard': !iKurvHover,
                'film-pris-kurvHover': iKurvHover,
              }"
            >
              Pris: {{ film.pris }} kr
            </p>
            <p
              :class="{
                'film-antal-standard': !iKurvHover,
                'film-antal-kurvHover': iKurvHover,
              }"
            >
              <span class="antal">Antal:</span>
              <img
                src="../assets/minusIkon.svg"
                alt="minus"
                :class="{
                  'minusIkon-standard': !iKurvHover,
                  'minusIkon-kurvHover': iKurvHover,
                }"
                @click="kurvStore.minusAntal(index)"
              />
              <span
                :class="{
                  'antalFilm-standard': !iKurvHover,
                  'antalFilm-kurvHover': iKurvHover,
                }"
                >{{ film.antal }}</span
              >
              <img
                src="../assets/plusIkon.svg"
                alt="plus"
                :class="{
                  'plusIkon-standard': !iKurvHover,
                  'plusIkon-kurvHover': iKurvHover,
                }"
                @click="kurvStore.plusAntal(index)"
              />
            </p>
            <button
              :class="{
                'sletKnap-standard': !iKurvHover,
                'sletKnap-kurvHover': iKurvHover,
              }"
              @click="kurvStore.sletFilm(index)"
            >
              Slet
            </button>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
import { useKurvStore } from "@/store/KurvStore"

const kurvStore = useKurvStore()

defineProps({
  iKurvHover: {
    type: Boolean,
    default: false,
  },
})
</script>

<style>
#minKurv {
  display: flex;
  justify-content: center;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0;
}

.film-titel-standard {
  font-size: 17px;
  text-align: center;
  margin: 0 0 20px 0;
  padding: 0 50px;
}

.film-titel-kurvHover {
  font-size: 15px;
  margin: 0 0 10px 0;
  text-align: center;
  padding: 0 10px;
}

.film-item-standard {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px 30px;
  max-width: 450px;
  background-color: #f9f9f9;
  text-align: left;
  margin-bottom: 20px;
}

.film-item-kurvHover {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  background-color: #f9f9f9;
  text-align: left;
  margin: 0 auto 15px;
}

.film-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.film-detail-image-standard {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.film-detail-image-kurvHover {
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.film-image-standard {
  max-width: 85px;
  height: auto;
  margin-right: 20px;
  border-radius: 4px;
}

.film-image-kurvHover {
  width: 60px;
  height: auto;
  margin-right: 20px;
  border-radius: 4px;
}

.film-detaljer-standard {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.film-detaljer-kurvHover {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.film-pris-standard {
  margin: 0;
  color: #000000;
  font-size: 1.1em;
  font-weight: 600;
}

.film-pris-kurvHover {
  margin: 0;
  font-size: 0.9em;
  margin-bottom: 12px;
  font-weight: 600;
}

.film-beskrivelse-standard {
  font-size: 16px;
  width: 250px;
  height: 150px;
  margin: 0;
}

.film-beskrivelse-kurvHover {
  display: none;
}

.plusIkon-standard,
.minusIkon-standard {
  width: 20px;
  cursor: pointer;
}

.plusIkon-kurvHover,
.minusIkon-kurvHover {
  width: 15px;
}

.film-antal-standard {
  display: flex;
  align-items: center;
  font-size: 0.95em;
  margin: 0;
}

.film-antal-kurvHover {
  display: flex;
  align-items: center;
  font-size: 0.83em;
  margin: 0 0 12px 0;
}

.antal {
  margin: 0 5px 0 0;
}

.antalFilm-standard {
  margin: 0 15px;
  font-size: 0.95em;
}

.antalFilm-kurvHover {
  font-size: 0.83em;
  margin: 0 7px;
}

button {
  margin: 0;
}

.sletKnap-standard,
.sletKnap-kurvHover {
  border: none;
  background-color: #e64e4e;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sletKnap-standard {
  font-size: 0.8em;
  margin: 0;
  padding: 7px 30px;
  margin: 5px auto;
}

.sletKnap-kurvHover {
  font-size: 0.6em;
  padding: 6px 20px;
  margin-top: 5px;
  margin: 0 auto;
}

.sletKnap-standard:hover,
.sletKnap-kurvHover:hover {
  background-color: #da4e4e;
}

@media (max-width: 768px) {
  .film-container-standard {
    max-width: 200px;
    height: auto;
  }

  .film-item-standard {
    padding: 20px 20px;
  }

  .film-pris-standard {
    font-size: 1em;
    margin: 0;
    text-align: center;
  }

  .antalFilm-standard {
    margin: 0 10px;
    font-size: 1em;
  }

  .antal {
    font-size: 1em;
  }
}

@media (max-width: 400px) {
  .film-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
  }

  .film-item-standard {
    padding: 20px 30px;
  }

  .film-detail-image-standard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .film-titel-standard {
    padding: 0 10px;
  }

  .film-image-standard {
    width: 150px;
    height: auto;
    margin: 0;
    border-radius: 4px;
  }

  .film-detaljer-standard {
    margin-top: 10px;
    gap: 15px;
  }

  .film-pris-standard {
    font-size: 0.85em;
    margin: 0;
    text-align: center;
  }

  .film-antal-standard {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 0;
  }

  .antalFilm-standard {
    margin: 0 10px;
    font-size: 0.9em;
  }

  .antal {
    font-size: 0.9em;
  }

  .plusIkon-standard,
  .minusIkon-standard {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .sletKnap-standard {
    margin-top: 10px;
    align-self: center;
    font-size: 0.75em;
    padding: 8px 30px;
  }
}
</style>
