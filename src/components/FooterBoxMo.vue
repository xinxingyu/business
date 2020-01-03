<template>
  <div class="footer-box-mo">
    <div class="main">
      <div class="main-header">
        <p class="title">联系我们</p>
        <p class="subtitle">Contact Us</p>
      </div>
      <div class="main-list">
        <h3>中国时代远望科技有限公司</h3>
        <div>
          <p v-for="cpi in componyIntro" v-bind:key="cpi.key" class="tips">
            <span>{{ cpi.key }}：</span>{{ cpi.value }}
          </p>
        </div>
      </div>
      <div class="main-fl">
        <ul>
          <li v-for="item in connectList" v-bind:key="item.id">
            <a :href="item.link"
              ><em
                :style="{ 'background-image': 'url(' + item.icon + ')' }"
              ></em
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content"></div>
    <div class="footer">
      <p>
        <span class="ellipsis">COPYRIGHT (©) 2019 mo005_3089 - 待修改.</span
        ><a
          class="beian"
          href="http://www.baidu。com/"
          style="display:inline; width:auto; color:#8e8e8e"
          target="_blank"
        ></a>
      </p>
    </div>
  </div>
</template>

<script>
const componyIntro = [
  {
    key: "地址",
    value: "北京市建外SOHO东区2号楼"
  },
  {
    key: "邮编",
    value: "100000"
  },
  {
    key: "电话",
    value: "010-88491188"
  },
  {
    key: "手机",
    value: "010-88490025"
  },
  {
    key: "传真",
    value: "----"
  },
  {
    key: "邮箱",
    value: "---"
  }
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
    key: "公益活动",
    router: ""
  },
  {
    key: "企业快讯",
    router: ""
  },
  {
    key: "媒体报道",
    router: ""
  }
];

const connectList = [
  {
    id: 1,
    name: "weibo",
    link: "www.baidu.com",
    icon: require("assets/icons/weibo_1.png")
  },
  {
    id: 2,
    name: "qq",
    link: "www.baidu.com",
    icon: require("assets/icons/qq.png")
  },
  {
    id: 3,
    name: "weixin",
    link: "www.baidu.com",
    icon: require("assets/icons/weixin_2.png")
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
      MediaInfoList,
      connectList
    };
  }
};
</script>

<style lang="less" scoped>
.footer-box-mo {
  .main {
    .main-header {
      padding: 20px 0;
      text-align: left;
      .title {
        padding-top: 40px;
        text-align: left;
        margin-left: 5%;
        color: #333;
        font-size: 16px;
      }
      .subtitle {
        padding: 2px 0 16px;
        color: #b7b7b7;
        text-align: left;
        margin-left: 5%;
        color: #999;
        font-size: 12px;
      }
    }
    .main-list {
      padding: 0 5%;
      h3 {
        margin-bottom: 10px;
        color: #666;
        text-align: left;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
      p {
        width: 100%;
        height: 24px;
        color: #999;
        font-size: 12px;
        line-height: 24px;
        text-align: left;
      }
    }
    .main-fl {
      padding: 0 5%;

      a {
        display: inline-block;
        background-color: transparent;
        color: #9b9b9b;
        font-size: 16px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        width: 36px;
        height: 36px;
        border-radius: 0;
        margin-right: 10px;
        text-decoration: none;
        em {
          display: block;
          width: 36px;
          height: 36px;
          background-repeat: no-repeat;
          background-size: 50%;
          background-position: center;
        }
      }
    }
  }
  .footer {
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font-size: 12px;
    font-weight: 100;
    padding: 0 20px;
    color: #999;
    background: #f0f0f0;
    line-height: 50px;
    p {
      a {
        display: inline;
        color: #8e8e8e;
      }
      span {
        width: calc(100% - 120px);
      }
    }
  }
}
</style>
