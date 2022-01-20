<template>
    <div>
        <h1 class="text-center text-xl-start  fw-bold font_titles" >Characters</h1>
        <p class="text-center text-xl-start descrip-letters">List of the most important characters with their respective data</p>
        <div class ="contenedor_cards" >
            <div  class="contenedor_card bg-container" v-for="character in characters" :key="character.id" >
                <div class="d-flex flex-column">
                    <div class="box">
                        <img class="cont-img-cards"  v-bind:src = "character.linkPhoto" >
                    </div>
                    <div>
                        <h4 class="card-titles text-center" > {{character.name}}</h4>
                        <p class="no-space text-center">Gender: {{character.gender}}</p>
                        <p class="no-space text-center">Age: {{character.age}}</p>
                        <router-link  class = "text-white" to="/SeeMore">
                            <button @click="idSeeMore(character)" class="boton" >Ver Mas</button>
                        </router-link>                        
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
import Axios from 'axios'


export default {
    name:'Characters',
    methods:{
        getCharacters(){
            Axios.get('https://invincible-api-backend.herokuapp.com/api/characters').then(respuesta=>{
                const {data}= respuesta;
                this.characters = data;
            })
        },
        idSeeMore(characterData){
            this.$root.dataCharacter = characterData;
            
        }
    },
    created(){
        this.getCharacters()


    },
    data(){
        return{
            characters:null
        }
    }


    

}
</script>