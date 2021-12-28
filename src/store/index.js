import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailPageData: [
      {
        title: "분석 준비",
        subPage: [
          {
            title: "고객선택",
            subTitle: "고객 동의, 신정원 조회",
            content: 4,
          },
          {
            title: "타사 계약입력",
            subTitle: "직접입력, 신정원/미등록 입력",
            content: 4,
          },
          {
            title: "급부/필요금액 설정",
            subTitle: "",
            content: 2,
          },
        ]
      },
      {
        title: "보장 분석",
        subPage: [
          {
            title: "가입현황",
            subTitle: "",
            content: 3,
          },
          {
            title: "급부별 분석",
            subTitle: "신체부위별 보장현황, 상세그래프(방사형) 분석항목 세부현황",
            content: 4,
          },
          {
            title: "연령별 분석",
            subTitle: "연령별 상품 보장현황",
            content: 2,
          },
        ]
      },
      {
        title: "보장 제안",
        subPage: [
          {
            title: "보장 제안",
            subTitle: "",
            content: 3,
          },
          {
            title: "제안 후 급부별 분석",
            subTitle: "신체부위별 보장현황, 상세그래프(방사형) 분석항목 세부현황",
            content: 2,
          },
          {
            title: "제안 후 연령별 분석",
            subTitle: "연령별 상품 보장현황",
            content: 1,
          },
        ]
      },
      {
        title: "자주 쓰는 기능",
        subPage: [
          {
            title: "FP프로필 작성",
            subTitle: "",
            content: 1,
          },
          {
            title: "보고서 출력",
            subTitle: "",
            content: 3,
          },
          {
            title: "니즈환기자료",
            subTitle: "통계자료, 위험예보",
            content: 2,
          },
        ]
      },
    ]
  },
  getters: {
    getMenuMain:(state) => {
      return state.detailPageData.map(d=>d.title);
    },
    getMenuSub:(state) => (mainMenuIndex) => {
      return state.detailPageData[mainMenuIndex].subPage.map(d=>d.title);
    },
    getContentSubPage:(state) => (mainMenuIndex, subMenuIndex) => {
      return state.detailPageData[mainMenuIndex].subPage[subMenuIndex].content;
    },
    getMenuInfo:(state) => (mainMenuIndex, subMenuIndex) => {
      state,mainMenuIndex, subMenuIndex;
      // 구현 하셔야 합니다.
      return {
        prevInfo:{
          mainIndex:0,
          subIndex:0
        },
        nextInfo:{
          mainIndex:0,
          subIndex:0
        }
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
