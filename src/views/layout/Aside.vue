<template>
<el-menu>2wd</el-menu>
</template>

<script lang="ts">
import {useRouter,useRoute} from 'vue-router'
export default {
  name: "Aside",
  setup(){
    console.log(useRouter().getRoutes());
    console.log(useRoute());
  }
}
</script>

<style scoped lang="scss">

</style>
