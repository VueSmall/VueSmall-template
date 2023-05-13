<!--Author:VueSmall-->
<script>
import {defineComponent} from "vue";
import count from '@/components/count.vue'
export default defineComponent({
    components:{
        count
    }
})
</script>
<template>
  <p>VueSmall</p>
  <count></count>
</template>
<style>
*{
    text-align: center;
}
</style>