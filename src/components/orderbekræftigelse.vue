<template lang="">
  <div class="container">
    <div id="orderbekraeftigelse">
      <h1>Tak for din bestilling!</h1>
      <p id="ordreNavn">Kære {{ orderStore.navn }},</p>
      <p id="ordrebesked">
        Tak for dit køb hos [ButikNavn]. Din ordre er modtaget og vil blive
        behandlet hurtigst muligt.
      </p>
      <p id="ordreTilMail">
        Vi har sendt din kvittering på mail til
        <strong>{{ orderStore.email }}</strong> med en oversigt over din
        bestilling.
      </p>
      <h1>Kvittering</h1>
      <div id="oversigt-container">
        <div id="orderOversigt">
          <h2>Orderoplysninger</h2>
          <p><strong>Navn:</strong> {{ orderStore.navn }}</p>
          <p><strong>Email:</strong> {{ orderStore.email }}</p>
          <p><strong>Adresse:</strong> {{ orderStore.adresse }}</p>
          <p><strong>By:</strong> {{ orderStore.by }}</p>
          <p><strong>Postnummer:</strong> {{ orderStore.postnummer }}</p>
          <h2>Leveringsopsyninger</h2>
          <div id="leveringsOversigt" v-if="!orderStore.sameAddress">
            <p><strong>Navn:</strong> {{ orderStore.leveringsNavn }}</p>
            <p><strong>Adresse:</strong> {{ orderStore.leveringsAdresse }}</p>
            <p><strong>By:</strong> {{ orderStore.leveringsBy }}</p>
            <p>
              <strong>Postnummer:</strong> {{ orderStore.leveringsPostnummer }}
            </p>
          </div>
          <div v-else>
            <p id="sammeOplysninger">
              <strong
                >Leveringsoplysninger er de samme som orderoplysninger</strong
              >
            </p>
          </div>
          <h2>Kortoplysninger</h2>
          <p>
            <strong>Navt på kortholder:</strong>
            {{ orderStore.kundeKortholderNavn }}
          </p>
          <p>
            <strong>Kortnummer:</strong>
            {{ orderStore.maskOgFormaterKortnummer }}
          </p>
          <p><strong>Udløbsdato:</strong> {{ orderStore.udlobsdato }}</p>
          <p><strong>CVV:</strong> {{ orderStore.cvv }}</p>
        </div>
        <div id="Produktoversigt">
          <OrderOversigt />
          <kobteFilm />
        </div>
      </div>

      <div class="footer">
        <p>
          Har du spørgsmål, så tøv ikke med at
          <a href="mailto:support@butik.dk">kontakte os</a>.
        </p>
        <p>&copy; 2024 [ButikNavn]. Alle rettigheder forbeholdes.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useKundeOrderInfoStore } from "@/store/KundeOrderInfoStore"
import { useKurvStore } from "@/store/KurvStore"
import OrderOversigt from "./Komponenter_betalingsside/OrderOversigt.vue"
import kobteFilm from "./kobteFilm.vue"

const orderStore = useKundeOrderInfoStore()
const kurvStore = useKurvStore()

const updaterTitel = () => {
  document.title = "Ordrebekræftelse - Tak for dit køb"
}
onMounted(() => {
  updaterTitel()
})
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

#orderbekraeftigelse {
  max-width: 900px;
  width: 100%;
  margin: 20px auto 100px auto;
  background-color: #ffffff;
  padding: 20px 0;
  box-shadow: 0 0 10px #0000001a;
}

.container p {
  font-size: 0.9em;
}

#ordreNavn,
#ordrebesked,
#ordreTilMail {
  margin-top: 20px;
}

#ordreTilMail {
  margin-bottom: 50px;
}

#oversigt-container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  border-top: 1px solid #ddd;
  margin: 0 40px;
  padding: 10px 0;
}

#orderOversigt {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

#orderOversigt {
  flex: 1;
  min-width: 250px;
}

h1 {
  font-size: 1.4em;
}

#orderOversigt h2 {
  font-size: 1.2em;
  text-align: left;
  width: 100%;
  height: auto;
  margin: 15px auto;
}

.film-titel {
  max-width: 250px;
}

#sammeOplysninger {
  max-width: 300px;
}

#orderOversigt p,
#leveringsOversigt p {
  margin: 7px;
}

#leveringsOversigt p {
  margin-bottom: 14px;
}

.footer {
  text-align: center;
  margin-top: 20px;
  color: #777777;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #28a745;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

@media screen and (max-width: 775px) {
  #oversigt-container {
    flex-direction: column;
    align-items: center;
  }

  #orderOversigt,
  #Produktoversigt {
    width: 100%;
    max-width: 390px;
    margin: 0 auto;
  }
  #orderOversigt {
    order: 1;
  }

  #Produktoversigt {
    order: 2;
  }

  #ordrebesked,
  #ordreTilMail {
    text-align: center;
    margin: 20px 20px;
  }
}
</style>
