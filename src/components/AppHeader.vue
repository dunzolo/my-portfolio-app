<script>
export default {

}
</script>

<template lang="">
    <header>
        <div class="logo">
            <img src="/my_portfolio_logo.svg" alt="logo">
        </div>
        <nav>
            <ul>
                <li><span class="index">01.</span> Home</li>
                <li><span class="index">02.</span> Chi Sono</li>
                <li><span class="index">03.</span> Esperienza</li>
                <li><span class="index">04.</span> Progetti</li>
                <li><span class="index">05.</span> Contattami</li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

header{
    height: 80px;
    width: 90%;
    margin: 0 auto;
    @include flex-between;

    .logo{
        height: 100%;
        @include flex-center;

        img{
            // height: 100%;
            width: 80px;
        }
    }

    nav ul{
        list-style-type: none;
        display: flex;

        li{
            padding: 10px;

            .index{
                color: $secondary_color;
            }
        }
    }
}
</style>