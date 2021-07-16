<template>
  <div class="history">

      <!-- ====================== banner ====================== -->

      <div class="banner">
        <div class="banner-text">
          <span class="text-main">{{data.bannerText.textMain}}</span>          
        </div>
      </div>

      <!-- ================ content ( legend/ debate/ discuss ) ================ -->

      <div class="content">

        <!-- --------------- legend 起源與傳說 --------------- -->
        <div class="legend-content">
          <div class="legend-wrap">

            <div class="content-title">{{data.legend.title}}</div>

            <div class="legend-box">
              <a class="legend" @click.prevent="link = 'a'"><img :src="data.legend.box[0].img"><span>肉夾饃 — <p>2th</p></span></a>
              <a class="legend" @click.prevent="link = 'b'"><img :src="data.legend.box[1].img"><span>碎肉 — <p>13th</p></span></a>
              <a class="legend" @click.prevent="link = 'c'"><img :src="data.legend.box[2].img"><span>三明治 — <p>18th</p></span></a>
              <a class="legend" @click.prevent="link = 'd'"><img :src="data.legend.box[3].img"><span>漢堡排 — <p>19th</p></span></a>
              <a class="legend"></a>
              <a class="legend"></a>
              <a class="legend"></a>
              <a class="legend"><div class="pink">到了美國<i class="fas fa-arrow-circle-right"></i></div></a>
              <a class="legend"></a>
            </div>

            <!-- modal 詳情 -->            
            <transition name="modal">
              <div class="modal-box" v-if="link" @click.self="closeModal()">

                <div class="legend-modal" v-if="link=='a'">
                  <img :src="data.legend.box[0].img">
                  <div class="modal-txt">
                    {{data.legend.box[0].txt}}
                  </div>
                </div>  

                <div class="legend-modal" v-else-if="link=='b'">
                  <img :src="data.legend.box[1].img">
                  <div class="modal-txt">
                    {{data.legend.box[1].txt}}
                  </div>
                </div>

                <div class="legend-modal" v-else-if="link=='c'">
                  <img :src="data.legend.box[2].img">
                  <div class="modal-txt">
                    {{data.legend.box[2].txt}}
                  </div>
                </div>

                <div class="legend-modal" v-else-if="link=='d'">
                  <img :src="data.legend.box[3].img">
                  <div class="modal-txt">
                    {{data.legend.box[3].txt}}
                  </div>
                </div> 

              </div>
            </transition>                        

          </div>          
        </div>

        <!-- --------------- debate 美國的原創爭論 --------------- -->
        <div class="debate-content" @click.capture="debateClose()">
          <div class="debate-wrap">

            <div class="content-title">{{data.debate.title}}</div>

            <!-- line 背景裝飾 -->
            <div class="line-box">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>              
            </div>

            <div class="debate-box" >
              <div class="debate" v-for="item in data.debate.box" :key="item.id" @click="debateOpen($event)">
                
                <img :src="item.img">
                <div class="debate-title">{{item.title}}</div>
                <span>{{item.txt}}</span>
              </div>
            </div>

          </div>
        </div>

        <!-- --------------- discuss 重點以及一些反思 --------------- -->
        <div class="discuss-content">
          <div class="discuss-wrap">

            <div class="content-title">{{data.discuss.title}}</div>

            <div class="discuss-box" v-for="( box , index ) in data.discuss.box" :key="index">

              <div class="box-inner ques" >{{box.question}}</div>

              <div class="box-inner ans" @click="showDiscuss(index)">{{box.answer}}</div>

              <div class="txt-mask" v-show="discussTxt == index" @click.self="hideDiscuss()">
                <div class="txt"> <p v-for="txt in box.txt" :key="txt.id">{{txt}}</p> </div>
              </div> 

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
      link: false,
      discussTxt: null,
      // showTxt: false,
      data: {   

        bannerText: {
          "textMain": '至少我們知道，漢堡最初夾的是碎肉餅，所以人們也用它來比喻「被打得遍體鱗傷的拳擊手」，美國俚語中就有 " make hamburger out of somebody. " 的說法，表示「痛打某人，把某人打成肉餅」喔。'
        },

        legend: {
          title: "起源與傳說",
          bgImg: require('./legend0.jpg'),
          box: [
            {
              txt: '陝西稗官野史說是張飛所創，作法是以大刀割開饅頭夾肉，即肉夾饃。經過絲路西行，影響了西亞、義大利，再北上到德國，最後跨海來到美國。',
              img: require('./legend1.jpg'),
            },
            {
              txt: '十三世紀初，蒙古西征時，用餐時間不穩定，騎士往往先切下牛肉或馬肉放在馬鞍下備食。生肉因為騎乘顛簸而慢慢壓碎的過程中，竟形成一種獨特的低溫熟成料理。這種碎肉料理被貴族精緻化成為韃靼牛排（Steak tartare）與碎牛肉丸，在蒙古統治俄羅斯時傳入歐洲，而德國 Hamburg 則是引進的主要港口。',
              img: require('./legend2.jpg'),
            },
            {
              txt: '相傳，寫下史學巨著《羅馬帝國衰亡史》的歷史學家吉朋 ( Edward Gibbon )，前往倫敦的一家俱樂部吃到第一個三明治，發明者為十八世紀英國人蒙塔古 ( John Montagu ) 。',
              img: require('./legend3.jpg'),
            },
            {
              txt: '1847年，歐洲往來美國最重要的航運公司 HAPAG（Hamburg-Amerikanische Packetfahrt-Actien-Gesellschaft）成立，他們雇用的水手被喚為漢堡水手 ( Hamburg sailors ) ，是當時美國各大港口餐廳最重要的顧客。餐廳推出類似德國韃靼牛排或碎牛肉丸家鄉味的漢堡排 ( Hamburg steak )。此時，離漢堡雛形就只差兩片麵包了。',
              img: require('./legend4.jpg'),
            },
          ],
        },

        debate: {
          title: "美國的原創爭論",
          box: [
            {
              title: '( 1885 ) 查理．納格林',
              txt: "查理．納格林 ( Charlie Nagreen ) 發明了現代的漢堡，1885年，在威斯康辛州西摩 ( Seymour ) 某一場展覽場販賣。當時只是炸的肉球，後來實在是因為賣的不好，所以納格林就改良成三明治裡面的夾心，他稱這叫 hamburger。",
              img: require('./Nagreen.jpg'),
            },
            {
              title: '( 1885 ) 法蘭克和查爾斯．門卻斯',
              txt: "法蘭克和查爾斯．門卻斯（Frank and Charles Menches）這對來自俄亥俄州坎頓 ( Canton ) 的兄弟宣稱，漢堡是他們在1885年於舉辦於紐約州伊利郡漢堡鎮的伊利郡市集（the Erie County Fair）所發明的。",
              img: require('./Menches.jpg'),
            },
            {
              title: '( 1891 ) 奧斯卡．韋伯．比爾畢',
              txt: "奧克拉荷馬州長在 1995 年還出來宣布塔爾薩是第一個「真正的漢堡誕生地」，認為 1891 年奧斯卡．韋伯．比爾畢（Oscar Weber Bilby）在塔爾薩 (Tulsa) 的農場做出了第一個漢堡。",
              img: require('./Bilby.jpg'),
            },
            {
              title: '( 1900 ) 路易斯．萊森',
              txt: "康州紐哈芬路易斯餐廳（Louis' Lunch）的丹麥移民路易斯．萊森（Louis Lassen）在1900年賣出了第一份漢堡包和牛排三明治，是唯一有被美國國會圖書館官方所認定的。",
              img: require('./Lassen.jpg'),
            },
            {
              title: '( 1904 ) 弗萊契．戴維斯',
              txt: "1904年於密蘇里州聖路易市所舉辦的世界博覽會。《紐約論壇報》報導博覽會時，介紹了一攤賣一種叫做漢堡的新的三明治，而賣這種新品種三明治的人，正是來自於德州雅典的弗萊契．戴維斯（Fletch Davis）。",
              img: require('./Fletch.jpg'),
            },
          ],
        },

        discuss: {
          title: "一些反思",
          box: [
            {
              question: "所以經過這場爭奪原創者寶座的大戰，我們能得到什麼答案?",
              answer: "漢堡的發明缺乏成文歷史，應被歸類為集體社會的共同智慧結晶。",
              txt: [

                "事實上，我們不可能知道誰是那位最先用麵包夾漢堡排拿去吃的人。從港口餐廳販賣漢堡排的十九世紀中葉，到二十世紀初的這五十年間，漢堡的成型是一個模糊演變的過程，它融合了肉排、圓麵包、不同口味的菜色醬料，以及三明治的包夾邏輯。第一，麵包夾肉的行為，在當時三明治普遍的社會下變得理所當然，誰做出這個舉動都不會意外，第二，它可能的排列組合太多了，實難將漢堡定義為單一樣式，基於無法判斷中介產物叫不叫漢堡，更遑論找出原創者了。漢堡的發明缺乏單一成文歷史，我認為，漢堡傾向被歸類為集體社會的共同智慧結晶，應較為妥當。"

              ]
            },
            {
              question: "能夠引起廣大爭論可見漢堡的重要，是麵包鬆軟?肉特多汁?還是當時的漢堡有哪裡特別出彩?",
              answer: "在美國工業化的背景下，是漢堡的機動性、平價、簡便，使它受到廣大消費者的青睞。",
              txt: [

                "爭論無解，通常我們可以先將問題意識提升。舉個例子，將問題從漢堡的原創者是誰，轉換到為什麼漢堡如此重要，它是如何變得重要，導致大家這麼想爭取原創者身分。",

                "19世紀晚期美國工業化，工人不便回家吃飯，行動餐車迅速、便宜地幫他們解決了一到兩餐，這時成了熱門品項的漢堡，是在這樣的背景下變得越來越重要的。",

                "回頭看原創地位問題，原創品很棒，所以要不顧一切維護它原本的樣子嗎? ( 這裡單就傳統與革新的角度去探討，並非要在著作權領域辯分明。 ) 就像許多改編的影視作品，總會遭到為數不少的原著擁護者大力批評。但若流於一味支持原著，容易成為形式的信徒，將那最初見到的，當成了不可玷汙的信仰。漢堡本身的型式規格重要嗎?重點是能夠流行的核心價值吧。而除了美味外，當時漢堡的特殊價值為，機動性、平價，以及簡便，是這些內涵真正使它受到廣大消費者的青睞。"

              ]
            },
            {
              question: "所以永保這些特質，就能讓漢堡世世代代繼續受到人們的喜愛了吧?",
              answer: "任何經典，只有符合潮流、與時俱進。才能得到不同脈絡下受眾的認同。",
              txt: [
                
                "比起抓著最初那個麵包夾肉排的原創型式不放，找到價值就已經更上了一層樓，已經可以告一段落。但不顧一切維護這樣的價值?好像也不是，現在的漢堡店說不定沒有這些特質 ( 有店面肯定機動性不高，也許高價，也許內容豐富，又常搭配套餐失去簡便性 ) 。這樣一來，原創物的形式不重要，其內涵價值也並非永恆可靠，重要的是什麼?漢堡真正吸引人的原因?",

                "1980年代，麥當勞在亞洲拓展成功，中文的漢堡一詞已經泛指所有用漢堡麵包做成的三明治。這年代以後在中文圈出生的人，對漢堡中蛋白質的印象，也不必非得是最初的碎牛肉餅，雞、豬、魚、蝦、素食都是可以的。漢堡的定義，隨時間和地域的流轉有了改變。",

                "真正的主角是脈絡。未來的趨勢是反單一中心的，原創並非絕對信仰，包容性與創意才是關鍵字。我們應該同時留意到，第一，縱向時間的發展，如何將原創隨時代做適合的繼承，即當代化。第二，橫向空間的發展，如何隨不同地區的文化做適應，即在地化。經典是可以轉變的，或者我們可以說，從來就沒有單一典範，如何隨時代脈絡當代化、在地化，才是不斷給漢堡注入生命的動力來源。"

              ]
            },
          ]
        },

      }      
    }
  },

  methods: {

    closeModal() {
      this.link = false;
    },

    debateOpen(e) {
      // console.log(e.currentTarget.innerText);
      var siblings = [];
      var elseLi = e.currentTarget.parentNode.children;
      for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
          if (elseLi[i].nodeType === 1 && elseLi[i] !== e.currentTarget) {
              siblings.push(elseLi[i]);
          }
      }
      // console.log(siblings);
      siblings.forEach((item)=>{
        item.style.height = '35px';
        item.lastChild.style.opacity = '0';
        item.firstChild.style.opacity = '.5';
      });
      e.currentTarget.style.height = '560px';      
      e.currentTarget.lastChild.style.opacity = '1';
      e.currentTarget.firstChild.style.opacity = '1';
    },

    debateClose() {
      var array = Array.from(document.getElementsByClassName("debate"));

      array.forEach((item)=>{
        item.style.height = '140px';
        item.lastChild.style.opacity = '0';
        item.firstChild.style.opacity = '.5';
      });

    },

    showDiscuss(index) {
        this.discussTxt = index;    
    },

    hideDiscuss() {
        this.discussTxt = null;    
    }

  },

  mounted () {

    window.addEventListener('scroll', (e)=>{
      var bis = document.querySelectorAll('.box-inner');
      var scrollY = window.scrollY;
      for (let bi of bis) {
        if (bi.offsetTop - 500 < scrollY) {
          bi.classList.remove('hide');
          bi.classList.add('show');          
        } else {
          bi.classList.add('hide');
          bi.classList.remove('show');
        }
      }
    });

  },

}
</script>

