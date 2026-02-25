import { createApp } from 'vue'
// 只导入实际使用的Element Plus组件
import {
  ElCard,
  ElRow,
  ElCol,
  ElButton,
  ElTable,
  ElTableColumn,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElContainer,
  ElMain,
  ElAside,
  ElAvatar
} from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// 按需注册Element Plus组件
app.use(ElCard)
app.use(ElRow)
app.use(ElCol)
app.use(ElButton)
app.use(ElTable)
app.use(ElTableColumn)
app.use(ElBreadcrumb)
app.use(ElBreadcrumbItem)
app.use(ElContainer)
app.use(ElMain)
app.use(ElAside)
app.use(ElAvatar)

app.use(router)
app.mount('#app')
