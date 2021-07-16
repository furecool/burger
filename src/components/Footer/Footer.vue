<template>
  <div class="footer">

      <div class="title">聯絡我</div>

      <div class="content">

        <div class="contact">
            <div class="title">我的信箱</div>
            <div class="txt">{{data.contact}}</div>
        </div>

        <div class="contact">
            <div class="title">我的社群媒體</div>
            <div class="txt">
                <a href="#" @click.prevent><i class="fab fa-facebook"></i></a>
                <a href="#" @click.prevent><i class="fab fa-twitter"></i></a>
                <a href="#" @click.prevent><i class="fab fa-instagram"></i></a>
            </div>
        </div>

      </div>  

      <div class="copyright">{{data.copyRight}}</div>
    
  </div>
</template>

<script>

export default {

    data () {
    return {
      
        data: {
            contact: 'furecool@gmail.com',
            copyRight: 'Copyright © 2021 furecool. All rights reserved.',                        
        }

    }
  }

}
</script>

<style>

    .footer {
        background: #FFBB22;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 0 0; 
    }

    .footer > .title {
        font-size: 40px;
        font-weight: bold;
        border-bottom: 1px solid #fff;
        width: 30%;
        text-align: center;
        padding: 20px 0;
    }

    .footer .content {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 60px;
    }

    .contact {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border-right: 1px solid #fff; */
    }

    .contact:last-child {
        border-right: none;
    }

    .footer .content .title {
        font-weight: bold;
        font-size: 20px;
    }

    .footer .content .txt {
        width: 200px;
        color: #fff;
        font-size: 20px;
        display: flex;
        justify-content: space-around;
        margin: 10px;
    }

    .footer .content a {
        color: #fff;
        font-size: 30px;
    }

    .copyright {
        color: #fff;
        font-size: 18px;
        border-top: #fff 1px solid;
        padding: 20px;
        width: 80%;
        display: flex;
        justify-content: center;
    }



</style>