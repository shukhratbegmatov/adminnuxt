<template>
        <div>
          <NuxtLink :to="'/'+link" class="card_links">
            <div class="section_cards">
              <div class="card_icon" v-html="icon">

              </div>
              <div class="card_title">
                {{title}}
              </div>
            </div>
          </NuxtLink>
        </div>

</template>
<script>
export default {
  props:['title','icon','link']
}
</script>
