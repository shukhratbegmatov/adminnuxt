<template>
  <div>
    <Sidebar></Sidebar>
    <div class="content_container">
      <Pagename
        page_title="Вакансии"
        page_description="Список контентов"
      ></Pagename>
      <v-app>

        <div>
          <div class="contacts">
            <SectionTitle
              title="Активные"
            >

            </SectionTitle>
          </div>
          <div class="row">

          </div>
          <div class="add_forms_f" >
            <NuxtLink to="/careate_vacancy" class="add_forms_link" >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4997 7.91634H7.91634V12.4997C7.91634 13.0038 7.50384 13.4163 6.99968 13.4163C6.49551 13.4163 6.08301 13.0038 6.08301 12.4997V7.91634H1.49967C0.995508 7.91634 0.583008 7.50384 0.583008 6.99968C0.583008 6.49551 0.995508 6.08301 1.49967 6.08301H6.08301V1.49967C6.08301 0.995508 6.49551 0.583008 6.99968 0.583008C7.50384 0.583008 7.91634 0.995508 7.91634 1.49967V6.08301H12.4997C13.0038 6.08301 13.4163 6.49551 13.4163 6.99968C13.4163 7.50384 13.0038 7.91634 12.4997 7.91634Z" fill="white"/>
              </svg>
              добавить</NuxtLink>
          </div>
        </div>
        <div class="section_card_border mb-5">
          <div></div>
        </div>
      </v-app>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switch1: true,
      isActive: false,
      myImages:[],
      imageUrl:[],
      files_name:[],
      text_main:'',
      show_text:false,
      input_form:1,
      input_form1:1
    }
  },
  methods:{
    deleteInput(){
      if(this.input_form>0){
        this.input_form--
      }
    },
    deleteInput1(){
      if(this.input_form1>0){
        this.input_form1--
      }
    }
  }

}
</script>
