<script>
import { store } from '../store';
import emailjs from '@emailjs/browser';
import AppProjects from '../components/AppProjects.vue';
export default {
    components: {
        AppProjects
    },
    data() {
        return {
            store,
            is_active: 'btn-0',
            is_submit: false
        }
    },
    methods: {
        isActive(id) {
            if (this.is_active == 'btn-0') {
                document.getElementById('btn-0').classList.remove('active');
                this.is_active = id;
                document.getElementById(this.is_active).classList.add('active');
            }
            else {
                document.getElementById(this.is_active).classList.remove('active');
                document.getElementById(id).classList.add('active');
                this.is_active = id;
            }
        },
        sendEmail() {
            this.is_submit = true;
            emailjs.sendForm('service_whgafph', 'template_r8p4tir', this.$refs.form, 'shOS1eRBqmgxrAk0Z')
                .then((result) => {
                    this.$refs.form.reset();
                    this.is_submit = false;
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    },
    mounted() {
        document.getElementById(this.is_active).classList.add('active');
    },
}
</script>

<template lang="">
    <div class="full-content">

        <!-- section home page -->
        <section id="home" class="content">
            <p class="greeting">Ciao, mi chiamo</p>
            <h1 class="name">Davide Rossi.</h1>
            <p class="description">Sono un Jr Full Stack Web Developer</p>
        </section>

        <!-- section about me -->
        <section id="about-me">
            <div class="container p-0">
                <div class="row">
                    <div class="col-lg-8 pe-lg-3 col-md-12 p-md-0">
                        <!-- presentation -->
                        <div class="pb-3">
                            <h2 class="heading-sec pb-3"><span class="index">01.</span> Chi sono</h2>
                            <p class="presentation">
                                Ciao, mi chiamo Davide Rossi Sono sempre stato un appassionato della tecnologia e di computer, ho deciso di dedicarmi intensamente alla programmazione web perchè mi affascina dal punto di vista realizzativo: mettere mano al codice, essere creativi e veder crescere sempre di più il proprio progetto.
                                Per rimanere al passo con la tecnologia, bisogna essere in continua evoluzione e di conseguenza non si smette mai di imparare qualcosa di nuovo
                            </p>
                        </div>
                        <!-- skills -->
                        <div>
                            <h3 class="heading-third"><span class="index">#</span>Skills</h3>
                            <div>
                                <div class="mb-3">
                                    <h4 class="type-skill mb-2">Front-end</h4>
                                    <img class="icon" v-for="(item, index) in store.icon_front_end" :key="index" :src="item.icon" :alt="item.name">
                                </div>
                                <div>
                                    <h4 class="type-skill mb-2">Back-end</h4>
                                    <img class="icon" v-for="(item, index) in store.icon_back_end" :key="index" :src="item.icon" :alt="item.name">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 image">
                        <img src="/public/my-portfolio-image-about-me.png" alt="">
                    </div>
                </div>
            </div>
        </section>

        <!-- exprecience -->
        <section id="experience">
            <div class="container p-0">
                <div class="row d-flex justify-content-center">
                    <div class="col-10">
                        <h2 class="heading-sec pb-3"><span class="index">02.</span> Esperienza</h2>
                        <div class="row">
                            <div class="col-3 d-flex flex-column">
                                <button type="button" class="work-company" :id="'btn-' + index" 
                                    v-for="(item, index) in store.experiences" :key="index"
                                    @click="isActive($event.target.id)">
                                        {{ item.title}}
                                </button>
                            </div>
                            <div class="col-9">
                                <div v-for="(item, index) in store.experiences" :key="index" 
                                    :class="this.is_active == 'btn-' + index ? 'd-block' : 'd-none'">
                                    <p class="work-desc bold">{{ item.name }}</p>
                                    <p class="work-desc">{{ item.period }}</p>
                                    <hr>
                                    <p class="work-desc" v-if="item.sector" v-html="item.sector"></p>
                                    <p class="work-desc" v-html="item.description"></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- projects -->
        <section id="projects">
            <div class="container p-0">
                <h2 class="heading-sec pb-3"><span class="index">03.</span> Progetti</h2>
                <div class="row">
                    <AppProjects/>
                </div>
            </div>
        </section>

        <!-- contact -->
        <section id="contact">
            <div class="container p-0">
                <h2 class="heading-sec pb-3"><span class="index">04.</span> Contattami</h2>
                <div class="row d-flex justify-content-center">
                    <div class="col-12 col-md-8">
                        <form ref="form" @submit.prevent="sendEmail">
                            <div class="mb-3">
                                <label class="form-label">Nome e Cognome</label>
                                <input type="text" class="form-control" placeholder="Mario Bianchi" name="user_name" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="nome@email.com" name="user_email" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Messaggio</label>
                                <textarea class="form-control" rows="5" name="message" placeholder="Scrivi il tuo messaggio" required></textarea>
                            </div>
                            <button id="btn-submit" type="submit" class="btn btn-primary" :disabled="is_submit">
                                <span v-if="is_submit == false"><i class="fa-solid fa-paper-plane pe-3"></i>INVIA</span>
                                <span v-else><i class="fa-solid fa-ban pe-3 "></i>INVIA</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

#about-me,
#experience,
#projects,
#contact {
    padding: 10rem 0;

    .heading-sec {
        font-size: 4rem;
        font-weight: 600;
        letter-spacing: 1px;
    }

    .heading-third {
        font-size: 2.8rem;
        font-weight: 600;
    }

    .index {
        color: $secondary_color;
    }
}

.full-content {
    width: 100%;
    padding: 0 100px;

    //------------------------
    //section home page
    //------------------------
    .content {
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
            font-size: 3rem;
            font-weight: 400;
        }

        .name {
            font-family: 'Barlow Semi Condensed';
            color: $secondary_color;
            font-size: 8rem;
            font-weight: 800;
            letter-spacing: 1px;
        }


    }

    //------------------------
    //section about me
    //------------------------
    #about-me {
        .presentation {
            font-size: 2rem;
        }

        .type-skill {
            font-weight: 600;
            font-size: 2rem;

        }

        .icon {
            width: 50px;
            padding-right: 10px;
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1);

            &:hover {
                filter: none;
                scale: 1.2;
                transition: .3s;
            }

            &:not(:hover) {
                transition: .3s;
            }
        }

        .image {
            display: flex;
            flex-direction: column;
            justify-content: start;

            img {
                mix-blend-mode: multiply;

                filter: grayscale(100%) contrast(1);
                width: 100%;

                &:hover {
                    filter: none;
                    transition: .3s;
                }

                &:not(:hover) {
                    transition: .3s;
                }
            }
        }

        .project-image {
            img {
                mix-blend-mode: multiply;
                filter: grayscale(100%);


                width: 100%;

                &:hover {
                    filter: none;
                }
            }
        }

    }

    //------------------------
    //section experience
    //------------------------
    #experience {
        .work-company {
            padding: 5px 0;
            background-color: transparent;
            border: none;
            border-left: 2px solid rgba(255, 255, 255, 0.3);
            font-size: 1.8rem;

            &:hover {
                transition: .3s;
                background-color: rgba(255, 255, 255, 0.2);
            }

            &:not(:hover) {
                transition: .3s;
            }
        }

        .work-desc {
            font-size: 1.7rem;

            &.bold {
                font-weight: 700;
            }
        }

        .d-block,
        .d-none {
            transition: 2s;
        }


        .active {
            border-left: 2px solid $secondary_color;
            color: $secondary_color;
            transition: .3s;
        }
    }

    //------------------------
    //section contact
    //------------------------
    #contact {
        label {
            font-size: 1.5rem;
            font-weight: 600;
        }

        input,
        textarea {
            font-size: 1.5rem;
            font-style: italic;
        }

        .btn {
            font-size: 1.5rem;
            font-weight: 600;
            padding: 0.5rem 3rem;
            background-color: $secondary_color;
            border: none;
            box-shadow: 0 10px 15px 0 rgba($color: #000000, $alpha: 0.5);
            border-radius: 5px;

            &:hover,
            &:disabled {
                background-color: $primary_color;
            }
        }
    }
}





@media screen and (max-width:991px) {
    .full-content {
        padding: 0 50px;
    }
}

@media screen and (max-width:991px) {
    .full-content .image {
        @include flex-center;

        img {
            width: 50%;
        }
    }
}

@media screen and (max-width: 768px) {
    .full-content {
        padding: 0;
    }

    #about-me .row {
        flex-direction: column;

        // .image {
        //     @include flex-center;

        //     img {
        //         width: 50%;
        //     }
        // }

    }
}

@media screen and (max-width: 576px) {
    .content {
        padding: 0;
    }
}
</style>