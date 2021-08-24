<template>
  <div class="modal">
    <vue-fontawesome icon="close" class="close-modal" />
    <div class="modal-body">
      <img
        class="modal-image"
        src="https://downplatin.sgp1.digitaloceanspaces.com/wallapi/Keyword/thumbnail/20773/thumb_e528ad7a-da89-4621-8220-e481205cf6d5.jpg"
        alt=""
      />
    </div>
  </div>
</template>
<style lang="less" scoped>
.modal {
  //display: none;
  display: block;
	width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.747);

  .close-modal {
    position: absolute;
    z-index: 1;
    top: 50px;
    right: 60px;
    color: white;
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .modal-body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 60%;
      height: auto;
    }
  }
}
</style>
