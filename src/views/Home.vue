<template>
  <div class="home">
    <div class="swiper-warper" v-if="!isMobile">
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
          <div
            :class="['swiper-slide', item.class]"
            v-for="item in mainSwiperSlide"
            v-bind:key="item.id"
          >
            <p class="thumbs-title">{{ item.name }}</p>
            <p class="thumbs-eng">{{ item.tips }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mo-swipe">
      <van-swipe
        indicator-color="#333"
        @change="onChangeVanSwipe"
        ref="vantSwiper"
      >
        <van-swipe-item v-for="item in imagesList" v-bind:key="item.index">
          <div
            class="mo-swipe-img"
            :style="{ backgroundImage: 'url(' + item.path + ')' }"
          ></div>
        </van-swipe-item>

        <div class="custom-indicator" slot="indicator">
          <div
            v-for="(item, index) in vantSwiperSlide"
            v-bind:key="item.id"
            @click="onChangeVantSwipe(index)"
            :class="[
              'indicator-item',
              item.class,
              currentVanSwipe === index ? 'active' : ''
            ]"
          >
            <p class="thumbs-title">{{ item.name }}</p>
            <p class="thumbs-eng">{{ item.tips }}</p>
          </div>
        </div>
      </van-swipe>
    </div>

    <div class="main">
      <AnimateBox>
        <div class="about">
          <div class="about-info">
            <div class="about-info-title">
              <p class="info-main">关于我们</p>
              <p class="info-tips">About us</p>
            </div>
            <div class="about-info-content">
              <p class="info-main">北京百瑞众康农业科技发展股份有限公司</p>
              <p class="info-tips">
                百瑞众康股份创立于2010年，总部设立在北京，是一家以现代农业为核心，集研发、生产、销售、服务于一体的集团化企业。围绕亿万家庭‘衣、食、住、行、医、运动’健康品质生活，汇聚有机农产品、家居微环境改善、旅游康养、科学健养于一体，构建的跨行业整合、全域智慧型健康生态圈。
              </p>
              <p class="info-more">
                <router-link
                  :to="{
                    path: '/media'
                  }"
                  >MORE</router-link
                >
              </p>
            </div>
          </div>
          <div class="about-img">
            <img src="../assets/images/home2/home_about.png" alt="" srcset="" />
          </div>
        </div>
      </AnimateBox>

      <!-- 产品系列、运营板块 -->
      <div class="intro">
        <div class="intro-wrapper" v-if="!isMobile">
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
                    v-for="(item, index) in IntroContentList1"
                    v-bind:key="item.id"
                  >
                    <AnimateBox
                      :delayTime="index + 1"
                      style="display: inline-block;"
                    >
                      <div class="item-img">
                        <img :src="item.imgPath" alt="" srcset="" />
                      </div>
                      <div class="item-wrapper">
                        <p class="item-wrap-title">{{ item.title }}</p>
                        <p class="item-wrap-tips">{{ item.tips }}</p>
                      </div>
                    </AnimateBox>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="#"
                    class="slide-item"
                    v-for="(item, index) in IntroContentList2"
                    v-bind:key="item.id"
                  >
                    <AnimateBox
                      :delayTime="index + 1"
                      style="display: inline-block;"
                    >
                      <div class="item-img">
                        <img :src="item.imgPath" alt="" srcset="" />
                      </div>
                      <div class="item-wrapper">
                        <p class="item-wrap-title">{{ item.title }}</p>
                        <p class="item-wrap-tips">{{ item.tips }}</p>
                      </div>
                    </AnimateBox>
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
                    v-for="(item, index) in IntroContentList1"
                    v-bind:key="item.id"
                  >
                    <AnimateBox
                      :delayTime="index + 1"
                      style="display: inline-block;"
                    >
                      <div class="item-img">
                        <img :src="item.imgPath" alt="" srcset="" />
                      </div>
                      <div class="item-wrapper">
                        <p class="item-wrap-title">{{ item.title }}</p>
                        <p class="item-wrap-tips">{{ item.tips }}</p>
                      </div>
                    </AnimateBox>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="#"
                    class="slide-item"
                    v-for="(item, index) in IntroContentList1"
                    v-bind:key="item.id"
                  >
                    <AnimateBox
                      :delayTime="index + 1"
                      style="display: inline-block;"
                    >
                      <div class="item-img">
                        <img :src="item.imgPath" alt="" srcset="" />
                      </div>
                      <div class="item-wrapper">
                        <p class="item-wrap-title">{{ item.title }}</p>
                        <p class="item-wrap-tips">{{ item.tips }}</p>
                      </div>
                    </AnimateBox>
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
        <div class="intro-van center" v-else>
          <div class="intro-van-ct">
            <p class="title ellipsis">产品系列</p>
            <p class="tips ellipsis">Product service</p>
            <van-swipe indicator-color="#333">
              <van-swipe-item
                v-for="(item, index) in IntroContentList1"
                v-bind:key="item.id"
                ><a href="#" class="intro-van-item">
                  <AnimateBox
                    :delayTime="index + 1"
                    style="display: inline-block;"
                  >
                    <div class="item-img">
                      <img :src="item.imgPath" alt="" srcset="" />
                    </div>
                    <div class="item-wrapper">
                      <p class="item-wrap-title">{{ item.title }}</p>
                      <p class="item-wrap-tips">{{ item.tips }}</p>
                    </div>
                  </AnimateBox>
                </a>
              </van-swipe-item>
            </van-swipe>
          </div>

          <div class="intro-van-ct">
            <p class="title ellipsis">运营板块</p>
            <p class="tips ellipsis">Product service</p>
            <van-swipe indicator-color="#333">
              <van-swipe-item
                v-for="(item, index) in IntroContentList2"
                v-bind:key="item.id"
                ><a href="#" class="intro-van-item">
                  <AnimateBox
                    :delayTime="index + 1"
                    style="display: inline-block;"
                  >
                    <div class="item-img">
                      <img :src="item.imgPath" alt="" srcset="" />
                    </div>
                    <div class="item-wrapper">
                      <p class="item-wrap-title">{{ item.title }}</p>
                      <p class="item-wrap-tips">{{ item.tips }}</p>
                    </div>
                  </AnimateBox>
                </a></van-swipe-item
              >
            </van-swipe>
          </div>
        </div>
      </div>

      <!-- 生态基地 -->
      <AnimateBox>
        <div class="ecologic center">
          <div class="ecologic-wrap">
            <div class="ew-info">
              <div class="ew-info-title">
                <p>生态基地</p>
                <span>production base</span>
              </div>
              <p class="ew-info-content">
                百瑞众康股份践行“服务亿万家庭，打造健康品质生活第一平台”企业愿景，紧紧围绕家庭成员‘衣、食、住、行、医、运动’等生活要素，为全民健康，从食品安全、科学健身运动、旅游康养直至居家微环境改善，构建跨行业整合、全域智慧型健康生态圈，实现人人都畅享健康品质生活的梦想。
              </p>
            </div>
            <div class="ew-img">
              <img src="../assets/images/home2/home_ew.jpg" alt="" />
            </div>
          </div>
        </div>
      </AnimateBox>

      <AnimateBox>
        <div class="media center">
          <div class="media-wrap">
            <div class="mw-top">
              <div class="mw-top-title">
                <p>新闻媒体</p>
                <span>News media</span>
              </div>
              <ul class="mw-top-list" v-if="!isMobile">
                <li
                  v-for="media in MediaList"
                  v-bind:key="media.name"
                  @click="onClickMediaLink(media.link)"
                >
                  {{ media.name }}
                </li>
              </ul>
            </div>
            <div class="mw-content">
              <ul class="mw-ct-list">
                <li
                  v-for="(media, index) in mediaContentList"
                  v-bind:key="media.id"
                >
                  <AnimateBox
                    :delayTime="index + 1"
                    style="display: inline-block;"
                  >
                    <router-link
                      :to="{
                        path: '/media',
                        query: { catid: media.catid, aid: media.id }
                      }"
                    >
                      <img
                        class="list-img"
                        :src="media.thumb"
                        alt=""
                        srcset=""
                      />
                      <div class="list-content">
                        <p class="title">{{ media.title }}</p>
                        <p class="content">{{ media.description }}</p>
                      </div>
                      <div class="list-more">more</div>
                    </router-link>
                  </AnimateBox>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimateBox>

      <div class="more">
        <router-link :to="{ path: '/media' }">MORE</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/js/swiper.min.js";
