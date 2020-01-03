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
          <span>您的位置：首页 > 新闻媒体</span>
        </div>
      </div>
      <div class="intro-container-box">
        <tabs transitionName="fade">
          <tab :title="'公司活动'">
            <ul class="media-ul">
              <li v-for="item in mediaInfo" v-bind:key="item.id">
                <AnimateBox
                  style="display: inline-block;border-bottom: solid 1px #c3c3c3;"
                >
                  <dl>
                    <dt>
                      <img :src="item.headImg" alt="" />
                    </dt>
                    <dd>
                      <span>{{ item.title }}</span>
                      <span>{{ item.time }}</span>
                      <span>{{ item.content }}</span>
                      <span>详情</span>
                    </dd>
                  </dl>
                </AnimateBox>
              </li>
            </ul>
          </tab>
          <tab :title="'企业快讯'">
            <span>企业快讯</span>
            <p class="tab-text">
              基金将通过竞赛、评选、成果转化、奖励等办法，培养一批创新人才，培育一批创新成果，树立一批创新典型，倡导创新文化，引导青年树立自主创新意识，提高自主创新能力
            </p>
          </tab>
          <tab :title="'媒体报道'">
            <span>媒体报道</span>
            <p class="tab-text">
              投身创业创新实践；通过项目竞赛、贴息贷款、导师带徒等办法，改变青年就业观念该基金理事会将每年定期组织开展“创业浙江”大赛，评选产生的创新奖获得者将得到一定金额的奖励主要提供农业实用技术和来料加工业务指导，重点鼓励发展现代农业
            </p>
          </tab>
        </tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, Tab } from "vue-tmn-tabs";
import AnimateBox from "components/AnimateBox.vue";
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
    Tab,
    Tabs,
    AnimateBox
  },
  data: function() {
    return {
      galleryThumbs: null,
      galleryTop: null,
      mediaInfo: []
    };
  },
  mounted() {
    for (let index = 0; index < 10; index++) {
      this.mediaInfo.push(
        Object.assign({}, MediaInfo, {
          id: index
        })
      );
    }
  }
};
</script>
<style lang="less">
.media {
  .intro-banner {
    width: 100%;
    height: 380px;
    background: seagreen;
  }
  .intro-container {
    padding: 0 90px;
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
      // height: 700px;
    }
  }
}
.vue-tabs {
  display: flex;
}

.vue-tabs__nav {
  background: transparent;
  margin-right: 150px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.vue-tabs__nav-item {
  font-size: 16px;
  color: #6b6b6b;
  line-height: 48px;
  padding: 0;
  outline: none;
  border: none;
  background-color: transparent;
}

.vue-tabs__nav-item.--active {
  color: #038a03;
  border-bottom: solid 2px #038a03;
}

.vue-tabs__panel {
  outline: none;
}

.vue-tabs__panel[hidden="hidden"] {
  display: none;
}

.vue-tabs__panel-container {
  width: 920px;
  span {
    font-size: 18px;
    line-height: 100px;
  }
  p {
    font-size: 14px;
    line-height: 30px;
    text-align: left;
  }
}
.media-ul {
  li {
    list-style: none;
    // border-bottom: solid 1px #c3c3c3;
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
          line-height: 27px;
          text-align: left;
          color: #8d8c8c;
        }
      }
    }
  }
}
</style>
