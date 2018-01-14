<template>
  <div class="step-0">
    <p class="lead">
      We can complete your onboarding in a few simple steps. Just give us your details and documents and our experts will do the rest.
    </p>
    <button class="el-button el-button--primary" @click="$emit('success')">
      Let's Go
    </button>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.step-0 {
  text-align: center;
}
.lead {
  font-size: 24px;
}
</style>
