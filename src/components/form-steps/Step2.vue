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
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 2mb</div>
          </el-upload>
          <button class="el-button el-button--primary" @click="$emit('success')">
            Next
          </button>
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
      imageUrl: '',
      fileList: []
    }
  },
  computed: {
    fileURL () {
      return 'https://drip-frontend.herokuapp.com/api/lead/' + this.lead.id + '/singleDocument'
    }
  },
  methods: {
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
</style>
