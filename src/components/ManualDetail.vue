<template>
    <div id="manualDetail" v-if="isActive">
      <swiper
        class="swiper"
        ref="swiper"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="(contentList, index) in contentList"
          :key="`contenta${index}`"
        >
          <div :style="{ backgroundImage: `url(${require(`@/assets/img/slide${mainIndex+1}_${subIndex+1}_${contentList}.png`)})` }"></div>

          <!-- <div><img :src="require(`@/assets/img/slide${mainIndex+1}_${subIndex+1}_${contentList}.png`)" alt=""></div>           -->
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
export default {
  props:{
    mainIndex: {
      type:Number,
      default:0,
    },
    subIndex: {
      type:Number,
      default:0,
    },
    nowIndex: {
      type:Number,
      default:0,
    }
  },
  computed:{
    isActive() {
      return this.nowIndex == this.mainIndex
    },
    swiper() {
      return this.isActive && this.$refs.swiper && this.$refs.swiper.$swiper ? this.$refs.swiper.$swiper : undefined;
    },
    contentList() {
      return this.$store.getters.getContentSubPage(this.mainIndex, this.subIndex);
    },
    menuInfo() {
      return this.$store.getters.getMenuInfo(this.mainIndex, this.subIndex);
    }
  },
  data() {
    return {
      swiperOption: {
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
    }
  },
  watch: {
    $route : function() {
      this.swiperReady();
    }
  },
  methods: {
    swiperReady() {
      this.$nextTick(()=>{
        if(this.isActive && this.swiper) {
          this.swiper.slideTo(0, 0);
        }
      })
    },
  }
}
</script>