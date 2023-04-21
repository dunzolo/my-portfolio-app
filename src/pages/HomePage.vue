<script>
export default {

}
</script>

<template lang="">
    <div class="content">

        <!-- section home page -->
        <section id="home" class="container">
            <p class="greeting">Ciao, mi chiamo</p>
            <h1 class="name">Davide Rossi.</h1>
            <p class="description">Sono un Jr Full Stack Web Developer</p>
        </section>

        <!-- section about me -->
        <section id="about-me" class="container">
            <p class="greeting"><span class="index">01.</span> Chi sono</p>
            <p class="">
                Ciao, mi chiamo Davide Rossi Sono sempre stato un appassionato della tecnologia e di computer, ho deciso di dedicarmi intensamente alla programmazione web perchè mi affascina dal punto di vista realizzativo: mettere mano al codice, essere creativi e veder crescere sempre di più il proprio progetto.
                Per rimanere al passo con la tecnologia, bisogna essere in continua evoluzione e di conseguenza non si smette mai di imparare qualcosa di nuovo
            </p>
            <p>"𝑵𝒐𝒃𝒐𝒅𝒚 𝒒𝒖𝒆𝒖𝒆𝒔 𝒇𝒐𝒓 𝒂 𝒇𝒍𝒂𝒕 𝒓𝒐𝒍𝒍𝒆𝒓𝒄𝒐𝒂𝒔𝒕𝒆𝒓"</p>
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
            font-weight: 400;
        }

        .name {
            font-family: 'Barlow Semi Condensed';
            color: $secondary_color;
            font-size: 5rem;
            font-weight: 700;
        }
    }

    .index {
        color: $secondary_color;
    }
}

@media screen and (max-width: 576px) {
    .content {
        padding: 0;
    }
}
</style>