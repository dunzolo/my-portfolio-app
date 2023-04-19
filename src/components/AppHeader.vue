<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <header>
        <nav>
            <div class="logo">
                <a href="/"><img src="/my_portfolio_logo.svg" alt="logo"></a>
            </div>
            <div id="navbar-list">
                <ul>
                    <li><a href="#about-me"><span class="index">01.</span> Chi Sono</a></li>
                    <li><a href="#experience"><span class="index">02.</span> Esperienza</a></li>
                    <li><a href="#projects"><span class="index">03.</span> Progetti</a></li>
                    <li><a href=""><span class="index">04.</span> Contattami</a></li>
                </ul>
            </div>
            <div id="sidemenu">
                <button class="sidemenu__btn" v-on:click="store.navOpen=!store.navOpen" v-bind:class="{active:store.navOpen}">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bottom"></span>
                </button>
                <transition name="translateX">
                    <div class="sidemenu__wrapper" v-show="store.navOpen">
                        <ul class="sidemenu__list">
                            <li><a href="#about-me"><span class="index">01.</span> Chi Sono</a></li>
                            <li><a href="#experience"><span class="index">02.</span> Esperienza</a></li>
                            <li><a href="#projects"><span class="index">03.</span> Progetti</a></li>
                            <li><a href=""><span class="index">04.</span> Contattami</a></li>
                        </ul>
                    </div>
                </transition>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

header {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);

    nav {
        width: 90%;
        @include flex-between;

        .logo {
            height: 100%;
            @include flex-center;

            img {
                width: 80px;
            }
        }

        #navbar-list {
            ul {
                list-style-type: none;
                display: flex;

                li {
                    padding: 10px;

                    a {
                        text-decoration: none;
                        color: black;

                        &:hover {
                            color: $secondary_color;
                        }
                    }

                    .index {
                        color: $secondary_color;
                    }
                }
            }
        }

        #sidemenu {
            display: none;

            .sidemenu {
                &__btn {
                    display: block;
                    width: 50px;
                    height: 50px;
                    background: transparent;
                    border: none;
                    position: relative;
                    z-index: 100;
                    appearance: none;
                    cursor: pointer;
                    outline: none;

                    span {
                        display: block;
                        width: 20px;
                        height: 3px;
                        margin: auto;
                        background: $primary_color;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        transition: all .4s ease;

                        &.top {
                            transform: translateY(-8px);
                        }

                        &.bottom {
                            transform: translateY(8px);
                        }
                    }

                    &.active {
                        .top {
                            transform: rotate(-45deg);
                        }

                        .mid {
                            transform: translateX(-20px) rotate(360deg);
                            opacity: 0;
                        }

                        .bottom {
                            transform: rotate(45deg);
                        }
                    }

                }

                &__wrapper {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 40%;
                    height: 100vh;
                    background-color: white;
                }

                &__list {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding-top: 50px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    list-style-type: none;

                    li {
                        padding: 10px;

                        a {
                            text-decoration: none;
                            color: black;

                            &:hover {
                                color: $secondary_color;
                            }
                        }

                        .index {
                            color: $secondary_color;
                        }
                    }
                }
            }
        }
    }

    .translateX-enter {
        transform: translateX(-200px);
        opacity: 0;
    }

    .translateX-enter-active,
    .translateX-leave-active {
        transform-origin: top left 0;
        transition: .4s ease;
    }

    .translateX-leave-to {
        transform: translateX(-200px);
        opacity: 0;
    }

}


@media screen and (max-width: 700px) {
    #navbar-list {
        display: none;
    }

    header nav #sidemenu {
        display: block;
    }
}
</style>

