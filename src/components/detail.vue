<template>
    <div >
        <el-card shadow="always">
            <video id="videoPlay"  width="98%"   controls="controls"  autoplay="autoplay" :src="movieSrc" ></video>
        </el-card>
    </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import common from "../common.js";

export default {
  name: "detail",
  data() {
    return {
        movieSrc:""
    };
  },
  mounted() {
    this.init();;
  },
  methods: {
    init: function() {
        console.log(this.$route.query.id)
        let id = this.$route.query.id;
        let _self = this;
        axios
            .get(`${common.apiurl}/api/Movie/detail?id=`+ id)
            .then(function(response) {
                console.log(response.data)
            var apiData = response.data.content;
            _self.$data.movieSrc = apiData.source;
            //debugger;

            })
            .catch(function(error) {
            console.log(error);
            });
            console.log(this.movieSrc);
    }
  }
};
</script>