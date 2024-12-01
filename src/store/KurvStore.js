import { defineStore } from "pinia" // Importerer Pinia's defineStore-funktion for at definere en store

// Definerer en Pinia store kaldet 'kurvStore' til at håndtere en indkøbskurv
export const useKurvStore = defineStore("kurvStore", {
  // State definerer de data, der opbevares i store'en
  state: () => ({
    kurvArray: [],
    kobteFilm: [],
    slettedeFilm: [],
    valgtLevering: "PostNord standardlevering (49)",
  }),

  // Getters bruges til at udregne og hente information fra state-data
  getters: {
    // Beregner det samlede antal varer i kurven
    iAltVarer: (state) => {
      return state.kurvArray.reduce((sum, film) => sum + film.antal, 0)
    },
    // Beregner den samlede pris for alle varer i kurven
    totalPris: (state) => {
      return state.kurvArray.reduce(
        (sum, film) => sum + film.pris * film.antal,
        0,
      )
    },
    // Beregner den samlede pris inklusive levering
    totalPrisMedLevering(state) {
      return this.totalPris + this.prisLevering
    },
    // Beregner det samlede antal købte varer
    iAltVarerKobt: (state) => {
      return state.kobteFilm.reduce((sum, film) => sum + film.antal, 0)
    },
    // Beregner den samlede pris for købte varer
    totalPrisKobt: (state) => {
      return state.kobteFilm.reduce(
        (sum, film) => sum + film.pris * film.antal,
        0,
      )
    },
    // Beregner den samlede pris for købte varer inklusive levering
    totalPrisMedLeveringKobt(state) {
      return this.totalPrisKobt + this.prisLevering
    },

    // Beregner prisen på levering baseret på den valgte leveringsmetode
    prisLevering(state) {
      const match = state.valgtLevering.match(/(\d+(\.\d+)?)/) // Matcher prisen i valgte leveringstekst
      return match ? parseFloat(match[0]) : 0 // Returnerer prisen som et tal, eller 0 hvis ikke fundet
    },
  },

  // Actions definerer de funktioner, der ændrer state-data
  actions: {
    // Tilføjer en film til kurven. Hvis filmen allerede findes, øges antal, ellers tilføjes den som en ny film
    tilfojTilKurv(film) {
      // Hvis filmen ikke allerede har et ID, tilføjes et unikt ID
      if (!film.id) {
        film.id = `film-${Date.now()}` // Generer et unikt ID baseret på tidsstempel
      }

      const eksisterendeFilm = this.kurvArray.find(
        (item) => item.id === film.id,
      )
      if (eksisterendeFilm) {
        eksisterendeFilm.antal += 1
        console.log("Øget antal for film:", film.id)
      } else {
        this.kurvArray.push({ ...film, antal: 1 })
        console.log("Tilføjet ny film til kurv:", film.id)
      }
    },

    // Fjerner en film fra kurven baseret på dens index
    fjernFraKurv(index) {
      this.kurvArray.splice(index, 1)
    },

    // Øger antallet af en film i kurven
    plusAntal(index) {
      this.kurvArray[index].antal += 1
    },

    // Mindsker antallet af en film i kurven, men ikke under 1
    minusAntal(index) {
      if (this.kurvArray[index].antal > 1) {
        this.kurvArray[index].antal -= 1
      }
    },

    // Sletter en film fra kurven og tilføjer den til en slettet liste (med en tidsbegrænset fortrydelse)
    sletFilm(index) {
      const slettetFilm = { ...this.kurvArray[index] }
      this.kurvArray.splice(index, 1)
      this.slettedeFilm.push(slettetFilm)

      // Fortryd pop-up skal vises i 5 sekunder (eller længere, hvis du ønsker det)
      setTimeout(() => {
        const i = this.slettedeFilm.indexOf(slettetFilm)
        if (i > -1) this.slettedeFilm.splice(i, 1) // Fjern filmen fra 'slettedeFilm' listen
      }, 5000)
    },

    // Giver mulighed for at fortryde sletningen af en film og returnere den til kurven
    fortrydSletning(film) {
      const index = this.slettedeFilm.indexOf(film)
      if (index > -1) {
        this.kurvArray.push(film)
        this.slettedeFilm.splice(index, 1)
      }
    },

    // Markerer de film i kurven som "købt" og gemmer dem i en separat liste
    setKobteFilm() {
      if (this.kurvArray.length > 0) {
        this.kobteFilm = this.kurvArray.map((film) => ({ ...film })) // Kopierer filmene til købt-liste
        console.log("Købte film:", this.kobteFilm)
      } else {
        console.error("kurvArrayet er tomt") // Hvis kurven er tom, logges en fejl
      }
    },

    // Rydder hele kurven (fjerner alle film fra kurven)
    clearKurv() {
      this.kurvArray = []
    },
  },
})
