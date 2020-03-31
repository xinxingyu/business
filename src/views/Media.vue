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
          <span v-show="catid"> > 详情</span>
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
          <div v-if="loading" class="loading">
            正在加载中...
          </div>
          <div v-else>
            <ul class="media-ul" v-show="!isShowDetail">
              <li
                v-for="item in mediaInfo"
                v-bind:key="item.id"
                class="media-ul-item"
              >
                <AnimateBox class="antbox">
                  <dl
                    @click="
                      routerTo('/media', { catid: item.catid, aid: item.id })
                    "
                  >
                    <dt>
                      <img :src="item.thumb" alt="" />
                    </dt>
                    <dd>
                      <span class="item-title">{{ item.title }}</span>
                      <span class="item-time">{{ item.updatetime }}</span>
                      <span class="item-content">{{ item.description }}</span>
                      <span class="item-more">详情</span>
                    </dd>
                  </dl>
                </AnimateBox>
              </li>
            </ul>
            <div class="media-detail" v-show="isShowDetail">
              <p class="media-detail-title">{{ mediaInfoItem.title }}</p>
              <p class="media-detail-time">
                {{ mediaInfoItem.updatetime2 || "- | -" }}
              </p>
              <div v-html="mediaInfoItem.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimateBox from "components/AnimateBox.vue";
import urls from "../utils/urls";

const headerBg = require("assets/images/media-banner.png");

export default {
  name: "home",
  components: {
    AnimateBox
  },
  data: function() {
    return {
      loading: true,
      headerBg,
      currentTab: 1, //栏目索引
      catid: null, //栏目ID
      aid: null, //文章ID
      isShowDetail: false,
      isWaitData: false, //等待数据
      mediaInfo: [],
      mediaInfoItem: {
        content: null,
        title: null
      }, //某个文章
      tabIds: {
        1: 7,
        2: 8,
        3: 9
      },
      tabIdsRv: {
        7: 1,
        8: 2,
        9: 3
      }
    };
  },
  watch: {
    $route() {
      // 获取传来的参数
      this.catid = this.$route.query.catid;
      this.aid = this.$route.query.aid;

      if (this.catid && this.aid) {
        this.showDetail(true, this.aid);
      } else {
        this.showDetail(false, this.aid);
      }
    }
  },
  created() {},
  mounted() {
    this.handleTabAcative();
  },
  methods: {
    handleTabAcative() {
      console.log("route", this.$route);

      const tid = this.$route.params.tid || this.$route.query.tid;
      const { catid, aid } = this.$route.query;

      if (tid) {
        this.currentTab = tid - 0;
      } else if (catid) {
        this.currentTab = this.tabIdsRv[catid] - 0;
        this.catid = catid;
        if (aid) {
          this.aid = aid;
          this.showDetail(true, aid);
        }
      }

      this.getData(this.currentTab);
    },
    onClickTab(index) {
      this.currentTab = index;
      this.catid = null;
      this.aid = null;

      this.getData(this.currentTab);

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
    /**
     * 显示和关闭文章详情
     */
    showDetail(show, aid) {
      if (show) {
        if (!this.mediaInfo || this.mediaInfo.length <= 0) {
          this.isWaitData = true;
        } else {
          this.getMediaInfoContent(aid);
          this.isShowDetail = true;
        }
      } else {
        this.isShowDetail = false;
      }
    },
    getMediaInfoContent(aid) {
      console.log("getMediaInfoContent..", aid, this.mediaInfo);
      this.mediaInfo.forEach(item => {
        console.log(item);
        if (item.id === aid) {
          this.mediaInfoItem = item;
          return true;
        }
      });
    },
    getData(id) {
      this.loading = true;
      this.fetchGet(urls.list, {
        catid: this.tabIds[id]
      })
        .then(res => {
          if (res.status === 200) {
            this.mediaInfo = res.data;
            this.loading = false;
            if (this.isWaitData) {
              this.showDetail(true, this.aid);
            }
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
.media {
  .loading {
    font-size: 16px;
    color: #035d03;
  }
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
          padding-top: 70px;
          text-align: center;

          .media-detail-title {
            font-size: 18px;
            padding-bottom: 20px;
          }
          .media-detail-time {
            color: #535353;
            font-size: 12px;
            padding-bottom: 60px;
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
    .loading {
      padding: 16px 0 0 0;
      text-align: center;
      font-size: 16px;
    }
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
