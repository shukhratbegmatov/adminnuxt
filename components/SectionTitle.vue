<template>
  <div class="section_title">
    {{title}}

   <div v-html="icon">
   </div>



  </div>
</template>
<script>
export default {
  props:['title','icon']
}
</script>
