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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 auto;
  padding: 0;
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
  margin: 0 10px;
}
a {
  text-decoration: none;
}
</style>
