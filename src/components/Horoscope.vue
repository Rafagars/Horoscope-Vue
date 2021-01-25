<template>
    <div>
        <nav>
            <router-link :to="{ path: this.$route.params.sign + '/yesterday' }" replace>Yesterday </router-link>
            <router-link :to="{ path: this.$route.params.sign + '/today' }" replace>Today </router-link>
            <router-link :to="{ path: this.$route.params.sign + '/tomorrow' }" replace>Tomorrow </router-link>
        </nav>
        <div class="text-center">
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
        }
    },
    created(){
        this.sign = this.$route.params.sign;
        this.day = this.$route.params.day;
        if (this.day === undefined){
            this.day = "today"
        }
        console.log(this.sign);
        console.log(this.day)
        this.horoscopeFetch()
    }
}
</script>
<style lang="css" scoped>
    .sign-img{
        width: 150px;
        margin: 15px 0 5px 0;
        display: block;
    }
</style>