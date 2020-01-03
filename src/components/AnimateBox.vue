<template>
  <div
    :class="['ant-box', 'ant-hide', isShow ? 'fadeInUp' : '']"
    :style="{
      'animation-delay': time + 's',
      '-webkit-animation-delay': time + 's'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FooterBox",
  props: {
    delayTime: {
      type: Number || String,
      defalut: 0
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    time() {
      if (~~this.delayTime === 0) return this.delayTime;
      return "0." + this.delayTime;
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    init() {
      window.addEventListener("scroll", this.handleScroll, true);
      this.handleScroll();
    },
    handleScroll() {
      const offset = this.$el.getBoundingClientRect();
      const offsetTop = offset.top;
      const offsetBottom = offset.bottom;
      // const offsetHeight = offset.height;
      // 进入可视区域
      if (
        offsetTop <= window.innerHeight &&
        offsetBottom >= 0 &&
        !this.isShow
      ) {
        this.isShow = true;
        // do something...
      } else {
        // do something...
      }
    }
  }
};
</script>

<style lang="less">
.ant-hide {
  opacity: 0;
}
</style>
