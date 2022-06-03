<template>
  <div>
    <Sidebar></Sidebar>
    <div class="content_container">
      <Pagename
        page_title="Контакты"
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
              type="number"
              solo
            ></v-text-field>
          </div>
          <div class="col-xl-6">
            <label class="select_label">Возраст ДО</label>
            <v-text-field
              type="number"
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
          <div class="contacts">
            <SectionTitle
              title="Опыт работы"
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
            <label class="select_label">Опыт работы</label>
            <v-select
              :items="items"
              label="Не имеет значения"
              dense
              solo
            ></v-select>
          </div>
        </div>

        <div>
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
        </div>

        <div class="create_museum">
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
        </div>

        <div class="input_contacts">
          <label for="input_contact">Название этажа ЎЗБ</label>
          <div class="input_father">
            <input type="text" id="input_contact1" placeholder="Введите название вакансии">
          </div>
        </div>
        <div class="docs_input">
          <div class="docs_f">
            <label for="file_input">
              <div class="docs_icons">
                <div class="f_docs">
                  <div>
                    <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.4123 44.9953C20.4123 46.0434 20.5527 46.9519 20.8333 47.7209C21.114 48.4837 21.5442 49.0729 22.1238 49.4884C22.7095 49.8977 23.46 50.1023 24.3752 50.1023C25.2966 50.1023 26.047 49.8977 26.6267 49.4884C27.2063 49.0729 27.6334 48.4837 27.908 47.7209C28.1826 46.9519 28.3198 46.0434 28.3198 44.9953C28.3198 43.4016 28.0056 42.155 27.3772 41.2558C26.7548 40.3504 25.7603 39.8977 24.3935 39.8977C23.4783 39.8977 22.7248 40.1023 22.1329 40.5116C21.5472 40.9209 21.114 41.507 20.8333 42.2698C20.5527 43.0264 20.4123 43.9349 20.4123 44.9953Z" fill="#919EAD"/>
                      <path d="M13.5756 44.9488C13.5756 43.8326 13.4017 42.9147 13.054 42.1953C12.7123 41.476 12.2058 40.9426 11.5347 40.5953C10.8696 40.2419 10.049 40.0651 9.07274 40.0651H7.19653V49.9442H8.75241C10.3693 49.9442 11.5774 49.5256 12.3767 48.6884C13.176 47.8512 13.5756 46.6047 13.5756 44.9488Z" fill="#919EAD"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M30 0H4C1.79086 0 0 1.79086 0 4V56C0 58.2091 1.79086 60 4 60H44C46.2091 60 48 58.2091 48 56V15H34C31.7909 15 30 13.2091 30 11V0ZM30.2327 47.8605C30.495 46.9984 30.6262 46.0434 30.6262 44.9953C30.6262 43.5752 30.3943 42.3442 29.9306 41.3023C29.473 40.2543 28.7836 39.4419 27.8622 38.8651C26.9409 38.2884 25.7847 38 24.3935 38C22.9719 38 21.7943 38.2915 20.8608 38.8744C19.9334 39.4512 19.2408 40.2636 18.7832 41.3116C18.3317 42.3535 18.106 43.5752 18.106 44.9767C18.106 46.0248 18.2341 46.9798 18.4904 47.8419C18.7466 48.7039 19.131 49.445 19.6435 50.0651C20.1622 50.6853 20.812 51.1628 21.593 51.4977C22.3801 51.8326 23.3075 52 24.3752 52C25.4247 52 26.3399 51.8326 27.1209 51.4977C27.9019 51.1628 28.5517 50.6884 29.0703 50.0744C29.589 49.4543 29.9764 48.7163 30.2327 47.8605ZM15.0217 48.7256C15.583 47.6961 15.8637 46.4155 15.8637 44.8837C15.8637 43.4264 15.5891 42.2047 15.04 41.2186C14.4908 40.2264 13.7129 39.4791 12.7062 38.9767C11.6994 38.4682 10.5035 38.214 9.1185 38.214H5V51.814H8.7158C10.2229 51.814 11.5103 51.5566 12.578 51.0419C13.6458 50.5209 14.4603 49.7488 15.0217 48.7256ZM39.2018 39.9163C38.5612 39.9163 37.9876 40.0341 37.4812 40.2698C36.9809 40.5054 36.5568 40.8465 36.2091 41.293C35.8613 41.7333 35.5959 42.2698 35.4128 42.9023C35.2298 43.5287 35.1382 44.2357 35.1382 45.0233C35.1382 46.0775 35.2847 46.986 35.5776 47.7488C35.8704 48.5054 36.3158 49.0884 36.9138 49.4977C37.5117 49.9008 38.2683 50.1023 39.1835 50.1023C39.751 50.1023 40.3031 50.0465 40.8401 49.9349C41.377 49.8233 41.9322 49.6713 42.5058 49.4791V51.3767C41.9627 51.5938 41.4136 51.7519 40.8584 51.8512C40.3031 51.9504 39.6625 52 38.9364 52C37.5697 52 36.4348 51.7116 35.5318 51.1349C34.6349 50.5581 33.9637 49.7457 33.5183 48.6977C33.079 47.6496 32.8593 46.4217 32.8593 45.014C32.8593 43.9845 32.9997 43.0419 33.2803 42.186C33.561 41.3302 33.9698 40.5922 34.5067 39.9721C35.0437 39.3457 35.7057 38.8651 36.4928 38.5302C37.286 38.1891 38.192 38.0186 39.211 38.0186C39.8821 38.0186 40.5411 38.0961 41.1879 38.2512C41.8407 38.4 42.4448 38.614 43 38.893L42.2312 40.7349C41.7675 40.5116 41.2824 40.3194 40.776 40.1581C40.2696 39.9969 39.7449 39.9163 39.2018 39.9163Z" fill="#919EAD"/>
                      <path d="M48 15L30 0V11C30 13.2091 31.7909 15 34 15H48Z" fill="#1F1F1F"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0217 48.7256C15.583 47.6961 15.8637 46.4155 15.8637 44.8837C15.8637 43.4264 15.5891 42.2047 15.04 41.2186C14.4908 40.2264 13.7129 39.4791 12.7062 38.9767C11.6994 38.4682 10.5035 38.214 9.1185 38.214H5V51.814H8.7158C10.2229 51.814 11.5103 51.5566 12.578 51.0419C13.6458 50.5209 14.4603 49.7488 15.0217 48.7256ZM13.5756 44.9488C13.5756 43.8326 13.4017 42.9147 13.054 42.1953C12.7123 41.476 12.2058 40.9426 11.5347 40.5953C10.8696 40.2419 10.049 40.0651 9.07274 40.0651H7.19653V49.9442H8.75241C10.3693 49.9442 11.5774 49.5256 12.3767 48.6884C13.176 47.8512 13.5756 46.6047 13.5756 44.9488Z" fill="#FEFFFF"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2327 47.8605C30.495 46.9984 30.6262 46.0434 30.6262 44.9953C30.6262 43.5752 30.3943 42.3442 29.9306 41.3023C29.473 40.2543 28.7836 39.4419 27.8622 38.8651C26.9409 38.2884 25.7847 38 24.3935 38C22.9719 38 21.7943 38.2915 20.8608 38.8744C19.9334 39.4512 19.2408 40.2636 18.7832 41.3116C18.3317 42.3535 18.106 43.5752 18.106 44.9767C18.106 46.0248 18.2341 46.9798 18.4904 47.8419C18.7466 48.7039 19.131 49.445 19.6435 50.0651C20.1622 50.6853 20.812 51.1628 21.593 51.4977C22.3801 51.8326 23.3075 52 24.3752 52C25.4247 52 26.3399 51.8326 27.1209 51.4977C27.9019 51.1628 28.5517 50.6884 29.0703 50.0744C29.589 49.4543 29.9764 48.7163 30.2327 47.8605ZM20.4123 44.9953C20.4123 46.0434 20.5527 46.9519 20.8333 47.7209C21.114 48.4837 21.5442 49.0729 22.1238 49.4884C22.7095 49.8977 23.46 50.1023 24.3752 50.1023C25.2966 50.1023 26.047 49.8977 26.6267 49.4884C27.2063 49.0729 27.6334 48.4837 27.908 47.7209C28.1826 46.9519 28.3198 46.0434 28.3198 44.9953C28.3198 43.4016 28.0056 42.155 27.3772 41.2558C26.7548 40.3504 25.7603 39.8977 24.3935 39.8977C23.4783 39.8977 22.7248 40.1023 22.1329 40.5116C21.5472 40.9209 21.114 41.507 20.8333 42.2698C20.5527 43.0264 20.4123 43.9349 20.4123 44.9953Z" fill="#FEFFFF"/>
                      <path d="M39.2018 39.9163C38.5612 39.9163 37.9876 40.0341 37.4812 40.2698C36.9809 40.5054 36.5568 40.8465 36.2091 41.293C35.8613 41.7333 35.5959 42.2698 35.4128 42.9023C35.2298 43.5287 35.1382 44.2357 35.1382 45.0233C35.1382 46.0775 35.2847 46.986 35.5776 47.7488C35.8704 48.5054 36.3158 49.0884 36.9138 49.4977C37.5117 49.9008 38.2683 50.1023 39.1835 50.1023C39.751 50.1023 40.3031 50.0465 40.8401 49.9349C41.377 49.8233 41.9322 49.6713 42.5058 49.4791V51.3767C41.9627 51.5938 41.4136 51.7519 40.8584 51.8512C40.3031 51.9504 39.6625 52 38.9364 52C37.5697 52 36.4348 51.7116 35.5318 51.1349C34.6349 50.5581 33.9637 49.7457 33.5183 48.6977C33.079 47.6496 32.8593 46.4217 32.8593 45.014C32.8593 43.9845 32.9997 43.0419 33.2803 42.186C33.561 41.3302 33.9698 40.5922 34.5067 39.9721C35.0437 39.3457 35.7057 38.8651 36.4928 38.5302C37.286 38.1891 38.192 38.0186 39.211 38.0186C39.8821 38.0186 40.5411 38.0961 41.1879 38.2512C41.8407 38.4 42.4448 38.614 43 38.893L42.2312 40.7349C41.7675 40.5116 41.2824 40.3194 40.776 40.1581C40.2696 39.9969 39.7449 39.9163 39.2018 39.9163Z" fill="#FEFFFF"/>
                    </svg>
                  </div>
                  <div class="text_docs">Добавить файл вакансии</div>
                </div>
              </div>
            </label>
            <input type="file" required id="file_input" class="d-none">
            <div>
              <div class="docs_slugs">
                <div class="docs_title">Формат:</div>
                <div class="docs_size">PDF, DOC, XLS</div>
              </div>
              <div class="docs_slugs">
                <div class="docs_title">Размер файла:</div>
                <div class="docs_size">Не более 5 МБ</div>
              </div>
            </div>
          </div>
        </div>

        <div class="contacts">
          <SectionTitle
            title="Основные обязанности"
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
        <div class="section_card_border mb-5">
          <div></div>
        </div>

        <div class="contacts">
          <SectionTitle
            title="Знания и навыки"
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

        <div class="contacts">
          <SectionTitle
            title="Прочие требования"
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
