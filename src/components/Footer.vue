<template>
	<div class="footer mt-5">
    <div class="container">
      <div class="top">
        Freewallp
      </div>
      <div class="bottom">
        @2021 Copyright
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer {
  padding: 30px 0;
  background: white;
  border-top: 1px solid rgb(224, 224, 224);
  .container {
    .top,
    .bottom {
      text-align: center;
    }
    .top {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 1px;
      font-weight: 500;
    }
    .bottom {
      font-size: 14px;
    }
  }
}
</style>