// import Swiper from "assets/swiper/swiper.min.js";
import AnimateBox from "components/AnimateBox.vue";
import urls from "../utils/urls";

const imagesList = [
  {
    index: 0,
    path: require("assets/images/home2/1.png")
  },
  {
    index: 1,
    path: require("assets/images/home2/2.jpg")
  },
  {
    index: 2,
    path: require("assets/images/home2/3.jpg")
  },
  {
    index: 3,
    path:
      "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg"
  }
];

const mainSwiperSlide = [
  {
    id: 0,
    name: "健身",
    tips: "Fitness Club",
    class: "thumbs1"
  },
  {
    id: 1,
    name: "旅行社",
    tips: "Travel Agency",
    class: "thumbs2"
  },
  {
    id: 2,
    name: "有机厨房",
    tips: "Organic kitchen",
    class: "thumbs3"
  },
  {
    id: 3,
    name: "逸养 · 生态家",
    tips: "Ecological home",
    class: "thumbs4"
  }
];

const IntroContentList1 = [
  {
    id: 1,
    imgPath: require("assets/images/product/2-1.jpg"),
    title: "海神系列",
    tips: "Poseidon series"
  },
  {
    id: 2,
    imgPath: require("assets/images/product/3-1.jpg"),
    title: "牡丹系列",
    tips: "Peony series"
  },
  {
    id: 3,
    imgPath: require("assets/images/product/1-1.jpg"),
    title: "有机食材",
    tips: "Organic food"
  },
  {
    id: 4,
    imgPath: require("assets/images/product/1-2.jpg"),
    title: "有机食材",
    tips: "Organic food"
  }
];
const IntroContentList2 = [
  {
    id: 1,
    imgPath: require("assets/images/product/2-2.jpg"),
    title: "海神系列",
    tips: "Poseidon series"
  },
  {
    id: 2,
    imgPath: require("assets/images/product/3-1.jpg"),
    title: "牡丹系列",
    tips: "Peony series"
  },
  {
    id: 3,
    imgPath: require("assets/images/product/1-3.jpg"),
    title: "有机食材",
    tips: "Organic food"
  },
  {
    id: 4,
    imgPath: require("assets/images/product/1-4.jpg"),
    title: "有机食材",
    tips: "Organic food"
  }
];

