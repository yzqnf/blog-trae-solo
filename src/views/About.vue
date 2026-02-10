<template>
  <div class="about-view">
    <el-card shadow="hover" class="about-card">
      <template #header>
        <div class="card-header">
          <span>关于我</span>
        </div>
      </template>
      <div class="about-content">
        <el-avatar :size="120" src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20portrait%20of%20a%20blogger&image_size=square_hd" class="avatar"></el-avatar>
        <h3>博主简介</h3>
        <p>我是一名前端开发者，热爱技术分享和写作。</p>
        <p>这个博客是我记录学习心得和技术思考的地方。</p>
        <p>技术栈：Vue 3、Element Plus、Vite、JavaScript</p>
        
        <div class="social-links">
          <h4>联系方式</h4>
          <el-button type="primary" :icon="Message" circle></el-button>
          <el-button type="success" :icon="ChatLineRound" circle></el-button>
          <el-button type="info" :icon="Link" circle></el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ChatLineRound, Link, Message } from '@element-plus/icons-vue'
</script>

<style scoped>
.about-view {
  animation: fadeIn 0.5s ease;
}

.about-card {
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  text-align: center;
}

.avatar {
  margin: 20px 0;
}

.about-content h3 {
  margin: 20px 0 10px;
}

.about-content p {
  margin: 10px 0;
  line-height: 1.6;
}

.social-links {
  margin-top: 30px;
}

.social-links h4 {
  margin-bottom: 15px;
}

.social-links .el-button {
  margin: 0 10px;
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