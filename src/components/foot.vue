<template>
    <div class="footer">
        <div class="group">
            <h4>Contact us</h4>
            <p><i class="fas fa-envelope fa-lg"></i> Info@company.com</p>
            <p><i class="fas fa-phone-volume fa-lg"></i> 009626000000</p>
        </div>
        <div class="group">
            <h4>Links</h4>
            <router-link to=""><p>Career</p></router-link>
            <router-link to=""><p>Privacy policy</p></router-link>
        </div>
        <div class="group">
            <h4>Visit us</h4>
            <p><i class="fas fa-map-marker-alt"></i> Amman,Jordan</p>
            <p>2020 &copy; Company</p>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'foot'
}
</script>
<style lang="scss" scoped>
.footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
    padding: 20px;
    .group{
        flex: 1 1 0px;
        color: var(--font-color);
        h4{
            border-bottom: 2px solid #f9813a;
        }
        .fas{
            color: #f9813a;
        }
        a{
          color: var(--font-color); 
          width: auto;
          &:hover{
              color: #f9813a;
          } 
        }
    }
}
</style>