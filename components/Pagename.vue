<template>
  <div class="page_names">
    <div class="title">
      <h4>{{page_title}}</h4>
    </div>
    <NuxtLink to="/">
      <div class="description">
        {{page_description}}
      </div>
    </NuxtLink>
  </div>
</template>
<script>
  export default {
    props:['page_title','page_description']
  }
</script>
