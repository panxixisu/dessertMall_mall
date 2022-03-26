import request from "../index";
enum UserApi {
  getUserInfo = "/user/accountLogin",
}
export function getUser(obj:any) {
  return request.post({
    url: UserApi.getUserInfo,
    isShowLoading: false,
    data:  obj   
  });
}
