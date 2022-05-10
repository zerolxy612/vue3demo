<script setup>
import { Avatar, View } from '@element-plus/icons-vue'
import { reactive } from 'vue'

const user = reactive({})

const login = () => {
  console.log(user)
}
</script>

<template>
  <div class="login-content">
    <div class="modal">
      <el-form :model="user">
        <div class="login-title">登录</div>
        <el-form-item>
          <el-input
            type="text"
            :prefix-icon="Avatar"
            v-model="user.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            :prefix-icon="View"
            v-model="user.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btm" @click="login">登录</el-button>
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
.login-content .login-btm {
  width: 100%;
}
</style>
