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
      <el-menu-item index="1">
            <router-link to="/home">Home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/test">Discover</router-link>
      </el-menu-item>
      <el-menu-item index="3">Monochrome</el-menu-item>
      <el-menu-item index="4">
          <router-link to="/movies">Movies</router-link>
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
export default {
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
};
</script>



