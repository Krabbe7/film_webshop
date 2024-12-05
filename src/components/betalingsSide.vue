<template>
  <div class="container">
    <div id="betalingsSide">
      <div id="betalingsContainer">
        <h1>Betalingsoplysninger</h1>
        <form @submit.prevent="submitForm">
          <InputFelt
            label="Navn"
            id="navn"
            v-model:modelValue="navn"
            :error="formStore.errors.navn"
            type="text"
            placeholder="Indtast navn"
          />
          <InputFelt
            label="Email"
            id="email"
            v-model:modelValue="email"
            :error="formStore.errors.email"
            type="text"
            placeholder="Indtast email"
          />
          <InputFelt
            label="Adresse"
            id="adresse"
            v-model:modelValue="adresse"
            :error="formStore.errors.adresse"
            type="text"
            placeholder="Indtast adresse"
          />
          <div class="postByContainer">
            <InputFelt
              label="Postnummer"
              id="postnummer"
              v-model:modelValue="postnummer"
              :error="formStore.errors.postnummer"
              type="number"
              placeholder="Indtast postnummer"
            />
            <InputFelt
              label="By"
              id="by"
              v-model:modelValue="by"
              :error="formStore.errors.by"
              type="text"
              placeholder="Indtast by"
            />
          </div>

          <h2>Leveringsmuligheder</h2>
          <div class="input-checkbox">
            <input type="checkbox" v-model="isChecked" id="sammeAdresse" />
            <label for="sammeAdresse" id="sammeAdresseTekst"
              >Ordre- og leveringsadresse er ens</label
            >
          </div>
          <LeveringsInfo
            v-if="!isChecked"
            :errors="formStore.errors"
            v-model:modelValue="leveringsInfo"
          />

          <Leveringsmuligheder v-model:modelValue="kurvStore.valgtLevering" />

          <h2>Kortoplysninger</h2>
          <InputFelt
            label="Navn på kort"
            id="card-name"
            v-model="kortholderNavn"
            :error="formStore.errors.kortholderNavn"
            placeholder="Indtast navn på kortholder"
          />
          <InputFelt
            label="Kortnummer"
            id="card-number"
            v-model="kortnummer"
            :maxlength="19"
            :error="formStore.errors.kortnummer"
            @input="formaterKortnummer"
            placeholder="Indtast kortnummer"
          />
          <div class="udlobCvvContainer">
            <InputFelt
              label="Udløbsdato"
              id="expiry"
              v-model="udlobsdato"
              :maxlength="5"
              :error="formStore.errors.udlobsdato"
              @input="formaterudlobsdato"
              placeholder="Indtast udløbsdato (MM/ÅÅ)"
            />
            <InputFelt
              label="CVV"
              id="cvv"
              v-model="cvv"
              :maxlength="3"
              :error="formStore.errors.cvv"
              placeholder="Indtast CVV"
            />
          </div>
          <button
            type="submit"
            id="betalKnap"
            :disabled="kurvStore.kurvArray.length === 0"
            :class="{ 'deaktiver-knap': kurvStore.kurvArray.length === 0 }"
            :style="{
              cursor:
                kurvStore.kurvArray.length === 0 ? 'not-allowed' : 'pointer',
            }"
          >
            Betal nu
          </button>
        </form>
      </div>
      <div id="produkter">
        <OrderOversigt />
        <div class="valgteFilmOversigt">
          <h3 v-if="kurvStore.kurvArray.length === 0">Din kurv er tom</h3>
          <valgteFilm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useErrorInputStore } from "@/store/ErrorInputStore"
import { useKurvStore } from "@/store/KurvStore"
import { useKundeOrderInfoStore } from "@/store/KundeOrderInfoStore"
import InputFelt from "./Komponenter_betalingsside/InputFelt.vue"
import LeveringsInfo from "./Komponenter_betalingsside/LeveringsInfo.vue"
import Leveringsmuligheder from "./Komponenter_betalingsside/Leveringsmuligheder.vue"
import { useRouter } from "vue-router"
import OrderOversigt from "./Komponenter_betalingsside/OrderOversigt.vue"
import valgteFilm from "../components/valgteFilm.vue"
import FortrydSletningPopUp from "./fortrydSletningPopUp.vue"

const navn = ref("")
const email = ref("")
const adresse = ref("")
const by = ref("")
const postnummer = ref("")
const kortholderNavn = ref("")
const kortnummer = ref("")
const udlobsdato = ref("")
const cvv = ref("")
const formStore = useErrorInputStore()
const kurvStore = useKurvStore()
const leveringsInfo = ref({
  leveringsnavn: "",
  leveringsadresse: "",
  leveringsby: "",
  leveringspostnummer: "",
})
const isChecked = ref(true)
const router = useRouter()
const orderStore = useKundeOrderInfoStore()

