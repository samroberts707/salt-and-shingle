<template>
    <div class="landing">
        <div class="content-wrapper">
            <h1>Salt</h1>
            <h1>&</h1>
            <h1>Shingle</h1>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    div.landing {
        position: relative;
        display: grid;
        width: 100vw;
        height: 100vh;
        background-image: url('../assets/imgs/handmade_hero.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        align-items: center;
        justify-items: center;
        div.content-wrapper {
            text-align: center;
            padding: 6% 10% 11% 10%;
            background-image: url('../assets/imgs/flag.png');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            color: #FFF;
            h2 {
                font-size: 6vw;
            }
            h1 {
                font-size: 5vw;
            }
        }
        @media screen and (max-width: 768px) {
            div.content-wrapper {
                padding: 7% 14% 17% 14%;
                 h2 {
                font-size: 6vw;
                }
                h1 {
                    font-size: 8vw;
                }
            }
        }
    }
</style>
