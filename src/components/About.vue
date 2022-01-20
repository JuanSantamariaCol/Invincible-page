<template>
    <div class="container-xxl ">
        <h1 class="text-center text-xl-start fw-bold font_titles" >About</h1>
        <div>
            <!-- Awards -->
            <div class="bg-container">
                <div class="text-center pt-2">
                    <h2 class="">Awards</h2>
                    <div class="cont-img-cards">
                        <img class="img-cover" src="../assets/Utadeo.gif" alt="">
                    </div>
                    
                    <h3>Winner of the engineering projects fair university Jorge Tadeo Lozano 2021</h3>
                    <p>Category : Software Develop</p>
                    <a href="https://drive.google.com/file/d/1enrX90fXIMuqRJbDNPsbdWQ0EY8fXGnO/view?usp=sharing" target="_blank">
                        <button class="btn btn-info" > See Certificate </button>
                    </a>
                    
                </div>
            </div>
            
            <div class="bg-container">
                <h2 class=" text-center pt-2">Technical details</h2>
                <h4 class="p-2">Technologies used in the Backend</h4>
                <div>
                    <div class ="d-flex justify-content-center flex-wrap ">
                        <!--Java Card-->
                        <div class="card m-2">
                            <img  class="card-img-top box-big p-3"  src="https://i.blogs.es/8d2420/650_1000_java/1366_2000.png" alt="">
                            <div class="card-body">
                                <h5 class="card-title">Java</h5>
                                <p class="card-text">Type: Programming language</p>
                            </div> 
                        </div>
                        <!--Spring Boot card-->
                        <div class="card m-2">
                            <img class="card-img-top box-big p-3" src="https://www.armadilloamarillo.com/wp-content/uploads/course-image.png" alt=" ">
                            <div class="card-body">
                                <h5 class="card-title"> Spring Boot </h5>
                                <p class="card-text">Type: Micro framework</p>
                            </div>
                        </div>
                        <!--My SQL card-->
                        <div class="card m-2">
                            <img class="card-img-top box-big p-3 " src="../assets/mysql.png" alt="">
                            <div class="card-body">
                                <h5 class="card-title">MySQL</h5>
                                <p class="card-text">Type: Database management</p>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <p class="m-4  text-justify">For this project I practiced my knowledge in creation
                            and use of the Api in this specific case a API RESTful, this was done with Java and
                            Spring Boot to make the whole application, this application I deployed it with
                            Heroku and used MySQL to store the data of the model created in Spring Boot.</p>
                    </div>

                    <h4 class="p-2">Technologies used in the Frontend</h4>
                    <div class="d-flex justify-content-center media">
                        <!--Vue card-->
                        <div class="card m-2">
                            <img class="card-img-top box-big p-3" src="https://i.imgur.com/oUH9hNy.png" alt="">
                            <div class="card-body">
                                <h5 class="card-title">Vue.js</h5>
                                <p class="card-text">Type: Framework</p>
                            </div>
                        </div>
                        <!--JavaScritp card-->
                        <div class="card m-2">
                            <img  class="card-img-top box-big p-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/400px-Unofficial_JavaScript_logo_2.svg.png" alt="">
                            <div class="card-body">
                                <h5 class="card-title">JavaScript</h5>
                                <p class="card-text">Type: Programming language</p>
                            </div>
                        </div>
                        <!--HTML card-->
                        <div class="card m-2">
                            <img  class="card-img-top box-big p-3" src="https://i.stack.imgur.com/PgcSR.png" alt="">
                            <div class="card-body">
                                <h5 class="card-title">HTML</h5>
                                <p class="card-text">Type: Markup language</p>
                            </div>
                        </div>
                        <!--CSS card-->
                        <div class="card m-2">
                            <img  class="card-img-top box-big p-3" src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png" alt="">
                            <div class="card-body">
                                <h5 class="card-title">Bootstrap</h5>
                                <p class="card-text">Type: Framework to css</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="m-4  text-justify" >For Fronted I wanted to try Vue.js and thanks to this project I found it intuitive and easy to use, I also practiced my knowledge with HTML, JavaScript and Boostrap for the css.</p>
                    </div>
                </div>
            </div>
            <!-- About the developer-->
            <div class="bg-container">
                <h2 class="pt-2 text-center">About Me</h2>
                <div class="d-flex media m-4">
                    <div class="cont-img-cards align-self-center">
                        <div>
                            <img  class="img-cover" src="../assets/me.jpeg" alt="">
                        </div>
                    </div>
                    <div class=" container-sm align-self-center">
                        <p class=" m-4  text-justify">Hi I'm Juan Santamaria if you got here, I would 
                            like to tell you a more personal aspect. <br>
                            I am a persistent person and that in certain aspects of my life has been really
                            good I have always worked to get what I want and there are times when I fail like
                            everyone else, but this instead of frustrating me, encourages me even more to ask 
                            myself why I failed or see what mistakes I made, learn from them to keep learning, move forward. <br>
                            I am someone who considers myself shy and over the years I have forced 
                            myself to get out of my comfort zone, encourage myself to do things that 
                            a shy person would not do, from speaking in a class for my classmates 
                            exposing my code, to speaking in front of an auditorium about my semester project, 
                            This has helped me with my shyness a lot.

                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>