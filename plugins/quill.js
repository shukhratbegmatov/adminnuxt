
import Vue from 'vue'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
if (process.browser) {
// Добавление браузера для судить, только браузер отображается, оно не будет сообщать об ошибке.
  const VueQuillEditor = require('vue-quill-editor/dist/ssr')
  Vue.use(VueQuillEditor)
}
