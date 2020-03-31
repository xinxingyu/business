<template>
  <div class="intro">
    <div
      class="header"
      :style="{ backgroundImage: 'url(' + headerBg + ')' }"
    ></div>
    <div class="intro-container">
      <div class="intro-container-header">
        <div class="intro-container-title">
          <p>企业介绍</p>
          <span>Enterprise introdution</span>
        </div>
        <div class="intro-container-text">
          <span>您的位置：首页 > 业务范围</span>
        </div>
      </div>
      <div class="intro-container-box">
        <div class="tab">
          <div
            v-for="(tab, index) in tabs"
            v-bind:key="tab.id"
            :class="['tab-item', { active: currentTab === index + 1 }]"
            @click="onClickTab(index + 1)"
          >
            <p class="tab-item-title">{{ tab.name }}</p>
          </div>
        </div>

        <div class="content">
          <div v-if="loading" class="loading">
            正在加载中...
          </div>
          <div v-else>
            <AnimateBox><div v-html="info.content"></div></AnimateBox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimateBox from "components/AnimateBox.vue";
import urls from "../utils/urls";

const headerBg = require("assets/images/intro-banner.png");

export default {
  name: "Intro",
  components: {
    AnimateBox
  },
  data: function() {
    return {
      headerBg,
      loading: true,
      currentTab: 1,
      info: null,
      galleryThumbs: null,
      galleryTop: null,
      tabs: [
        {
          id: 11,
          name: "公司简介"
        },
        {
          id: 12,
          name: "企业文化"
        },
        {
          id: 13,
          name: "品牌体系"
        },
        {
          id: 14,
          name: "企业荣誉"
        },
        {
          id: 15,
          name: "发展历程"
        },
        {
          id: 16,
          name: "发展愿景"
        }
      ]
    };
  },
  mounted() {
    this.getData(this.currentTab);
  },
  methods: {
    onClickTab(index) {
      console.log(111, index);
      this.currentTab = index;
      this.getData(this.currentTab);
    },
    getData(index) {
      this.loading = true;
      this.fetchGet(urls.list, {
        catid: this.tabs[index - 1].id
      })
        .then(res => {
          console.log("哈哈哈", res);
          if (res.status === 200) {
            // this["mediaInfo" + id] = res.data;
            this.info = res.data || {
              content: "无"
            };
            this.loading = false;
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
.intro {
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
      height: 800px;

      .tab {
        display: inline-block;
        width: 70px;
        margin-right: 90px;
        vertical-align: top;
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
        img {
          max-width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1070px) {
  .intro {
    .loading {
      padding: 16px 0 0 0;
      text-align: center;
      font-size: 16px;
    }
    .intro-banner {
      height: 284px;
    }
    .intro-container-text {
      display: none;
    }
    .intro-container {
      .intro-container-header {
        padding: 20px;
        margin: 0;
        box-sizing: border-box;
      }
      .intro-container-box {
        height: auto;
        .tab {
          display: flex;
          width: 100%;
          margin: 0;
          padding-top: 40px;

          .tab-item {
            flex: 1;
            width: auto;
            text-align: center;
            padding: 0 10px 0 10px;
            line-height: 1.5;
            .tab-item-title {
              padding-bottom: 10px;
            }
          }
        }
        .content {
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
