<template>
  <div class="page_names">
    <div>
      <div class="title">
        <h4>{{page_title}}</h4>
      </div>
      <NuxtLink to="/">
        <div class="description">
          {{page_description}}
        </div>
      </NuxtLink>
    </div>
    <div class="search_input">
      <div class="search_input_form">

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="#E9ECEF"/>
          <path d="M21.3001 22.0001C21.1201 22.0001 20.9401 21.9301 20.8101 21.8001L18.9501 19.9401C18.6801 19.6701 18.6801 19.2301 18.9501 18.9501C19.2201 18.6801 19.6601 18.6801 19.9401 18.9501L21.8001 20.8101C22.0701 21.0801 22.0701 21.5201 21.8001 21.8001C21.6601 21.9301 21.4801 22.0001 21.3001 22.0001Z" fill="#919EAD"/>
        </svg>

        <input type="text" placeholder="Поиск...">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['page_title','page_description']
  }
</script>
