<template>
  <div class="login-wrapper">
    <div class="login-input">
      <div class="login-header">
        <div class="header-left">用户登录</div>
        <div class="header-right">
          没有账号?
          <router-link to="/home/register">立即注册</router-link>
        </div>
      </div>
      <div class="submit-form">
        <div class="username"><input type="text" placeholder="账号" />x</div>
        <div class="password"><input type="text" placeholder="密码" />x</div>
      </div>
      <div class="login-footer">
        <div class="outoLogin">
          <input type="checkbox" />
          自动登录
        </div>
        <div class="forget">
          忘记密码
        </div>
      </div>
      <div class="login-submit">
        <button class="btn-submit">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.login-wrapper {
  width: 100vw;
  height: 90vh;
  position: relative;
  background-color: #f6f6f6;
  .login-input {
    position: absolute;
    padding: 30px;
    top: 10%;
    left: 50%;
    width: 500px;
    background-color: #fff;
    transform: translate(-50%);
    .login-header {
      display: flex;
      align-items: center;
      .header-left {
        width: 50%;
        font-size: 25px;
        font-weight: 500;
      }
      .header-right {
        width: 50%;
        font-size: 14px;
        color: #777;
        text-align: right;
        a {
          text-decoration: none;
        }
      }
    }
    .login-footer {
      display: flex;
      align-items: center;
      height: 40px;
      justify-content: space-between;
    }
    .submit-form {
      > div {
        padding: 50px 0 21px;
        border-bottom: 1px solid #d5d5d5;
        text-align: right;
        input {
          width: 480px;
          height: 25px;
          outline: none;
          border: none;
          text-indent: 4px;
        }
      }
    }
  }
  .login-submit {
    .btn-submit {
      display: block;
      width: 400px;
      border: 0;
      text-align: center;
      color: white;
      font-size: 18px;
      border-radius: 5px;
      height: 50px;
      line-height: 50px;
      margin: 50px auto 50px;
      background-color: #f75016;
    }
  }
}
</style>
