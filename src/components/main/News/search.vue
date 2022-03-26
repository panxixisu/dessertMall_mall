<template>
  <div
    class="search_wrapper"
    ref="search_wrapper"
    :class="{
      search_wrapper_hide: search_wrapper_ishide,
      search_wrapper_notHide: !search_wrapper_ishide,
    }"
  >
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-select
          v-model="formInline.region"
          placeholder="Activity zone"
          popper-class="select_popper-class"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <button id="search_new">搜索</button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import bus from "@/utils/bus";
import { reactive } from "vue";

export default defineComponent({
  setup() {
    const formInline = reactive({
      user: "",
      region: "",
    });
    //过渡
    const search_wrapper = ref();
    onMounted(() => {
      setTimeout(() => {
        search_wrapper_ishide.value = false;
      }, 500);
    });

    //监听滚动
    //监听滚动
    const search_wrapper_ishide = ref(true);
    let news_wrapper_ishide = ref(true);
    let scrollTop = ref();
    bus.on("scrollTop", (data) => {
      scrollTop.value = data;
    });
    watch(scrollTop, (newvalue, oldvalue) => {
      if (newvalue > 800 || newvalue < 1) {
        search_wrapper_ishide.value = true;
      } else {
        search_wrapper_ishide.value = false;
      }
    });
    const onSubmit = () => {
      console.log("submit!");
    };
    return { formInline, onSubmit, search_wrapper, search_wrapper_ishide };
  },
});
</script>

<style lang="scss" scoped>
.search_wrapper {
  padding: 56px;
  display: flex;
  justify-content: center;

  align-items: center;
  transition: opacity 1200ms ease 0s, transform 1200ms ease 0s;
}
.demo-form-inline {
  // width: 60%;
  // height: 63px;
}
::v-deep .el-input__inner {
  letter-spacing: 2px;
  padding: 0 84px 0 22px;
  color: #333;
  height: 60px;
  background: #5c9cd8;
  border-radius: 50px;
  border: 1px solid #fccf3b;
  background-color: #fff;
  cursor: pointer;
}
::v-deep .el-input__inner:hover {
  border-color: #fccf3b;
}
::v-deep .el-input__inner:focus {
  background-color: #fccf3b;
}
::v-deep .el-select-dropdown__item {
  border-radius: 50px;
}
::v-deep .el-select .el-input.is-focus .el-input__inner {
  border-color: #fccf3b;
}
#search_new {
  height: 63px;
  padding-right: 50px;
  padding-left: 50px;
  border-radius: 50px;
  background-color: #fdd23e;
  color: #464646;
  font-size: 18px;
  letter-spacing: 2px;
}
#search_new:hover {
  cursor: pointer;
}
.search_wrapper_hide {
  opacity: 0;
  transform: translateY(33px);
}
.search_wrapper_notHide {
  opacity: 1;
  transform: translateY(0px);
}
</style>
