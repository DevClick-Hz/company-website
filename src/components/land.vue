<template>
  <div>
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
      <v-card
    class="mx-auto"
  >
    <div class="service-name">
     <p>service 1</p>
    </div>
  </v-card>
      <v-card
    class="mx-auto"
  >
    <div class="service-name">
     <p>service 2</p>
    </div>
  </v-card>
      <v-card
    class="mx-auto"
  >
    <div class="service-name">
     <p>service 3</p>
    </div>
  </v-card>
  </div>
  <a href="#">Know more <i class="fas fa-arrow-right fa-xs"></i></a>
    </div>

    <!----------------------------------------clients------------------------------------------->
    <div id="clients">
      <h1><i class="fas fa-users"></i> Our Clients</h1>
      <div class="clients">
     <div class="card" v-for="(client,index) in clients" :key="index">
       <img :src="client.profile" alt="">
       <div class="card-text">
         <h4>{{client.name}}</h4> <h4>{{client.jobTitle}}</h4>
         <p><q> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </q></p>
       </div>
     </div>
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
      <a href="#">Know more <i class="fas fa-arrow-right fa-xs"></i></a>
      </div>
    </div>
    </div>
    <a href="#head" class="backTop"><i class="fas fa-arrow-up fa-2x"></i></a>
    </div>
</template>

<script>
export default {
  name: 'land',
  data () {
    return {
      clients: [
        { name: 'Jack Willson', jobTitle: 'CEO at X company', profile: require('../assets/CEO1.jpg') },
        { name: 'Hannah Billy', jobTitle: 'CEO at Y company', profile: require('../assets/CEO2.jpg') },
        { name: 'James Gary', jobTitle: 'CEO at Z company', profile: require('../assets/CEO3.jpg') }
      ]
    }
  },
  mounted () {
    const head = document.getElementById('services').offsetTop
    const arrow = document.querySelector('.backTop')
    window.onscroll = () => {
      if (window.scrollY > head) {
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
  background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('../assets/company.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
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
     color:var(--font-color);
     font-size: 1.3rem;
     right:  0;
     position: absolute;
   }
.services{
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #ffffff;
.v-card{
  background: url('../assets/services.jpg');
  background-size: cover;
  background-position: center;
  height: 250px;
  width: 300px;
  .service-name{
    position: absolute;
    bottom: 0;
    background: rgba(146, 146, 146, 0.8);
    width: 100%;
    border-radius: 0;
    color: white;
    font-size: 1.5rem;
    padding: 5px 0;
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
    gap: 50px;
    padding: 50px 0;
    .card{
      display: flex;
      flex-direction: column;
    img{
      height: 50%;
      width: 100%;
    }
    .card-text{
      height: 50%;
      color: var(--background-color);
      background-color: var(--card-color);
      padding: 10px;
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
     color:var(--font-color);
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
    margin: 0 auto 50px auto;
    h1{
      font-size: 3rem !important;
      margin-bottom: 1rem;
    }
    p{
      font-size: 1.2rem;
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
