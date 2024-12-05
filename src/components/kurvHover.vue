<template>
  <div id="container">
    <div id="minKurvHover">
      <h2 id="minKurvHover-titel">Min kurv</h2>
      <div v-if="kurvStore.kurvArray.length === 0">
        <p id="tomKurvTekst">Din Kurv er tom</p>
      </div>
      <div id="valgteFilmContainer">
        <div v-if="kurvStore.kurvArray.length > 0">
          <valgteFilm :iKurvHover="true" />
        </div>
      </div>
      <div id="oversigt">
        <div id="iAltOversigt">
          <p>
            <span class="label"><b>Varer i alt:</b></span>
            <span class="value">{{ kurvStore.iAltVarer }}</span>
          </p>
          <p id="iAltPris">
            <span class="label"><b>Pris i alt:</b></span>
            <span class="value">{{ kurvStore.totalPris }} kr</span>
          </p>
        </div>

        <button
          id="kob"
          :disabled="kurvStore.kurvArray.length === 0"
          :class="{ 'deaktiver-knap': kurvStore.kurvArray.length === 0 }"
          :style="{
            cursor:
              kurvStore.kurvArray.length === 0 ? 'not-allowed' : 'pointer',
          }"
          @click="tilBetaling"
        >
          Gå til kassen
        </button>
      </div>
    </div>

    <FortrydSletningPopUp />
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useKurvStore } from "@/store/KurvStore"
import router from "@/router"
import valgteFilm from "./valgteFilm.vue"
import FortrydSletningPopUp from "./fortrydSletningPopUp.vue"

const kurvStore = useKurvStore()

const updaterTitel = () => {
  document.title = "Din Kurv - Se og rediger dine valg"
}

onMounted(() => {
  updaterTitel()
})

const tilBetaling = () => {
  router.push({ name: "betaling" })
}
</script>

<style scoped>
#container {
  margin-left: auto;
  margin-right: 0;
  background-color: #ffffff;
}

#minKurvHover-titel {
  text-align: center;
  font-size: 17px;
  margin: 20px 0 0;
}

#valgteFilmContainer {
  flex: 1;
  width: 260px;
  background-color: #ffffff;
  border-radius: 8px;
  max-height: 220px;
  overflow-y: auto;
  padding: 0 10px;
}

::v-deep(#tomKurvTekst) {
  font-weight: 600;
  font-size: 15px;
  margin: 0;
  width: 250px;
}

#minKurvHover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px #0000001a;
  gap: 20px;
  z-index: 2;
}

.label {
  font-size: 14px;
  margin-left: 5px;
}

.value {
  font-size: 14px;
  margin-right: 5px;
}

#oversigt {
  position: sticky;
  top: 20px;
  align-self: flex-start;
  padding: 10px 30px;
  border-top: 1px solid #ddd;
  width: 200px;
  background-color: white;
  margin: auto;
}

#iAltOversigt {
  text-align: left;
}

#iAltOversigt p {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
}

#iAltOversigt .label {
  flex: 1;
}

#iAltOversigt .value {
  text-align: right;
  min-width: 100px;
}

#iAltPris {
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

#kob {
  padding: 10px 14px;
  background-color: #313131;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.7em;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
}

#kob:hover {
  background-color: #0e0e0e;
}

.deaktiver-knap {
  background-color: #d3d3d3;
  color: #7a7a7a;
  cursor: not-allowed;
  opacity: 0.6;
}

/* scrollbar */
#valgteFilmContainer::-webkit-scrollbar {
  width: 6px;
}

#valgteFilmContainer::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

#valgteFilmContainer::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

#valgteFilmContainer::-webkit-scrollbar-track {
  background: #f1f1f1;
}

#valgteFilmContainer::-webkit-scrollbar-button {
  display: none;
}

@media screen and (max-width: 610px) {
  #kob {
    font-size: 0.75em;
  }
}
</style>
