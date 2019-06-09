<template>
  <div id="app">
    <Title />
    <SocialProof v-if="socketInit" :connected='socketConnected' :userTotal="totalConnections" :lifeTimeTotal="totalClicks"/>
    <DogButton :onClick='dogPoked'/>
    <SpeechBubble ref='bubble'/>
  </div>
</template>

<script>
import DogButton from './components/DogButton.vue'
import SpeechBubble from './components/SpeechBubble.vue'
import SocialProof from './components/SocialProof.vue'
import Title from './components/Title.vue'
import io from 'socket.io-client'

export default {
  name: 'app',
  components: {
    DogButton,
    SpeechBubble,
    SocialProof,
    Title
  },
  methods: {
    dogPoked
  },
  data: function () {
    return {
      totalConnections: 0,
      totalClicks: 0,
      socketInit: false,
      socketConnected : false
    }
  },
  created: function () {
    this.socket = io('serverlocation')

    this.socket.on('connect', () => {
      this.socketInit = true
      this.socketConnected = true
    });

    this.socket.on('/new player count', count => {
      this.totalConnections = count
    })

    this.socket.on('/new click count', count => {
      this.totalClicks = count
    })

    this.onsocket.on('disconnect', () => {
      this.socketConnected = false
    })

    this.socket.on('bork', () => {

    })
  }
}

function dogPoked () {
  /* eslint-disable */
  console.log('clicked');
  this.$refs.bubble.speak()
  playAudioFile()
  this.socket.emit('boardcast-bork')
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
</style>
