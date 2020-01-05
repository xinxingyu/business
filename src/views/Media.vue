<template>
  <div class="media">
    <div
      class="header"
      :style="{ backgroundImage: 'url(' + headerBg + ')' }"
    ></div>
    <div class="intro-container center">
      <div class="intro-container-header">
        <div class="intro-container-title">
          <p>新闻媒体</p>
          <span>introdution</span>
        </div>
        <div class="intro-container-text">
          <span>您的位置：</span><span @click="routerTo('/home')">首页</span> >
          <span @click="routerTo('/media')"> 新闻媒体 </span>
          <span v-show="id"> > 详情</span>
        </div>
      </div>
      <div class="intro-container-box">
        <div class="tab">
          <div
            :class="['tab-item', { active: currentTab === 1 }]"
            @click="onClickTab(1)"
          >
            <p class="tab-item-title">公司活动</p>
          </div>
          <div
            class="tab-item"
            :class="['tab-item', { active: currentTab === 2 }]"
            @click="onClickTab(2)"
          >
            <p class="tab-item-title">企业快讯</p>
          </div>
          <div
            class="tab-item"
            :class="['tab-item', { active: currentTab === 3 }]"
            @click="onClickTab(3)"
          >
            <p class="tab-item-title">媒体报道</p>
          </div>
        </div>
        <div class="content">
          <div v-show="currentTab === 1">
            <ul class="media-ul" v-show="!isShowDetail">
              <li
                v-for="item in mediaInfo"
                v-bind:key="item.id"
                class="media-ul-item"
              >
                <AnimateBox class="antbox">
                  <dl @click="routerTo('/media', { id: 2222 })">
                    <dt>
                      <img :src="item.headImg" alt="" />
                    </dt>
                    <dd>
                      <span class="item-title">{{ item.title }}</span>
                      <span class="item-time">{{ item.time }}</span>
                      <span class="item-content">{{ item.content }}</span>
                      <span class="item-more">详情</span>
                    </dd>
                  </dl>
                </AnimateBox>
              </li>
            </ul>
            <div class="media-detail" v-show="isShowDetail">
              <span class="tab-title">公司简介</span>
              <p>
                PH是一种布宜诺斯艾利斯典型的住宅类型，这种住宅以高密度和低楼层著称。
                项目是一个长期规划的收尾性空间，PH Lavallej
              </p>
              <p>
                中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。
              </p>
              <p>
                中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。
              </p>
            </div>
          </div>
          <div v-show="currentTab === 2">
            <ul class="media-ul" v-show="!isShowDetail">
              <li v-for="item in mediaInfo2" v-bind:key="item.id">
                <AnimateBox class="antbox">
                  <dl @click="routerTo('/media', { id: 2222 })">
                    <dt>
                      <img :src="item.headImg" alt="" />
                    </dt>
                    <dd>
                      <span class="item-title">{{ item.title }}</span>
                      <span class="item-time">{{ item.time }}</span>
                      <span class="item-content">{{ item.content }}</span>
                      <span class="item-more">详情</span>
                    </dd>
                  </dl>
                </AnimateBox>
              </li>
            </ul>
            <div class="media-detail" v-show="isShowDetail">
              <span class="tab-title">公司简介</span>
              <p>
                PH是一种布宜诺斯艾利斯典型的住宅类型，这种住宅以高密度和低楼层著称。
                项目是一个长期规划的收尾性空间，PH Lavallej
              </p>
              <p>
                中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。
              </p>
              <p>
                中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。
              </p>
            </div>
          </div>
          <div v-show="currentTab === 3">
            <ul class="media-ul" v-show="!isShowDetail">
              <li v-for="item in mediaInfo3" v-bind:key="item.id">
                <AnimateBox class="antbox">
                  <dl @click="routerTo('/media', { id: 2222 })">
                    <dt>
                      <img :src="item.headImg" alt="" />
                    </dt>
                    <dd>
                      <span class="item-title">{{ item.title }}</span>
                      <span class="item-time">{{ item.time }}</span>
                      <span class="item-content">{{ item.content }}</span>
                      <span class="item-more">详情</span>
                    </dd>
                  </dl>
                </AnimateBox>
              </li>
            </ul>
            <div class="media-detail" v-show="isShowDetail">
              <span class="tab-title">公司简介</span>
              <p>
                PH是一种布宜诺斯艾利斯典型的住宅类型，这种住宅以高密度和低楼层著称。
                项目是一个长期规划的收尾性空间，PH Lavallej
              </p>
              <p>
                中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。
              </p>
              <p>
                中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimateBox from "components/AnimateBox.vue";

const headerBg = require("assets/images/home_bg.jpg");
const MediaInfo = {
  headImg:
    "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
  title: "李克强对“华龙一号” 福清核电五号机组建设工作作出重要批示1",
  time: "12-06",
  content:
    "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示12-06中共中央政治局常委、国务院总理李克强日前对“华龙一号”",
  more: ""
};

