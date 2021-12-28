<template>
  <div id="main">
    <swiper
      class="swiper"
      ref="swiper"
      :options="swiperOptionMain"
      @slideChange="onSlideChange"
    >
      <!-- Todo:페이지 작업 필요 -->
      <swiper-slide><SlidePage1 /></swiper-slide>
      <swiper-slide><SlidePage2 /></swiper-slide>
      <swiper-slide><SlidePage3 /></swiper-slide>
      <swiper-slide id="siteMap">
        <div>
          <h2>보장분석 전체메뉴</h2>
        </div>
        <ul>
          <li
            v-for="(detailPage, depth1Index) in $store.state.detailPageData.slice(0,3)"
            :key="`detailPage${depth1Index}`"
          >
            <span>{{depth1Index+1}}</span>

            <h3 @click="onClickGotoManual(depth1Index,0)">
              <img :src="require(`@/assets/img/common/siteMap${depth1Index+1}.png`)" alt="">
              <span>{{detailPage.title}}</span>
            </h3>

            <ul>
              <li
                v-for="(detailSubPage, depth2Index) in detailPage.subPage"
                :key="`detailSubPage${depth2Index}`"
                @click="onClickGotoManual(depth1Index,depth2Index)"
              >
                <h4>
                  <span>{{depth2Index+1}}</span>
                  <em>{{detailSubPage.title}}</em>
                </h4>
                <p>{{detailSubPage.subTitle}}</p>
              </li>
            </ul>

          </li>
          <li
            v-for="(optionPage, depth1Index) in $store.state.detailPageData.slice(3,4)"
            :key="`optionPage${depth1Index}`"
          >
            <h3 @click="onClickGotoOption(3,0)">
              <img src="@/assets/img/common/siteMap4.png" alt="">
              <span>{{optionPage.title}}</span>
            </h3>

            <ul>
              <li
                v-for="(detailSubPage, depth2Index) in optionPage.subPage"
                :key="`detailSubPage${depth2Index}`"
                @click="onClickGotoOption(depth1Index,depth2Index)"
              >
                <h4>{{detailSubPage.title}}</h4>
                <p>{{detailSubPage.subTitle}}</p>
              </li>
            </ul>

          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SlidePage1 from '@/components/SlidePage1.vue'
import SlidePage2 from '@/components/SlidePage2.vue'
import SlidePage3 from '@/components/SlidePage3.vue'

export default {  
  name: 'Home',
  components: {
    SlidePage1,
    SlidePage2,
    SlidePage3,
  },
  props: {
    slideIndex: {
      type:Number,
      default:0,
    },
  },
  data() {
    return {
      swiperOptionMain: {
        slidesPerView: 1,
        direction: "vertical",
        spaceBetween: 0,
        mousewheel: true,
        allowTouchMove: true,
        speed: 500,
        resistance:false,
        resistanceRatio:0,
        pagination: {
          el: ".swiper-pagination-v",
          clickable: true,
        },
      },
      nowPage: 0,
      nowSubPage: 0,
      touchStartY: 0,
      currentY: 0,
      slidePositionY:-1,
      value: 0,
      currentSlideIndex: 0,
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    },
  },
  mounted() {
    window.test = this;
    this.swiper.slideTo(this.slideIndex, 0);
  },
  watch: {
    
  },
  methods: {
    onClickGotoManual(mainIndex, subIndex) {
      console.log(mainIndex, subIndex);
      this.$router.push(`/Manual/${mainIndex}/${subIndex}`);
    },
    onClickGotoOption(mainIndex, subIndex) {
      console.log(mainIndex, subIndex);
      this.$router.push(`/Option/${3}/${subIndex}`);
    },
    onSlideChange(){
      this.currentSlideIndex = this.swiper.realIndex;

      // 라우터 리다이렉션 오류 방지(Avoided redundant navigation to current location)
      // 현재 주소와 이동할 주소를 비교
      if(this.$route.path!==`/Main/${this.currentSlideIndex}`) {
        this.$router.push(`/Main/${this.currentSlideIndex}`)
      }
    }
  },
}
</script>