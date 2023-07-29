<script>
import { store } from '../store.js';
export default {
  data() {
    return {
      store,
      is_active_menu: false
    }
  },
  methods: {
    isActive() {
      this.is_active_menu = !this.is_active_menu;
    }
  },
}
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="logo">
        <a href="/"><img src="/my_portfolio_logo.svg" alt="logo"></a>
      </div>
      <div id="navbar-list">
        <ul>
          <li>
            <router-link :to="{ name: 'homepage', hash: '#about-me' }">
              <span class="index">01.</span>Chi Sono
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'homepage', hash: '#experience' }">
              <span class="index">02.</span>Esperienza
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'homepage', hash: '#projects' }">
              <span class="index">03.</span>Progetti
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'homepage', hash: '#contact' }">
              <span class="index">04.</span>Contattami
            </router-link>
          </li>
        </ul>
      </div>
      <div id="sidemenu">
        <button class="sidemenu__btn" :class="is_active_menu ? 'active' : ''" @click="isActive()"
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
          <span class="top"></span>
          <span class="mid"></span>
          <span class="bottom"></span>
        </button>
      </div>

      <div class="offcanvas offcanvas-end vh-100" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-body">
          <ul class="sidemenu__list">
            <li data-bs-dismiss="offcanvas">
              <router-link :to="{ name: 'homepage', hash: '#about-me' }" @click.prevent="isActive">
                <span class="index">01.</span>Chi Sono
              </router-link>
            </li>
            <li data-bs-dismiss="offcanvas">
              <router-link :to="{ name: 'homepage', hash: '#experience' }" @click.prevent="isActive">
                <span class="index">02.</span>Esperienza
              </router-link>
            </li>
            <li data-bs-dismiss="offcanvas">
              <router-link :to="{ name: 'homepage', hash: '#projects' }" @click.prevent="isActive">
                <span class="index">03.</span>Progetti
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'homepage', hash: '#contact' }" @click.prevent="isActive">
                <span class="index">04.</span>Contattami
              </router-link>
            </li>
          </ul>
        </div>
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
  z-index: 1;

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
            font-size: 1.6rem;
            letter-spacing: 1px;
            transition: color .3s;
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

    .sidemenu__list {
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
          z-index: 2000;
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


      }
    }
  }

  .offcanvas {
    background-color: #cececc;

    &.offcanvas-end {
      width: 50%;

      a {
        font-size: 1.6rem;
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

