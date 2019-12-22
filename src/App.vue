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
        <FooterBox></FooterBox>
      </div>
    </div>
    <!-- mobile navagation -->
    <template v-show="isOpen">
      <HeaderNavMo />
    </template>
  </div>
</template>

<script>
import FooterBox from "components/FooterBox";
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
    HeaderNavMo
  },
  data() {
    return {
      isOpen: false,
      isMobile
    };
  },
  provide() {
    return {
      isMobile
    };
  },
  mounted() {
    this.$EventBus.$on("openMenu", open => {
      this.moveBody(open);
    });
  },
  methods: {
    moveBody(open) {
      this.isOpen = open;
    }
  }
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
.app-slideout {
  transform: translate3d(80%, 0, 0);
  transition: transform 0.25s ease 0s;
}
.app-slidein {
  transform: translate3d(0, 0, 0);
  transition: transform 0.25s ease 0s;
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
</style>
