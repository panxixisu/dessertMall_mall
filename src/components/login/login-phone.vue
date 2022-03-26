<template>
  <div>
    <el-form :model="phone" :rules="rules">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verification_vode">
        <el-col :span="10">
          <el-input v-model="phone.verification_vode" :maxlength="6"></el-input>
        </el-col>
        <el-button type="primary" size="small" class="rule_right"
          >获取验证码</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { loginPhoneRules } from './rules'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      verification_vode: ''
    })
    const rules = loginPhoneRules
    const login = () => {
      console.log('phone login')
    }
    return {
      phone,
      rules,
      login
    }
  }
})
</script>

<style scoped>
.rule_right {
  flex: 1;
  background-color:  #fdd23e;
  border:  1px soild black;
  border-radius: 5px;
}
.el-col-10 {
  margin-right: 35px;
}
</style>
