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

        <div v-for="(item,index) in input_form">
          <div class="contacts">
            <SectionTitle
              :title="item+'й этаж'"
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
          <div class="row">
            <div class="col-xl-6">
              <div class="input_contacts">
                <label for="input_contact">Название этажа O‘ZB</label>
                <div class="input_father">
                  <input type="text" id="input_contact" placeholder="Введите название этажа">
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="input_contacts">
                <label for="input_contact">Название этажа ЎЗБ</label>
                <div class="input_father">
                  <input type="text" id="input_contact1" placeholder="Введите название этажа">
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="input_contacts">
                <label for="input_contact">Название этажа РУС</label>
                <div class="input_father">
                  <input type="text" id="input_contact2" placeholder="Введите название этажа">
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="input_contacts">
                <label for="input_contact">Название этажа ENG</label>
                <div class="input_father">
                  <input type="text" id="input_contact2" placeholder="Введите название этажа">
                </div>
              </div>
            </div>
          </div>

          <div class="author_image">
            <div>
              <label for="auth">
                <div class="auth_text">
                  <div>
                    <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.2273C0 4.57893 4.42795 0 9.89011 0H80.1099C85.5721 0 90 4.57893 90 10.2273V49.7727C90 55.4211 85.572 60 80.1099 60H9.89011C4.42795 60 0 55.4211 0 49.7727V10.2273ZM36.9231 32.7273C43.4753 32.7273 48.7912 27.2301 48.7912 20.4545C48.7912 13.679 43.4753 8.18182 36.9231 8.18182C30.3709 8.18182 25.0549 13.679 25.0549 20.4545C25.0549 27.2301 30.3709 32.7273 36.9231 32.7273ZM47.4725 35.4545H42.9313C41.1016 36.3239 39.0659 36.8182 36.9231 36.8182C34.7802 36.8182 32.7527 36.3239 30.9148 35.4545H26.3736C20.5467 35.4545 15.8242 40.3381 15.8242 46.3636V47.7273C15.8242 49.9858 17.5962 51.8182 19.7802 51.8182H54.0659C56.25 51.8182 58.022 49.9858 58.022 47.7273V46.3636C58.022 40.3381 53.2994 35.4545 47.4725 35.4545ZM64.2857 9.71591C64.2857 8.86867 63.6215 8.18182 62.8022 8.18182C61.9829 8.18182 61.3187 8.86867 61.3187 9.71591V18.4091H52.9121C52.0928 18.4091 51.4286 19.0959 51.4286 19.9432C51.4286 20.7904 52.0928 21.4773 52.9121 21.4773H61.3187V30.1705C61.3187 31.0177 61.9829 31.7045 62.8022 31.7045C63.6215 31.7045 64.2857 31.0177 64.2857 30.1705V21.4773H72.6923C73.5116 21.4773 74.1758 20.7904 74.1758 19.9432C74.1758 19.0959 73.5116 18.4091 72.6923 18.4091H64.2857V9.71591Z" fill="#919EAD"/>
                    </svg>
                  </div>
                  <div class="text_name">
                    Добавить фотографию
                  </div>

                </div>
              </label>
              <input type="file" id="auth" class="d-none">
            </div>
            <div class="photo_important auth_photo_important">
              <div class="important aut_image_imp">
                Важно!
              </div>
              <div class="text_date">
                <span>Ширина:</span>
                800 px
              </div>
              <div class="text_date">
                <span>Высота:</span>
                600 px
              </div>
              <div class="text_date">
                <span>Формат:</span>
                JPG, PNG, GIF, JPEG
              </div>
              <div class="text_date">
                <span>Размер файла:</span>
                Не более 5 МБ
              </div>

            </div>
          </div>
          <div class="add_forms_f" >
            <button class="add_forms"  @click="input_form++" v-if="item==input_form">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4997 7.91634H7.91634V12.4997C7.91634 13.0038 7.50384 13.4163 6.99968 13.4163C6.49551 13.4163 6.08301 13.0038 6.08301 12.4997V7.91634H1.49967C0.995508 7.91634 0.583008 7.50384 0.583008 6.99968C0.583008 6.49551 0.995508 6.08301 1.49967 6.08301H6.08301V1.49967C6.08301 0.995508 6.49551 0.583008 6.99968 0.583008C7.50384 0.583008 7.91634 0.995508 7.91634 1.49967V6.08301H12.4997C13.0038 6.08301 13.4163 6.49551 13.4163 6.99968C13.4163 7.50384 13.0038 7.91634 12.4997 7.91634Z" fill="white"/>
              </svg>
              добавить</button>
            <button class="add_forms delete_forms_f" @click="deleteInput()" v-if="item<input_form">

              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.55718 1.01583L10.208 1.66667H12.4997C13.0038 1.66667 13.4163 2.07917 13.4163 2.58333C13.4163 3.0875 13.0038 3.5 12.4997 3.5H1.49967C0.995508 3.5 0.583008 3.0875 0.583008 2.58333C0.583008 2.07917 0.995508 1.66667 1.49967 1.66667H3.79134L4.44218 1.01583C4.60718 0.850833 4.84551 0.75 5.08384 0.75H8.91551C9.15384 0.75 9.39218 0.850833 9.55718 1.01583ZM1.49981 15.4168C1.49981 16.4251 2.32481 17.2501 3.33315 17.2501H10.6665C11.6748 17.2501 12.4998 16.4251 12.4998 15.4168V6.25014C12.4998 5.2418 11.6748 4.4168 10.6665 4.4168H3.33315C2.32481 4.4168 1.49981 5.2418 1.49981 6.25014V15.4168ZM4.24967 6.25H9.74967C10.2538 6.25 10.6663 6.6625 10.6663 7.16667V14.5C10.6663 15.0042 10.2538 15.4167 9.74967 15.4167H4.24967C3.74551 15.4167 3.33301 15.0042 3.33301 14.5V7.16667C3.33301 6.6625 3.74551 6.25 4.24967 6.25Z" fill="white"/>
              </svg>

              удалить</button>
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
