<template>
  <div id="app">
    <SocialProof />
    <h1 class="title"> Bork Borf Berk </h1>
    <DogButton :onClick='dogPoked'/>
    <SpeechBubble ref='bubble'/>
  </div>
</template>

<script>
import DogButton from './components/DogButton.vue'
import SpeechBubble from './components/SpeechBubble.vue'
import SocialProof from './components/SocialProof.vue'

export default {
  name: 'app',
  components: {
    DogButton,
    SpeechBubble,
    SocialProof
  },
  methods: {
    dogPoked
  }
}

function dogPoked () {
  /* eslint-disable */
  console.log('clicked');
  this.$refs.bubble.speak()
  playAudioFile()
}

function playAudioFile () {
  const url = getRandomAudioFilePath()
  console.log('URL', url);
  new Audio(url).play()
}

function getRandomAudioFilePath () {
  const root = process.env.BASE_URL
  const possibleFiles = ['bark1.wav', 'bark2.wav', 'bark3.wav', 'bark4.wav', 'bark5.wav']
  const file = possibleFiles[Math.floor(Math.random() * possibleFiles.length)]
  return root + file
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title {
  margin-bottom: 50px;
}
</style>
