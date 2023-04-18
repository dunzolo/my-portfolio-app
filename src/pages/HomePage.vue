<script>
export default {

}
</script>

<template lang="">
    <div class="content">
        <section id="home" class="container">
            <p class="greeting">Ciao, mi chiamo</p>
            <h1 class="name">Davide Rossi.</h1>
            <p class="description">Sono un Jr Full Stack Web Developer</p>
        </section>
        <section id="about-me" class="container">
            <p class="greeting">Ciao, mi chiamo</p>
            <h1 class="name">Davide Rossi.</h1>
            <p class="description">Sono un Jr Full Stack Web Developer</p>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.content {
    width: 100%;
    padding: 0 5rem;

    .container {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        .greeting,
        .description {
            font-family: 'Barlow Semi Condensed';
            font-size: 2rem;
        }

        .name {
            font-family: 'Barlow Semi Condensed';
            color: $secondary_color;
            font-size: 5rem;
        }
    }
}
</style>