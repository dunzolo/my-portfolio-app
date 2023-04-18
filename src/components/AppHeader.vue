<script>
export default {

}
</script>

<template lang="">
    <header>
        <nav>
            <div class="logo">
                <img src="/my_portfolio_logo.svg" alt="logo">
            </div>
            <ul>
                <li><a href="#about-me"><span class="index">01.</span> Chi Sono</a></li>
                <li><span class="index">02.</span> Esperienza</li>
                <li><span class="index">03.</span> Progetti</li>
                <li><span class="index">04.</span> Contattami</li>
            </ul>
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

        ul {
            list-style-type: none;
            display: flex;

            li {
                padding: 10px;

                .index {
                    color: $secondary_color;
                }
            }
        }
    }


}
</style>