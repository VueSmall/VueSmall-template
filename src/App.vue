<!--Author:VueSmall-->
<script>
import {defineComponent} from "vue";
import content from '@/components/content.vue'
export default defineComponent({
    components:{
        content
    }
})
</script>
<template>
  <p>VueSmall</p>
  <content></content>
</template>
<style>
*{
    text-align: center;
}
</style>