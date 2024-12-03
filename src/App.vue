<template>
  <div id="app" class="wrapper">
    <nav>
      <div class="links-wrapper">
        <router-link to="/">Hjem</router-link> |
        <router-link :to="{ name: 'film' }">Film</router-link> |
        <router-link :to="{ name: 'about' }">Om</router-link>
      </div>

      <div
        id="kurv"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <router-link :to="{ name: 'minkurv' }" style="text-decoration: none">
          <img
            src="./assets/shopping-cart-of-checkered-design_new.svg"
            alt=""
            id="kurvLogo"
          />
          <span id="kurvAntal" v-if="kurvStore.kurvArray.length > 0">
            {{ kurvStore.iAltVarer }}
          </span>
        </router-link>
        <div id="kurvHover" v-if="isHovered" @click.stop>
          <kurvHover />
        </div>
      </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :tilfojTilKurv="tilfojTilKurv"
          :kurvArray="kurvStore.kurvArray"
          @opdaterKurv="fjernFraKurv"
        />
      </router-view>
    </main>

    <footer>
      <span>© Copyright {{ aarstal }} </span>
    </footer>

    <FortrydSletningPopUp />
  </div>
</template>

<script setup>
import { useKurvStore } from "./store/KurvStore"
import { ref } from "vue"
import kurvHover from "./components/kurvHover.vue"
import FortrydSletningPopUp from "./components/fortrydSletningPopUp.vue"

const kurvStore = useKurvStore()

const aarstal = ref(new Date().getFullYear())

const isHovered = ref(false)

const tilfojTilKurv = kurvStore.tilfojTilKurv
const fjernFraKurv = kurvStore.fjernFraKurv
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Fylder hele vinduets højde */
  box-sizing: border-box; /* Sikrer, at padding ikke overskrider bredde/højde */
}

main {
  flex: 1; /* Udvider sig for at fylde pladsen mellem header og footer */
}

footer {
  background-color: #313131;
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  width: 100%;
  box-sizing: border-box;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #1b579c;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  position: relative;
}

.links-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

#kurv {
  position: fixed;
  margin-left: auto;
  right: 20px;
  width: 50px;
  top: 20px;

  transition: transform 0.2s ease-in-out;
}

#kurvLogo {
  height: auto;
  width: 70%;
}

#kurvAntal {
  color: white;
  background-color: #dd1c1c;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  position: absolute;
  bottom: -5px;
  right: 5px;
}

#kurv:hover {
  transform: scale(1.1);
  z-index: 2;
}

#kurvHover {
  position: absolute;
  right: 0;
}

span {
  text-align: left;
  margin-left: 20px;
}

@media (max-width: 600px) {
  #kurv {
    right: 0px;
  }
}
</style>
