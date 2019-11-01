<template>
  <div class="page-login">
    <!-- <div
      class="page-login--layer page-login--layer-time"
      flex="main:center cross:center">
    </div> -->
    <div class="page-login--layer">
      <div
        class="page-login--content"
        flex="dir:top main:justify cross:center box:justify">
        <div class="page-login--content-header">
        </div>
        <div
          class="page-login--content-main"
          flex="dir:top main:center cross:center">
          <div class="page-login--form">
            <!-- <img src="./image/loginbg.png" class="loginbg"/> -->
            <el-row style="margin-top: -70px">
              <el-col :span="14">
                <span style="background-color:transparent; width=100%">s</span>
              </el-col>

              <el-col :span="10" style="text-align:right;">
                <el-card style="background-color: #202020; border:none; margin-left: -20x;height:600px">
                  
                  <el-row class="tc">
                    <div style="margin-top: -10px">
                      <img src="image/logo/logo_no_text.png" alt="" style="width: 31%;">
                      <div class="title1">
                        金融工具估值系统
                      </div>
                      <div class="title2">
                        Financial Instrument Valuation System
                      </div>
                      
                    </div>
                  </el-row>

                  <el-row class="tc">
                    <el-form class="loginForm" ref="loginForm" label-position="top" :rules="rules" :model="formLogin" size="default">
                      <!-- <el-form-item prop="username">
                        <d2-icon name="github" />
                        <el-input type="text" v-model="formLogin.username" placeholder="用户名">
                          <i slot="prepend" class="fa fa-user-circle-o"></i>
                        </el-input>
                      </el-form-item> -->
                      <d2-icon name="user" style="color: transparent;"/>
                      <el-form-item prop="username">
                        <div class="clacdiv">
                          <i slot="prepend" class="fa fa-user-circle-o" style="color:black"></i>
                          <input type="text" v-model="formLogin.username" placeholder="用户名"> </input>
                        </div>
                      </el-form-item>

                      <el-form-item prop="password">
                        <div class="clacdiv">
                          <i slot="prepend" class="fa fa-keyboard-o" style="color:black"></i>
                          <input  type="password" v-model="formLogin.password" placeholder="密码" > </input>
                        </div>
                      </el-form-item>
                      <el-button type="primary" size="default" class="button-login" @click="submit">
                        登录
                      </el-button>
                    </el-form>

                  </el-row>
                </el-card>
              </el-col>

            </el-row>
           <!--  <p
              class="page-login--options"
              flex="main:justify cross:center">
              <span><d2-icon name="question-circle"/> 忘记密码</span>
               <span>注册用户</span> 
            </p> -->
            <!-- 快速登录按钮 -->
           <!--  <el-button class="page-login--quick" size="default" type="info" @click="dialogVisible = true">
              快速选择用户（测试功能）
            </el-button> -->
          </div>
        </div>

        <div class="page-login--content-footer">
         <!--  <p class="page-login--content-footer-options">
            <a href="#">帮助</a>
            <a href="#">隐私</a>
            <a href="#">条款</a>
          </p>
          <p class="page-login--content-footer-copyright">
            Copyright <d2-icon name="copyright"/> 2018 D2 Projects 开源组织出品 <a href="https://github.com/FairyEver">@FairyEver</a>
          </p> -->
        </div> 
      </div>
    </div>

    <el-dialog
      title="快速选择用户"
      :visible.sync="dialogVisible"
      width="400px">
      <el-row :gutter="10" style="margin: -20px 0px -10px 0px;">
        <el-col v-for="(user, index) in userDB" :key="index" :span="8">
          <div class="page-login--quick-user" @click="handleUserBtnClick(user)">
            <d2-icon name="user-circle-o"/>
            <span>{{user.name}}</span>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
    <div id="particles"></div> 
  </div>

</template>

<script>
import particlesConfig from "./particles.json";
import particles from 'particles.js'
import dayjs from 'dayjs'
import { mapActions } from 'vuex'
import axios from 'axios';

export default {
  data () {
    return {
      timeInterval: null,
      time: dayjs().format('HH:mm:ss'),
      // 快速选择用户
      dialogVisible: false,
      userDB : [
        // { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: '管理员' },
        // { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: '编辑' },
        // { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: '用户1' }
      ],
      // 表单
      formLogin: {
        username: 'ey_user',
        password: '',
        code: 'v9am'
      },
      // 校验
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    particlesJS('particles',particlesConfig);

    // ***************** 保存用户设备信息，IP及来源
    // axios.get('http://fangyuanxiaozhan.com/get_ip', {
    //   headers: {}
    // })
    // .then(function (response) {
    //   // 保存用户IP及来源
    //   var instance = axios.create({
    //     baseURL: 'https://p6wvt2em.api.lncld.net/1.1/classes/visitors',
    //     timeout: 2000,
    //     headers: {
    //       "X-LC-Id":"P6WvT2EM5S1aeTvEy7VJw4Rf-gzGzoHsz",
    //       "X-LC-Key": "1AJapWr7kvFceez9Tn5tNC98",
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   var data = {
    //     "ip": response.data.ip,
    //     "ip_attr": response.data.ip_attr,
    //     "info": navigator.userAgent.toLowerCase(),
    //     "product": "Bigdata Risk",
    //     "user": "guest",
    //     "page": "login"
    //   }
    //   instance.post("",data)
    //   .then(function (response) {
    //     // console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  },

  beforeDestroy () {
   // clearInterval(this.timeInterval)
  },
  methods: {
    ...mapActions('d2admin/account', [
      'login'
    ]),
    refreshTime () {
      this.time = dayjs().format('HH:mm:ss')
    },
    /**
     * @description 接收选择一个用户快速登录的事件
     * @param {Object} user 用户信息
     */
    handleUserBtnClick (user) {
      this.formLogin.username = user.username
      this.formLogin.password = user.password
      console.log(this.formLogin)
      this.submit()
    },
    /**
     * @description 提交表单
     */
    // 提交登录信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 登录
          // 注意 这里的演示没有传验证码
          // 具体需要传递的数据请自行修改代码
          this.login({
            username: this.formLogin.username,
            password: this.formLogin.password
          })
            .then(() => {
              // 重定向对象不存在则返回顶层路径
              this.$router.replace(this.$route.query.redirect || '/')
            })
        } else {
          // 登录表单校验失败
          this.$message.error('表单校验失败')
        }
      })
    }
  }
}
</script>


