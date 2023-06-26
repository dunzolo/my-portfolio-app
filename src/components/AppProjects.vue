<script>
import { store } from '../store';

import { defineComponent } from 'vue'
import { Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default defineComponent({
    name: 'swiper-example-3d-coverflow',
    title: '3D Coverflow effect',
    url: import.meta.url,
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            store
        }
    },
    setup() {
        return {
            modules: [Pagination, EffectCoverflow]
        }
    }
})
</script>

<template>
    <div class="coverflow-example">
        <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }" :effect="'coverflow'"
            :grab-cursor="true" :centered-slides="true" :slides-per-view="'auto'" :coverflow-effect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }">
            <swiper-slide class="slide" v-for="(item, index) in store.projects" :key="index">
                <div class="post-card">
                    <div class="post-card-top">
                        <div class="avatar"><span>{{ item.id }}</span></div>
                        <div class="title"><span>{{ item.title }}</span></div>
                    </div>
                    <div class="image-preview" :style="{ 'background-image': 'url(' + item.image + ')' }"></div>
                    <div class="comment-like">
                        <router-link :to="{ name: 'project', params: { id: item.id } }" class="btn btn-sm">
                            Continua a leggere
                        </router-link>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
  
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.coverflow-example {
    height: 28rem;
    position: relative;
}

.swiper {
    height: 100%;
    width: 95%;
    border-radius: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;

    .slide {
        width: 30rem;
        height: 20rem;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.post-card {
    width: 100%;
    height: 100%;
    // background-color: rgba(255, 255, 255, 0.2);
    background-color: $primary_color;
    backdrop-filter: blur(5px);
    // background: lightgrey;
    // background-color: rgb(24 27 32);
    // border: 1px solid rgb(84 90 106);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;

    .post-card-top {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }
}

.avatar {
    height: 35px;
    width: 35px;
    margin-right: 0.5rem;
    border-radius: 50%;
    background-color: $secondary_color;
    position: relative;
    // background-image: linear-gradient(to top left, blueviolet, rgb(73, 31, 112));

    span {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -60%);
        font-weight: 600;
    }
}

.title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    transition: all .35s ease-in;
}

.image-preview {
    flex: 1;
    min-height: 150px;
    width: 100%;
    border-radius: 20px;
    // background-color: blueviolet;
    // background-image: linear-gradient(to top left, blueviolet, rgb(73, 31, 112));
    // background-image: url('/public/my-portfolio-boolflix.jpg');
    background-size: cover;
    margin-bottom: 4px;
}

.comment-like {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2px 0;

    .btn {
        background-color: $secondary_color;
        font-weight: 600;
    }
}
</style>