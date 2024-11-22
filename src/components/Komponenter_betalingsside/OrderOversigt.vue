<template>
  <div id="oversigt">
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
        <span class="label"><b>Leveringsomkostninger:</b></span>
        <span class="value">{{ kurvStore.prisLevering }} kr</span>
      </p>
      <p id="iAltPris">
        <span class="label"><b>Pris i alt:</b></span>
        <span class="value">{{ kurvStore.totalPrisMedLevering }} kr</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useKurvStore } from "@/store/KurvStore"
const kurvStore = useKurvStore()
</script>

<style scoped>
.label {
  font-size: 0.9em;
  margin-left: 5px;
}

.value {
  font-size: 0.9em;
  margin-right: 5px;
}
#oversigt {
  width: 100%;
  margin-bottom: 20px;
}
#iAltOversigt {
  text-align: left;
  width: 100%;
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
</style>
