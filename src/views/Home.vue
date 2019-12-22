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
          <img src="../assets/images/home/home_about.jpg" alt="" srcset="" />
        </div>
      </div>

      <!-- 产品系列、运营板块 -->
      <div class="intro">
        <div class="intro-wrapper">
          <div class="tab">
            <div
              :class="['tab-item', { active: currentTab === 1 }]"
              @click="onClickTab(1)"
            >
              <p class="tab-item-title">产品系列</p>
              <p class="tab-item-tips">Product service</p>
            </div>
            <div
              class="tab-item"
              :class="['tab-item', { active: currentTab === 2 }]"
              @click="onClickTab(2)"
            >
              <p class="tab-item-title">运营板块</p>
              <p class="tab-item-tips">Product service</p>
            </div>
          </div>
          <div class="content">
            <div
              v-show="currentTab === 1"
              class="swiper-container"
              id="IntroContentSwiper1"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a
                    href="#"
                    class="slide-item"
                    v-for="item in IntroContentList1"
                    v-bind:key="item.id"
                  >
                    <div class="item-img">
                      <img :src="item.imgPath" alt="" srcset="" />
                    </div>
                    <div class="item-wrapper">
                      <p class="item-wrap-title">{{ item.title }}</p>
                      <p class="item-wrap-tips">{{ item.tips }}</p>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="#"
                    class="slide-item"
                    v-for="item in IntroContentList1"
                    v-bind:key="item.id"
                  >
                    <div class="item-img">
                      <img :src="item.imgPath" alt="" srcset="" />
                    </div>
                    <div class="item-wrapper">
                      <p class="item-wrap-title">{{ item.title }}</p>
                      <p class="item-wrap-tips">{{ item.tips }}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="swiper-pagination"
                id="IntroContentSwiper1-pagination"
              ></div>
            </div>

            <!-- 运营板块的swiper -->
            <div
              v-show="currentTab === 2"
              class="swiper-container"
              id="IntroContentSwiper2"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a
                    href="#"
                    class="slide-item"
                    v-for="item in IntroContentList1"
                    v-bind:key="item.id"
                  >
                    <div class="item-img">
                      <img :src="item.imgPath" alt="" srcset="" />
                    </div>
                    <div class="item-wrapper">
                      <p class="item-wrap-title">{{ item.title }}</p>
                      <p class="item-wrap-tips">{{ item.tips }}</p>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="#"
                    class="slide-item"
                    v-for="item in IntroContentList1"
                    v-bind:key="item.id"
                  >
                    <div class="item-img">
                      <img :src="item.imgPath" alt="" srcset="" />
                    </div>
                    <div class="item-wrapper">
                      <p class="item-wrap-title">{{ item.title }}</p>
                      <p class="item-wrap-tips">{{ item.tips }}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="swiper-pagination"
                id="IntroContentSwiper2-pagination"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 生态基地 -->
      <div class="ecologic center">
        <div class="ecologic-wrap">
          <div class="ew-info">
            <div class="ew-info-title">
              <p>生态基地</p>
              <span>production base</span>
            </div>
            <p class="ew-info-content">
              中国时代远望科技有限公司成立于2003年11月，是中国航天时代电子公司的全
              资子公司。2003年6月，中国航天时代电子公司（简称时代电子公司）成立，为整合系统资源，增强名用产品市场竞争力，将航天一院的愿望科技集团公司及其所属企业所属公司...
            </p>
          </div>
          <div class="ew-img">
            <img src="../assets/images/home/home_ew.jpg" alt="" />
          </div>
        </div>
      </div>

      <div class="media center">
        <div class="media-wrap">
          <div class="mw-top">
            <div class="mw-top-title">
              <p>新闻媒体</p>
              <span>News media</span>
            </div>
            <ul class="mw-top-list">
              <li v-for="media in MediaList" v-bind:key="media.name">
                {{ media.name }}
              </li>
            </ul>
          </div>
          <div class="mw-content">
            <ul class="mw-ct-list">
              <li v-for="media in MediaContentList" v-bind:key="media.id">
                <img class="list-img" :src="media.img" alt="" srcset="" />
                <div class="list-content">
                  <p class="title">{{ media.title }}</p>
                  <p class="content">{{ media.content }}</p>
                </div>
                <div class="list-more">more</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="more">
        <a href="">MORE</a>
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

