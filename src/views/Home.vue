<template>
  <div class="common-layout">
    <el-container>
      <el-header ref="el_header"
        ><div class="head_wrapper">
          <logo /><nav-header class="nav-header" /><user-nav /></div
      ></el-header>

      <!-- <nav-submenu class="nav_menu" /> -->
      <el-main><router-view /> </el-main>
      <el-footer><login/></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { NavHeader, Logo, UserNav } from "@/components/nav-header/index";
import bus from "@/utils/bus";
import Login from '@/components/login/index.vue'
// import NavSubmenu from "@/components/nav-submenu.vue";
export default defineComponent({
  components: {
    NavHeader,
    Logo,
    UserNav,
    Login
    // NavSubmenu,
  },
  setup() {
    const el_header = ref();
    onMounted(() => {
      window.addEventListener(
        "scroll",
        () => {
          var scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

          bus.emit("scrollTop", scrollTop);
        },
        true
      );

      setTimeout(() => {
        el_header.value.$el.style.opacity = 1;
        // el_header.value.$el.style.transform = "translateY(0px)";
      }, 500);
    });
    return { el_header };
  },
});
</script>

<style scoped>
.common-layout {
  width: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.el-header,
.el-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.el-header {
  position: fixed;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 1px 11px 0 rgb(0 0 0 / 17%);
}
.el-main {
  overflow: hidden;
  padding: 0;
}
.head_wrapper {
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-header {
  height: 120px;
  /* box-shadow: 0 1px 11px 0 rgb(0 0 0 / 17%); */
  opacity: 0;
  /* transform: translateX(0px) translateY(-33px) translateZ(0px); */
  transition: opacity 1500ms ease 0s, transform 1200ms ease 0s;
}
.nav-header {
  height: 100%;
}
</style>
