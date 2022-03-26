<template>
  <div class="userInfo">
    <ul v-if='isLogin'>
      <li @click="login">
        <div>
          <span class="nav_en_txt">Login</span>
          <br />
          <div class="nav_ch_txt">登录</div>
        </div>
        <div class="curveline"></div>
      </li>
      <li @click="register">
        <div>
          <span class="nav_en_txt">Register</span>
          <br />
          <div class="nav_ch_txt">注册</div>
        </div>
        <div class="curveline"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from "vue";
import {useStore} from '@/store'
import bus from '@/utils/bus'
export default defineComponent({
  setup() {
    const login =()=>{
      bus.emit('openLogin',true)
    }
    const register =()=>{
       bus.emit('openLogin',true)
       bus.emit('forgetPassword')
    }
    const store = useStore()
    const isLogin = computed(()=>{
      console.log(store.state.UserModule.userInfo)
      console.log(store.state.UserModule.userInfo)
      if(store.state.UserModule.userInfo!=''){
        return false
      }
      return true
    })
    return {login,register,isLogin};
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  padding: 0;
}
li {
  text-align: center;
  padding: 0 10px;
}
.nav_ch_txt {
  font-family: Adobe Fan Heiti Std B, " Adobe Fan Heiti Std B";
   font-size: 16px;
  letter-spacing: 2px;
}
li {
  color: black;
  text-decoration: none;
  

}
li:hover{
  cursor: pointer;
}
.nav_en_txt {
  font-family: Varela Round, sans-serif;
  color: #ffc527;
  font-size: 5px;
  line-height: 10px;
  letter-spacing: 0px;
}
.curveline {
  position: relative;
  left: -1px;
  top: -3px;
  z-index: -1;
  width: 100%;
  height: 16px;
  background-image: url("../../../assets/img/navBar_curve.png");
  background-position: 50% 50%;
  background-size: auto;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateX(-7px) translateY(0px) translateZ(0px);
  transition: opacity 200ms ease 0s, transform 200ms ease 0s;
}
li:hover .nav_ch_txt {
  opacity: 0.7;
}
li:hover .nav_en_txt {
  opacity: 0.7;
}
li:hover  .curveline {
  transform: translateX(0px);
  opacity: 1;
}
li {
  text-align: center;
  padding: 0 25px;
}
.userInfo{
  width: 225px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
