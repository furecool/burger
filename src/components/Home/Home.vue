<template>
  <div class="home">

      <!-- ====================== banner ====================== -->

      <div class="banner">

        <div class="banner-text">
          <span class="text-main">{{data.bannerText.textMain}}</span>
          <span class="text-author">{{data.bannerText.textAuthor}}</span>
        </div>

      </div>

      <!-- ====================== component ====================== -->

      <div class="component" >

        <div class="title">
          <div class="title-txt">{{data.contentComponent.title}}</div>
          <div class="title-intro">{{data.contentComponent.titleIntro}}</div>
        </div>

        <div class="content" v-for="item in data.contentComponent.content" :key="item.id">

          <div class="content-pic"><img :src="item.img"></div>

          <div class="content-txt">
            <div class="txt-title">{{item.compon}}</div>
            <div class="txt-intro">{{item.intro}}</div>
          </div> 

        </div>

      </div>

      <!-- ====================== category ====================== -->

      <div class="category">
        <div class="cate-ring">

          <div class="title">
            <div class="title-txt">{{data.contentCategort.title}}</div>
            <div class="title-intro" v-for="item in data.contentCategort.titleIntro" :key="item.id">{{item}}</div>
          </div>

          <div class="content">

            <div class="box" v-for="item in data.contentCategort.content" :key="item.id">

              <img :src="imgy" class="cate-pic" v-for="imgy in item.img" :key="imgy.id">

              <div class="cate-name">{{item.name}}</div>  

            </div>

          </div>

        </div>
      </div>   

  </div>
</template>

<script>
export default {

  data () {
    return {
      data: {

        bannerText: {
          textMain: '❝ 漢堡的意義在於某種渴望牛肉的共同需求，配上香氣、調味、柔軟和多汁，以廉價且容易取得的方式，在一塊不起眼的肉餅之中蘊藏著肉質、牛肉以及鮮美多汁的油汁。 ❞',
          textAuthor: '《 The Primal Cheeseburger: A Generous Helping of Food History Served on a Bun 》 by Elisabeth Rozin'
        },

        contentComponent: {
          title: '漢堡是什麼?',
          titleIntro: '我們現在所命名為漢堡的食物，是由幾種不同的食材組成共稱。',
          content: [
            {
              img:require('./patty.jpg'),
              compon:'肉餡 Patties',
              intro:'漢堡最核心的部位，也是最能展現創意及工夫之處。口感可做成鬆軟，也可保有肉的咬勁，使用的肉的部位、肉的切法、調味與否，每個店家都有堅持的獨特配方。'
            },
            {
              img:require('./bun.jpg'),
              compon:'麵包 Buns',
              intro:'風味、口感、大小、是否有撒料及種類等，漢堡麵包也有不同風貌。請以搭配肉餡、蔬菜、醬料等其他部分，以及疊起來後的整體平衡感，來判斷選擇的種類。'
            },
            {
              img:require('./sauce.jpg'),
              compon:'醬料 Sauce',
              intro:'漢堡使用的醬料種類不只美乃滋和番茄醬，可以多方嘗試搭配，更可從零開始手工自製，追求極致的獨創性。'
            },
            {
              img:require('./topping.jpg'),
              compon:'配料 Toppings',
              intro:'萵苣、番茄、小黃瓜、洋蔥等，雖然只是配料，但能為漢堡創造不同的風味及口感，萵苣是否摺疊、番茄去芯與否、小黃瓜切成什麼形狀、洋蔥要煎過嗎？嘗試不同方式，找到最強的組合吧！'
            },
          ]  
        },

        contentCategort: {
          title: '漢堡的種類',
          titleIntro: [
            'Hamburger 是對漢堡人的稱呼。這與 Frankfurter（熱狗）和 Wiener（香腸）是根據法蘭克福人和維也納人的稱呼是一樣的。',
            '漢堡（burger），是逆向構詞法，牛肉漢堡英文叫 beef burger、起司漢堡英文叫 cheese burger。'
          ],
          content: [
            {
              name: '牛肉漢堡 beef burger',
              list: '牛肉堡、牛肉餅漢堡',
              img: [
                require('./bb1.jpg'),
                require('./bb2.jpg'),
              ]
            },
            {
              name: '豬肉漢堡 pork burger',
              list: '雙層豬肉起司堡',
              img: [
                require('./pb1.jpg'),
                require('./pb2.jpg'),
              ]
            },
            {
              name: '起司漢堡 cheese burger',
              list: '芝士雞蛋堡',
              img: [
                require('./cheb1.jpg'),
                require('./cheb2.jpg'),
              ]
            },
            {
              name: '魚排漢堡 fish burger',
              list: '鱈魚堡',
              img: [
                require('./fb1.jpg'),
                require('./fb2.jpg'),
              ]
            },
            {
              name: '雞肉漢堡 chicken burger',
              list: '香辣雞腿堡、奧爾良雞腿堡、香脆雞腿堡、雞排堡、雙層香辣雞腿堡',
              img: [
                require('./chib1.jpg'),
                require('./chib2.jpg'),
              ]
            },
            {
              name: '蔬菜漢堡 vegetable burger',
              list: '蔬菜漢堡',
              img: [
                require('./vb1.jpg'),
                require('./vb2.jpg'),
              ]
            },
            {
              name: '米漢堡 rice burger',
              list: '米漢堡',
              img: [
                require('./rb1.jpg'),
                require('./rb2.jpg'),
              ]
            },
            {
              name: '蝦漢堡 shrimp burger',
              list: '鮮蝦堡',
              img: [
                require('./sb1.jpg'),
                require('./sb2.jpg'),
              ]
            },
          ]
        }

      }
    }
  },

}
</script>

