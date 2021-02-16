<template>
    <div id="signs">
        <div v-for="(sign, i) in signs" :key=i class="sign" >
            <router-link :to="{ path: '/horoscope/' + sign + '/today' }"><img class="sign-img mx-auto" :src="getImgUrl(sign)" v-bind:alt="sign"/><h2>{{sign}}</h2></router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: "Signs",
    data: () => ({
        signs: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
    }),
    methods: {
        getImgUrl(sign){
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + sign + ".png")
        }
    }
}
</script>

<style scoped>
    #signs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .sign{
        flex: 1 0 25%;
        background-color: #fab1c0;
        border: 2px solid #f5c0ca;
        border-radius: 1em;
        box-shadow: 0 10px 6px -6px #777;
        margin: 10px;
        padding: 10px;
        text-decoration: none;
    }
    .sign a{
        color: #3a3838;
    }
    a:hover{
        text-decoration: none;
    }
    .sign-img{
        width: 150px;
        margin: 15px 0 5px 0;
        display: block;
    }
</style>