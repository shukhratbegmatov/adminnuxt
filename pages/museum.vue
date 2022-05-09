<template>
  <div>
    <div v-if="show_text" class="text_area" >
      <div class="textareashadow" @click="show_text=!show_text" >

      </div>
      <div class="text_area">
        <div>
          <div class="text_area_f">
            <div class="text_area_head">
              <div class="text_btn">

              </div>
            </div>
            <div class="text_name">
              Биография
            </div>
            <div class="textarea">
              <textarea v-model="text_main" onkeyup="textAreaAdjust(this)"></textarea>
            </div>
            <div class="content_buttons">
                <button class="exit" @click="show_text=!show_text">
                  отмена
                </button>
              <button class="succes_button">
                сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Sidebar></Sidebar>
    <div class="content_container">
      <Pagename
        page_title="История Музея"
        page_description="Список контентов"
      ></Pagename>
      <div>
        <SectionTitle
          title="История Музея"
        >
        </SectionTitle>
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
        <div class="text_card">
         <div class="text_content">
         {{text_main}}
         </div>
          <div class="text_border"></div>
          <div class="text_date">
            <span>Изменено:</span>
            28.08.2022  14:37
          </div>
          <div class="text_date">
            <span>Автор:</span>
            Abdusattorov Abdumajid
          </div>
        </div>
        <div class="text_button">
          <button @click="show_text=!show_text">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.483 3.16165C16.8405 3.51915 16.8405 4.09665 16.483 4.45415L14.8055 6.13165L11.368 2.69415L13.0455 1.01665C13.2168 0.844999 13.4493 0.748535 13.6918 0.748535C13.9342 0.748535 14.1667 0.844999 14.338 1.01665L16.483 3.16165ZM0.249023 16.7925V14.0058C0.249023 13.8775 0.294857 13.7675 0.386523 13.6758L10.3874 3.67498L13.8249 7.11248L3.81486 17.1133C3.73236 17.205 3.61319 17.2508 3.49402 17.2508H0.707357C0.45069 17.2508 0.249023 17.0491 0.249023 16.7925Z" fill="white"/>
            </svg>
            изменить</button>
        </div>
      </div>
      <div>
        <SectionTitle
          title="Фотографии"
        >

        </SectionTitle>
      </div>
      <div class="photo_important">
        <div class="important">
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

        <div class="text_border"></div>
        <div class="images_group">
          <div class="row">
            <div class="col-xl-4 " v-for="item in imageUrl">
              <div class="image_f">
                <div class="main_action">
                  <a :href="item" class="main_link" download>

                    <div>

                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.49 14.1984V14.2V16.8C21.49 18.2946 21.0251 19.4578 20.2364 20.2464C19.4478 21.0351 18.2846 21.5 16.79 21.5H7.2C5.70546 21.5 4.54235 21.0351 3.7538 20.2454C2.96518 19.4557 2.5 18.29 2.5 16.79V14.2C2.5 12.7054 2.96492 11.5422 3.75355 10.7536C4.54218 9.96492 5.70545 9.5 7.2 9.5H16.8C18.2946 9.5 19.4577 9.96497 20.245 10.7533C21.0321 11.5415 21.4947 12.7043 21.49 14.1984Z" fill="#FEFFFF" stroke="#919EAD"/>
                        <path d="M15.8801 12.43L12.5301 15.78C12.2401 16.07 11.7601 16.07 11.4701 15.78L8.12009 12.43C7.83009 12.14 7.83009 11.66 8.12009 11.37C8.41009 11.08 8.89009 11.08 9.18009 11.37L11.2501 13.44V2.75C11.2501 2.34 11.5901 2 12.0001 2C12.4101 2 12.7501 2.34 12.7501 2.75V13.44L14.8201 11.37C14.9701 11.22 15.1601 11.15 15.3501 11.15C15.5401 11.15 15.7301 11.22 15.8801 11.37C16.1801 11.66 16.1801 12.13 15.8801 12.43Z" fill="#919EAD"/>
                      </svg>

                    </div>

                  </a>
                  <a href="#" >

                    <div>

                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0699 5.23C19.4599 5.07 17.8499 4.95 16.2299 4.86V4.85L16.0099 3.55C15.8599 2.63 15.6399 1.25 13.2999 1.25H10.6799C8.34991 1.25 8.12991 2.57 7.96991 3.54L7.75991 4.82C6.82991 4.88 5.89991 4.94 4.96991 5.03L2.92991 5.23C2.50991 5.27 2.20991 5.64 2.24991 6.05C2.28991 6.46 2.64991 6.76 3.06991 6.72L5.10991 6.52C10.3499 6 15.6299 6.2 20.9299 6.73C20.9599 6.73 20.9799 6.73 21.0099 6.73C21.3899 6.73 21.7199 6.44 21.7599 6.05C21.7899 5.64 21.4899 5.27 21.0699 5.23Z" fill="#919EAD"/>
                        <path d="M18.32 8.25C18.5214 8.25 18.7197 8.33255 18.8656 8.48246C19.0043 8.63528 19.0827 8.84202 19.0708 9.06114C19.0708 9.06152 19.0708 9.06189 19.0708 9.06227L18.4511 19.307C18.394 20.1001 18.3293 20.8012 17.9438 21.3288C17.5895 21.8136 16.8698 22.26 15.21 22.26H8.78999C7.13115 22.26 6.41108 21.8116 6.05647 21.3254C5.6706 20.7963 5.60595 20.0947 5.5489 19.3069L4.92918 9.05148C4.92917 9.05124 4.92915 9.051 4.92914 9.05076C4.91743 8.84219 4.99548 8.6334 5.13796 8.47853C5.26721 8.33804 5.47061 8.25 5.67999 8.25H18.32Z" fill="#FEFFFF" stroke="#919EAD"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58008 17C9.58008 16.5858 9.91586 16.25 10.3301 16.25H13.6601C14.0743 16.25 14.4101 16.5858 14.4101 17C14.4101 17.4142 14.0743 17.75 13.6601 17.75H10.3301C9.91586 17.75 9.58008 17.4142 9.58008 17Z" fill="#919EAD"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 13C8.75 12.5858 9.08579 12.25 9.5 12.25H14.5C14.9142 12.25 15.25 12.5858 15.25 13C15.25 13.4142 14.9142 13.75 14.5 13.75H9.5C9.08579 13.75 8.75 13.4142 8.75 13Z" fill="#919EAD"/>
                      </svg>

                    </div>

                  </a>
                </div>
              </div>
              <div class="img_hover">
                <img :src="item" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="text_button">
          <input type="file" class="d-none" id="img_museum"
                 multiple
                 @change="trySubmitFile"
                 accept="image/*"
                 name="datafiles"
                 ref="datafiles"
          >
          <label for="img_museum">

            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4997 7.91634H7.91634V12.4997C7.91634 13.0038 7.50384 13.4163 6.99968 13.4163C6.49551 13.4163 6.08301 13.0038 6.08301 12.4997V7.91634H1.49967C0.995508 7.91634 0.583008 7.50384 0.583008 6.99968C0.583008 6.49551 0.995508 6.08301 1.49967 6.08301H6.08301V1.49967C6.08301 0.995508 6.49551 0.583008 6.99968 0.583008C7.50384 0.583008 7.91634 0.995508 7.91634 1.49967V6.08301H12.4997C13.0038 6.08301 13.4163 6.49551 13.4163 6.99968C13.4163 7.50384 13.0038 7.91634 12.4997 7.91634Z" fill="white"/>
            </svg>

            Добавить</label>
        </div>

        <div class="text_border"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      myImages:[],
      imageUrl:[],
      files_name:[],
      text_main:'',
      show_text:false
    }
  },
  methods:{
    textAreaAdjust(element) {
        element.style.height = "1px";
        element.style.height = (25+element.scrollHeight)+"px";
      },
    trySubmitFile(e) {
      for (let i = 0; i < e.target.files.length; i++) {
        this.files_name.push(e.target.files[i])
      }
      var files = Array.from(e.target.files);
      console.log(typeof (files))
      files.forEach((file) => {
        this.myImages.push(file);
        var reader = new FileReader();
        var vm = this;
        reader.onload = function(e) {
          vm.imageUrl.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
  }

}
</script>
