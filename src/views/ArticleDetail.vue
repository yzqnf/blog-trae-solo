<template>
  <div class="article-detail-view">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item>
        <router-link to="/">首页</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <router-link to="/articles">文章列表</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ article?.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-container class="article-layout" v-if="article">
      <el-container>
        <el-main class="article-content">
          <h1 class="article-detail-title">{{ article.title }}</h1>
          <div class="article-detail-meta">
            <span>{{ article.date }}</span>
            <span class="category">{{ article.category }}</span>
          </div>

          <!-- 文章内容 -->
          <div class="article-body" v-html="article.content"></div>
        </el-main>
        <el-aside width="240px" class="article-sidebar">
          <el-card shadow="hover">
            <template #header>
              <div class="card-header">文章信息</div>
            </template>
            <div class="sidebar-content">
              <p><strong>发布日期：</strong>{{ article.date }}</p>
              <p><strong>分类：</strong>{{ article.category }}</p>
              <p>
                <strong>阅读时长：</strong
                >{{ Math.ceil(article.content.length / 500) }} 分钟
              </p>
            </div>
          </el-card>

          <el-card shadow="hover" class="sidebar-card">
            <template #header>
              <div class="card-header">相关文章</div>
            </template>
            <div class="related-articles">
              <div
                v-for="item in relatedArticles"
                :key="item.id"
                class="related-article-item"
              >
                <router-link :to="'/article/' + item.id">
                  {{ item.title }}
                </router-link>
              </div>
            </div>
          </el-card>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleById, getRelatedArticles } from '../store'

const route = useRoute()
const article = ref(null)
const relatedArticles = ref([])

onMounted(() => {
  const articleId = route.params.id
  article.value = getArticleById(articleId)
  if (article.value) {
    relatedArticles.value = getRelatedArticles(
      articleId,
      article.value.category
    )
  }
})
</script>

<style scoped>
.article-detail-view {
  animation: fadeIn 0.5s ease;
}

.breadcrumb {
  margin-bottom: 20px;
}

.article-layout {
  margin-top: 20px;
  min-height: 600px;
}

.article-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.article-detail-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.article-detail-meta {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e4e7ed;
  color: #909399;
  font-size: 14px;
}

.article-detail-meta .category {
  margin-left: 20px;
  padding: 2px 8px;
  background-color: #ecf5ff;
  color: #409eff;
  border-radius: 4px;
  font-size: 12px;
}

.article-body {
  line-height: 1.8;
  color: #303133;
}

.article-body h2 {
  margin: 30px 0 20px;
  font-size: 22px;
  font-weight: bold;
  color: #333;
}

.article-body h3 {
  margin: 25px 0 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.article-body p {
  margin-bottom: 15px;
}

.article-body ul {
  margin: 15px 0;
  padding-left: 20px;
}

.article-body li {
  margin-bottom: 8px;
}

.article-body pre {
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 15px 0;
}

.article-body code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
}

.article-sidebar {
  padding-left: 20px;
}

.sidebar-card {
  margin-top: 20px;
}

.sidebar-content p {
  margin-bottom: 10px;
  font-size: 14px;
}

.related-articles {
  margin-top: 10px;
}

.related-article-item {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.related-article-item:hover {
  background-color: #ecf5ff;
  transform: translateX(5px);
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
