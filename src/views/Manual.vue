<template>
  <div id="manual"> 
    <div class="menuContents">
      <!-- <h2>{{mainIndex}}/{{subIndex}}</h2> -->
      <div class="depth1">
        <ul>
          <li
            v-for="(menu, menuIdx) in mainMenu.slice(0,3)"
            :key="`mainMenu-${menuIdx}`"
            @click="onClickMainMenu(menuIdx)"
            :class="{on : mainIndex == menuIdx}"
          >
            <span>{{menu}}</span>
          </li>
          <li @click="goToMainPage()"><span><em>전체메뉴</em></span></li>
        </ul>
      </div>

      <ul class="depth2">
        <li
          v-for="(menu, subMenuIdx) in subMenu"
          :key="`subMenu-${subMenuIdx}`"
          @click="onClickSubMenu(mainIndex, subMenuIdx)"
          :class="{on : subIndex == subMenuIdx}"
        >
          <span>{{menu}}</span>
        </li>
      </ul>
    </div>

    <ManualDetail
      v-for="(manualDetail, manualDetailIdx) in mainMenu"
      :key="`manualDetail-${manualDetailIdx}`"
      :nowIndex="manualDetailIdx"
      :mainIndex="mainIndex" 
      :subIndex="subIndex"
    />
  </div>
</template>

<script>
import ManualDetail from '../components/ManualDetail';
export default {
  name: 'Manual',
  components:{
    ManualDetail
  },
  props: {
    mainIndex: {
      type:Number,
      default:0,
    },
    subIndex: {
      type:Number,
      default:0,
    }
  },
  data() {
    return {
      mainMenu:[]
    };
  },
  created() {
    this.mainMenu = this.$store.getters.getMenuMain;
  },
  computed: {
    // mainMenu(){
    //   return this.$store.getters.getMenuMain;
    // },
    subMenu(){
      return this.$store.getters.getMenuSub(this.mainIndex, this.subIndex);
    },
  },
  methods: {
    onClickMainMenu(mainIndex) {
      this.gotoMenu(mainIndex);
    },
    onClickSubMenu(mainIndex, subIndex) {
      this.gotoMenu(mainIndex, subIndex);
    },
    gotoMenu(mainIndex, subIndex = 0) {
      console.log("gotoMenu", mainIndex, subIndex);
      if(this.mainIndex == mainIndex && this.subIndex == subIndex) { return; }

      this.$router.push(`/Manual/${mainIndex}/${subIndex}`);
    },
    goToMainPage(){
      this.$router.push(`/Main/${4}`);
    },
  },
}
</script>