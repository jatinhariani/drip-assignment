<template>
  <div>
    <el-form ref="details-form" :model="lead" label-width="120px" size="mini" :rules="rules">
      <el-form-item label="Name" prop="name">
        <el-input v-model="lead.name" placeholder="John Doe"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="lead.email" placeholder="email@domain.com"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="lead.phone" placeholder="9999999999"></el-input>
    </el-form-item>
      <el-form-item label="PAN No" prop="pan">
        <el-input v-model="lead.pan" placeholder="AAAPA1111A"></el-input>
      </el-form-item>
      <el-form-item label="Company Name" prop="company">
        <el-input v-model="lead.company" placeholder="Acme Industries"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit" :loading="processing">Next</el-button>
        <el-button type="default" @click="$emit('back')">Back</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      lead: {
        name: '',
        email: '',
        pan: ''
      },
      processing: false,
      rules: {
        name: [
          { required: true, message: 'Please input your Name', trigger: 'blur' },
          { min: 3, message: 'Name should be at least 3 characters in length', trigger: 'blur' }
        ],
        email: [
          { required: true, type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ],
        pan: [
          { required: true, pattern: /(^([A-Z]{3}P[A-Z])([0-9]{4})([A-Z]{1})$)/, message: 'Please input correct PAN Card Number', trigger: 'blur' }
        ],
        phone: [
          { pattern: /(^([0-9]{10})$)/, message: 'Please input a valid phone number', trigger: 'blur' }
        ],
        company: []
      }
    }
  },
  methods: {
    onSubmit () {
      const component = this
      this.$refs['details-form'].validate((valid) => {
        if (valid) {
          component.saveData()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    saveData () {
      this.processing = true
      axios({
        url: 'https://drip-frontend.herokuapp.com/api/lead',
        method: 'post',
        data: this.lead
      })
        .then((result) => {
          this.processing = false
          this.$emit('success', result.data)
        })
        .catch(() => {
          this.processing = false
          console.log('Error')
        })
    }
  }
}
</script>
<style lang="scss">
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 22px;
}
</style>