const MediaList = [
  {
    name: "全部",
    link: 0
  },
  {
    name: "公司活动",
    link: 1
  },
  {
    name: "企业快讯",
    link: 2
  },
  {
    name: "媒体报道",
    link: 3
  },
  {
    name: "更多",
    link: 0
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
  components: { AnimateBox },
  data: function() {
    return {
      imagesList,
      mainSwiperSlide,
      vantSwiperSlide: mainSwiperSlide,
      MediaList,
      MediaContentList,
      mediaContentList: [],
      galleryThumbs: null,
      galleryTop: null,
      IntroContentSwiper1: null,
      IntroContentSwiper2: null,
      IntroContentList1,
      IntroContentList2,
      currentTab: 1,
      currentVanSwipe: 0
    };
  },
  inject: ["isMobile"],
  mounted() {
    this.initSwiper();
    this.getData();
    this.getSwiperData();
  },
  methods: {
    onChangeVanSwipe(index) {
      this.currentVanSwipe = index;
    },
    onChangeVantSwipe(index) {
      this.$refs.vantSwiper.swipeTo(index);
    },
    initSwiper() {
      if (!this.isMobile) {
        this.galleryThumbs = new Swiper(".gallery-thumbs", {
          allowTouchMove: !this.isMobile,
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
      }
    },
    onClickTab(index) {
      this.currentTab = index;
      this.$nextTick().then(() => {
        if (index === 1) {
          this.IntroContentSwiper1 = new Swiper("#IntroContentSwiper1", {
            pagination: {
              el: "#IntroContentSwiper1-pagination",
              clickable: true
            }
          });
        } else {
          this.IntroContentSwiper2 = new Swiper("#IntroContentSwiper2", {
            pagination: {
              el: "#IntroContentSwiper2-pagination",
              clickable: true
            }
          });
        }
      });
    },
    onClickMediaLink(link) {
      this.$router.push({ name: "media", params: { tid: link } });
    },
    getData() {
      // this.loading = true;
      this.fetchGet(urls.list, {
        catid: 6
      })
        .then(res => {
          if (res.status === 200) {
            if (res.data) {
              this.mediaContentList = res.data.slice(0, 3);
            }
            // this.loading = false;
          } else {
            // this.mediaInfo = [];
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSwiperData() {
      this.fetchGet(urls.list, {
        catid: 18
      })
        .then(res => {
          if (res.status === 200) {
            if (res.data) {
              console.log("getSwiperData  18 ...", res.data);
            }
            // this.loading = false;
          } else {
            // this.mediaInfo = [];
          }
        })
        .catch(err => {
          console.log(err);
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
      // opacity: 0.4;
      padding-top: 24px;
      box-sizing: border-box;
    }
    .swiper-slide-thumb-active {
      // opacity: 1;
      box-shadow: 0px 0px 6px rgba(255, 255, 255, 1) inset;
    }
    .thumbs-title {
      font-size: 30px;
      color: #fff;
    }
    .thumbs-eng {
      font-size: 14px;
      color: #fff;
    }
    .thumbs1 {
      background-color: rgba(71, 49, 250, 0.75);
    }
    .thumbs2 {
      background-color: rgba(79, 171, 241, 0.75);
    }
    .thumbs3 {
      background-color: rgba(101, 197, 115, 0.75);
    }
    .thumbs4 {
      background-color: rgba(255, 110, 115, 0.75);
    }
  }
}
.mo-swipe {
  position: relative;
  width: 100%;
  text-align: center;
  .van-swipe {
    // height: 100%;
    .van-swipe__track {
      height: 284px;
    }
    .mo-swipe-img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
    .custom-indicator {
      width: 100%;
    }
    .indicator-item {
      padding: 10px 0;
    }
    .thumbs-title {
      font-size: 30px;
      color: #fff;
    }
    .thumbs-eng {
      font-size: 14px;
      color: #fff;
    }
    .thumbs1 {
      background-color: rgba(71, 49, 250, 0.75);
    }
    .thumbs2 {
      background-color: rgba(79, 171, 241, 0.75);
    }
    .thumbs3 {
      background-color: rgba(101, 197, 115, 0.75);
    }
    .thumbs4 {
      background-color: rgba(255, 110, 115, 0.75);
    }
    .active {
      box-shadow: 0px 0px 6px rgba(255, 255, 255, 1) inset;
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
            line-height: 26px;
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
          overflow: hidden;
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
          display: inline-block;
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

    .intro-van {
      .title {
        font-size: 18px;
        color: #333;
        text-align: left;
      }
      .tips {
        padding: 0 0 16px;
        padding-top: 2px;
        color: #b7b7b7;
        text-align: left;
      }
      .intro-van-ct {
        margin-bottom: 40px;
      }
      .intro-van-item {
        .item-wrapper {
          padding: 20px;
          width: calc(100% - 40px);
          display: block;
          text-align: left;
          .item-wrap-title {
            color: #444;
            font-size: 15px;
            transition: all 0.3s ease-out 0s;
            line-height: 20px;
          }
          .item-wrap-tips {
            color: #999;
            font-size: 14px;
            margin-top: 2px;
            transition: all 0.3s ease-out 0s;
            line-height: 14px;
          }
        }
      }
      .van-swipe__indicators {
        bottom: 0px;
      }
      .van-swipe__indicator {
        background-color: #056534;
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
            vertical-align: top;
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
// 兼容
// @media screen and (max-width: 420px) {
@media screen and (max-width: 1070px) {
  // .swiper-warper {
  //   height: auto;
  //   .gallery-top {
  //     height: 280px;
  //   }
  //   .gallery-thumbs {
  //     width: 100%;
  //     position: relative;
  //     top: 0;
  //     right: 0;
  //     transform: translate(0, 0);
  //   }
  // }
  .home {
    .main {
      // padding: 60px 0 20px 0;
      .about {
        width: 90%;
        max-width: 90%;
        min-width: 90%;
        .about-info {
          display: block;
          width: 100%;
          .about-info-title {
            margin-bottom: 20px;
          }
          .about-info-content {
            font-size: 13px;
            line-height: 24px;
            .info-tips {
              color: #999;
            }
          }
        }
        .about-img {
          float: none;
          img {
            width: 100%;
            height: auto;
            box-sizing: border-box;
          }
        }
      }
      .ecologic {
        .ecologic-wrap {
          .ew-info {
            height: 300px;
            width: 100%;
            padding: 10px;
            text-align: center;
          }
          .ew-img {
            position: relative;
            width: 80%;
            height: auto;
            margin: 0 auto;
            display: block;
            top: -45px;
          }
        }
      }
      .intro {
        padding: 40px 0 20px 0;
        .intro-wrapper {
          width: 90%;
          max-width: 90%;
          min-width: 90%;
        }
      }
      .media {
        .media-wrap {
          .mw-content {
            .mw-ct-list {
              li {
                display: block;
                margin-right: 0;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
