<template>
  <div class="articles-view">
    <h2>文章列表</h2>
    <el-table :data="articlesList" style="width: 100%">
      <el-table-column prop="title" label="标题" width="400">
        <template #default="scope">
          <router-link :to="'/article/' + scope.row.id" class="article-link">{{ scope.row.title }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发布日期" width="180"></el-table-column>
      <el-table-column prop="category" label="分类" width="120"></el-table-column>
      <el-table-column prop="excerpt" label="摘要"></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { articles } from '../store'

const articlesList = ref([])

onMounted(() => {
  articlesList.value = articles
})
</script>

<style scoped>
.article-link {
  color: #409eff;
  text-decoration: none;
}

.article-link:hover {
  text-decoration: underline;
}
</style>

<style scoped>
.articles-view {
  animation: fadeIn 0.5s ease;
}

.articles-view h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.article-link {
  color: #409eff;
  text-decoration: none;
}

.article-link:hover {
  text-decoration: underline;
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