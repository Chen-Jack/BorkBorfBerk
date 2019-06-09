<template>
    <div class='social-proof'>
        <h1> Live Borks: {{userTotal}} </h1>
        <h3> Lifetime Clicks: {{lifeTimeTotal}} </h3>
        <div v-if="connected" class='connected'> Connected </div>
        <div v-else class='disconnected'> Disconnected </div>
    </div>
</template>

<script>
export default {
    name: 'SocialProof',
    props: ['userTotal', 'lifeTimeTotal', 'connected'],
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

    .connected {
        color: green
    }
    .disconnected {
        color: red
    }

</style>