const IntroContentList1 = [
  {
    id: 1,
    imgPath: require("assets/images/home/itr1.jpg"),
    title: "海神系列",
    tips: "Poseidon series"
  },
  {
    id: 2,
    imgPath: require("assets/images/home/itr2.jpg"),
    title: "牡丹系列",
    tips: "Peony series"
  },
  {
    id: 3,
    imgPath: require("assets/images/home/itr3.jpg"),
    title: "有机食材",
    tips: "Organic food"
  },
  {
    id: 4,
    imgPath: require("assets/images/home/itr4.jpg"),
    title: "有机食材2",
    tips: "Organic food"
  }
];
const IntroContentList2 = IntroContentList1;

const MediaList = [
  {
    name: "全部",
    link: ""
  },
  {
    name: "公司活动",
    link: ""
  },
  {
    name: "企业快讯",
    link: ""
  },
  {
    name: "媒体报道",
    link: ""
  },
  {
    name: "更多",
    link: ""
  }
];

const MediaContentList = [
  {
    id: 1,
    img: require("assets/images/home/itr1.jpg"),
    title: "美国国会众议院通过涉疆法案 中方八连击",
    content:
      "全国人大外事委员会、全国政协外事委员会、外交部、 国家反恐办、国家民委4日陆续发声。",
    link: ""
  },
  {
    id: 2,
    img: require("assets/images/home/itr1.jpg"),
    title: "美国国会众议院通过涉疆法案 中方八连击",
    content:
      "全国人大外事委员会、全国政协外事委员会、外交部、 国家反恐办、国家民委4日陆续发声。",
    link: ""
  },
  {
    id: 3,
    img: require("assets/images/home/itr1.jpg"),
    title: "美国国会众议院通过涉疆法案 中方八连击",
    content:
      "全国人大外事委员会、全国政协外事委员会、外交部、 国家反恐办、国家民委4日陆续发声。",
    link: ""
  }
];

