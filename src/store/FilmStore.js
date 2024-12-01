import { defineStore } from "pinia"
import films from "@/assets/film"

// Slug generator funktion til fane-tekst
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Erstat ikke-bogstaver/tal med bindestreger
    .replace(/(^-|-$)+/g, "") // Fjern bindestreger i starten/slutningen
}

export const useFilmStore = defineStore("filmStore", {
  state: () => ({
    filmList: [],
  }),
  actions: {
    // Loader filmdata og tilføjer en "slug" for hver film baseret på filmens titel.
    loadFilms() {
      this.filmList = films.map((film) => ({
        ...film,

        slug: createSlug(film.titel),
      }))
    },
  },
  getters: {
    // Finder en film i filmList baseret på slug (unik identifikator genereret fra filmens titel).
    getFilmBySlug: (state) => (slug) => {
      return state.filmList.find((film) => film.slug === slug)
    },
  },
})
