<template>
  <div>
    <Sidebar></Sidebar>
    <Sidebar></Sidebar>
    <div class="content_container">
      <Pagename
        page_title="Экспонаты"
        page_description="Список контентов"
      ></Pagename>
      <div class="text_date author_name p-0">
        <span>Последние изменения:</span>
        28.08.2022  14:37
      </div>
      <div class="text_date author_name p-0">
        <span>Автор изменений:</span>
        Abdusattorov Abdumajid
      </div>
      <div class="text_date author_name p-0">
        <span>Общее количество экспонатов:</span>
        1 458
      </div>
      <div class="exhibits">
        <div class="exhibits_text">
          <div class="exhibits_title">
            Активные
          </div>
          <div class="exhibits_desc">
            Деактивированные
          </div>
        </div>
        <div class="exhibits_count">
          <div class="exhibits_count_one">
            Количество экспонатов:
          </div>
          <div class="exhibits_count_two">
            768
          </div>
        </div>
      </div>
      <div class="more_exhibits">
        <div class="row">
          <div class="col-xl-4" v-for="item in 21" :key="item">
            <NuxtLink to="/" class="text-decoration-none">
              <div class="exhibits_button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.31026 15.2356L2.79687 18.2629C2.60273 17.6606 2.5 16.9701 2.5 16.19V7.81C2.5 6.08944 3.01093 4.77618 3.89355 3.89355C4.77618 3.01093 6.08944 2.5 7.81 2.5H16.19C17.9106 2.5 19.2238 3.01093 20.1064 3.89355C20.9891 4.77618 21.5 6.08944 21.5 7.81V12.8114L20.6958 12.1207C19.7284 11.2898 18.1916 11.2898 17.2242 12.1207L13.0644 15.6906L13.0642 15.6907C12.4716 16.1998 11.4884 16.1998 10.8958 15.6907L10.8959 15.6906L10.8879 15.684L10.5531 15.4084C9.66658 14.6391 8.29039 14.5744 7.31093 15.2351C7.3107 15.2353 7.31048 15.2354 7.31026 15.2356Z" fill="#FEFFFF" stroke="#919EAD"/>
                  <path d="M9.00012 10.3791C10.3146 10.3791 11.3801 9.31358 11.3801 7.99914C11.3801 6.6847 10.3146 5.61914 9.00012 5.61914C7.68568 5.61914 6.62012 6.6847 6.62012 7.99914C6.62012 9.31358 7.68568 10.3791 9.00012 10.3791Z" fill="#919EAD"/>
                  <path d="M22.0001 13.9005V16.1905C22.0001 19.8305 19.8301 22.0005 16.1901 22.0005H7.81006C5.26006 22.0005 3.42006 20.9305 2.56006 19.0305L2.67006 18.9505L7.59006 15.6505C8.39006 15.1105 9.52006 15.1705 10.2301 15.7905L10.5701 16.0705C11.3501 16.7405 12.6101 16.7405 13.3901 16.0705L17.5501 12.5005C18.3301 11.8305 19.5901 11.8305 20.3701 12.5005L22.0001 13.9005Z" fill="#919EAD"/>
                </svg>
                Экспонат №{{ item }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      is_border:false
    }
  }
}
</script>
