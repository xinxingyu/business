<template>
  <div class="about">
    <div
      class="header"
      :style="{ backgroundImage: 'url(' + headerBg + ')' }"
    ></div>
    <div class="title center">
      <p>联系我们</p>
      <span>Contace us</span>
    </div>
    <div class="content center">
      <div class="content-info">
        <div class="info-title">
          <p>百瑞众康文化传播有限公司</p>
          <span>Beijing WEBSITE Culture Communication Co. Ltd.</span>
        </div>
        <div class="info-content">
          <p v-for="item in info" v-bind:key="item.key">
            {{ item.key }}：{{ item.value }}
          </p>
          <a href="https://www.....com">https://www.....com</a>
        </div>
      </div>
      <ul class="content-list">
        <li>
          <AnimateBox style="display: inline-block;"
            ><img src="../assets/images/ma.jpg" alt=""
          /></AnimateBox>
        </li>
        <li>
          <AnimateBox :delayTime="1" style="display: inline-block;">
            <img src="../assets/images/ma.jpg" alt=""
          /></AnimateBox>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AnimateBox from "components/AnimateBox.vue";

const headerBg = require("assets/images/home_bg.jpg");
const info = [
  {
    key: "总部地址",
    value: "xxxxx"
  },
  {
    key: "总部电话",
    value: "xxxxx"
  },
  {
    key: "电子邮箱",
    value: "xxxxx"
  },
  {
    key: "邮政编码",
    value: "xxxxx"
  }
];

export default {
  name: "about",
  components: { AnimateBox },
  data: function() {
    return {
      info,
      headerBg
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
@green: #038a03;
@tips: #8d8c8c;
@title: #525252;
.gary {
  background-color: #f8f8f8;
}
.about {
  .header {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .title {
    margin-top: 82px;
    text-align: center;

    p {
      font-size: 24px;
      color: @green;
    }
    span {
      margin-top: 5px;
      display: block;
      font-size: 14px;
      color: @tips;
    }
  }
  .content {
    padding: 90px 0;
    .content-info {
      display: inline-block;
      .info-title {
        p {
          font-weight: 600;
          font-size: 18px;
          color: #242424;
        }
        span {
          display: inline-block;
          padding-top: 14px;
          font-size: 14px;
          color: #666666;
        }
      }
      .info-content {
        margin-top: 40px;
        font-size: 14px;
        color: #666666;
        p {
          line-height: 1;
          padding-bottom: 16px;
        }
      }
    }
    .content-list {
      display: inline-block;
      margin-left: 60px;

      li {
        display: inline-block;
        margin-left: 150px;
        img {
          width: 229px;
          height: 226px;
        }
      }
    }
  }
}
</style>
