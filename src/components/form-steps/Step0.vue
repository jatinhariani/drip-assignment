<template>
  <div>
    <el-form ref="details-form" :model="sizeForm" label-width="120px" size="mini" :rules="rules">
      <el-form-item label="Name" prop="name">
        <el-input v-model="sizeForm.name" placeholder="John Doe"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="sizeForm.email" placeholder="email@domain.com"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="sizeForm.phone" placeholder="9999999999"></el-input>
      </el-form-item>
      <el-form-item label="PAN No" prop="pan">
        <el-input v-model="sizeForm.pan" placeholder="AAAAPA1111A"></el-input>
      </el-form-item>
      <el-form-item label="Company Name">
        <el-input v-model="sizeForm.company" placeholder="Acme Industries"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">Next</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'dude',
  data () {
    return {
      sizeForm: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input your Name', trigger: 'blur' },
          { min: 3, message: 'Name should be at least 3 characters in length', trigger: 'blur' }
        ],
        email: [
          { required: true, type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ],
        pan: [
          { required: true, pattern: /(^([A-Z]{3}P[A-Z])([0-9]{4})([A-Z]{1})$)/ , message: 'Please input correct PAN Card Number', trigger: 'blur' }
        ],
        phone: [
          { pattern: /(^([0-9]{10})$)/, message: 'Please input a valid phone number', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('success')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
