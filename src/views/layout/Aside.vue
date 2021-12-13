<template>
<el-menu>2wd</el-menu>
</template>

<script lang="ts">
import {useRouter} from 'vue-router'
export default {
  name: "Aside",
  setup(){
    console.log(useRouter().getRoutes());
  }
}
</script>

<style scoped lang="scss">

</style>
