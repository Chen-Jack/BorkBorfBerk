<template>
    <button class='dog-btn' @click="onClick">
        <img :src='dogUrl' />
    </button>
</template>


<script>
export default {
    name: 'DogButton',
    methods: {
        pickRandomDog
    },
    props: ['onClick'],
    data: function () {
        return {
            dogUrl: pickRandomDog()
        }
    }
}

function pickRandomDog () {
    const DOGS_FILES = ['a.png', 'b.jpeg', 'c.png', 'd.jpg']
    // const randomDogFileName = DOGS_FILES[Math.floor(Math.random() * DOGS_FILES.length)]
    const root = process.env.BASE_URL
    // return root + randomDogFileName
    return root + DOGS_FILES[0]
}
</script>

<style scoped>
    .dog-btn {
        display: inline-block;
        min-width: 150px;
        max-width: 250px;
        max-height: 250px;
        box-sizing: 1px solid black;
        outline: none;
        border: none;
        padding: 20px;
    }

    .dog-btn:active, .dog-btn:focus {
        outline: none;
    }

    .dog-btn:hover {
        outline: 1px solid rgba(0, 0, 0, 0.3)
    }

    img {
        display: inline-block;
        max-width: 100%;
    }

</style>