export default {
  name: "home",
  components: {
    AnimateBox
  },
  data: function() {
    return {
      headerBg,
      currentTab: 1,
      id: null,
      isShowDetail: false,
      mediaInfo: [],
      mediaInfo2: [],
      mediaInfo3: []
    };
  },
  watch: {
    $route() {
      this.id = this.$route.query.id; // 获取传来的参数
      this.showDetail();
    }
  },
  created() {
    // this.id = this.$route.params.id
  },
  mounted() {
    this.handleTabAcative();

    for (let index = 0; index < 10; index++) {
      const nData = Object.assign({}, MediaInfo, {
        id: index
      });
      this.mediaInfo.push(nData);
      this.mediaInfo2.push(nData);
      this.mediaInfo3.push(nData);
    }
  },
  methods: {
    handleTabAcative() {
      console.log(this.$route.params);
      const { tid } = this.$route.params;
      if (tid) {
        this.currentTab = tid;
      }
    },
    onClickTab(index) {
      this.currentTab = index;
      this.$nextTick().then(() => {
        this.routerTo("/media");
      });
    },
    routerTo(url, queryObj) {
      this.$router.push({
        path: url,
        query: queryObj
      });
    },
    goDetail() {
      this.$router.push({
        path: "/media",
        name: `media`,
        query: {
          id: 8989
        }
      });
    },
    showDetail() {
      if (this.id) {
        this.isShowDetail = true;
      } else {
        this.isShowDetail = false;
      }
    }
  }
};
</script>
<style lang="less">
@green: #038a03;
@tips: #8d8c8c;
.media {
  .header {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .intro-container {
    .intro-container-header {
      width: 100%;
      margin: 60px 0 0 0;
      overflow: hidden;
      .intro-container-title {
        width: 164px;
        text-align: left;
        float: left;
        p {
          color: #038a03;
          font-size: 26px;
          height: 30px;
          line-height: 30px;
          margin-top: 8px;
        }
        span {
          line-height: 16px;
          color: #b8b7b7;
          font-size: 13px;
        }
      }
      .intro-container-text {
        float: right;
        line-height: 30px;
        color: #b8b7b7;
        font-size: 13px;
        margin-top: 8px;
      }
    }
    .intro-container-box {
      margin-bottom: 100px;
      font-size: 0;
      .tab {
        display: inline-block;
        width: 70px;
        margin-right: 90px;
        vertical-align: top;
        padding-top: 70px;
      }
      .tab-item {
        line-height: 1;
        display: block;
        cursor: pointer;
        font-size: 16px;
        color: #6b6b6b;
        line-height: 48px;
        &.active {
          .tab-item-title {
            color: @green;
            border-bottom: solid 2px @green;
          }
        }
      }
      .tab-item-tips {
        font-size: 16px;
        color: #8d8c8c;
      }
      .content {
        display: inline-block;
        max-width: 1000px;
        .media-ul {
          li {
            cursor: pointer;
            list-style: none;
            height: 180px;
            &:last-child {
              border: none;
            }
            dl {
              margin: 0;
              padding: 20px 0;
              dt {
                width: 342px;
                height: 143px;
                display: inline-block;
                margin-right: 33px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
              dd {
                position: relative;
                display: inline-block;
                vertical-align: top;
                width: 625px;
                height: 143px;
                margin: 0;
                span {
                  display: block;
                  font-size: 14px;
                  line-height: 20px;
                  text-align: left;
                  color: #8d8c8c;
                }
                .item-title {
                  font-size: 16px;
                  line-height: 30px;
                  color: #303030;
                }
                .item-time {
                  padding: 5px 0;
                }
                .item-content {
                  // padding-top: 11px;
                  font-size: 13px;
                  line-height: 26px;
                  // height: 52px;
                  color: #888;

                  word-break: break-all;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }
                .item-more {
                  position: absolute;
                  left: 0;
                  bottom: 0;
                }
              }
            }
          }
        }
        .media-detail {
          color: #535353;
          span {
            font-size: 18px;
            line-height: 100px;
            text-align: center;
            display: block;
          }
          p {
            font-size: 14px;
            line-height: 30px;
            text-align: left;
          }
        }
      }
    }
  }
  .antbox {
    display: inline-block;
    border-bottom: solid 1px #c3c3c3;
  }
}
@media screen and (max-width: 1070px) {
  .media {
    .header {
      height: 180px;
    }
    .intro-container {
      .intro-container-header {
        .intro-container-title {
          float: none;
          width: 100%;
        }
        .intro-container-text {
          float: none;
          width: 100%;
        }
      }

      .intro-container-box {
        .tab {
          display: flex;
          width: 100%;
          margin: 0;
          padding-top: 40px;
          .tab-item {
            flex: 1;
            width: auto;
            text-align: center;
          }
        }
        .content {
          width: 100%;
          .media-ul {
            .media-ul-item,
            li {
              width: 100%;
              height: auto;
              dl {
                width: 100%;
                dt {
                  margin: 0;
                }
                dd {
                  width: 100%;
                  height: auto;
                  padding-top: 20px;
                }
                .item-title {
                  word-break: break-all;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  overflow: hidden;
                }
                .item-more {
                  position: relative;
                  padding-top: 10px;
                }
              }
            }
          }
        }
      }
    }
    .antbox {
      display: block;
      border-bottom: 1px solid #e9e9e9;
    }
  }
}
</style>
