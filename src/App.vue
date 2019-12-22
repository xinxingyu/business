<template>
  <div id="app">
    <HeaderBox></HeaderBox>
    <router-view />
    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeaderBox from "components/HeaderBox";
import FooterBox from "components/FooterBox";

export default {
  name: "APP",
  components: {
    HeaderBox,
    FooterBox
  },
  methods: {}
};
</script>

<style lang="less">
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
}
body {
  margin: 0 auto;
  padding: 0;
  font: 16px Arial, "微软雅黑";
}
ul,
li,
p {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #999;
  text-decoration: none;
}

.center {
  max-width: 1171px;
  min-width: 1171px;
  margin: 0 auto;
}
</style>
