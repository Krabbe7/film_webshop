<template>
  <div id="oversigt">
    <!-- Betalingssiden vises -->
    <div v-if="erBetalingsside">
      <h2>Ordreoversigt</h2>
      <div id="iAltOversigt">
        <p>
          <span class="label"><b>Varer i alt:</b></span>
          <span class="value">{{ kurvStore.iAltVarer }}</span>
        </p>
        <p>
          <span class="label"><b>Pris i alt (ekskl. levering):</b></span>
          <span class="value">{{ kurvStore.totalPris }} kr</span>
        </p>
        <p>
          <span class="label"><b>Leveringspris:</b></span>
          <span class="value">{{ kurvStore.prisLevering }} kr</span>
        </p>
        <p id="iAltPris">
          <span class="label"><b>Pris i alt:</b></span>
          <span class="value">{{ kurvStore.totalPrisMedLevering }} kr</span>
        </p>
      </div>
    </div>
    <!-- Ordrebekræftelsessiden vises -->
    <div v-else>
      <h2>Produktoversigt</h2>
      <div id="iAltOversigtKobt">
        <p>
          <span class="label"><b>Varer i alt:</b></span>
          <span class="value">{{ kurvStore.iAltVarerKobt }}</span>
        </p>
        <p>
          <span class="label"><b>Pris i alt (ekskl. levering):</b></span>
          <span class="value">{{ kurvStore.totalPrisKobt }} kr</span>
        </p>
        <p>
          <span class="label"><b>Leveringspris:</b></span>
          <span class="value">{{ kurvStore.prisLevering }} kr</span>
        </p>
        <p id="iAltPrisKobt">
          <span class="label"><b>Pris i alt:</b></span>
          <span class="value">{{ kurvStore.totalPrisMedLeveringKobt }} kr</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useKurvStore } from "@/store/KurvStore"
import { useRoute } from "vue-router"

const kurvStore = useKurvStore()
const route = useRoute()

// Bestemmer om man er på betalingsside eller ordrebekræftelsesside
const erBetalingsside = route.name === "betaling"
</script>

<style>
h2 {
  font-size: 1.2em;
}
span.label {
  margin-left: 5px;
}

span.value {
  margin: 0 5px 0 0;
}

#oversigt {
  width: 100%;
  margin-bottom: 20px;
}

#iAltOversigt,
#iAltOversigtKobt {
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
  font-size: 0.9em;
}

#iAltOversigt p,
#iAltOversigtKobt p {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
}

#iAltOversigt .label,
#iAltOversigtKobt .label {
  flex: 1;
}

#iAltOversigt .value,
#iAltOversigtKobt .value {
  text-align: right;
  min-width: 100px;
  padding: 0;
}

#iAltPris,
#iAltPrisKobt {
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

@media (max-width: 300px) {
  #iAltOversigt,
  #iAltOversigtKobt {
    display: flex;
    flex-direction: column;
  }

  #iAltOversigt p,
  #iAltOversigtKobt p {
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  span.label {
    margin: 0;
  }

  #iAltOversigt .value,
  #iAltOversigtKobt .value {
    text-align: center;
    width: 100%;
  }
}
</style>
