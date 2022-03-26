<template>
  <div>
    
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("categoryModule/getCategory");
    });
    store.dispatch("categoryModule/getCategory");
    store.dispatch("ProductModule/getProduct");
    store.dispatch("NewsModule/getNewsData");
    return {};
  },
});
</script>

<style scoped></style>
