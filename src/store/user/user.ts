import { getUser } from "@/service/user/user";
import bus from '@/utils/bus';
import Storage from '@/utils/storage'
import { ElMessage } from 'element-plus'
export const UserModule = {
  namespaced: true,
  state() {
    return {
      userInfo:Storage.getCache('userInfo',false)|| "",
      token:Storage.getCache('token',false)|| '',
    
    };
  },
  mutations: {
    changeuserInfo(state: any, p: any) {
      state.userInfo = p;
      Storage.setCache('userInfo',p,false)
    },
    changeToken(state: any, token: string) {
      state.token = token;
      Storage.setCache('token', token,false)
    },
  },
  actions: {
    async getUser(context: any,payload:any) {
      const data: any = await getUser(payload.account);
      const userInfo =data.data.data
      if (data.data.code === "101") {
        context.commit("changeuserInfo", userInfo);
        context.commit("changeToken",userInfo.token);
        Storage.setCache('userInfo',userInfo,false)
        Storage.setCache('token',userInfo.token,false)
        
         bus.emit('openLogin',false)
     
          ElMessage({
            message: data.data.msg,
            type: 'success',
           })
         
      }else{
        ElMessage({
          message: data.data.msg,
          type: 'warning',
         })
         return
      }

       //用户是否记住密码
       if (payload.isKeepPasswordRef.value) {
        Storage.setCache('phonenumber',payload.account.phonenumber)
        Storage.setCache('AccountPassword',payload.account.password)
        Storage.setCache('isKeepPassword','1')
      } else {
        Storage.clearUserCache()
      }
    },
  },
};
