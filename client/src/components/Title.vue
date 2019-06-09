<template>
    <h1 class="title"> {{title}} </h1>
</template>

<script>
export default {
    name: 'Title',
    data: function () {
        return {
            title: ''
        }
    },
    created: function () {
        /* eslint-disable */
        console.log('called');
        const words = ['Bork', ', Borf', ', Berk']
        let i = 0
        let timer = setInterval(() => {
            if (i >= 3) {
                clearInterval(timer)
            } else {
                const typer = typeWord.bind(this)
                typer(words[i])
                i += 1
            }
        }, 500)
    }
    //Bork Borf Berk
}

function typeWord (word) {
    let i = 0
    let timer = setInterval(() => {
        if (i >= word.length) {
            clearInterval(timer)
        } else {
            this.title += word[i]
            i += 1
        }
    }, 50)
}
</script>

<style scoped>
    .title {
        margin-bottom: 50px;
        font-size: 50px;
    }
</style>