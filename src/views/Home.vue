<template>
  <div class="home-view">
    <el-card shadow="hover" class="welcome-card">
      <template #header>
        <div class="card-header">
          <span>欢迎来到我的博客</span>
        </div>
      </template>
      <div class="welcome-content">
        <p>
          这是一个使用 Vue 3 + Element Plus + Vite
          构建的静态站点生成（SSG）博客页面。
        </p>
        <p>您可以通过顶部导航栏浏览不同的页面内容。</p>
      </div>
    </el-card>

    <div class="recent-articles">
      <h2>最新文章</h2>
      <el-row :gutter="20">
        <el-col :span="8" v-for="article in recentArticles" :key="article.id">
          <el-card shadow="hover">
            <template #header>
              <router-link
                :to="'/article/' + article.id"
                class="article-title-link"
              >
                <div class="article-title">{{ article.title }}</div>
              </router-link>
            </template>
            <div class="article-meta">
              <span>{{ article.date }}</span>
            </div>
            <div class="article-excerpt">{{ article.excerpt }}</div>
            <router-link :to="'/article/' + article.id">
              <el-button type="primary" size="small" class="read-more">
                阅读更多
              </el-button>
            </router-link>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getRecentArticles } from '../store'

const router = useRouter()
const recentArticles = ref([])

onMounted(() => {
  recentArticles.value = getRecentArticles()
})
</script>

<style scoped>
.article-title-link {
  text-decoration: none;
  color: inherit;
}

.article-title-link:hover .article-title {
  color: #409eff;
}
</style>

<style scoped>
.home-view {
  animation: fadeIn 0.5s ease;
}

.welcome-card {
  margin-bottom: 40px;
}

.recent-articles h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.article-title {
  font-weight: bold;
  font-size: 16px;
}

.article-meta {
  color: #999;
  font-size: 12px;
  margin: 10px 0;
}

.article-excerpt {
  margin-bottom: 15px;
  line-height: 1.5;
}

.read-more {
  margin-top: 10px;
}

.card-header {
  font-weight: bold;
  font-size: 16px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
