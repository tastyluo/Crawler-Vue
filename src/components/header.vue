<template>
  <div class="header">
    <div class="logo">
      <a href="/"></a>
    </div>
    <div class="main-menu">
      <ul>
        <li>京东</li>
        <li>淘宝</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .header {
    height: 40px;
    width: 100%;
    position: fixed;
  }
  .logo {
    a {
      background-image: url("./assets/logo.png")
    }
  }
</style>
