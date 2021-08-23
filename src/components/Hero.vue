<template>
  <div class="hero">
    <div class="hero-content">
      <h2>Wallpaper resources for everyone</h2>
      <h6>Find Free Wallpaper, Stock Photos and Other</h6>
      <div class="search">
        <input type="text" placeholder="Search All Resource" />
        <button class="btn-search">
          <vue-fontawesome icon="search" />
        </button>
      </div>
      <div class="examples">
        Examples:
        <div class="bold">4K, Movies, Cars</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.hero {
  padding: 50px 30px;
  background: url('../assets/banner.png');
  background-size: cover;
  height: 430px;

  .hero-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      color: white;
    }
    .search {
      margin-top: 30px;
      display: flex;
      align-items: center;
      input {
        width: 600px;
        padding: 16px;
        border: 0;
        color: gray;
        &:focus,
        &:active {
          outline: none;
        }
      }
      button {
        widows: 60px;
        padding: 16px;
        border: 0;
        background: #44aff2;
        color: white;
        transition: 0.3s;
        &:hover {
          background: #41e1f2;
        }
      }
    }
    .examples {
      display: flex;
      margin-top: 8px;
      color: white;
    }
  }
}
</style>
