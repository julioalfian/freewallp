<template>
  <div class="home">
    <Hero />
    <div class="category">
      <div class="container">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="product in category" :key="product.id">{{
            product.name
          }}</swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <!--<vue-fontawesome icon="chevron-left" />-->
          </div>
          <div class="swiper-button-next" slot="button-next">
            <!--<vue-fontawesome icon="chevron-right" />-->
          </div>
        </swiper>
      </div>
    </div>
    <div class="content-section">
      <div class="content-container">
        <div class="row">
          <div class="col-lg-3 col-md-4" v-for="data in dataContent.data" :key="data.uuid">
            <Card :dataImage="data"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Card from "@/components/ImageCard.vue";
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Home",
  components: {
    Hero,
    Card,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      category: [],
      dataContent: [],
      swiperOptions: {
        slidesPerView: 5.5,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // Some Swiper option/callback...
      },
    };
  },
  mounted() {
    axios
      .get("http://wallapi.plucon.co/api/category")
      .then((response) => this.setCategory(response.data))
      .catch((error) => console.log(error));
    axios
      .get("http://wallapi.plucon.co/api/category/single/fcae766e-50d1-47ab-970f-37429f089e10")
      .then((response) => this.setData(response.data))
      .catch((error) => console.log(error));
  },
  methods: {
    setCategory(data) {
      this.category = data;
    },
    setData(data) {
      console.log(data)
      this.dataContent = data;
    },
  },
};
</script>
<style lang="less" scoped>
.category {
  padding: 50px 0;
  .swiper-container:after,
  .swiper-container:before {
    width: 150px;
    transition: opacity 0.2s ease-in-out;
    opacity: 1;
    content: "";
    display: block;
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
  }
  .swiper-container:after {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  }
  .swiper-container::before {
    left: 0;
    background: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  }
  .swiper-container{
    padding: 8px 0;
  }
  .swiper-slide {
    border: 1px solid gray;
    padding: 16px;
    text-align: center;
    transition: .3s;
    &:hover{
      cursor: pointer;
      box-shadow: 0px 2px 8px -1px rgba(0,0,0,0.5);
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      font-size: 20px;
    }
  }
  .swiper-button-prev {
    &.swiper-button-disabled {
      //opacity: 0
    }
    left: 0;
  }
  .swiper-button-next {
    &.swiper-button-disabled {
      opacity: 0;
    }
    right: 0;
  }
}
.content-section{
  .content-container{
    width: 95vw;
    margin: 0 auto;
  }
}
</style>
