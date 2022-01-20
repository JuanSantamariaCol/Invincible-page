<template>
    <div>
        <nav class ="navbar transparent  sticky-top fw-bold ">
            <div class="container justify-content-center">
                <a class = "navbar-brand " href="#">
                    <img src="../assets/NavBarLogo.png" width="50" height="50" class="d-inline-block align-top" alt="">
                </a>
                <h5 class="nav-link fw-bold">
                    <router-link class="nav-link text-warning" to="/Home">Home</router-link>
                </h5>
                <h5 class="nav-link fw-bold">
                    <router-link class="nav-link text-warning" to="/Characters">Characters</router-link>
                </h5>
                <h5 class="nav-link fw-bold">
                    <router-link class="nav-link text-warning" to="/About">About</router-link>
                </h5>

                
            </div>
        </nav>
        <div>
            <video class = "bgVideo  " autoplay loop muted playsinline src="../assets/VideoBG.mp4" ></video>    
            <img class="imgLogo" src="../assets/Invincible_Logo.png" alt="">
            
            
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style >
@import '../assets/css/style.css';
</style>