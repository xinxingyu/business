<template>
  <div class="intro">
    <div class="intro-banner"></div>
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
        <tabs transitionName="fade">
          <tab :title="'公司简介'">
            <span>公司简介</span>
            <p>中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。中国低压电器行业产销量最大企业。</p>
            <p>公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。
            中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。</p>
            <p>公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。</p>
            <p>中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。</p>
            <p>公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。</p>
          </tab>
          <tab :title="'企业文化'">
            <span>企业文化</span>
            <p class="tab-text">基金将通过竞赛、评选、成果转化、奖励等办法，培养一批创新人才，培育一批创新成果，树立一批创新典型，倡导创新文化，引导青年树立自主创新意识，提高自主创新能力</p>
          </tab>
          <tab :title="'品牌体系'">
            <span>品牌体系</span>
            <p class="tab-text">投身创业创新实践；通过项目竞赛、贴息贷款、导师带徒等办法，改变青年就业观念该基金理事会将每年定期组织开展“创业浙江”大赛，评选产生的创新奖获得者将得到一定金额的奖励主要提供农业实用技术和来料加工业务指导，重点鼓励发展现代农业</p>
          </tab>
          <tab :title="'企业荣誉'">
            <span>企业荣誉</span>
            <p class="tab-text">中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。</p>
          </tab>
          <tab :title="'发展历程'">
            <span>发展历程</span>
            <p>中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。</p>
          </tab>
          <tab :title="'发展愿景'">
            <span>发展愿景</span>
            <p>中国低压电器行业产销量最大企业。公司专业从事配电电器、控制电器、终端电器、电源电器和电力电子等100多个系列、10000多种规格的低压电器产品的研发、生产和销售。公司荣获全国质量管理奖、首届浙江省政府质量奖、首届温州市市长质量奖。</p>
          </tab>
        </tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, Tab } from "vue-tmn-tabs";

export default {
  name: "home",
  components: {
    Tab,
    Tabs
  },
  data: function() {
    return {
      galleryThumbs: null,
      galleryTop: null
    };
  },
  mounted() {}
};
</script>
<style lang="less">
.intro {
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
      height: 700px;
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
</style>