<style scoped>

  .home {
    width: 100%;
  }

  /* ============== banner ============== */

  .banner {
    background-image: url(./homebanner.jpg);
    height: 500px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center ;
    background-size: cover; 
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .banner-text {
    cursor: default;
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 1200px;
    width: 70%;
    background-color:rgb(0, 0, 0,0.5);
    margin: 0 auto;
    padding: 40px;
    line-height: 45px;
  }

  .banner span {
    color: rgb(255, 242, 223);
    margin: 10px;
  }

  .text-main {    
    font-size: 22px;
    letter-spacing: 2px;
  }

  .text-author {
    font-size: 16px;
    align-self: flex-end ;
  }

  /* ============== component ============== */

  .component {
    cursor: default;
    display: flex;
    flex-direction: column;
    /* background: rgb(255, 242, 223); */
    align-items: center;
    padding-bottom: 100px;
  }

  /* 與 category 共用 */

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 30px auto;
    max-width: 1200px;
    width: 70%;
  }

  .title-txt {
    font-size: 40px;
    letter-spacing: 5px;
    line-height: 100px;
    font-weight: bold;
  }

  .title-intro {
    margin: 10px auto;
    font-size: 22px;
    letter-spacing: 2px;
    line-height: 50px;
  }

  .content {
    margin: 50px;
    max-width: 1200px;
    width: 70%;
    display: flex;
  }

  /* .content-pic */

  .content-pic {
    width: 45%;
    overflow: hidden;
    perspective: 1000px;
  }

  .content:nth-child(even) .content-pic {
    order: 2;
  }

  .content-pic img {

    /* 100%會選寬高兩者中比盒子短，圖不變型，所以比盒長 overflow */
    width: 100%;
    height: 100%;
    object-fit:cover;

    border-radius: 50% 20% / 10% 40%;

    transform-style: preserve-3d;
    transform: translatez(0px);
    transition: transform .3s ease-out;
  }

  .content-pic:hover img{
    transform: translatez(200px);
  }

  /* txt */

  .content-txt {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    /* background: rgb(0, 0, 0,0.5); */
  }

  .txt-title {
    color: #FFBB22;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 2px;
    margin: 0 auto 50px;
  }

  .txt-intro {
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 35px;
    margin: 0 auto;
    width: 75%;
  }

  /* ============== category ============== */

  .category {
    cursor: default;
    padding: 50px 0;    
    background: #000;
    display: flex;
    justify-content: center;
  }

  .cate-ring {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    border: #FFBB22 2px solid;
    margin: 0 50px;
    align-items: center;
  }

  .category .title-txt {
    color: #FFBB22;
  }

  .category .title-intro {
    color:  rgb(255, 242, 223);
  }

    /* 
  
  display:grid;

  grid-template-rows: [Y1] 100px [Y2] 100px [Y3] 100px [Y4] 100px [Y5] 100px [Y6];
  grid-template-rows: 2fr repeat(4, 1fr);
  grid-template-columns: [X1] 100px [X2] 100px [X3] 100px [X4] 100px [X5] 100px [X6];

  grid-template-area: 
    "header header header header header "
    "nav main main main main "
    "nav main main main main "
    "nav main main main main "
    ". footer footer footer .";

  row-gap: 10px;    
  column-gap: 10px;    

  grid-row: 1/4;
  grid-column: 1/3; Y1/Y3
  grid-column: 2/ span 3;
  grid-area: 1/1/4/3;
  grid-area: header;
  
   */

  /* content 整個幾宮格部分 Grid*/

  .category .content {
    height: 1100px;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 100px;
  }

  /* box 圖+字 */

  .category .content .box {
    /* border: 1px solid #FFBB22; */
    position: relative;
    overflow: hidden;
    margin: 6px 8px;
  }

  .category .content .box:nth-child(1) {
    grid-row: 1/4;
    grid-column: 1/3;
  }

  .category .content .box:nth-child(2) {
    grid-row: 1/3;
    grid-column: 3/5;
  }

  .category .content .box:nth-child(3) {
    grid-row: 3/4;
    grid-column: 3/5;
  }

  .category .content .box:nth-child(4) {
    grid-row: 4/5;
    grid-column: 1/2;
  }

  .category .content .box:nth-child(5) {
    grid-row: 4/5;
    grid-column: 2/5;
  }

  .category .content .box:nth-child(6) {
    grid-row: 5/6;
    grid-column: 1/3;
  }

  .category .content .box:nth-child(7) {
    grid-row: 6/8;
    grid-column: 1/3;
  }

  .category .content .box:nth-child(8) {
    grid-row: 5/8;
    grid-column: 3/5;
  } 
   

  /* 圖 */

  .category .content .box .cate-pic  {
    width: 100%;
    height: 100%;
    object-fit:cover;

    position: absolute;
    opacity: 1;
    transition: opacity .5s;
  }

  .category .content .box:hover .cate-pic {
    animation: slide 2s infinite;
    opacity: 0;
  }

  .category .content .box .cate-pic:nth-child(2) {
    animation-delay: 1s;
  }

  @keyframes slide {
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    75% {      
      opacity: 0;
    }      
  }

  .cate-name {
    font-size: 20px;
    letter-spacing: 2px;
    color: rgb(255, 242, 223);
    position: absolute;
    top: -50px;
    background: rgb(0, 0, 0,.5);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top .5s;
  }

  .category .content .box:hover .cate-name {
    top: 0;
  }








</style>