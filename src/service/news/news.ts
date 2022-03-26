import request from "../index";
enum NewsApi {
  News = "/news/getNews",
}
export function getNews() {
  return request.get({
    url: NewsApi.News,
    // isShowLoading: false
  });
}
