<template>
  <div class="home">
    <div class="swiper-warper">
      <!-- Swiper -->
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="item in imagesList"
            v-bind:key="item.path"
            :style="{ backgroundImage: 'url(' + item.path + ')' }"
          ></div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-disable"></div>
        <div class="swiper-button-prev swiper-button-disable"></div>
      </div>
      <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide thumbs1">
            <p class="thumbs-title">红孩儿有机厨房</p>
            <p class="thumbs-eng">Red Baby Organic Kitchen</p>
          </div>
          <div class="swiper-slide thumbs2">
            <p class="thumbs-title">美时美景旅行社</p>
            <p class="thumbs-eng">Meishi Meimei travel agency</p>
          </div>
          <div class="swiper-slide thumbs3">
            <p class="thumbs-title">元素力量健身会所</p>
            <p class="thumbs-eng">Element strength fitness club</p>
          </div>
          <div class="swiper-slide thumbs4">
            <p class="thumbs-title">逸养 · 生态家</p>
            <p class="thumbs-eng">Ecological home</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
const imagesList = [
  {
    path: require("assets/images/home_bg.jpg")
  },
  {
    path:
      "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg"
  },
  {
    path:
      "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg"
  },
  {
    path:
      "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg"
  }
];
export default {
  name: "home",
  components: {},
  data: function() {
    return {
      imagesList,
      galleryThumbs: null,
      galleryTop: null
    };
  },
  mounted() {
    this.galleryThumbs = new Swiper(".gallery-thumbs", {
      direction: "vertical",
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    this.galleryTop = new Swiper(".gallery-top", {
      direction: "vertical",
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: this.galleryThumbs
      }
    });
  }
};
</script>
<style lang="less">
.swiper-warper {
  position: relative;
  width: 100%;
  height: 550px;

  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .swiper-button-disable {
    display: none;
  }
  .gallery-top {
    height: 100%;
    width: 100%;
  }

  .gallery-thumbs {
    position: absolute;
    top: 50%;
    right: 100px;
    transform: translate(0, -50%);
    width: 300px;
    height: 400px;
    box-sizing: border-box;

    .swiper-slide {
      cursor: pointer;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      padding-top: 24px;
      box-sizing: border-box;
    }
    .swiper-slide-thumb-active {
      opacity: 1;
    }
    .thumbs-title {
      font-size: 32px;
      color: #fff;
    }
    .thumbs-eng {
      font-size: 16px;
      color: #fff;
    }
    .thumbs1 {
      background-color: #4731fa;
    }
    .thumbs2 {
      background-color: #4fabf1;
    }
    .thumbs3 {
      background-color: #65c573;
    }
    .thumbs4 {
      background-color: #ff6e73;
    }
  }
}
</style>
