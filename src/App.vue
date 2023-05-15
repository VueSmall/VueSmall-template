<!--Author:VueSmall-->
<script>
import {defineComponent} from "vue";
import content from '@/components/content.vue'
import notice from '@/components/notice.vue'

export default defineComponent({
    components: {
        content,
        notice
    }
})
</script>
<template>
    <notice></notice>
    <p>VueSmall</p>
    <content></content>
</template>
<style>
* {
    text-align: center;
}
</style>