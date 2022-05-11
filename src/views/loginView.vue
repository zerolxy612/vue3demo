<script setup>
import { Avatar, View } from '@element-plus/icons-vue'
import { reactive, ref, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import userApi from '../api/userApi'

const { proxy } = getCurrentInstance()

const user = reactive({})
const store = useStore()
const loginForm = ref(null)

// 定义校验规则
const rules = reactive({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
})
const login = () => {
  // 进行提交前的校验
  loginForm.value.validate((valid) => {
    if (valid) {
      userApi.login(user).then((res) => {
        // vuex管理
        store.dispatch('userStore/saveUserInfoAction', res)
        // 跳转路由
        proxy.$router.push('/')
      })
    } else {
      return false
    }
  })
}
</script>

<template>
  <div class="login-content">
    <div class="modal">
      <el-form :model="user" :rules="rules" status-icon ref="loginForm">
        <div class="login-title">登录</div>
        <el-form-item prop="username">
          <el-input
            type="text"
            :prefix-icon="Avatar"
            v-model="user.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            :prefix-icon="View"
            v-model="user.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.login-content {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
}
.login-content .modal {
  width: 350px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgb(121, 120, 120);
  padding: 50px;
}
.login-content .login-title {
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 15px;
}
.login-content .login-btn {
  width: 100%;
}
</style>
