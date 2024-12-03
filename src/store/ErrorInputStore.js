import { defineStore } from "pinia"

export const useErrorInputStore = defineStore("errorInput", {
  state: () => ({
    errors: {},
  }),
  actions: {
    validateField(field, value, isChecked) {
      if (!this.errors[field]) {
        this.errors[field] = ""
      }

      const udlobsdatoRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      // Valider felter
      if (!value.trim()) {
        if (field === "kortholderNavn") {
          this.errors[field] = "Indtast navn på kortholder"
        } else {
          this.errors[field] = `Indtast ${field.toLowerCase()}`
        }
      } else if (field === "email" && !emailRegex.test(value)) {
        this.errors.email = "Email skal indeholde @"
      } else if (field === "kortnummer" && value.length !== 19) {
        this.errors.kortnummer = "Kortnummeret skal være 16 tal"
      } else if (field === "udlobsdato" && !udlobsdatoRegex.test(value)) {
        this.errors.udlobsdato = "Indtast en valid dato (MM/ÅÅ)"
      } else if (field === "cvv" && value.length !== 3) {
        this.errors.cvv = "CVV skal indeholde tre tal"
      } else {
        this.errors[field] = ""
      }
    },

    validateForm(data, isChecked) {
      this.errors = {}

      for (const field in data) {
        this.validateField(field, data[field], isChecked)
      }

      return Object.values(this.errors).every((err) => !err)
    },
  },
})
