<template>
    <div>
        <header class="navbar navbar-fixed-top navbar-inverse">
            <div class="">
                <router-link to="/"><h1 id="page-title"><img id="logo-img" alt="Logo" src="https://www.bergerpaints.com/resources/images/signwheel.png" />Horoscope</h1></router-link>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: "Header",
}
</script>
<style scoped>
    header{
        background-color: #f5b9c6;
        box-shadow: 0 5px 3px -3px rgb(158, 156, 156);
    }
    h1 a, a:hover{
        text-decoration: none;
    }
    h1{
        color: #575353;
    }
    #logo-img{
        width: 8%;
        margin: 5px;
    }
    #page-title{
        display: flex;
        align-items: center;
    }
</style>