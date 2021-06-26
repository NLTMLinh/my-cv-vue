<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="introduce">
        <NuxtLink to="/"> <a-icon />Introduce </NuxtLink>
      </a-menu-item>

      <a-menu-item key="education">
        <NuxtLink to="/"> <a-icon />Education </NuxtLink>
      </a-menu-item>

      <a-menu-item key="experience">
        <NuxtLink to="/"> <a-icon />Experience </NuxtLink>
      </a-menu-item>

      <a-menu-item key="contact">
        <NuxtLink to="/"> <a-icon />Contact </NuxtLink>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['introduce'],
    }
  },
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.ant-menu {
  text-align: right;
  position: fixed;
  height: 48px;
  background: transparent;
  width: 100%;
  z-index: 2;
  border: none;
  .ant-menu-item > a {
    color: #fff;
  }
  .ant-menu-item-selected > a {
    color: @gold-6;
  }
}
</style>
