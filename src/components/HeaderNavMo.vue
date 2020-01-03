<template>
  <div>
    <transition name="slide-fade">
      <nav v-if="show" class="mo-nav">
        <ul class="nav-container">
          <li
            class="nav-li"
            v-for="item in navList"
            v-bind:key="item.name"
            @click="onClickNav()"
          >
            <router-link class="nav-li-router" :to="{ path: item.link }">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
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
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navList: NAVLIST
    };
  },
  computed: {
    show() {
      return this.isShow;
    }
  },
  mounted() {},
  methods: {
    onClickNav() {
      this.$store.dispatch("handleMenuStatus", {
        status: false
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mo-nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80%;
  min-width: 140px;
  max-width: 440px;
  background: #f3f3f3;
  color: rgba(0, 0, 0, 0.7);

  .nav-container {
    padding-top: 40px;
    font-size: 14px;
    .nav-li {
      display: block;
      .nav-li-router {
        position: relative;

        display: block;
        white-space: nowrap;
        overflow: hidden;
        line-height: 20px;
        padding: 14px 10px 14px 26px;
        border-bottom: 1px solid #e5e5e5;
      }
    }
    .router-link-exact-active {
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 2px;
        background: #038a03;
      }
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s ease 0s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>
