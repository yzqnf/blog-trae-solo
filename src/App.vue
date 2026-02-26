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

    <!-- 内容包装器 -->
    <div class="app-content-wrapper">
      <!-- 主要内容区域 -->
      <main class="app-main">
        <div class="scrollable-content">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>

    <!-- 页脚 -->
    <footer class="app-footer">
      <p>© {{ new Date().getFullYear() }} 我的博客 | 静态站点生成 (SSG)</p>
    </footer>
  </div>
</template>

<script setup>
import { House, Document, User } from '@element-plus/icons-vue'
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
}
</style>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
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

.app-content-wrapper {
  flex: 1;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow: hidden;
  position: relative;
}

.app-main {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
}

.scrollable-content {
  height: 100%;
  overflow-y: scroll;
  padding-right: 20px; /* 为滚动条预留空间 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

/* Chrome, Safari, Edge等浏览器的滚动条样式 - 隐藏滚动条 */
.scrollable-content::-webkit-scrollbar {
  width: 0px !important;
  height: 0px !important;
  background: transparent !important;
  display: none !important;
  opacity: 0 !important;
}

/* 确保所有滚动条相关元素都被隐藏 */
.scrollable-content::-webkit-scrollbar-track,
.scrollable-content::-webkit-scrollbar-thumb {
  width: 0px !important;
  background: transparent !important;
  display: none !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

.app-footer {
  background-color: #f5f7fa;
  padding: 20px 0;
  text-align: center;
  color: #909399;
  font-size: 14px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
