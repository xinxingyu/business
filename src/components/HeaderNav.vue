<template>
  <ul class="header-nav nav-container">
    <li class="nav-li" v-for="item in navList" v-bind:key="item.name">
      <router-link class="nav-li-router" :to="{ path: item.link }">{{
        item.name
      }}</router-link>
    </li>
  </ul>
</template>

<script>
const NAVLIST = [
  {
    name: "首页",
    link: "home"
  },
  {
    name: "企业介绍",
    link: "intro"
  },
  {
    name: "产品服务",
    link: "product"
  },
  {
    name: "生态基地",
    link: "ecology"
  },
  {
    name: "新闻媒体",
    link: "media"
  },
  {
    name: "联系我们",
    link: "about"
  }
];

export default {
  name: "HeaderNav",
  props: {
    msg: String
  },
  data() {
    return {
      navList: NAVLIST
    };
  }
};
</script>

<style lang="less">
.header-nav {
  text-align: center;
  float: right;
  height: 88px;
  font-size: 16rpx;

  .nav-container {
  }
  .nav-li {
    display: inline-block;
    width: 94px;
    height: 100%;
    vertical-align: middle;
    margin: 0;

    .nav-li-router {
      position: relative;
      display: inline-block;
      height: 100%;
      width: 100%;
      text-decoration: none;
      line-height: 88px;
      color: #595959;
    }
  }
}
.router-link-exact-active {
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: #038a03;
  }
}
.router-link-active:before {
}
</style>
