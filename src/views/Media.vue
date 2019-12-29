<template>
  <div class="media">
    <div class="intro-banner"></div>
    <div class="intro-container">
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
              <li v-for="item in listData">
                <dl @click="routerTo('/media',{id: 2222})">
                  <dt>
                    <img :src="item.img" alt="" />
                  </dt>
                  <dd>
                    <span>{{item.title}}</span>
                    <span>{{item.date}}</span>
                    <span>{{item.text}}</span>
                    <span>详情</span>
                  </dd>
                </dl>
              </li>
            </ul>
            <div class="media-detail" v-show="isShowDetail">
              <span class="tab-title">公司简介</span>
              <p>
                PH是一种布宜诺斯艾利斯典型的住宅类型，这种住宅以高密度和低楼层著称。 项目是一个长期规划的收尾性空间，PH Lavallej
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
              <li v-for="item in listData1">
                <dl @click="routerTo('/media',{id: 2222})">
                  <dt>
                    <img :src="item.img" alt="" />
                  </dt>
                  <dd>
                    <span>{{item.title}}</span>
                    <span>{{item.date}}</span>
                    <span>{{item.text}}</span>
                    <span>详情</span>
                  </dd>
                </dl>
              </li>
            </ul>
            <div class="media-detail" v-show="isShowDetail">
              <span class="tab-title">公司简介</span>
              <p>
                PH是一种布宜诺斯艾利斯典型的住宅类型，这种住宅以高密度和低楼层著称。 项目是一个长期规划的收尾性空间，PH Lavallej
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
              <li v-for="item in listData2">
                <dl @click="routerTo('/media',{id: 2222})">
                  <dt>
                    <img :src="item.img" alt="" />
                  </dt>
                  <dd>
                    <span>{{item.title}}</span>
                    <span>{{item.date}}</span>
                    <span>{{item.text}}</span>
                    <span>详情</span>
                  </dd>
                </dl>
              </li>
            </ul>
            <div class="media-detail" v-show="isShowDetail">
              <span class="tab-title">公司简介</span>
              <p>
                PH是一种布宜诺斯艾利斯典型的住宅类型，这种住宅以高密度和低楼层著称。 项目是一个长期规划的收尾性空间，PH Lavallej
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

export default {
  name: "home",
  data: function() {
    return {
      currentTab: 1,
      id: null,
      isShowDetail: false,
      listData: [
        {
          img: "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
          title: "李克强对“华龙一号” 福清核电五号机组建设工作 作出重要批示",
          date: "12-06",
          text: "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示 12-06 中共中央政治局常委、国务院总理李克强日前对“华龙一号”"
        },
        {
          img: "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
          title: "李克强对“华龙一号” 福清核电五号机组建设工作 作出重要批示",
          date: "12-06",
          text: "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示 12-06 中共中央政治局常委、国务院总理李克强日前对“华龙一号”"
        },
        {
          img: "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
          title: "李克强对“华龙一号” 福清核电五号机组建设工作 作出重要批示",
          date: "12-06",
          text: "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示 12-06 中共中央政治局常委、国务院总理李克强日前对“华龙一号”"
        },
        {
          img: "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
          title: "李克强对“华龙一号” 福清核电五号机组建设工作 作出重要批示",
          date: "12-06",
          text: "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示 12-06 中共中央政治局常委、国务院总理李克强日前对“华龙一号”"
        },
        {
          img: "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
          title: "李克强对“华龙一号” 福清核电五号机组建设工作 作出重要批示",
          date: "12-06",
          text: "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示 12-06 中共中央政治局常委、国务院总理李克强日前对“华龙一号”"
        }
      ],
      listData1: [
        {
          img: "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
          title: "李克强对“华龙一号” 福清核电五号机组建设工作 作出重要批示",
          date: "12-06",
          text: "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示 12-06 中共中央政治局常委、国务院总理李克强日前对“华龙一号”"
        },
        {
          img: "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
          title: "李克强对“华龙一号” 福清核电五号机组建设工作 作出重要批示",
          date: "12-06",
          text: "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示 12-06 中共中央政治局常委、国务院总理李克强日前对“华龙一号”"
        }
      ],
      listData2: [
        {
          img: "http://www.neofarmer.cn/wp-content/themes/neo/src/images/bannerpic/b_00.jpg",
          title: "李克强对“华龙一号” 福清核电五号机组建设工作 作出重要批示",
          date: "12-06",
          text: "李克强对“华龙一号”福清核电5号机组建设工作 作出重要批示 12-06 中共中央政治局常委、国务院总理李克强日前对“华龙一号”"
        }
      ],
    };
  },
  watch: {
    $route() {
      this.id = this.$route.query.id; // 获取传来的参数
      this.showDetail();
		}
  },
  methods: {
    onClickTab(index) {
      this.currentTab = index;
      this.$nextTick().then(() => {
        this.routerTo('/media')
      })
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
      })
    },
    showDetail() {
      if (this.id) {
        this.isShowDetail = true;
      }
      else {
        this.isShowDetail = false;
      }
    }
  },
  created() {
    // this.id = this.$route.params.id
  },
  mounted() {

  }
};
</script>
<style lang="less">
@green: #038a03;
@tips: #8d8c8c;
.media {
  .intro-banner {
    width: 100%;
    height: 380px;
    background: seagreen;
  }
  .intro-container {
    max-width: 1171px;
    margin: 0 auto;
    .intro-container-header {
      width: 100%;
      margin: 60px 0;
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
      display: flex;
      .tab-item {
        line-height: 1;
        display: block;
        margin-right: 55px;
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
        flex: 1;
        .media-ul {
          li {
            list-style: none;
            border-bottom: solid 1px #c3c3c3;
            &:last-child {
              border: none;
            }
            dl {
              display: flex;
              dt {
                width: 342px;
                height: 143px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              dd {
                flex: 1;
                margin-left: 33px;
                span {
                  display: block;
                  font-size: 14px;
                  line-height: 20px;
                  text-align: left;
                  color: #8d8c8c;
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
}
</style>
