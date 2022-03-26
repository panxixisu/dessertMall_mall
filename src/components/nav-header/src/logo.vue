<template>
  <div>
    <transition name="logo">
      <img src="@/assets/img/text-684663.svg" class="left" alt="" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
img {
  width: 160px;
  height: 100%;
  object-fit: contain;
}
img:hover {
  opacity: 0.7;
}
</style>
