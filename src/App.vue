<template>
  <div id="app" :class="{ mb: isMobile }">
    <div :class="[isOpen ? 'app-slideout' : 'app-slidein', 'app-main']">
      <div v-if="!isMobile">
        <HeaderNav></HeaderNav>
      </div>
      <HeaderMo v-else />
      <!-- main content -->
      <div class="main-box">
        <router-view />
        <template v-if="!isMobile">
          <FooterBox></FooterBox>
        </template>
        <template v-else>
          <FooterBoxMo></FooterBoxMo>
        </template>
      </div>
    </div>
    <!-- mobile navagation -->
    <!-- :class="[!isOpen ? 'monav-slideout' : 'monav-slidein', 'app-main']" -->

    <HeaderNavMo :isShow="isOpen" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import FooterBox from "components/FooterBox";
import FooterBoxMo from "components/FooterBoxMo";
import HeaderNavMo from "components/HeaderNavMo";
import HeaderNav from "components/HeaderNav";
import HeaderMo from "components/HeaderMo";

let isMobile = false;
if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
  //移动端
  isMobile = true;
}
export default {
  name: "APP",
  components: {
    HeaderNav,
    HeaderMo,
    FooterBox,
    FooterBoxMo,
    HeaderNavMo
  },
  data() {
    return {
      isMobile
    };
  },
  provide() {
    return {
      isMobile
    };
  },
  computed: mapState({
    isOpen: state => state.isOpen
  }),
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
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
.ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
}
.app-slideout {
  transform: translate3d(80%, 0, 0);
  transition: transform 0.25s ease 0s;
}
.app-slidein {
  transform: translate3d(0, 0, 0);
  transition: transform 0.25s ease 0s;
}

.monav-slideout {
  transform: translate3d(-80%, 0, 0);
  transition: transform 0.25s ease 0s;
}
.monav-slidein {
  transform: translate3d(0, 0, 0);
  transition: transform 0.25s ease 0s;
}

.fadeInUp {
  visibility: visible;
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(15%);
    transform: translateY(15%);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
// 兼容
html,
body,
.app-main {
  width: 100%;
  height: 100%;
}
#app {
  &.mb {
    width: 100%;
    height: 100%;
    .main-box {
      position: absolute;
      top: 50px;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
}
@media screen and (max-width: 1070px) {
  .center {
    width: 90%;
    max-width: 90%;
    min-width: 90%;
  }
}
</style>
