<template>
  <div class="header">
    <div class="header-logo">
      <img src="../assets/logo.png" alt="" srcset="" />
    </div>
    <HeaderNav></HeaderNav>
  </div>
</template>
<script>
import HeaderNav from "components/HeaderNav";
export default {
  name: "HeaderBox",
  props: {
    msg: String
  },
  components: { HeaderNav },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  // width: 100%;
  height: 88px;
  max-width: 1171px;
  margin: 0 auto;
  // text-align: left;

  .header-logo {
    width: 244px;
    height: 59px;

    display: block;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
</style>
