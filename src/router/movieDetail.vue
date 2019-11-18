<template>
        <transition name="slide">
    <div id="el-movieDetail">
        <video :src="detailData.source" controls="controls"></video>
    </div>
        </transition>

</template>
<script>

import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import common from "../common.js";

export default {
    name : "el-movieDetail",
    data() {
        return {
            detailData: {}
        };
    },
    mounted(){
        this.init();
    },
    methods: {
        init: function () {
            let _self = this;
            let id = this.$route.query.Id
            axios.get(`${common.apiurl}/api/Movie/Detail?Id=${id}`)
                .then(function(response) {
                //debugger;

                console.log(response);

                var detail = response.data.content;

                _self.$data.detailData = detail;
                })
                .catch(function(error) {
                console.log(error);
                });
        }
    }
}
</script>
