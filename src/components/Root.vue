<template>
  <el-container>
    <el-header height="150px">
      <el-row>
        <el-col :span="24">
          <h1 class="main-logo">
            <img src="../assets/cosmos-logo.png" alt="Logo" class="main-logo">
          </h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
export default {}
</script>
<style lang="scss">
.main-logo {
  margin: 15px 0;
  text-align: center;
  max-height: 100px;
  width: auto;
}
.el-header {
  padding: 0;
}
.el-row {
  max-width: 1170px;
  margin: 0 auto;
}
.el-container {
  min-height: 100vh;
}
</style>
