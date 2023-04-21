<script>
export default {
    data() {
        return {
            is_active: 'btn-0'
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
        }
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
                    <!-- presentation -->
                    <div class="col-lg-8 pe-lg-3 col-md-12 p-md-0">
                        <div class="pb-3">
                            <h2 class="greeting pb-3"><span class="index">01.</span> Chi sono</h2>
                            <p class="">
                                Ciao, mi chiamo Davide Rossi Sono sempre stato un appassionato della tecnologia e di computer, ho deciso di dedicarmi intensamente alla programmazione web perchè mi affascina dal punto di vista realizzativo: mettere mano al codice, essere creativi e veder crescere sempre di più il proprio progetto.
                                Per rimanere al passo con la tecnologia, bisogna essere in continua evoluzione e di conseguenza non si smette mai di imparare qualcosa di nuovo
                            </p>
                            <p>"𝑵𝒐𝒃𝒐𝒅𝒚 𝒒𝒖𝒆𝒖𝒆𝒔 𝒇𝒐𝒓 𝒂 𝒇𝒍𝒂𝒕 𝒓𝒐𝒍𝒍𝒆𝒓𝒄𝒐𝒂𝒔𝒕𝒆𝒓"</p>                            
                        </div>
                        <!-- skills -->
                        <div>
                            <h3 class="description"><span class="index">#</span>Skills</h3>
                            <h4>Front-end</h4>
                            <div>
                                <div>
                                    <img class="icon" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" />
                                    <img class="icon" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" />
                                    <img class="icon" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" alt="Bootstrap" />
                                    <img class="icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="SASS" />
                                    <img class="icon" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" alt="VueJS" />
                                    <img class="icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />
                                </div>
                                <div>
                                    <h4>Back-end</h4>
                                    <img class="icon" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" alt="PHP" />
                                    <img class="icon" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg" alt="Larvel" />
                                    <img class="icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
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
                        <h2 class="greeting pb-3"><span class="index">02.</span> Esperienza</h2>
                        <div class="row">
                            <div class="col-3 d-flex flex-column">
                                <button id="btn-0" type="button" class="work active" @click="isActive($event.target.id)">Boolean</button>
                                <button id="btn-1" type="button" class="work" @click="isActive($event.target.id)">TAIC</button>
                                <button id="btn-2" type="button" class="work" @click="isActive($event.target.id)">Elfo</button>
                            </div>
                            <div class="col-9">
                                <div :class="this.is_active == 'btn-0' ? 'd-block' : 'd-none'">
                                    <p>Jr Full Stack Web Developer Trainee</p>
                                    <p>Boolean Careers | ott 2022 - mar 2023</p>
                                    <hr>
                                    <p>
                                        Durante il percorso con Boolean ho avuto modo di applicare le tecnologie Front-end e Back-end realizzando partendo da zero, sia in autonomia che in team, vari progetti di sviluppo web.
                                    </p>
                                </div>
                                <div :class="this.is_active == 'btn-1' ? 'd-block' : 'd-none'">
                                    <p>Responsabile della Produzione</p>
                                    <p>T.A.I.C. srl | apr 2016 - set 2022</p>
                                    <hr>
                                    <p>Settore: Automazioni elettriche industriali</p>
                                    <ul class="ps-4">
                                        <li>concordare gli impegni in base al programma lavori stabilito</li>
                                        <li> monitorare e risolvere eventuali problemi legati all’attività produttiva</li>
                                        <li>verificare che la quantità e la qualità dei prodotti rispetti le esigenze del cliente</li>
                                        <li>controllo e gestione ordini materiali di utilizzo</li>
                                    </ul>
                                </div>
                                <div :class="this.is_active == 'btn-2' ? 'd-block' : 'd-none'">
                                    <p>Software Developer Assistant - Stage</p>
                                    <p>Elfo srl | gen 2015 - giu 2015</p>
                                    <hr>
                                    <p>Settore: Software house</p>
                                    <p>
                                        Durante il periodo trascorso ho avuto modo di sviluppare software utilizzando il linguaggio C# e svolgere attività su database tramite SQL Server
                                    </p>
                                </div>
                            </div>

                        </div>
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
#experience {
    padding: 5rem 0;
}

.full-content {
    width: 100%;
    padding: 0 100px;

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
            }
        }
    }

    .icon {
        width: 50px;
        padding-right: 10px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);

        &:hover {
            filter: none;
            scale: 1.2;
        }
    }

    .index {
        color: $secondary_color;
    }
}

.work {
    padding: 5px 0;
    background-color: transparent;
    border: none;
    border-left: 2px solid rgba(255, 255, 255, 0.3);
    ;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
}

.active {
    border-left: 2px solid $secondary_color;
    color: $secondary_color;
}

@media screen and (max-width:1080px) {
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