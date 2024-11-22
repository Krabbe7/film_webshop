const films = [
  {
    filmPoster: require("../assets/filmPosters/Deadpool_movie_poster.jpg"),
    titel: "Deadpool",
    pris: 150,
    skuespillere: ["Ryan Reynolds", "Morena Baccarin"],
    tags: ["Action", "Komedie", "Superhelte"],
    beskrivelse:
      "Deadpool er en tidligere specielstyrkesoldat, Wade Wilson, som får kræft og får en eksperimentel behandling, der giver ham superhelteevner og en sort humor. Han søger hævn mod dem, der ødelagde hans liv.",
  },
  {
    filmPoster: require("../assets/filmPosters/deadpool_wolverine_movie_poster.jpg"),
    titel: "Deadpool & Wolverine",
    pris: 160,
    skuespillere: ["Ryan Reynolds", "Hugh Jackman"],
    tags: ["Action", "Komedie", "Superhelte"],
    beskrivelse:
      "Deadpool og Wolverine slår sig sammen for at bekæmpe en ny trussel, mens de håndterer deres indbyrdes rivalisering og forskelligheder. En actionfyldt og humoristisk rejse!",
  },
  {
    filmPoster: require("../assets/filmPosters/the_avengers_movie_poster.jpg"),
    titel: "The Avengers",
    pris: 180,
    skuespillere: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    tags: ["Action", "Eventyr", "Superhelte"],
    beskrivelse:
      "Da en magtfuld trussel opstår, må Nick Fury samle et team af superhelte, herunder Iron Man, Thor, Captain America og Hulk, for at beskytte jorden.",
  },
  {
    filmPoster: require("../assets/filmPosters/inside_out_movie_poster.jpg"),
    titel: "Inside Out",
    pris: 130,
    skuespillere: ["Amy Poehler", "Phyllis Smith"],
    tags: ["Animation", "Familie", "Komedie"],
    beskrivelse:
      "I hjernen på en ung pige, Riley, bor hendes følelser: Frygt, Glad, Vrede, Sørg og Afsky. Da Riley flytter til en ny by, bliver hendes følelser udfordret, og de må finde en måde at hjælpe hende med at tilpasse sig.",
  },
  {
    filmPoster: require("../assets/filmPosters/toy_story_movie_poster.jpg"),
    titel: "Toy Story 1",
    pris: 120,
    skuespillere: ["Tom Hanks", "Tim Allen"],
    tags: ["Animation", "Eventyr", "Familie"],
    beskrivelse:
      "Toy Story følger legetøjet Woody, der bliver jaloux på den nye astronaut Buzz Lightyear. De to må arbejde sammen for at finde vej hjem, efter at de bliver tabt.",
  },
  {
    filmPoster: require("../assets/filmPosters/toy_story_2_movie_poster.jpg"),
    titel: "Toy Story 2",
    pris: 130,
    skuespillere: ["Tom Hanks", "Tim Allen"],
    tags: ["Animation", "Eventyr", "Familie"],
    beskrivelse:
      "Woody bliver kidnappet af en legetøjs-samler, og Buzz Lightyear og de andre legetøj må samarbejde for at redde ham, mens de lærer om venskab og loyalitet.",
  },
  {
    filmPoster: require("../assets/filmPosters/m3gan_movie_poster.jpg"),
    titel: "M3GAN",
    pris: 140,
    skuespillere: ["Allison Williams", "Violet McGraw"],
    tags: ["Gyser", "Sci-Fi", "Thriller"],
    beskrivelse:
      "M3GAN er en AI-drevet dukke, der er designet til at være en perfekt følgesvend for børn. Men når den får sin egen vilje, går tingene forfærdeligt galt.",
  },
  {
    filmPoster: require("../assets/filmPosters/free_guy_movie_poster.jpg"),
    titel: "Free Guy",
    pris: 160,
    skuespillere: ["Ryan Reynolds", "Jodie Comer"],
    tags: ["Action", "Komedie", "Eventyr"],
    beskrivelse:
      "Guy er en bankfunktionær, der opdager, at han lever i et videospil. For at ændre sin skæbne beslutter han sig for at blive helten i sin egen historie.",
  },
  {
    filmPoster: require("../assets/filmPosters/ghosted_movie_poster.jpg"),
    titel: "Ghosted",
    pris: 150,
    skuespillere: ["Chris Evans", "Ana de Armas"],
    tags: ["Komedie", "Romantik", "Action"],
    beskrivelse:
      "En romantisk komedie om en mand, der opdager, at hans date er en hemmelig agent, hvilket fører til en vild og uventet rejse.",
  },
  {
    filmPoster: require("../assets/filmPosters/lord_of_the_rings_1_movie_poster.jpg"),
    titel: "Ringenes Herre: Eventyret om ringen",
    pris: 200,
    skuespillere: ["Elijah Wood", "Ian McKellen"],
    tags: ["Fantasy", "Eventyr", "Drama"],
    beskrivelse:
      "Frodo Sækker arver en magisk ring og bliver nødt til at forlade sit hjem i Herredet for at ødelægge den i Mordor. Sammen med en gruppe af venner og allierede starter han en farlig rejse mod det onde hjerte af Midgård.",
  },
  {
    filmPoster: require("../assets/filmPosters/lord_of_the_rings_2_movie_poster.jpg"),
    titel: "Ringenes Herre: De to tårne",
    pris: 200,
    skuespillere: ["Elijah Wood", "Ian McKellen"],
    tags: ["Fantasy", "Eventyr", "Drama"],
    beskrivelse:
      "Mens Frodo og Sam fortsætter deres rejse mod Mordor med hjælp fra den mystiske Gollum, må Aragorn, Legolas og Gimli forsvare Rohan mod Sarumans hær i Helms Kløft.",
  },
  {
    filmPoster: require("../assets/filmPosters/lord_of_the_rings_3_movie_poster.jpg"),
    titel: "Ringenes Herre: Kongen vender tilbage",
    pris: 220,
    skuespillere: ["Elijah Wood", "Ian McKellen"],
    tags: ["Fantasy", "Eventyr", "Drama"],
    beskrivelse:
      "Den episke afslutning på sagaen: Aragorn samler hærene af mennesker for at lede den sidste kamp mod Sauron, mens Frodo og Sam kæmper mod Gollums forræderi og for at nå Mordor og ødelægge Ringen én gang for alle.",
  },
  {
    filmPoster: require("../assets/filmPosters/Percy_jackson_movie_poster.jpg"),
    titel: "Percy Jackson & Lyntyven",
    pris: 140,
    skuespillere: ["Logan Lerman", "Alexandra Daddario"],
    tags: ["Fantasy", "Eventyr", "Familie"],
    beskrivelse:
      "Percy Jackson, en halvgud, opdager sin sande identitet, da han skal redde Zeus' lyn og forhindre en krig mellem guderne.",
  },
  {
    filmPoster: require("../assets/filmPosters/wrath_of_a_man_movie_poster.jpg"),
    titel: "Wrath of a Man",
    pris: 160,
    skuespillere: ["Jason Statham", "Holt McCallany"],
    tags: ["Action", "Thriller"],
    beskrivelse:
      "En mand med en hemmelighed infiltrerer et pengebehandlingsfirma, men hans motiver viser sig at være langt mere komplekse end først antaget.",
  },
  {
    filmPoster: require("../assets/filmPosters/uncharted_movie_poster.jpg"),
    titel: "Uncharted",
    pris: 170,
    skuespillere: ["Tom Holland", "Mark Wahlberg"],
    tags: ["Action", "Eventyr"],
    beskrivelse:
      "Nathan Drake, en ung skattejæger, går på jagt efter en legendarisk skat, mens han kæmper mod rivaliserende skattejægere.",
  },
]

export default films
