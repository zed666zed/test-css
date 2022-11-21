<template>
    <div id="login">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules" status-icon>
            <h3 class="login-title">系统登录</h3>
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="login-submit">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>

export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur",
                    },
                    {
                        min: 3,
                        message: "用户名长度不能小于3位",
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    }
                ],
            },
        }
    },
    methods: {
        login() {
          this.$router.push({
            path:'/'
          })
        },
        reset() {
            this.form.username = ''
            this.form.password = ''
        }
    }
}
</script>

<style>
#login {
    width: 500px;
    margin: 200px auto;
    border-radius: 5%;
    border: solid black 1px;
    padding: 20px;
}

.login-title {
    margin: 20px auto;
    text-align: center;
    color: #505458;
}
.login-submit {
  margin: 5px 90px
}
</style>