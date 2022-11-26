import Vue from 'vue'
import { Form, FormItem, Input, DatePicker, Row, Col, Button,Tag,Pagination,Message,Breadcrumb,BreadcrumbItem,Menu,MenuItem,Autocomplete,Alert, MessageBox  } from 'element-ui';
import App from './App.vue'
import less from 'less'
/*引入资源请求插件*/
import VueResource from "vue-resource";
Vue.use(less)
Vue.use(Pagination)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Autocomplete)

/*使用VueResource插件*/
Vue.use(VueResource);
// Vue.use(Message)
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$alert =  MessageBox 
Vue.prototype.$message =  Message
Vue.config.productionTip = false

import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  render: h => h(App),
  http: {
    root: '/',
  }
}).$mount('#app')
