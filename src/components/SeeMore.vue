<template>
    <!-- arreglar la parte gris-->
    <div>
        <h1 class="text-center text-xl-start fw-bold font_titles  ">Character Information</h1>
        <div class="d-flex justify-content-around   bg-container container-character flex-wrap">
            <div class = " d-flex cont-img-cards align-self-center  ">
                <img class = "img-cover"  v-bind:src = "$root.dataCharacter.linkPhoto" >
            </div>
            <div class = "d-flex  flex-column text-center p-3 box-text ">
                <h1>{{$root.dataCharacter.name}}</h1>
                <p>Alias: {{$root.dataCharacter.alias}}</p>
                <p class="">Gender: {{$root.dataCharacter.gender}}</p>
                <p>Age: {{$root.dataCharacter.age}}</p>
                <p>Powers: {{$root.dataCharacter.powers}}</p>
                <p>Relations: {{$root.dataCharacter.relations}} </p>
                <p>Description: {{$root.dataCharacter.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SeeMore',
    methods:{
    },
    data(){
        return{
            character: null
        }
        

    },


}
</script>

<style>

</style>