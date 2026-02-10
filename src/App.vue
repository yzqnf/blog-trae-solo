<template>
  <div class="app-container">
    <!-- 头部导航 -->
    <header class="app-header">
      <div class="header-content">
        <h1 class="blog-title">我的博客</h1>
        <nav>
          <el-menu :router="true" mode="horizontal" class="nav-menu">
            <el-menu-item index="/">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/articles">
              <el-icon><Document /></el-icon>
              <span>文章</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <el-icon><User /></el-icon>
              <span>关于我</span>
            </el-menu-item>
          </el-menu>
        </nav>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <footer class="app-footer">
      <p>© {{ new Date().getFullYear() }} 我的博客 | 静态站点生成 (SSG)</p>
    </footer>
  </div>
</template>

<script setup>
import { House, Document, User } from '@element-plus/icons-vue'
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.blog-title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.nav-menu {
  border-bottom: none;
}

.app-main {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
}

.app-footer {
  background-color: #f5f7fa;
  padding: 20px 0;
  text-align: center;
  color: #909399;
  font-size: 14px;
  margin-top: 40px;
}

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
