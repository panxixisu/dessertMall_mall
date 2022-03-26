import Storage from "@/utils/storage";

import { getNews } from "@/service/news/news";
export const NewsModule = {
  namespaced: true,
  state() {
    return {
      newsData: "",
    };
  },
  mutations: {
    changeNewsData(state: any, p: any) {
      state.newsData = p;
    },
  },
  actions: {
    async getNewsData(context: any) {
      const data: any = await getNews();
      if (data.data.code === "101") {
        context.commit("changeNewsData", data.data.data);
      }
    },
  },
};
