<script>
export default {

}
</script>

<template lang="">
    <div class="wrapper">
        <ul>
            <li><a href="https://github.com/dunzolo"><i class="fa-brands fa-github fa-2x"></i></a></li>
            <li><a href="https://www.linkedin.com/in/davide-rossi-95b478214/"><i class="fa-brands fa-linkedin-in fa-2x"></i></a></li>
            <li><a href="https://instagram.com/dunzolo?igshid=ZDdkNTZiNTM="><i class="fa-brands fa-instagram fa-2x"></i></a></li>
            <li><a href=""><i class="fa-regular fa-envelope fa-2x"></i></a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.wrapper {
    display: flex;
    align-items: end;
    position: fixed;
    bottom: 0;
}

ul {
    list-style-type: none;
    padding-bottom: 2rem;

    li {
        padding-bottom: 1rem;

        a {
            text-decoration: none;
            color: black;

            &:hover {
                color: $secondary_color;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .wrapper {
        display: none;
    }
}
</style>