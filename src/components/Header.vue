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
        background-color: hotpink;
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