<style lang="scss">

#particles{
  position: absolute;
  width: 100%;
  height: 100%;
  background:url(./image/bg-login.png) no-repeat 0px 0px;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.clacdiv{
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  height: 42px;
  line-height: 42px;
  padding-left: 10px;
  font-size: 18px;
  margin-top: 15px;
}
.clacdiv input{
  background: white !important;
  border: none;
  width: 80%;
  padding-left: 8%;
  margin-left: 8px;
  margin-right: 8px;
  border-left: 1px solid #948d85;
  font-size: 18px;
  color:black;
}
.clacdiv input:focus{
  border: none !important;
}
.tc{
  text-align:center;
}
.br{ 
  border-right: 1px solid #948d85;
}
.loginForm{
    margin-top: 10px;
    margin-left: 80px;
    margin-right: 80px;
}
.loginbg{
  position: absolute;
  width: 100%;
  height: 85%;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.page-login {
  @extend %unable-select;
  $backgroundColor: #F0F2F5;
  // ---
  background-color: $backgroundColor;
  height: 100%;
  position: relative;
  // 层
  .page-login--layer {
    @extend %full;
    overflow: auto;
  }
  .page-login--layer-area {
    overflow: hidden;
  }
  // 时间
  .page-login--layer-time {
    font-size: 24em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.03);
    overflow: hidden;
  }
  // 登陆页面控件的容器
  .page-login--content {
    // height: 100%;
    min-height: 500px;
    margin-top: 200px;
  }
  // header
  .page-login--content-header {
    padding: 1em 0;
    .page-login--content-header-motto {
      margin: 0px;
      padding: 0px;
      color: $color-text-normal;
      text-align: center;
      font-size: 12px;
      span {
        color: $color-text-sub;
      }
    }
  }
  // main
  // .page-login--logo {
  //   width: 240px;
  //   margin-bottom: 2em;
  //   margin-top: -2em;
  // }
  // 登录表单
  .page-login--content-main{
    z-index: 2;
  }
  .page-login--form {
    width: 1250px;
    height: 500px;
    position:relative;
    // 卡片
    .el-card {
      margin-bottom: 0px;
    }
    .title1{
      margin-left: 10%;
      font-size: 22px;
      width: 80%;
      text-align: center;
      color: white;
      margin-top: 20px;
    }
    .title2{
      margin-left: 10%;
      font-size: 22px;
      width: 80%;
      text-align: center;
      color: white;
      margin-top: 15px;
    }
    .el-card__body{
      // padding: 50px;
      padding-top: 50px;
      // padding-bottom: 20px;
    }
    // 登录按钮
    .button-login {
      width: 100%;
      font-size: 18px;
      margin-top: 15px;
    }
    // 输入框左边的图表区域缩窄
    .el-input-group__prepend {
      padding: 0px 0px;
    }
    .login-code {
      height: 40px - 2px;
      display: block;
      margin: 0px -20px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    // 登陆选项
    .page-login--options {
      margin: 0px;
      padding: 0px;
      font-size: 14px;
      color: $color-primary;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .page-login--quick {
      width: 100%;
    }
  }
  // 快速选择用户面板
  .page-login--quick-user {
    @extend %flex-center-col;
    padding: 10px 0px;
    border-radius: 4px;
    &:hover {
      background-color: $color-bg;
      i {
        color: $color-text-normal;
      }
      span {
        color: $color-text-normal;
      }
    }
    i {
      font-size: 36px;
      color: $color-text-sub;
    }
    span {
      font-size: 12px;
      margin-top: 10px;
      color: $color-text-sub;
    }
  }
  // footer
  .page-login--content-footer {
    padding: 1em 0;
    .page-login--content-footer-options {
      padding: 0px;
      margin: 0px;
      margin-bottom: 10px;
      font-size: 14px;
      text-align: center;
      a {
        color: $color-text-normal;
        margin: 0 1em;
      }
    }
    .page-login--content-footer-copyright {
      padding: 0px;
      margin: 0px;
      font-size: 12px;
      color: $color-text-normal;
      a {
        color: $color-text-normal;
      }
    }
  }

  // 背景
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: #FFF;
      animation: animate 25s linear infinite;
      bottom: -200px;
      @keyframes animate {
        0%{
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100%{
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      &:nth-child(1) {
        left: 15%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        left: 5%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      &:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      &:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
      &:nth-child(6) {
        left: 75%;
        width: 150px;
        height: 150px;
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 35%;
        width: 200px;
        height: 200px;
        animation-delay: 7s;
      }
      &:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      &:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      &:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
}
</style>
