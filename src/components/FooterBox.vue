<template>
  <div class="footer-box">
    <div class="content">
      <div class="ct-top">
        <p class="title">联系我们</p>
        <p class="tips">Contact Us</p>
      </div>
      <div class="ct-center">
        <div class="ct-center-main">
          <p class="title">北京百瑞众康农业科技发展股份有限公司</p>
          <p v-for="cpi in componyIntro" v-bind:key="cpi.key" class="tips">
            {{ cpi.key }}：{{ cpi.value }}
          </p>
        </div>
        <div class="ct-center-list">
          <div class="list-item">
            <p class="title">网站首页</p>
          </div>
          <div class="list-item">
            <p class="title">企业介绍</p>
            <p v-for="item in IntroInfoList" v-bind:key="item.key" class="tips">
              {{ item.key }}
            </p>
          </div>
          <div class="list-item">
            <p class="title">产品服务</p>
            <p
              v-for="item in ProductionInfoList"
              v-bind:key="item.key"
              class="tips"
            >
              {{ item.key }}
            </p>
          </div>
          <div class="list-item">
            <p class="title">生态基地</p>
            <p
              v-for="item in EcologyInfoList"
              v-bind:key="item.key"
              class="tips"
            >
              <router-link class="footer-li-router" :to="{ path: item.router }">
                {{ item.key }}
              </router-link>
            </p>
          </div>
          <div class="list-item">
            <p class="title">新闻媒体</p>
            <p v-for="item in MediaInfoList" v-bind:key="item.key" class="tips">
              <router-link
                class="footer-li-router"
                :to="{ path: item.router, query: { tid: item.value } }"
              >
                {{ item.key }}
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="ct-other"></div>
      <div class="ct-tip"></div>
    </div>
  </div>
</template>

<script>
const componyIntro = [
  {
    key: "地址",
    value: "北京市大兴区星光影视园17号楼A3"
  },
  // {
  //   key: "邮编",
  //   value: "100000"
  // },
  {
    key: "电话",
    value: "400-650-8612"
  }
  // {
  //   key: "手机",
  //   value: "010-88490025"
  // },
  // {
  //   key: "传真",
  //   value: "----"
  // },
  // {
  //   key: "邮箱",
  //   value: "---"
  // }
];
const IntroInfoList = [
  {
    key: "企业介绍",
    router: ""
  },
  {
    key: "企业文化",
    router: ""
  },
  {
    key: "品牌体系",
    router: ""
  },
  {
    key: "企业荣誉",
    router: ""
  },
  {
    key: "发展历程",
    router: ""
  },
  {
    key: "发展愿景",
    router: ""
  }
];

const ProductionInfoList = [
  {
    key: "产品体系",
    router: ""
  },
  {
    key: "运营板块",
    router: ""
  }
];
const EcologyInfoList = [
  {
    key: "牡丹基地",
    router: ""
  },
  {
    key: "五常水稻基地",
    router: ""
  },
  {
    key: "内蒙、甘肃畜牧基地",
    router: ""
  },
  {
    key: "河北遵化家禽基地",
    router: ""
  },
  {
    key: "南北果蔬基地",
    router: ""
  },
  {
    key: "云南有机蔬菜基地",
    router: ""
  },
  {
    key: "天津有机蔬菜基地",
    router: ""
  }
];
const MediaInfoList = [
  {
    key: "公司活动",
    router: "media",
    value: 1
  },
  {
    key: "企业快讯",
    router: "media",
    value: 2
  },
  {
    key: "媒体报道",
    router: "media",
    value: 3
  }
];

export default {
  name: "FooterBox",
  data() {
    return {
      componyIntro,
      IntroInfoList,
      ProductionInfoList,
      EcologyInfoList,
      MediaInfoList
    };
  }
};
</script>

<style lang="less">
.footer-box {
  width: 100%;
  height: 514px;
  background-color: #3e3e3e;

  .content {
    max-width: 1171px;
    min-width: 1171px;

    margin: 0 auto;
    height: 100%;
    text-align: left;
  }
  .title {
    display: inline-block;
    color: #ffffff;
    line-height: 1;
  }
  .tips {
    display: inline-block;
    color: #acacac;
    line-height: 1;
  }

  .ct-top {
    padding-top: 77px;
    padding-bottom: 75px;
    .title {
      font-size: 24px;
      margin-right: 11px;
    }
  }

  .ct-center {
    .ct-center-main {
      display: inline-block;
      .title {
        font-size: 16px;
        margin-bottom: 33px;
      }
      .tips {
        display: block;
        margin-bottom: 15px;
      }
    }
    .ct-center-list {
      vertical-align: top;
      float: right;

      .list-item {
        display: inline-block;
        vertical-align: top;
        margin-right: 78px;

        &:last-child {
          margin-right: 0;
        }

        p {
          display: block;
        }
        .title {
          font-size: 16px;
          margin-bottom: 33px;
        }
        .tips {
          display: block;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
