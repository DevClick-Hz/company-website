<template>
<div class="contain">
    <router-link to="/"><i class="fas fa-long-arrow-alt-left fa-lg">Back</i></router-link>
    <h1>Our Services</h1>
    <div class="services-cont">
        <div :id="'serv'+index" class="service" v-for="(service,index) in services" :key="index">
            <div class="service-text item">
                <div class="num">{{index+1}}</div>
                <h2>{{service.name}}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="service-img item">
                <img :src="service.pic" alt="">
            </div>
            <div class="service-num item">
                <i :id="'ser'+index" class="fas fa-arrow-left fa-10x index"></i>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
           services: [
             {name: 'Web development', pic: require('../assets/web.jpg')},
             {name: 'Cyber security', pic: require('../assets/cyber.jpg')},
             {name: 'Artificial intelligence', pic: require('../assets/AI.jpg')}
          ]
        }
    }
}
</script>

<style lang="scss" scoped>
.contain{
    padding-top: 3rem;
    color: var(--font-color);
    h1{
        font-size: 4rem;
    }
    .fa-long-arrow-alt-left{
            color: #f9813a;
            position: absolute;
            left: 50px;
        }
    .services-cont{
        width: 85%;
        margin: 50px auto 50px auto;
        .service{
            display: flex;
            flex-wrap: wrap;
            margin: 50px 0;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            .item{
                flex-basis: 30%;
            }
            .service-text{
                h2{
                    font-size: 2.5rem;
                    letter-spacing: 1px;
                }
                p{
                    font-size: 1.1rem;
                }
             .num{
        width: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 32px;
    border: 2px solid #f9813a;
    color: #f9813a;
             }
            }
             .service-num{
                color: #f9813a;
                text-align: center;
                padding-top: 300px;
             }
             #ser0{
                 transform: rotate(-45deg);
             }
             #ser1{
                 transform: rotate(235deg);
             }
            img{
                height: 100%;
                width: 100%;
                border-radius: 3px;
            }
        }
        #serv1{
            flex-direction: row-reverse;
        }
    }
}
@media only screen and (max-width: 576px){
    .item{
                flex-basis: 100% !important;
            }
            .service-num{
                display: none;
            }
}
</style>