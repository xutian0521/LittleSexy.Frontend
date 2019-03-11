<template>
  <div id="banner">
    <button id="banerbtn" @click="show = !show" style="display:none"></button>
    <transition name="el-fade-in-linear">
      <div class="block" v-show="show">
        <span class="demonstration"></span>
        <el-carousel height="550px">
          <el-carousel-item v-for="item in bannerList" :key="item.Id">
            <img :src="item.imagePath" alt="Alternate Text">
          </el-carousel-item>
        </el-carousel>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
export default Vue.extend({
  name: 'banner',
  data() {
    return {
    show: true,
    bannerList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let _self = this;

      axios
        .get("http://localhost:5008/api/Page/Images?pageId=1")
        .then(function(response) {
          //debugger;

          console.log(response);

          var apiDataArr = response.data.content;

          _self.bannerList = apiDataArr;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
</script>

