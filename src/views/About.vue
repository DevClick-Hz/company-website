<template>
 <div class="contain">
    <router-link to="/"><i class="fas fa-long-arrow-alt-left fa-lg">Back</i></router-link>
    <div class="about">
      <div class="itm text">
       <p><span class="first">A</span>bout us Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
         into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div class="itm">
       <img src="../assets/about.jpg" alt="">
       </div>
    </div>
    <div class="count">
      <div class="counter">
        <h2>{{num2}}</h2>
        <h3>Website Built</h3>
      </div>
      <div class="counter">
        <h2>{{num}}</h2>
        <h3>Happy client</h3>
      </div>
      <div class="counter">
        <h2>{{num1}}</h2>
        <h3>Code line</h3>
      </div>
    </div>
    <div class="team">
      <h1>Our Mission</h1>
      <div class="mission">
        <div class="itm ceo">
          <div class="pic">
          <img src="../assets/ourceo.jpg" alt="">
          </div>
          <h3>Tamer Ahmed</h3>
          <p>CEO</p>
          <div class="social">
          <i class="fab fa-linkedin fa-lg"></i>
          <i class="fab fa-twitter-square fa-lg"></i>
          </div>
        </div>
        <p class="itm">
          <i class="fas fa-quote-left"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. <i class="fas fa-quote-right"></i>
        </p>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: "about",
    data(){
      return{
        num: 0,
        num1: 0,
        num2: 0
      }
    },
mounted(){
  for(let i=0; i < 3000; i++){
    setTimeout(()=>{
      this.num = this.num+1
      this.num1 = this.num1+1
      this.num2 = this.num2+1
      },1000) 
  }
  return this.num
}
}
</script>
<style lang="scss" scoped>
.contain{
  padding-top: 3rem;
    color: var(--font-color);
    .fa-long-arrow-alt-left{
            color: #f9813a;
            position: absolute;
            left: 50px;
        }
    .about{
      width: 85%;
      margin: 50px auto;
      padding: 50px 0;
      display: flex;
      .text{
        text-align: left;
        font-size: 1.3rem;
      }
      .itm{
        flex: 1 1 0px;
        .first{
          color: #f9813a;
            font-size: 75px;
            float: left;
            line-height: 60px;
            padding-top: 4px;
           padding-right: 8px;
           padding-left: 3px;
        }
        img{
          max-height: 500px;
          max-width: 500px;
          padding-top: 100px;
        }
      }
    }
    .count{
      width: 85%;
      margin: 50px auto;
      padding: 50px 0;
      display: flex;
      justify-content: space-between;
      .counter{
        h2{
        color: #f9813a;
        }
      }
    }
    .team{
       width: 85%;
       margin: 50px auto;
       padding: 50px 0;
       border-top: 3px solid #f9813a;
      .mission{
        margin: 50px auto;
        .ceo{
          .pic{
            width: 250px;
            height: 200px;
            margin: 10px auto;
            
          img{
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
          }
          .fab{
            display: inline-block;
            margin: 0 10px;
            color: #f9813a;
          }
          p{
            margin: 5px auto;
          }
        }
         .itm{
            flex: 1 2 0px;
          }
          p{
            width: 50%;
            margin: 40px auto;
            .fas{
            color: #f9813a;
          }
          }
      }
    }
}
</style>
