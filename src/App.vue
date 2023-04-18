<script>
import AppLogo from './components/AppLogo.vue'
import AppHeader from './components/AppHeader.vue'
import AppWrapper from './components/AppWrapper.vue'

export default {
  components: {
    AppLogo,
    AppHeader,
    AppWrapper
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.loading = false
      }, 5500)
    }
  },
  mounted() {
    this.loader();
  }
}
</script>

<template lang="">
  <div v-if="loading">
    <AppLogo/>
  </div>
  <div v-else>
    <AppHeader/>
    <main>
      <AppWrapper/>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
@use './style/generals.scss';

main {
  width: 90%;
  height: calc(100vh - 80px);
  margin: 80px auto 0;
  display: flex;
}
</style>
