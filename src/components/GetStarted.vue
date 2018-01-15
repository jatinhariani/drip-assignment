<template>
  <div class="get-started">
    <p class="lead">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti totam nostrum eaque, porro cum, quis, vitae magni id perferendis nulla unde dolore delectus aut facilis.
    </p>
    <router-link :to="{ name: 'signup' }" :class="'el-button el-button--primary'">
      Get Started
    </router-link>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.get-started {
  text-align: center;
}
.lead {
  font-size: 24px;
}
</style>

