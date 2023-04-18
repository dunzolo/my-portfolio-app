<script>
export default {

}
</script>

<template lang="">
    <div class="container">
        <p class="greeting">Ciao, mi chiamo</p>
        <h1 class="name">Davide Rossi.</h1>
        <p class="description">Sono un Jr Full Stack Web Developer</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables'as *;
@use '../style/partials/mixins'as *;
    .container{
        width: 90%;
        height: calc(100vh - 80px);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        .greeting, .description{
            font-family: 'Barlow Semi Condensed';
            font-size: 2rem;

        }
        .name{
            font-family: 'Barlow Semi Condensed';
            color: $secondary_color;
            font-size: 5rem;
        }
    }
</style>