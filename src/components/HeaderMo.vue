<template>
  <div class="nav-mo">
    <div :class="['nav-mo-lc', { open: isOpen }]" @click="clickMenu">
      <div class="lcbody">
        <div class="lcitem top"><div class="rect top"></div></div>
        <div class="lcitem bottom"><div class="rect bottom"></div></div>
      </div>
    </div>

    <div class="mo-logo">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderNav",
  props: {},
  data() {
    return {};
  },
  computed: mapState({
    isOpen: state => state.isOpen
  }),
  methods: {
    clickMenu() {
      this.$store.dispatch("handleMenuStatus", {
        status: !this.isOpen
      });
    }
  }
};
</script>

<style lang="less" scoped>
.nav-mo {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  text-align: center;
  z-index: 3;

  font-size: 16px;
  font-weight: 700;
  color: #fff;
  line-height: 50px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 0;

  .nav-mo-lc {
    position: absolute;
    top: 0;
    left: 10px;
    margin: 10px;
    &.open {
      .lcbody {
        transform: translateZ(0) rotate(90deg);
        .lcitem {
          transform: translateZ(0) rotate(45deg);
          transition: transform 0.25s cubic-bezier(0.4, 0.01, 0.165, 0.99) 0s;
          &.bottom {
            transform: translateZ(0) rotate(-45deg);
          }
          .rect {
            transition: transform 0.2s ease 0.2s;
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }
  .lcbody {
    width: 30px;
    height: 30px;
    position: relative;
    transform: translateZ(0) rotate(0);
    transition: transform 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);

    .lcitem {
      position: absolute;
      left: 0;
      top: 0;
      transform: translateZ(0) rotate(0);
      transition: transform 0.25s cubic-bezier(0.4, 0.01, 0.165, 0.99) 0s;
      width: 30px;
      height: 30px;
      .top {
        transform: translate3d(0, -6px, 0);
      }
      .bottom {
        transform: translate3d(0, 6px, 0);
      }
      .rect {
        width: 30px;
        height: 1px;
        background: #999;
        position: absolute;
        left: 0;
        top: 14px;
        transition: transform 0.2s ease 0.2s;
      }
    }
  }
  .mo-logo {
    height: 60%;
    position: relative;
    top: 20%;
    display: inline-block;
    img {
      height: 100%;
      width: auto;
    }
  }
  .mo-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    margin: 0;
  }
}
</style>
