<template>
  <div class="nav">

      <!-- ============ 預設的 nav-origin ============ -->

      <div class="nav-origin">

        <!-- home -->

        <router-link to = "/home" class="nav-item">
            <i class="fas fa-hamburger"></i>首頁 Home
            <div class="line"></div>
        </router-link>

        <!-- logo -->

        <div class="logo-label">
            <a href="index.html"><img class="logo" src="./logo.png"></a>
        </div>  

        <!-- history -->

        <router-link to = "/history" class="nav-item">
            <i class="fas fa-landmark" ></i>歷史 History
            <div class="line"></div>
        </router-link>

      </div>

      <!-- ============ scroll 後會做 pop up 動畫的 nav-scroll ============ -->

      <transition name="pop">
        <div class="nav-fixed" v-show = "scrollTop">
            <div class="nav-scroll" >

                <!-- logo -->

                <div class="logo-label">
                    <a href="index.html"><img class="logo" src="./logo.png"></a>
                </div>

                <!-- home -->

                <router-link to = "/home" class="nav-item">
                    <i class="fas fa-hamburger"></i>首頁 Home
                    <div class="line"></div>
                </router-link>

                <!-- history -->

                <router-link to = "/history" class="nav-item">
                    <i class="fas fa-landmark" ></i>歷史 History
                    <div class="line"></div>
                </router-link>

            </div>
        </div>
      </transition>
          
  </div> 
</template>

<script>

export default {

  data () {
    return {
      scrollTop: false, // 預設 false ，使 nav-fixed(nav-scroll) 先隱藏
    }
  },

  mounted () {
      window.addEventListener('scroll', this.scrollNav, true); // 監聽有 scroll 動作，便使 scrollNav() 參數為 true
  },

  methods: {

      scrollNav() {                 
          // Y軸 scrooll 超過 100 px ， scrollTop 為 true，使 nav-fixed(nav-scroll) 顯現
          if ( window.scrollY >= 80) {
              this.scrollTop = true;
          } else {
              this.scrollTop = false;
          }
      }

  },

}

</script>

<style scoped>

    @import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");

    .nav {
        background-color:rgb(40, 40, 40);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    /* nav-origin */

    .nav-origin {
        display: flex;
        max-width: 1200px;
        width: 100%;
		height: 80px;
		line-height: 80px;
        background-color:rgb(40, 40, 40);        
    }

    /* nav-scroll */

    .nav-fixed {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1;
        background-color:rgb(40, 40, 40);
    }

    .nav-scroll {
        display: flex;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
		height: 50px;
		line-height: 50px;
    }

    /* Nav 內容物 */
    
    .logo {
        height: 80px;
        /* background: #FFBB22; */
    }

    /* 高度記得設一樣 */

    .nav-scroll .logo {
        height: 50px;
        padding: 0 10px;
    }

    .nav a:hover .logo {
        transform: rotate(3turn);
        transition: all 1s ;
    }    

    .nav-item {
        flex: 1;
        text-align: center;
		font-size: 18px;
        letter-spacing: 2px;
		text-decoration: none;
		color: #ffffff;
        position: relative;     
    }

    .nav-item:hover {
        color: #FFBB22;
    }

    .fas {
        margin: 0 5px;
    }

	.nav .active {
        color: #FFBB22;
	}

    .nav .line {
        position: relative;
        bottom: 2px;
		width: 0px;
        height: 0px;
        margin: 0 auto;
        background-color: #FFBB22;
    }

    .nav a:hover .line {
        width: 100%;
        height: 2px;
        transition: all 0.5s ;
    }

	.nav .active .line {
        width: 100%;
        height: 2px;
        transition: all 0.5s ;
    }  

    /* transition pop */
    
    .pop-enter-active, .pop-leave-active {
    transition: transform .5s;
    }

    .pop-enter, .pop-leave-to {
    transform: translateY(-80px);
    }

</style>