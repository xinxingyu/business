<template>
  <div class="home">
    <div class="swiper-warper">
      <!-- Swiper -->
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="item in imagesList"
            v-bind:key="item.index"
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
    <div class="main">
      <div class="about">
        <div class="about-info">
          <div class="about-info-title">
            <p class="info-main">关于我们</p>
            <p class="info-tips">About us</p>
          </div>
          <div class="about-info-content">
            <p class="info-main">中泰高科控股集团股份有限公司</p>
            <p class="info-tips">
              集团由中国知名金融师马岩松于1987年建立，是一所以东方自然体验为基础和出发点进行设计的国际建筑事务所。近年围绕“山水城市”这一核心设计哲学，MAD期望通过创新建筑创造社会和人们之间的平衡年，通过竞赛赢得卢卡斯叙事艺术博物馆设计权
              ...
            </p>
            <p class="info-more">
              <a href="www.baidu.com">MORE</a>
            </p>
          </div>
        </div>
        <div class="about-img">
          <img src="../assets/images/home_about.jpg" alt="" srcset="" />
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
const imagesList = [
  {
    index: 0,
    path: require("assets/images/home_bg.jpg")
  },
  {
    index: 1,
    path:
      "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg"
  },
  {
    index: 2,
    path:
      "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg"
  },
  {
    index: 3,
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
  text-align: center;

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
.home {
  .main {
    max-width: 1171px;
    min-width: 1171px;
    margin: 0 auto;
    padding: 77px 0 80px 0;

    .about {
      overflow: hidden;
      .about-info {
        display: inline-block;
        text-align: left;
        width: 608px;
        .about-info-title {
          margin-bottom: 90px;
          .info-main {
            font-size: 24px;
            color: #038a03;
            line-height: 1;
          }
          .info-tips {
            font-size: 14px;
            color: #8d8c8c;
          }
        }
        .about-info-content {
          .info-main {
            font-size: 18px;
            color: #3f3f3f;
            margin-bottom: 36px;
          }
          .info-tips {
            font-size: 14px;
            color: #5f5e5e;
          }
        }
        .info-more {
          a {
            position: relative;
            z-index: 1;
            display: inline-block;
            margin-top: 48px;
            width: 150px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            border: 1px solid #d7d7d7;
            box-sizing: border-box;
            background: 0 0;
            transition: all 0.36s ease;
            &::before {
              content: "";
              position: absolute;
              height: 100%;
              width: 0;
              left: 0;
              top: 0;
              z-index: -1;
              background: #038a03;
              transition: all 0.36s ease;
            }
            &::after {
              content: "";
              content: "\e909";
              transition: all 0.36s ease;
              font-family: icomoon;
              // speak: none;
              font-style: normal;
              font-weight: 400;
              font-variant: normal;
              text-transform: none;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              position: absolute;
              left: 50%;
              color: transparent;
              line-height: 40px;
            }
            &:hover {
              border-color: #038a03;
              color: #fff;

              padding-right: 20px;
              &::before {
                width: 100%;
              }
              &::after {
                color: #fff;
                left: 64%;
              }
            }
          }
        }
      }

      .about-img {
        float: right;
        margin-top: 27px;
        padding: 7px;
        background-color: #f8f8f8;

        img {
          width: 390px;
          height: 250px;
          background: #feffff;
          padding: 5px;
        }
      }
    }
  }
}
</style>
