<template>
    <h1 v-if="speaking">{{speech}}</h1>
    <h6 v-else> Poke Me </h6>
</template>

<script>
export default {
    name: 'SpeechBubble',
    methods: {
        speak
    },
    data: function () {
        return {
            speech: 'Poke Me',
            speaking: false
        }
    }
}

function speak () {
    if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null    
    }
    const word = `${selectRandomWord()} ${selectRandomInflection()}`
    this.speech = word
    this.speaking = true
    this.timer = setTimeout(() => {
        this.speech = 'Poke Me'
        this.speaking = false
    }, 1500)
}

function selectRandomWord () {
    const possibleWords = ['Bork', 'Berk', 'Borf', 'Bark', 'Birk']
    return possibleWords[Math.floor(Math.random() * possibleWords.length)]
}

function selectRandomInflection() {
    const inflections = ['?', '!', 'uwu', ':D', '!?!', '', '...?']
    return inflections[Math.floor(Math.random() * inflections.length)]
}
</script>