<template>
  <div class="footer-box">
    <div class="content">
      <div class="ct-top">
        <p class="title">联系我们</p>
        <p class="tips">Contact Us</p>
      </div>
      <div class="ct-center">
        <div class="ct-center-main">
          <p class="title">中国时代远望科技有限公司</p>
          <p v-for="cpi in componyIntro" v-bind:key="cpi.key" class="tips">
            {{ cpi.key }}：{{ cpi.value }}
          </p>
        </div>
        <div class="ct-center-list"></div>
      </div>
      <div class="ct-other"></div>
      <div class="ct-tip"></div>
    </div>
  </div>
</template>

<script>
const componyIntro = [
  {
    key: "地址",
    value: "北京市建外SOHO东区2号楼"
  },
  {
    key: "邮编",
    value: "100000"
  },
  {
    key: "电话",
    value: "010-88491188"
  },
  {
    key: "手机",
    value: "010-88490025"
  },
  {
    key: "传真",
    value: "----"
  },
  {
    key: "邮箱",
    value: "---"
  }
];
export default {
  name: "FooterBox",
  data() {
    return {
      componyIntro
    };
  }
};
</script>

<style lang="less">
.footer-box {
  width: 100%;
  height: 514px;
  background-color: #3e3e3e;

  .content {
    max-width: 1171px;
    margin: 0 auto;
    height: 100%;
    text-align: left;
  }
  .title {
    display: inline-block;
    color: #ffffff;
    line-height: 1;
  }
  .tips {
    display: inline-block;
    color: #acacac;
    line-height: 1;
  }

  .ct-top {
    padding-top: 77px;
    padding-bottom: 75px;
    .title {
      font-size: 24px;
      margin-right: 11px;
    }
  }

  .ct-center {
    .ct-center-main {
      .title {
        font-size: 16px;
      }
      .tips {
        display: block;
      }
    }
  }
}
</style>
