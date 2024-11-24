<template>
  <div id="container">
    <div id="minKurv">
      <div id="valgteFilmContainer">
        <div v-if="kurvStore.kurvArray.length === 0">
          <p id="tomKurvTekst">Din kurv er tom</p>
        </div>
        <div v-if="kurvStore.kurvArray.length > 0">
          <h1>Produkter</h1>
          <valgteFilm />
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
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useKurvStore } from "@/store/KurvStore"
import router from "@/router"
import valgteFilm from "./valgteFilm.vue"

const kurvStore = useKurvStore()

defineProps({
  iKurvHover: {
    type: Boolean,
    default: false,
  },
})

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
.container {
  padding: 20px 5px;
}
#minKurv {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 900px;
  margin: 20px auto 100px auto;
  gap: 20px;
}
#valgteFilmContainer {
  flex: 1;
  max-width: 450px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 30px 20px;
  box-shadow: 0 0 10px #0000001a;
}
#tomKurvTekst {
  font-weight: 600;
  font-size: 24px;
  margin: 0;
}

.label {
  font-size: 0.9em;
  margin-left: 5px;
}

.value {
  font-size: 0.9em;
  margin-right: 5px;
}
#oversigt {
  position: sticky;
  top: 20px;
  align-self: flex-start;
  padding: 20px 30px;
  box-shadow: 0 0 10px #0000001a;
  border-radius: 8px;
  width: 350px;
  background-color: white;
  z-index: 1;
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
  font-size: 0.85em;
  padding: 10px 12px;
  background-color: #313131;
  color: white;
  border: none;
  border-radius: 5px;
  width: 115px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
}

#kob:hover {
  background-color: #151515;
}

.deaktiver-knap {
  background-color: #d3d3d3;
  color: #7a7a7a;
  cursor: not-allowed;
  opacity: 0.6;
}

@media screen and (max-width: 700px) {
  #minKurv {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  #valgteFilmContainer {
    order: 1;
    max-width: 350px;
    width: 100%;
    margin: 0;
    padding: 20px 30px;
  }

  #oversigt {
    order: 2;
    padding: 20px 30px;
    max-width: 350px;
    margin: auto;
  }

  .label,
  .value {
    font-size: 0.9em;
  }

  #kob {
    font-size: 0.75em;
  }
}

@media (max-width: 400px) {
  #valgteFilmContainer {
    order: 1;
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 20px 15px;
  }

  #oversigt {
    margin: 0;
    align-self: center;
    padding: 20px 15px;
    width: 100%;
  }

  #iAltOversigt p {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 5px;
  }

  #iAltOversigt .label,
  #iAltOversigt .value {
    text-align: center;
    margin: 0;
    flex: none;
    width: auto;
  }

  #iAltOversigt {
    text-align: center;
  }

  #iAltOversigt p {
    gap: 10px;
  }
}
</style>
