<template>
    <div v-if='linked' class='social-proof'>
        <h1> Live Borks: {{userTotal}} </h1>
        <h3> Lifetime Clicks: {{lifetimeTotal}} </h3>
    </div>
</template>

<script>

export default {
    name: 'SocialProof',
    data: function () {
        return {
            linked: false,
            userTotal: 0,
            lifetimeTotal: 0
        }
    },
    created: function () {
        // create socket io connection and
        // bind data from connection to state
    }
}
</script>

<style scoped>
    .social-proof {
        display: flex;
        position: absolute;
        top: 30px;
        right: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-width: 60px;
        padding: 40px;
    }

</style>