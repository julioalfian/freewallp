<template>
  <div class="image-card">
    <img :src="dataImage.thumbnail" alt="" />
    <div class="image-info">
      <div class="image-info-top">
        <div class="zoom">
          <vue-fontawesome icon="search-plus" />
        </div>
      </div>
      <div class="image-info-bottom">
        <div class="image-info-left">
          <div class="name">{{ dataImage.title }}</div>
          <div class="size">{{ dataImage.size_featured_image }}</div>
        </div>
        <div class="image-info-right">
          <div class="download">
            <vue-fontawesome icon="download" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card image",
  props: ["dataImage"],
};
</script>

<style lang="less">
.image-card {
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image-info {
    z-index: 2;
    opacity: 0;
    transition: 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .image-info-top {
			display: flex;
			justify-content: flex-end;
      .zoom {
        background: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          color: black;
          font-size: 14px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
    .image-info-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .image-info-left {
        .name {
          font-size: 18px;
          font-weight: 500;
          color: white;
        }
        .size {
          font-size: 14px;
          color: white;
        }
      }
      .image-info-right {
        .download {
          background: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            color: black;
            font-size: 14px;
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  &:hover {
    &::after {
      z-index: 1;
      width: 100%;
      height: 150px;
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      background: rgb(0, 0, 0);
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 10%,
        rgba(205, 94, 248, 0) 90%
      );
    }
    .image-info {
      opacity: 1;
    }
  }
}
</style>
