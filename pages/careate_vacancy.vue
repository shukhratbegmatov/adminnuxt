<template>
  <div>
    <Sidebar></Sidebar>
    <div class="content_container">
      <Pagename
        page_title="Схема Музея"
        page_description="Список контентов"
      ></Pagename>
      <v-app>
        <div class="switch_container">
          <div class="text_date p-0">
            <span>Последние изменения:</span>
            28.08.2022  14:37
          </div>

        </div>
        <div class="text_date author_name p-0">
          <span>Автор изменений:</span>
          Abdusattorov Abdumajid
        </div>

        <div>
          <div class="contacts">
            <SectionTitle
              title="Возраст"
            >

            </SectionTitle>
            <div class="vswitch">
              <v-switch v-model="switch1"
                        color="#2147AC"
              ></v-switch>
            </div>
            <div class="switch_text">
              Показать на сайте
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <label class="select_label">Возраст ОТ</label>
            <v-text-field
              label="Solo"
              placeholder="Placeholder"
              solo
            ></v-text-field>
          </div>
          <div class="col-xl-6">
            <label class="select_label">Возраст ДО</label>
            <v-text-field
              label="Solo"
              placeholder="Placeholder"
              solo
            ></v-text-field>
          </div>
        </div>

        <div>
          <div class="contacts">
            <SectionTitle
              title="Образование"
            >

            </SectionTitle>
            <div class="vswitch">
              <v-switch v-model="switch1"
                        color="#2147AC"
              ></v-switch>
            </div>
            <div class="switch_text">
              Показать на сайте
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <label class="select_label">Образование</label>
            <v-select
              :items="items"
              label="Не имеет значения"
              dense
              solo
            ></v-select>
          </div>
        </div>
        <div class="section_card_border mb-5">
          <div></div>
        </div>
        <div>
          <div class="col-xl-12 p-0">
            <div class="content_buttons">
              <button class="exit">
                отмена
              </button>
              <button class="succes_button">
                сохранить
              </button>
            </div>
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
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
