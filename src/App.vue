<script>
import AppLogo from './components/AppLogo.vue'
export default {
  components: {
    AppLogo
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
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './style/generals.scss'
</style>
