<template>
  <div class="signup">
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <el-steps :active="currentStep" align-center finish-status="success">
          <el-step title="Step 1" description="Welcome"></el-step>
          <el-step title="Step 2" description="Basic Info"></el-step>
          <el-step title="Step 3" description="Documents"></el-step>
          <el-step title="Step 4" description="Finish"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="form-row">
      <el-col :span="12">
        <step-0 @success="next" @back="back" v-if="currentStep == 0"></step-0>
        <step-1 @success="next" @back="back" v-if="currentStep == 1"></step-1>
        <step-2 @success="next" @back="back" v-if="currentStep == 2"></step-2>
        <step-3 @success="next" @back="back" v-if="currentStep == 3"></step-3>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Step0 from './form-steps/Step0'
import Step1 from './form-steps/Step1'
import Step2 from './form-steps/Step2'
import Step3 from './form-steps/Step3'

export default {
  data () {
    return {
      currentStep: 0
    }
  },
  components: {
    Step0,
    Step1,
    Step2,
    Step3
  },
  methods: {
    next () {
      this.currentStep += 1
    },
    back () {
      this.currentStep -= 1
    }
  }
}
</script>
<style lang="scss" scoped>
.form-row {
  padding-bottom: 30px;
  padding-top: 30px;
}
.lead {
  font-size: 24px;
}
</style>

