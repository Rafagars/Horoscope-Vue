<template>
    <div class="container">
        <nav class="daynav">
            <button class="day" @click="changesDay('yesterday')">Yesterday </button>
            <button class="day" @click="changesDay('today')">Today </button>
            <button class="day" @click="changesDay('tomorrow')">Tomorrow </button>         
        </nav>
        <div class="horoscope text-center" v-if="result">
            <img class="sign-img mx-auto" :src="getImgUrl(sign)" v-bind:alt="sign"/>
            <h2>{{this.$route.params.sign}}</h2>
            <h6>{{result.date_range}}</h6>
            <h6>{{result.current_date}}</h6>
            <p>{{result.description}}</p>

            <p><small>Compability: {{result.compatibility}}, Mood: {{result.mood}}, Color: {{result.color}}, Lucky Number: {{result.lucky_number}}</small></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Horoscope',
    data: () => ({
        result: null
    }), 
    methods: {
        horoscopeFetch(){
            const url = `https://aztro.sameerkumar.website/?sign=${this.sign}&day=${this.day}`
            axios.post(url).then((result) => {
                this.result = result.data;
                console.log(this.result)
            });
        },
        getImgUrl(sign){
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + sign + ".png")
        },
        changesDay(day){
            console.log(day)
            if(day !== this.day){
                this.$router.push({name: 'Horoscope', params:{sign: this.sign, day: `${day}`}})
                location.reload();

            }
        }
    },
    created(){
        this.sign = this.$route.params.sign;
        this.day = this.$route.params.day;
        if (this.day === undefined){
            this.day = "today"
        }
        this.horoscopeFetch();
        console.log("Holis")
    }
}
</script>
<style lang="css" scoped>
    .daynav{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 2px;
    }
    .day{
        flex: 1 0 auto;
        color: #3a3838;
        text-decoration: none;
        font-size: 1.3em;
        margin-bottom: 10px;
        background-color: #f3e6ed;
        border: 2px solid #f3d6e7;
    }
    .day:hover{
        background-color: #eec9dd;
    }
    .sign-img{
        width: 150px;
        margin: 15px 0 5px 0;
        display: block;
    }
    .horoscope {
        background-color: #efc9df;
        padding: 10px;
        border: 2px solid #f0bedb;
    }
</style>