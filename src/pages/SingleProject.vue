<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            project: null
        }
    },
    created() {
        //usando il parametro nella rotta, cerco il rispettivo ID
        this.project = store.projects.find((p) => p.id == this.$route.params.id);
    },
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col info">
                <h1 class="title">{{ this.project.title }}</h1>
                <div class="desc">
                    <p>Questa pagina contiene la presentazione del progetto web di {{ this.project.title }} che include un'anteprima con relativa descrizione, tecnologie utilizzate e links associati</p>
                </div>
                <div class="show-down">
                    <a href="#details" class="btn">Continua</a>
                </div>
            </div>
        </div>
        <div id="details" class="image">
            <img :src="this.project.image_project" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.info {
    padding: 15rem 0;

    .desc {
        text-align: center;
        line-height: 1.6;
        font-size: 2rem;
        margin: 2rem auto 0 auto;
    }

    .show-down {
        margin-top: 2rem;
        text-align: center;

        .btn {
            font-size: 2rem;
            font-weight: 600;
            padding: 0.5rem 7rem;
            background-color: $secondary_color;
            box-shadow: 0 10px 15px 0 rgba($color: #000000, $alpha: 0.5);
        }
    }
}

.title {
    font-size: 6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 0; //rimuovo bootstrap default
}

.image {
    display: flex;
    justify-content: center;

    img {
        width: 90%;
    }
}
</style>