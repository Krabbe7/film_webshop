import { defineStore } from "pinia"

export const useKundeOrderInfoStore = defineStore("order", {
  // State definerer her de data, der skal opbevares i store'en
  state: () => ({
    navn: "",
    email: "",
    adresse: "",
    by: "",
    postnummer: "",
    erLeveringOgFakturaSamme: true,
    leveringsNavn: "",
    leveringsAdresse: "",
    leveringsBy: "",
    leveringsPostnummer: "",
    kortholderNavn: "",
    kortnummer: "",
    udlobsdato: "",
    cvv: "",
    sameAddresse: false,
  }),

  getters: {
    // Getter for at tjekke om ordre- og leveringsoplysninger er de samme
    sameAddress: (state) => {
      return (
        state.navn === state.leveringsNavn &&
        state.adresse === state.leveringsAdresse &&
        state.by === state.leveringsBy &&
        state.postnummer === state.leveringsPostnummer
      )
    },

    //Getter der erstatter alle kortnumrene med X, undtagen de 4 sidste
    maskOgFormaterKortnummer: (state) => {
      const kortnummer = state.kortnummer
      return kortnummer.length < 4
        ? kortnummer
        : kortnummer.slice(0, -4).replace(/\d/g, "X") + kortnummer.slice(-4)
    },
  },

  // Action der opdaterer alle relevante kunde- og leveringsoplysninger
  actions: {
    setKundeOrderInfo({
      navn,
      email,
      adresse,
      by,
      postnummer,
      kortholderNavn,
      kortnummer,
      udlobsdato,
      cvv,
      sammeAdresse,
      leveringsNavn,
      leveringsAdresse,
      leveringsBy,
      leveringsPostnummer,
    }) {
      this.navn = navn
      this.email = email
      this.adresse = adresse
      this.by = by
      this.postnummer = postnummer
      this.kortholderNavn = kortholderNavn
      this.kortnummer = kortnummer
      this.udlobsdato = udlobsdato
      this.cvv = cvv
      this.sammeAdresse = sammeAdresse
      this.leveringsNavn = leveringsNavn
      this.leveringsAdresse = leveringsAdresse
      this.leveringsBy = leveringsBy
      this.leveringsPostnummer = leveringsPostnummer
    },
  },
})
