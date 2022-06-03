<template>
  <div>
    <Sidebar></Sidebar>
    <div class="content_container">
      <Pagename
        page_title="Редактирование руководства"
        page_description="Список контентов"
      ></Pagename>
          <v-app>

            <div class="switch_container">
            <div class="text_date p-0">
              <span>Последние изменения:</span>
              28.08.2022  14:37
            </div>
            <div class="vswitch">
              <v-switch v-model="switch1"
                        color="#2147AC"
              ></v-switch>
            </div>
              <div class="switch_text">
                Показать на сайте
              </div>
            </div>
            <div class="text_date author_name p-0">
              <span>Автор изменений:</span>
              Abdusattorov Abdumajid
            </div>

            <div>
              <SectionTitle
                title="Фотография"
              >

              </SectionTitle>
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
            <SectionTitle
              title="Дата рождения"
            >

            </SectionTitle>
            <div class="date_auth">

            </div>
           <div class="contacts">
             <SectionTitle
               title="Контактные данные"
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
            <div class="col-xl-4">
              <div class="input_contacts">
                <label for="input_contact">Номер телефона</label>
                <div class="input_father">
                  <input type="text" id="input_contact" placeholder="Введите номер телефона">
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="input_contacts">
                <label for="input_contact">Дополнительный номер телефона</label>
                <div class="input_father">
                  <input type="text" id="input_contact1" placeholder="Введите номер телефона">
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="input_contacts">
                <label for="input_contact">Электронная почта</label>
                <div class="input_father">
                  <input type="text" id="input_contact2" placeholder="Введите электронную почту">
                </div>
              </div>
            </div>
          </div>

            <div class="section_card_border">
              <div></div>
            </div>
            <div class="contacts">
              <SectionTitle
                title="График работы"
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
              <div class="col-xl-3">
                <div class="input_contacts">
                  <label for="input_contact">Рабочая неделя С</label>
                  <div class="input_father">
                    <input type="text" id="input_contact" placeholder="Выберите день">
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="input_contacts">
                  <label for="input_contact">Рабочая неделя ДО</label>
                  <div class="input_father">
                    <input type="text" id="input_contact1" placeholder="Выберите день">
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="input_contacts">
                  <label for="input_contact">Обеденный перерыв С</label>
                  <div class="input_father">
                    <input type="text" id="input_contact2" placeholder="Введите время">
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="input_contacts">
                  <label for="input_contact">Обеденный перерыв ДО</label>
                  <div class="input_father">
                    <input type="text" id="input_contact2" placeholder="Введите время">
                  </div>
                </div>
              </div>
            </div>
            <div class="section_card_border">
              <div></div>
            </div>
            <div class="contacts">
              <SectionTitle
                title="Основные"
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
            <div class="museum_lang">
              <div class="lang_title">
                Язык:
              </div>
              <div class="multuple_lang">
                <button @click="isActive=!isActive">
                  Русский
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.58372 1.00017L3.99706 3.58683L1.41039 1.00017C1.28584 0.875331 1.11674 0.805176 0.940391 0.805176C0.764045 0.805176 0.594945 0.875331 0.470391 1.00017C0.210391 1.26017 0.210391 1.68017 0.470391 1.94017L3.53039 5.00017C3.79039 5.26017 4.21039 5.26017 4.47039 5.00017L7.53039 1.94017C7.79039 1.68017 7.79039 1.26017 7.53039 1.00017C7.27039 0.746833 6.84372 0.740166 6.58372 1.00017Z"
                      fill="#919EAD"/>
                  </svg>
                </button>
                <div class="drop_menu" :class="{'active':isActive}">
                  <div>
                    <div>
                      <button class="active">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.86337 7.5831L1.55004 5.26976C1.42548 5.14493 1.25638 5.07477 1.08004 5.07477C0.903694 5.07477 0.734593 5.14493 0.610039 5.26976C0.350039 5.52976 0.350039 5.94976 0.610039 6.20976L3.39671 8.99643C3.65671 9.25643 4.07671 9.25643 4.33671 8.99643L11.39 1.9431C11.65 1.6831 11.65 1.2631 11.39 1.0031C11.2655 0.878261 11.0964 0.808105 10.92 0.808105C10.7437 0.808105 10.5746 0.878261 10.45 1.0031L3.86337 7.5831Z"
                            fill="#3068FE"/>
                        </svg>
                        Ўзбекча
                      </button>
                    </div>
                    <div>
                      <button>
                        O‘zbekcha
                      </button>
                    </div>
                    <div>
                      <button>
                        Русский
                      </button>
                    </div>
                    <div>
                      <button>English</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6">
                <div class="input_contacts">
                  <label for="input_contact">Фамилия</label>
                  <div class="input_father">
                    <input type="text" id="input_contact" placeholder="Введите фамилию">
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="input_contacts">
                  <label for="input_contact">Имя</label>
                  <div class="input_father">
                    <input type="text" id="input_contact1" placeholder="Введите имя">
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="input_contacts">
                  <label for="input_contact">Отчество</label>
                  <div class="input_father">
                    <input type="text" id="input_contact2" placeholder="Введите отчество">
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="input_contacts">
                  <label for="input_contact">Должность</label>
                  <div class="input_father">
                    <input type="text" id="input_contact2" placeholder="Введите название должности">
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="input_contacts">
                  <label for="input_contact">Должность (полная)</label>
                  <div class="input_father">
                    <input type="text" id="input_contact2" placeholder="Введите должность">
                  </div>
                </div>
              </div>
            </div>

            <div class="section_card_border">
              <div></div>
            </div>
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
            <div>
              <div class="col-xl-12 p-0">
                <div class="input_contacts" v-for="(item,index) in input_form">
                  <label for="input_contact">Образование</label>
                  <div class="add_input" >
                    <div class="input_father">
                      <input type="text" id="input_contact2" placeholder="Введите ВУЗ и годы образования">
                    </div>
                    <div>
                      <button class="add_btn" @click="input_form++" v-if="item==input_form">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="#FEFFFF"/>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button class="add_btn delete_btn" @click="deleteInput()" v-if="item<input_form">

                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.79 0.29L10.5 1H13C13.55 1 14 1.45 14 2C14 2.55 13.55 3 13 3H1C0.45 3 0 2.55 0 2C0 1.45 0.45 1 1 1H3.5L4.21 0.29C4.39 0.11 4.65 0 4.91 0H9.09C9.35 0 9.61 0.11 9.79 0.29ZM1.00015 16.0002C1.00015 17.1002 1.90015 18.0002 3.00015 18.0002H11.0002C12.1002 18.0002 13.0002 17.1002 13.0002 16.0002V6.00015C13.0002 4.90015 12.1002 4.00015 11.0002 4.00015H3.00015C1.90015 4.00015 1.00015 4.90015 1.00015 6.00015V16.0002ZM4 6H10C10.55 6 11 6.45 11 7V15C11 15.55 10.55 16 10 16H4C3.45 16 3 15.55 3 15V7C3 6.45 3.45 6 4 6Z" fill="#FEFFFF"/>
                        </svg>

                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section_card_border">
              <div></div>
            </div>

            <div class="contacts">
              <SectionTitle
                title="Государственные награды"
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
            <div>
              <div class="col-xl-12 p-0">
                <div class="input_contacts" v-for="(item,index) in input_form1">
                  <label for="input_contact">Награда</label>
                  <div class="add_input" >
                    <div class="input_father">
                      <input type="text" id="input_contact2" placeholder="Введите ВУЗ и годы образования">
                    </div>
                    <div>
                      <button class="add_btn" @click="input_form1++" v-if="item==input_form1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="#FEFFFF"/>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button class="add_btn delete_btn" @click="deleteInput1()" v-if="item<input_form1">

                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.79 0.29L10.5 1H13C13.55 1 14 1.45 14 2C14 2.55 13.55 3 13 3H1C0.45 3 0 2.55 0 2C0 1.45 0.45 1 1 1H3.5L4.21 0.29C4.39 0.11 4.65 0 4.91 0H9.09C9.35 0 9.61 0.11 9.79 0.29ZM1.00015 16.0002C1.00015 17.1002 1.90015 18.0002 3.00015 18.0002H11.0002C12.1002 18.0002 13.0002 17.1002 13.0002 16.0002V6.00015C13.0002 4.90015 12.1002 4.00015 11.0002 4.00015H3.00015C1.90015 4.00015 1.00015 4.90015 1.00015 6.00015V16.0002ZM4 6H10C10.55 6 11 6.45 11 7V15C11 15.55 10.55 16 10 16H4C3.45 16 3 15.55 3 15V7C3 6.45 3.45 6 4 6Z" fill="#FEFFFF"/>
                        </svg>

                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section_card_border">
              <div></div>
            </div>
            <div class="section_card_border">
              <div></div>
            </div>
            <div class="contacts">
              <SectionTitle
                title="Биография"
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
            <div>
              <div class="col-xl-12 p-0">
                <div class="input_contacts">
                  <label for="input_contact">Биография</label>
                  <div class="add_input" >
                    <div class="input_father text_area_input">
                      <textarea placeholder="Введите ВУЗ и годы образования"></textarea>
                    </div>
                  </div>
                </div>
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
