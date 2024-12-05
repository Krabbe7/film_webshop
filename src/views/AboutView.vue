<template>
  <div id="om-os-container">
    <header id="hero">
      <h1>Velkommen til [Dit Shopnavn]</h1>
      <p id="om-intro">
        Din online destination for fantastiske filmoplevelser!
      </p>
    </header>

    <section id="vores-historie">
      <h2>Vores Historie</h2>
      <p>
        [Dit Shopnavn] blev grundlagt i [Årstal], drevet af en passion for film
        og en mission om at gøre filmverdenens bedste titler nemt tilgængelige
        for alle. Vores mål har altid været at skabe et samlingssted for
        filmelskere - fra blockbuster til indie-film og alt derimellem.
      </p>
    </section>

    <section id="mission-og-værdier">
      <h2>Vores Mission og Værdier</h2>
      <p>
        Vi tror på kraften i gode historier. Hos [Dit Shopnavn] er vores mission
        at gøre det nemt og sjovt for dig at finde og købe dine yndlingsfilm.
        Vores værdier er rodfæstede i kvalitet, tilgængelighed og
        kundetilfredshed. Vi sørger altid for at have de nyeste udgivelser,
        samtidig med at vi værner om klassikerne.
      </p>
    </section>

    <section id="team">
      <h2>Mød Vores Team</h2>
      <p>
        Vores team består af filmnørder, kreative sjæle og kundefokuserede
        medarbejdere, der alle arbejder sammen for at give dig den bedste
        oplevelse. Vi er her for at hjælpe dig med alt fra anbefalinger til
        teknisk support.
      </p>
    </section>

    <section id="call-to-action">
      <h2>Vil du lære mere?</h2>
      <p>
        Følg os på sociale medier og tilmeld dig vores nyhedsbrev for at holde
        dig opdateret på de nyeste udgivelser og spændende kampagner. Tak fordi
        du er en del af vores filmelskende fællesskab!
      </p>
      <button id="kontaktKnap">Kontakt os</button>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue"

const updateTitle = () => {
  document.title = "Om os"
}
onMounted(() => {
  updateTitle()
})
</script>

<style scoped>
#om-os-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
  color: #333;
}

#hero {
  background-color: #f4f4f4;
  padding: 32px;
  text-align: center;
  margin-bottom: 32px;
}

#vores-historie,
#mission-og-værdier,
#team,
#call-to-action {
  margin-bottom: 30px;
}

h1 {
  font-size: 1.4em;
}

h2 {
  font-size: 1.2em;
}

p {
  text-align: left;
  font-size: 1em;
}

#om-intro {
  text-align: center;
}

#kontaktKnap {
  background-color: #2863a7;
  font-size: 0.9em;
  padding: 12px 15px;
  color: #ffffff;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
}
#kontaktKnap:hover {
  background-color: #1b579c;
}
</style>
