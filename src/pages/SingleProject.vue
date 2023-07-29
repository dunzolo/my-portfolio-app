<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,
      project: null,
      // window: {
      //     width: 0,
      //     height: 0
      // }
    }
  },
  methods: {
    goBack() {
      this.$router
        .push({ path: '/' })
        .then(() => { this.$router.go() })
    },
    // handleScroll() {
    //     window.scrollTo(0, 0);
    // },
    // handleResize() {
    //     this.window.width = window.innerWidth;
    //     this.window.height = window.innerHeight;
    // },
  },
  created() {
    //alla creazione porto la visualizzazione nella parte superiore della pagina
    // this.handleScroll();
    // window.addEventListener('resize', this.handleResize);
    // this.handleResize();

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
          <p>Questa pagina contiene la presentazione del progetto web {{ this.project.title }} che include un'anteprima con relativa descrizione, tecnologie utilizzate e links associati</p>
        </div>
        <div class="show-down">
          <a href="#details" class="btn">Continua</a>
        </div>
      </div>
    </div>
    <div id="details" class="image">
      <img :src="this.project.image_project" alt="image-datail">
    </div>
    <div class="content">
      <div class="content-desc">
        <h2 class="content-title">Descrizione</h2>
        <p class="content-paragraph" v-for="desc in this.project.description">{{ desc }}</p>
      </div>
      <div class="content-tools">
        <h2 class="content-title">Tecnologie</h2>
        <div class="skills">
            <div class="single-skill" v-for="skill in this.project.skills">{{ skill }}</div>
        </div>
      </div>
        <h2 class="content-title">Links</h2>
        <div class="content-links">
          <a :href="this.project.link_website" class="btn btn-sm website">Sito web</a>
          <a :href="this.project.link_github" class="btn btn-sm github">Repo GitHub</a>
          <router-link :to="{ name: 'homepage', hash: '#projects' }" class="btn btn-sm back">
          Indietro
          </router-link>
      </div>
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
      // color: rgba(0, 0, 0, 0.7);
      box-shadow: 0 10px 15px 0 rgba($color: #000000, $alpha: 0.5);
      border-radius: 5px;
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

.content {
  margin: auto;
  padding-bottom: 3rem;
  max-width: 70rem;

  .content-title {
    margin-bottom: 3rem;
    font-weight: 600;
    font-size: 2.5rem;
  }

  .content-desc,
  .content-tools,
  .content-links {
    margin: 0 0 7rem 0;


    .content-paragraph {
      font-size: 1.8rem;
      line-height: 1.7;
      color: #666;
      margin-bottom: 2rem;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;

      .single-skill {
        padding: 1rem 2rem;
        margin-bottom: 1rem;
        margin-right: 1rem;
        font-size: 1.4rem;
        font-weight: 600;
        background: rgba(153, 153, 153, 0.2);
        // color: rgba(0, 0, 0, 0.7);
        border-radius: 5px;
        text-transform: uppercase;
      }
    }

    .btn {
      padding: 1rem 3rem;
      font-size: 1.4rem;
      border-radius: 5px;
      font-weight: 600;
      margin-right: 1.5rem;

      &.github,
      &.website {
        background-color: $secondary_color;
      }

      &.back {
        background-color: transparent;
        border: 2px solid $secondary_color;
      }
    }
  }

}

@media screen and (max-width: 576px) {
  .content .content-links {
    display: flex;
    flex-direction: column;
    width: 50%;

    a {
      margin-bottom: 1rem;
    }
  }

  .image img {
    width: 110%;
  }
}
</style>