<style scoped>

  .banner {
    background-image: url(./historybanner.jpg);
    height: 500px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;   
    
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
    color: blanchedalmond;
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

  /* ================================ legend ================================ */

  .legend-content {
    width: 100%;
    /* background: blanchedalmond; */
  }

  .legend-wrap {
    max-width: 1000px;
    width: 70%;
    margin: 0px auto;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }  

  .content-title {
    cursor: default;
    font-size: 40px;
    letter-spacing: 5px;
    line-height: 100px;
    font-weight: bold; 
    margin: 0 0 90px;   
  }

  .legend-box {
    height: 700px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    background-image: url(./legend0.jpg);
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: center;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
  }

  .legend {
    position: relative;
    overflow: hidden;
    border: 5px solid #fff;
    /* border: 5px solid blanchedalmond; */
  }

  .legend:nth-child(1) {
    grid-row: 1/2;
    grid-column: 1/2;
    
  }
  .legend:nth-child(2) {
    grid-row: 2/3;
    grid-column: 2/3;
  }
  .legend:nth-child(3) {
    grid-row: 1/2;
    grid-column: 3/4;
  }
  .legend:nth-child(4) {
    grid-row: 3/4;
    grid-column: 3/4;
  }
  .legend:nth-child(5) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
  .legend:nth-child(6) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  .legend:nth-child(7) {
    grid-row: 2/3;
    grid-column: 3/4;
  }
  .legend:nth-child(8) {
    grid-row: 3/4;
    grid-column: 1/2;
  }
  .legend:nth-child(9) {
    grid-row: 3/4;
    grid-column: 2/3;
  }

  .legend img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    cursor: pointer;
  }

  .legend span {
    cursor: pointer;
    font-size: 26px;
    letter-spacing: 2px;
    font-weight: bold;
    color: #FFBB22;
    background: rgb(0, 0, 0,.5);    
    position: absolute;
    bottom: 0;
    width: 100%;
    /* height: 80px; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height .5s , font-size .5s;
  }

  .legend p {
    font-size: 18px;
    position: relative;
    bottom: -5px;
    left: 10px;
  }

  .legend:hover span {
    /* height: 100%; */
    height: 80px;
  }

  .legend .pink {
    cursor: default;
    font-size: 26px;
    letter-spacing: 2px;
    font-weight: bold;
    color: #ffffff;
    background: #ffbd22;
    
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .legend i {
    margin-left: 7px;
  }

  .modal-box {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .legend-modal {
    max-width: 700px;
    width: 55%;
    background: #fff;
    border-radius: 1em;
    overflow: hidden;
  }

  .legend-modal img {
    width: 100%;
    height: 300px;
    object-fit:cover;
  }

  .modal-txt {
    cursor: default;
    margin: 50px;
    line-height: 40px;
    font-size: 18px;
  }

  /* transition  */

  .modal-enter-active,
  .modal-leave-active {
      transition: .3s all;
  }
  
  .modal-enter,
  .modal-leave-to {
      opacity: 0;
  }
  
  .modal-enter-to,
  .modal-leave {
      opacity: 1;
  }



  /* ================================ debate ================================ */

  .debate-content {
    background: #000;
    color: #fff;
    width: 100%;
  }

  .debate-wrap {
    position: relative;
    max-width: 1000px;
    width: 70%;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .line-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 700px;
    margin: 50px;
  }

  .line {
    border: 7px solid #fff;
    position: absolute;
  }

  .line:nth-child(1) {
    width: 65%;
    height: 70%;
    top: -21%;
    left: 0;
  }

  .line:nth-child(2) {
    width: 70%;
    height: 70%;
    bottom: 7%;
    right: 0;
  }

  .line:nth-child(3) {
    width: 70%;
    height: 40%;
    top: -17%;
    right: -5%;
  } 

  .debate-box {
    margin: 50px;
    height: 700px;
  }

  .debate {
    cursor: pointer;
    height: 140px; 
    background-color: blanchedalmond;   
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all .5s;
  }

  .debate-title {
    position: absolute;
    top: 0;
    /* color: #ffbd22; */
    color: #fff;
    font-size: 1.3em;
    letter-spacing: 2px;
    font-weight: bold;
    line-height: 35px;
    background: #ffbd22;
    width: 100%;
    text-align: center;
    /* background: rgb(0,0,0,.4); */
    padding: 0 10px;
    border-radius: 0 0 .3em 0;
  }

  .debate img {
    width: 100%;
    height: 360px;
    /* height: 100%; */
    object-fit:cover;
    opacity: .5;

    transition: all 2s;
  }

  .debate span {
    cursor: default;
    height: 200px;
    opacity: 0;
    background: #fff;
    color: #000;
    font-size: 18px;
    letter-spacing: 1px;
    /* font-weight: bold; */
    line-height: 35px;
    padding: 5% 10%;
    overflow-y:scroll;
    transition: all 1s;
  }

  .debate span::-webkit-scrollbar {
    display: none;
  }

  /* ================================ discuss ================================ */

  .discuss-content {
    background: #fff;
    /* color: #fff; */
    width: 100%;
  }

  .discuss-wrap {
    max-width: 1000px;
    width: 70%;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .discuss-box {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    /* grid-template-rows: repeat(3, 1fr); */
    grid-template-columns: repeat(2, 1fr);
    margin: 0 0 100px;
  }

  .box-inner {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    padding: 30px;
    margin: 70px 0;
    position: relative;
    opacity: 0;    
  }

  .ques {
    background: blanchedalmond ;
    
    /* color: #fff; */
    grid-row: 1/2;
    /* grid-row: 1/3; */
    grid-column: 1/2;
  }

  .ques::before {
    border-color: blanchedalmond transparent transparent blanchedalmond; 
    border-style: solid; 
    border-width: 10px;
    /* border-width: 20px; */
    content: "";
    /* height: 0px; */
    left: 10px;
    bottom: -20px;
    /* bottom: -40px; */
    position: absolute;
    width: 0px;
  }

  .ques::after {
   border-color: rgb(255, 255, 255) transparent transparent rgb(255, 255, 255); 
    border-style: solid solid solid solid; 
    border-width: 10px 5px;
    /* border-width: 20px 10px; */
    content: "";
    /* height: 0px; */
    left: 10px; 
    bottom: -20px;
    /* bottom: -40px; */
    position: absolute;
    width: 0px;
  }

  .ans {
    cursor: pointer;
    background: #ffbd22;
    color: #fff;
    grid-row: 2/3;
    /* grid-row: 2/4; */
    grid-column: 2/3;
  }

  .ans::before {
    border-color: #ffbd22 #ffbd22 transparent transparent ; 
    border-style: solid; 
    border-width: 10px;
    /* border-width: 20px; */
    content: "";
    /* height: 0px; */
    right: 10px;
    bottom: -20px;
    /* bottom: -40px; */
    position: absolute;
    width: 0px;
  }

  .ans::after {
   border-color: #fff #fff transparent transparent ; 
    border-style: solid solid solid solid; 
    border-width: 10px 5px;
    /* border-width: 20px 10px; */
    content: "";
    /* height: 0px; */
    right: 10px; 
    bottom: -20px;
    /* bottom: -40px; */
    position: absolute;
    width: 0px;
  }  

  .hide {
    opacity: 0;
    transition-duration: 0.5s;
  }
  .show {
    transition-duration: 1s;
    opacity: 1;
    box-shadow: 15px -15px rgb(110, 110, 110);
  }

  .discuss-box .txt-mask {
    background: rgb(0, 0, 0,.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  .discuss-box .txt {
    display: flex;  
    flex-direction: column;
    align-items: center;
    background: linear-gradient(120deg,#4b4b4b, #272727);
    width: 30%;
    min-width: 450px;
    height: 60%;
    padding: 30px;
    border-radius: 1rem;
    overflow-y: scroll;
  }

  .discuss-box .txt::-webkit-scrollbar {
    display: none;
  }

  .discuss-box .txt p {
    color: blanchedalmond;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 40px;
    width: 90%;
    margin: 30px auto;
  }


</style>