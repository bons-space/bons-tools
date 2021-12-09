<template>
  <main>
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item
          ><a href="/">promotion management</a></el-breadcrumb-item
          >
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
        ssdc
      </el-main>
    </el-container>
  </main>
</template>

<script lang="ts">
import Aside from './Aside.vue'

export default {
  name: "Index",
  components: {Aside},
  setup() {
  }
}
</script>

<style scoped lang="scss">
main {
}
</style>
