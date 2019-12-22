<template>
  <nav v-show="isOpen" class="mo-nav">aaaa</nav>
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
  props: {},
  data() {
    return {
      navList: NAVLIST,
      isOpen: false
    };
  },
  mounted() {
    // console.log(222222);
  },
  methods: {
    clickMenu() {
      this.isOpen = !this.isOpen;
      this.$EventBus.$emit("openMenu", this.isOpen);
    }
  }
};
</script>

<style lang="less" scoped></style>
