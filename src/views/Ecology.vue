<template>
  <div class="ecology">
    <div
      class="header"
      :style="{ backgroundImage: 'url(' + headerBg + ')' }"
    ></div>
    <div class="title center">
      <p>生态基地</p>
      <span>Enterprise introduction</span>
    </div>
    <div class="content center">
      <ul class="content-list">
        <li
          href="#"
          class="content-list-item"
          v-for="(item, index) in info"
          v-bind:key="item.id"
        >
          <AnimateBox :delayTime="getIndex(index)" class="antbox">
            <div class="item-img">
              <img :src="item.thumb" alt="" srcset="" />
            </div>
            <div class="item-wrapper">
              <p class="item-wrap-title">{{ item.title }}</p>
              <p class="item-wrap-tips">{{ item.tips }}</p>
            </div>
          </AnimateBox>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AnimateBox from "components/AnimateBox.vue";
import urls from "../utils/urls";

const headerBg = require("assets/images/ecology-banner.png");
const ecologyList = [
  {
    id: 1,
    imgPath: require("assets/images/home/itr1.jpg"),
    title: "海神系列",
    tips: "Poseidon series"
  },
  {
    id: 2,
    imgPath: require("assets/images/home/itr2.jpg"),
    title: "牡丹系列",
    tips: "Peony series"
  },
  {
    id: 3,
    imgPath: require("assets/images/home/itr3.jpg"),
    title: "有机食材",
    tips: "Organic food"
  },
  {
    id: 4,
    imgPath: require("assets/images/home/itr4.jpg"),
    title: "有机食材2",
    tips: "Organic food"
  }
];
export default {
  name: "ecology",
  components: { AnimateBox },
  data: function() {
    return { ecologyList, headerBg, info: null };
  },
  mounted() {
    this.getData();
  },
  inject: ["isMobile"],
  methods: {
    getIndex(item) {
      if (this.isMobile) {
        return 0;
      }
      if (item / 3 < 1) {
        return item;
      } else {
        const yu = (item / 3).toString().split(".");
        if (!yu[1]) return 0;

        const mall = yu[1];
        return Math.round((mall / Math.pow(10, mall.length)) * 3);
      }
    },
    getData() {
      this.loading = true;
      this.fetchGet(urls.list, {
        catid: 17
      })
        .then(res => {
          if (res.status === 200) {
            this.info = res.data;
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
<style lang="less" scoped>
@green: #038a03;
@tips: #8d8c8c;
@title: #525252;
.gary {
  background-color: #f8f8f8;
}
.ecology {
  .header {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .title {
    margin-top: 87px;
    text-align: left;

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
    .content-list {
      // display: flex;
      .content-list-item {
        position: relative;
        margin-right: 10px;
        margin-bottom: 20px;
        transition: all 0.36s ease;
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
            width: 380px;
            height: 260px;
          }
        }
        .item-wrapper {
          text-align: left;
          padding: 25px 0 20px 14px;
          line-height: 1;
          transition: all 0.36s ease;

          .item-wrap-title {
            font-size: 16px;
            color: #333333;
            margin-bottom: 12px;
          }
          .item-wrap-tips {
            font-size: 12px;
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
  .antbox {
    display: inline-block;
  }
}
@media screen and (max-width: 1070px) {
  .ecology {
    .header {
      height: 180px;
    }
    .title {
      margin-top: 60px;
    }
    .content {
      .content-list {
        .content-list-item {
          margin: 0;
          .item-img {
            img {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
    .antbox {
      display: block;
    }
  }
}
</style>
