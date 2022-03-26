<template>
  <div class="news_container">
    <posters />
    <search />
    <news-result />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Posters from "./posters.vue";
import Search from "./search.vue";
import NewsResult from "./NewsResult.vue";
export default defineComponent({
  components: {
    Posters,
    Search,
    NewsResult,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.news_container {
  width: 100%;
  height: 100%;
  margin-top: 120px;
  text-align: center;
  background-color: #f7f7f7;
}
</style>