const updaterTitel = () => {
  document.title = "Betalingsside - Gennemfør dit køb"
}
onMounted(() => {
  updaterTitel()
})
// Funktion til at validere og sende form data
const submitForm = () => {
  const data = {
    navn: navn.value,
    email: email.value,
    adresse: adresse.value,
    by: by.value,
    postnummer: postnummer.value,
    kortholderNavn: kortholderNavn.value,
    kortnummer: kortnummer.value,
    udlobsdato: udlobsdato.value,
    cvv: cvv.value,
    leveringsNavn: isChecked.value
      ? navn.value
      : leveringsInfo.value.leveringsnavn,
    leveringsAdresse: isChecked.value
      ? adresse.value
      : leveringsInfo.value.leveringsadresse,
    leveringsBy: isChecked.value ? by.value : leveringsInfo.value.leveringsby,
    leveringsPostnummer: isChecked.value
      ? postnummer.value
      : leveringsInfo.value.leveringspostnummer,
  }

  console.log("Submitting form data:", data)

  const isValid = formStore.validateForm(data, isChecked.value)
  console.log("Is form valid:", isValid)

  if (isValid) {
    console.log("Kurv array:", kurvStore.kurvArray)
    kurvStore.setKobteFilm()
    kurvStore.clearKurv()
    tilOrderbekræftigelse()
  }
}

// Funktion til at gå videre til ordrebekræftelse
const tilOrderbekræftigelse = () => {
  const actualLeveringsnavn = isChecked.value
    ? navn.value
    : leveringsInfo.value.leveringsnavn
  const actualLeveringsadresse = isChecked.value
    ? adresse.value
    : leveringsInfo.value.leveringsadresse
  const actualLeveringsby = isChecked.value
    ? by.value
    : leveringsInfo.value.leveringsby
  const actualLeveringspostnummer = isChecked.value
    ? postnummer.value
    : leveringsInfo.value.leveringspostnummer

  console.log("Leveringsinformation:", {
    actualLeveringsnavn,
    actualLeveringsadresse,
    actualLeveringsby,
    actualLeveringspostnummer,
  })

  orderStore.setKundeOrderInfo({
    navn: navn.value,
    email: email.value,
    adresse: adresse.value,
    by: by.value,
    postnummer: postnummer.value,
    leveringsNavn: actualLeveringsnavn,
    leveringsAdresse: actualLeveringsadresse,
    leveringsBy: actualLeveringsby,
    leveringsPostnummer: actualLeveringspostnummer,
    kortholderNavn: kortholderNavn.value,
    kortnummer: kortnummer.value,
    udlobsdato: udlobsdato.value,
    cvv: cvv.value,
  })

  router.push({ name: "orderbekræftigelse" })
}

// Formater udløbsdato
const formaterudlobsdato = (event) => {
  let value = event.target.value

  value = value.replace(/[^\d\/]/g, "")

  if (value.length >= 2 && !value.includes("/")) {
    value = value.substring(0, 2) + "/" + value.substring(2)
  }

  udlobsdato.value = value
}

// Formater kortnummer
const formaterKortnummer = (event) => {
  let input = event.target.value.replace(/\s+/g, "")
  input = input.replace(/(\d{4})(?=\d)/g, "$1 ")
  kortnummer.value = input
}
</script>

<style scoped>
.container {
  padding: 20px 20px;
}
#betalingsSide {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 900px;
  margin: 20px auto 100px auto;
  gap: 20px;
  padding: 20px;
}

#betalingsContainer {
  max-width: 400px;
  margin: 0;
  padding: 20px 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px #0000001a;
  flex: 1;
  text-align: left;
}

#produkter {
  flex: 1;
  max-width: 400px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
}

#oversigt {
  text-align: center;
}

h1 {
  font-size: 1.4em;
}

h2 {
  font-size: 1.2em;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
h2 {
  text-align: left;
  margin-bottom: 20px;
}

.postByContainer,
.udlobCvvContainer {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.postByContainer > *,
.udlobCvvContainer > * {
  flex: 1;
  margin: 0;
  min-width: 0;
}

#sammeAdresse {
  margin-right: 17px;
}

#sammeAdresseTekst {
  font-size: 0.9em;
  font-weight: 600;
}

#betalKnap {
  font-size: 0.85em;
  padding: 10px 12px;
  background-color: #313131;
  color: white;
  border: none;
  border-radius: 5px;
  width: 115px;
  cursor: pointer;
  display: block;
  margin: 10px auto 0;
  text-decoration: none;
}

#betalKnap:hover {
  background-color: #151515;
}

.deaktiver-knap {
  background-color: #d3d3d3;
  color: #7a7a7a;
  cursor: not-allowed;
  opacity: 0.6;
}

.input-group input:focus {
  border-color: #007bff;
  outline: none;
}

.error-message {
  color: red;
  margin-left: 5px;
}

@media screen and (max-width: 768px) {
  #betalingsSide {
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    gap: 20px;
    padding: 5px;
  }

  #produkter {
    order: 1;
    padding: 0 30px;
    width: 100%;
  }

  #betalingsContainer {
    order: 2;
    width: 100%;
    margin: 0;
  }
  .postByContainer,
  .udlobCvvContainer {
    flex-direction: column;
    gap: 0;
  }
}
</style>