export default {
  name: "home",
  components: {},
  data: function() {
    return {
      imagesList,
      MediaList,
      MediaContentList,
      galleryThumbs: null,
      galleryTop: null,
      IntroContentSwiper1: null,
      IntroContentSwiper2: null,
      IntroContentList1,
      IntroContentList2,
      currentTab: 1
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
    this.onClickTab(this.currentTab);
  },
  methods: {
    onClickTab(index) {
      this.currentTab = index;
      this.$nextTick().then(() => {
        if (index === 1) {
          this.IntroContentSwiper1 = new Swiper("#IntroContentSwiper1", {
            pagination: {
              el: "#IntroContentSwiper1-pagination"
            }
          });
        } else {
          this.IntroContentSwiper2 = new Swiper("#IntroContentSwiper2", {
            pagination: {
              el: "#IntroContentSwiper2-pagination"
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less">
@green: #038a03;
@tips: #8d8c8c;

// @import "assets/css/color.less";

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-warper {
  position: relative;
  width: 100%;
  height: 550px;
  text-align: center;

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
    padding: 77px 0 80px 0;

    .about {
      max-width: 1171px;
      min-width: 1171px;
      margin: 0 auto;
      overflow: hidden;
      margin-bottom: 80px;
      .about-info {
        display: inline-block;
        text-align: left;
        width: 608px;
        .about-info-title {
          margin-bottom: 90px;
          .info-main {
            font-size: 24px;
            color: @green;
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
              background: @green;
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
              border-color: @green;
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

    .intro {
      padding: 80px 0 77px 0;
      background-color: #f8f8f8;
    }
    .intro-wrapper {
      max-width: 1171px;
      min-width: 1171px;
      margin: 0 auto;

      .tab {
        margin-bottom: 36px;
      }
      .tab-item {
        line-height: 1;
        display: inline-block;
        width: 115px;
        margin-right: 55px;
        cursor: pointer;
        &.active {
          .tab-item-title {
            color: @green;
          }
        }
      }
      .tab-item-title {
        font-size: 26px;
        color: #333333;

        padding-bottom: 8px;
      }
      .tab-item-tips {
        font-size: 16px;
        color: #8d8c8c;
      }
      .content {
        width: 100%;
        height: 340px;

        .swiper-container {
          height: 340px;
        }
        .swiper-wrapper {
          height: 282px;
        }
        .swiper-pagination {
          bottom: 0;
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            border: 2px solid @green;
            border-radius: 50%;
            background: transparent;
            box-sizing: border-box;
          }
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: transparent;

          display: flex;
        }
        .slide-item {
          position: relative;
          margin-right: 10px;
          transition: all 0.36s ease;
          // animation-delay: 0s;
          // visibility: visible;
          // animation-name: fadeInUp;

          &:last-child {
            margin-right: 0;
          }
          .item-img {
            overflow: hidden;

            img {
              transition: all 0.36s ease;
              width: 284px;
              height: 194px;
            }
          }
          .item-wrapper {
            text-align: left;
            padding: 16px 0 0 30px;
            line-height: 1;
            transition: all 0.36s ease;

            .item-wrap-title {
              font-size: 16px;
              color: #333333;
              margin-bottom: 12px;
            }
            .item-wrap-tips {
              font-size: 16px;
              color: #8d8c8c;
            }
          }
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 30%;
            opacity: 0;
            height: 2px;
            left: 0;
            right: 0;
            margin: auto;
            background: @green;
            transition: all 0.36s ease-out;
          }

          &:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            .item-img {
              img {
                transform: scale(1.08);
              }
            }
            .item-wrapper {
              padding-left: 36px;
            }
            &::after {
              opacity: 1;
              width: 100%;
            }
          }
        }
      }
    }

    .ecologic {
      padding: 63px 0 127px 0;
      .ecologic-wrap {
        position: relative;
        .ew-info {
          width: 842px;
          height: 387px;
          background-color: @green;
          padding: 102px 0 0 76px;
          box-sizing: border-box;
          color: #ffffff;

          .ew-info-title {
            padding: 0 0 16px 0;
            p {
              font-size: 18px;
            }
            span {
              display: block;
              font-size: 16px;
            }
          }
          .ew-info-content {
            max-width: 490px;
            font-size: 14px;
            line-height: 21px;
          }
        }
        .ew-img {
          width: 524px;
          height: 294px;
          display: inline-block;
          position: absolute;
          top: 45px;
          right: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .media-wrap {
      overflow: hidden;
      .mw-top {
        margin-bottom: 57px;
        .mw-top-title {
          display: inline-block;
          p {
            font: 24px;
          }
          span {
            display: block;
            font: 14px;
            color: #8d8c8c;
          }
        }
        .mw-top-list {
          float: right;
          li {
            cursor: pointer;
            font-size: 14px;
            line-height: 33px;
            text-align: center;
            margin: 0 0 0 28px;
            &:first-child {
              width: 65px;
              height: 33px;
              background-color: @green;
              color: #fff;
              margin: 0 6px 0 0;
            }
          }
        }
      }
      .mw-content {
        .mw-ct-list {
          li {
            display: inline-block;
            width: 380px;
            margin-right: 15px;
            &:last-child {
              margin-right: 0;
            }
            .list-img {
              width: 100%;
              height: 200px;
            }
            .list-content {
              border-bottom: 1px solid #ebebeb;
              padding: 32px 0 25px 20px;
              .title {
                padding-bottom: 24px;
                font-size: 14px;
                color: #505050;
              }
              .content {
                width: 280px;
                font-size: 12px;
                line-height: 20px;
                color: #868383;
              }
            }
            .list-more {
              position: relative;
              margin: 20px 0 0 20px;
              width: 50px;
              height: 32px;
              border: 1px solid #ebebeb;
              color: #868383;
              font-size: 12px;
              line-height: 32px;
              text-align: center;
              padding-right: 16px;
              &::after {
                content: "";
                // content: "&#xe62d;";
                font-family: "iconfont" !important;
                font-style: normal;
                width: 10px;
                height: 10px;
                position: absolute;
                top: 0;
                right: 0;
              }
            }
          }
        }
      }
    }

    .more {
      margin-top: 90px;
      text-align: center;
      a {
        display: inline-block;
        width: 202px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #eeeeee;
      }
    }
  }
}
</style>
