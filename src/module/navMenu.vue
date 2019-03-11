<template>
  <div id="navMenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Discover</el-menu-item>
      <el-menu-item index="3">Monochrome</el-menu-item>
      <el-menu-item index="4">
        <a href="movies.html">Movies</a>
      </el-menu-item>
      <el-menu-item index="5">Sexy</el-menu-item>
      <el-menu-item index="6">Profile</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default Vue.extend({
  name: "navMenu",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
});
</script>



