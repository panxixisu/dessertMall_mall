import { createStore, useStore as useVuexStore } from "vuex";
import { categoryModule } from "./category/category";
import { ProductModule } from "./product/product";
import { NewsModule } from "./news/news";
import { UserModule } from "./user/user";
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { categoryModule, ProductModule, NewsModule,UserModule },
});
export function useStore() {
  return useVuexStore();
}

export default store;
