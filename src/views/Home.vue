<template>
  <div class="cont">
    <navbar/>
   <div id="head">
     <div class="head">
      <div class="head-text">
        <h1>Company name</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      </div>
      <p>Our services</p>
      <i class="fas fa-long-arrow-alt-down fa-2x"></i>
    </div>

    <!----------------------------------------services------------------------------------------->
    <div id="services">
      <h1><i class="fas fa-cog"></i> Our Services</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div class="services">
        <div class="service">
          <i class="fas fa-shield-virus fa-3x"></i>
          <h4>Cyber Security</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div class="service">
          <i class="fas fa-laptop-code fa-3x"></i>
          <h4>Web development</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div class="service">
          <i class="fas fa-brain fa-3x"></i>
          <h4>Artificial Intelligence</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
  <router-link to="/services">Know more <i class="fas fa-arrow-right fa-xs"></i></router-link>
    </div>

    <!----------------------------------------clients------------------------------------------->
    <div id="clients">
      <h1><i class="fas fa-users"></i> Our Clients</h1>
      <div class="clients">
      <b-card
      v-for="(client,index) in clients" :key="index"
    :title="client.name"
    :img-src="client.profile"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      <i class="fas fa-quote-left"></i> Some quick example text to build on the card title and make up 
      the bulk of the card's content. <i class="fas fa-quote-right"></i>
    </b-card-text>
    <p>
      {{client.jobTitle}}
    </p>
    <i class="fab fa-twitter-square fa-lg"></i> <i class="fab fa-facebook-square fa-lg"></i> <i class="fab fa-linkedin fa-lg"></i>

  </b-card>
      </div>
    </div>

    <!----------------------------------------about us------------------------------------------->
    <div id="about-us">
      <h1><i class="fas fa-building"></i> About us</h1>
      <div class="about">
      <img src="../assets/about.jpg" alt="">
      <div class="about-text">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
      <router-link to="/about">Know more <i class="fas fa-arrow-right fa-xs"></i></router-link>
      </div>
    </div>
    </div>
    <a href="#head" class="backTop"><i class="fas fa-arrow-up fa-2x"></i></a>
    <foot/>
    <p class="backTop" @click="bkTop"><i class="fas fa-arrow-up fa-2x" ></i></p>
    </div>
</template>

<script>
import foot from '../components/foot'
import navbar from '../components/navbar'
export default {
  name: 'Home',
  components:{foot,navbar},
  data () {
    return {
      clients: [
        { name: 'Jack Willson', jobTitle: 'CEO at X company', profile: require('../assets/CEO1.jpg') },
        { name: 'Hannah Billy', jobTitle: 'CEO at Y company', profile: require('../assets/CEO2.jpg') },
        { name: 'James Gary', jobTitle: 'CEO at Z company', profile: require('../assets/CEO3.jpg') }
      ],
      offset: 500
    }
  },
  methods:{
    bkTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted () {
    const arrow = document.querySelector('.backTop')
    window.onscroll = () => {
      if (window.scrollY > this.offset) {
        arrow.style.display = 'block'
      } else {
        arrow.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fas{
  color: #f9813a;
}
#head {
  height: 100vh;
  background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('../assets/company.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  background-attachment: fixed;
  .head{
    display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 10%;
  color: #ffffff;
  padding-top: 25vh;
  .head-text{
    width: 70%;
    margin: 0 auto 50px auto;
    text-align: left;
    h1{
      font-size: 5rem;
      margin-bottom: 1rem;
    }
    p{
      font-size: 1.3rem;
    }
    .v-btn{
      background-color: #f9813a;
      color: white;
    }
  }
}
p{
  color: white;
  font-size: 1.4rem;
}
.fa-long-arrow-alt-down{
  color: #f9813a;
}
}
#services{
   margin: 100px 10%;
   padding: 50px 0;
   border-top: 3px solid #f9813a;
   color: var(--font-color);
   position: relative;
   h1{
     font-size: 2.5rem;
   }
   p{
     font-weight: 500;
     font-size: 1.2rem;
   }
   .fa-arrow-right{
     color: #f9813a;
   }
   a{
     color: #f9813a;
     font-size: 1.3rem;
     right:  0;
     position: absolute;
   }
.services{
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
  color: #ffffff;
  .service{
    flex: 1 1 0px;
    padding: 20px;
    border-radius: 5px;
    transition: all 0.5s ease-out;
    &:hover{
      background: rgba(56, 56, 56, 0.5);
    }
    h4{
      margin: 10px 0;
    }
    p{
      font-size: 1rem;
      margin: 10px 0;
    }
  }
}
}
#clients{
  margin: 100px 10%;
  padding: 50px 0;
  border-top: 3px solid #f9813a;
  h1{
     color: var(--font-color);
     font-size: 2.5rem;
  }
  .clients{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,300px));
    justify-content: space-between;
    gap: 100px;
    padding: 50px 0;
    .card{
      background-color: var(--background-color);
      border: none;
      box-shadow: none;
      transition: all 0.5s ease-out;
      &:hover{
        box-shadow: 0 0 5px var(--font-color);
      }
    .card-title, p {
      color: white;
      font-size: 1rem;
    }
    .card-text{
      color: white;
      font-size: 1.3rem;
    }
    .fab{
      color: #f9813a;
      cursor: pointer;
      margin: 0 3px;
    }
    }
  }
}
#about-us{
  margin: 100px 10%;
  padding: 50px 0;
  border-top: 3px solid #f9813a;
   h1{
     color: var(--font-color);
     font-size: 2.5rem;
     letter-spacing: 0.2rem;
     width: auto;
     }
  .about{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 0;
    img{
      width: 40%;
    }
    .about-text{
      width: 55%;
      text-align: left;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
     p{
    color: var(--font-color);
    font-size: 1.2rem;
    }
    .fa-arrow-right{
     color: #f9813a;
   }
   a{
     color:#f9813a;
     font-size: 1.3rem;
   }
    }
  }
}
.backTop{
    color: #f9813a;
    position: fixed;
    right: 30px;
    bottom: 50px;
    z-index: 100;
    display: none;
  }

//----------------------------------------Media---------------------------------------------->
@media only screen and (max-width: 576px){
  #about-us,#services, #clients{
    margin: 50px 10%;
    padding: 25px 0;
  }
  #head{
    .head{
      padding-top: 12vh;
  .head-text{
    width: 100% !important;
    margin: 0 auto 10px auto;
    h1{
      font-size: 2.5rem !important;
      margin-bottom: 1rem;
    }
    p{
      font-size: 1.1rem;
    }
  }
    }
}
 .about{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 0;
    img{
      width: 100% !important;
    }
    .about-text{
      width: 100% !important;
      p{
        font-size: 1rem !important;
        margin: 5px 0;
      }
    }
  }
}
</style>

<style lang="scss">
.v-image__image--cover{
  background-size: contain;
}
</style>
