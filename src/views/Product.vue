<template>
  <div class="product">
    <div
      class="header"
      :style="{ backgroundImage: 'url(' + headerBg + ')' }"
    ></div>
    <div class="title">
      <p>百瑞众康产品系列</p>
      <span>Enterprise introduction</span>
    </div>
    <div class="content center">
      <p class="ct-title">有机食材</p>
      <ul class="ct-list">
        <li v-for="(item, index) in foodList" v-bind:key="item.id">
          <AnimateBox :delayTime="index + 1" style="display: inline-block;">
            <img :src="item.img" alt="" />
            <p class="ct-list-item-p">{{ item.name }}</p>
          </AnimateBox>
        </li>
      </ul>
      <div class="more">
        <p>加载更多</p>
      </div>
    </div>
    <div class="content gary">
      <div class="center">
        <p class="ct-title">海神系列</p>
        <ul class="ct-intro">
          <li><img src="../assets/images/home/itr1.jpg" alt="" srcset="" /></li>
          <li><img src="../assets/images/home/itr2.jpg" alt="" srcset="" /></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="center">
        <p class="ct-title">牡丹籽油</p>
        <ul class="ct-intro">
          <li><img src="../assets/images/home/itr1.jpg" alt="" srcset="" /></li>
          <li><img src="../assets/images/home/itr2.jpg" alt="" srcset="" /></li>
        </ul>
      </div>
    </div>
    <div class="content center">
      <p class="ct-title">富氧泥</p>
      <img class="ct-img" src="../assets/images/home_bg.jpg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import AnimateBox from "components/AnimateBox.vue";

const headerBg = require("assets/images/home_bg.jpg");
const foodList = [
  {
    id: 1,
    name: "魅力女生养成果",
    img: require("assets/images/home/itr1.jpg")
  },
  {
    id: 2,
    name: "魅力女生养成果",
    img: require("assets/images/home/itr2.jpg")
  },
  {
    id: 3,
    name: "魅力女生养成果",
    img: require("assets/images/home/itr3.jpg")
  },
  {
    id: 4,
    name: "魅力女生养成果",
    img: require("assets/images/home/itr4.jpg")
  },
  {
    id: 5,
    name: "魅力女生养成果",
    img: require("assets/images/home/itr1.jpg")
  },
  {
    id: 6,
    name: "魅力女生养成果",
    img: require("assets/images/home/itr1.jpg")
  }
];
export default {
  name: "product",
  components: { AnimateBox },
  data: function() {
    return { foodList, headerBg };
  },
  mounted() {},
  methods: {
    getIndex(item) {
      if (item / 4 <= 1) {
        return item - 1;
      } else {
        const yu = (item / 4).toString().split(".");
        if (!yu[1]) return 0;

        const mall = yu[1];
        console.log(mall.length);
        return (mall / Math.pow(10, mall.length)) * 4;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@green: #038a03;
@tips: #8d8c8c;
@title: #525252;
.gary {
  background-color: #f8f8f8;
}
.product {
  .header {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .title {
    margin-top: 82px;
    text-align: center;

    p {
      font-size: 24px;
      color: @green;
    }
    span {
      display: block;
      font-size: 14px;
      color: @tips;
    }
  }
  .content {
    padding: 70px 0;

    .ct-title {
      text-align: center;
      font-size: 20px;
      color: @title;
      padding-bottom: 54px;
    }

    .ct-list {
      li {
        margin-right: 18px;
        &:nth-child(4n) {
          margin-right: 0;
        }
        img {
          width: 278px;
          height: 312px;
        }
        .ct-list-item-p {
          padding: 17px 0 23px 0;
          color: #666666;
        }
      }
    }
    .more {
      padding: 30px 0 0 0;
      text-align: center;

      p {
        display: inline-block;
        cursor: pointer;
        width: 107px;
        height: 45px;
        color: #666666;
        font-size: 18px;
        line-height: 45px;
        border: 1px solid #b0b0b0;
      }
    }
    .ct-intro {
      li {
        margin-right: 26px;
        &:nth-child(2n) {
          margin-right: 0;
        }
        img {
          width: 572px;
          height: 357px;
        }
      }
    }
    .ct-img {
      width: 100%;
      height: 504px;
    }
  }
}
</style>
