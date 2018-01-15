<template>
  <div>
    <form>
      <el-row type="flex" justify="center" class="form-row">
        <el-col :span="24">
          <el-upload
            class="upload-demo"
            drag
            :action="fileURL"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :on-success="uploadDone"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Upload your AADHAR, PAN and other documents</div>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 2mb</div>
          </el-upload>
          <div class="step-2-text-center">
            <el-button type="primary" @click.prevent="$emit('success')" :loading="processing" v-if="uploaded">Finish</el-button>
            <el-button type="default" @click="back">Back</el-button>
          </div>
        </el-col>
      </el-row>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lead: {
        id: 0
      },
      uploaded: false,
      fileList: []
    }
  },
  computed: {
    fileURL () {
      return 'https://drip-frontend.herokuapp.com/api/lead/' + this.lead.id + '/singleDocument'
    }
  },
  methods: {
    uploadDone () {
      this.uploaded = true
    },
    back () {
      this.uploaded = false
      this.$emit('back')
    },
    handlePreview () {
      // todo: something.
    },
    handleRemove () {
      // todo: something
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      // const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('Avatar picture must be JPG format!')
      // }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isLt2M
    }
  }
}
</script>
<style lang="scss">
.step-2-text-center {
  text-align: center;
  margin-top: 20px;
}
.el-upload-dragger {
  width: auto;
}
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-upload__tip {
  text-align: center;
  margin-bottom: 10px;
}
</style>
