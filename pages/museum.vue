<template>
  <div>
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
                <path d="M6.58372 1.00017L3.99706 3.58683L1.41039 1.00017C1.28584 0.875331 1.11674 0.805176 0.940391 0.805176C0.764045 0.805176 0.594945 0.875331 0.470391 1.00017C0.210391 1.26017 0.210391 1.68017 0.470391 1.94017L3.53039 5.00017C3.79039 5.26017 4.21039 5.26017 4.47039 5.00017L7.53039 1.94017C7.79039 1.68017 7.79039 1.26017 7.53039 1.00017C7.27039 0.746833 6.84372 0.740166 6.58372 1.00017Z" fill="#919EAD"/>
              </svg>
            </button>
            <div class="drop_menu" :class="{'active':isActive}">
             <div>
               <div>
                 <button  class="active">
                   <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3.86337 7.5831L1.55004 5.26976C1.42548 5.14493 1.25638 5.07477 1.08004 5.07477C0.903694 5.07477 0.734593 5.14493 0.610039 5.26976C0.350039 5.52976 0.350039 5.94976 0.610039 6.20976L3.39671 8.99643C3.65671 9.25643 4.07671 9.25643 4.33671 8.99643L11.39 1.9431C11.65 1.6831 11.65 1.2631 11.39 1.0031C11.2655 0.878261 11.0964 0.808105 10.92 0.808105C10.7437 0.808105 10.5746 0.878261 10.45 1.0031L3.86337 7.5831Z" fill="#3068FE"/>
                   </svg>
                   Ўзбекча</button>
               </div>
               <div>
                 <button>
              O‘zbekcha</button>
               </div>
               <div>
                 <button>
                   Русский</button>
               </div>
               <div>
                 <button>English</button>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isActive:false
    }
  }
}
</script>
