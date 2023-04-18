<script>
export default {

}
</script>

<template lang="">
    <div class="wrapper">
        <ul>
            <li><i class="fa-brands fa-github fa-2x"></i></li>
            <li><i class="fa-brands fa-linkedin-in fa-2x"></i></li>
            <li><i class="fa-brands fa-instagram fa-2x"></i></li>
            <li><i class="fa-regular fa-envelope fa-2x"></i></li>
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
    }
}
</style>