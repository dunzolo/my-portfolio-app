<script>
export default {

}
</script>

<template lang="">
  <footer class="text-center">
    <ul>
      <li><a href="https://github.com/dunzolo"><i class="fa-brands fa-github fa-3x"></i></a></li>
      <li><a href="https://www.linkedin.com/in/davide-rossi-95b478214/"><i class="fa-brands fa-linkedin-in fa-3x"></i></a></li>
      <li><a href="https://instagram.com/dunzolo?igshid=ZDdkNTZiNTM="><i class="fa-brands fa-instagram fa-3x"></i></a></li>
      <li><a href="https://discordapp.com/users/1031907022452576276"><i class="fa-brands fa-discord fa-3x"></i></a></li>
    </ul>
    <h2>Designed & build by Davide Rossi</h2>
  </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

footer {
  padding: 5rem;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding-bottom: 2rem;

    li {
      padding-right: 1rem;
      display: flex;
      justify-content: center;

      a {
        text-decoration: none;
        color: black;

        &:hover {
          color: $secondary_color;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  footer ul {
    display: none;
  }
}
</style>