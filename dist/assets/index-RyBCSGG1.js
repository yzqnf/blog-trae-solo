const e=[{id:1,title:"Vue 3 组合式 API 入门",date:"2024-01-15",category:"前端",excerpt:"本文介绍 Vue 3 组合式 API 的基本使用方法和优势，帮助开发者快速上手...",content:`<h2>什么是组合式 API？</h2>
<p>组合式 API（Composition API）是 Vue 3 中引入的一种新的 API 风格，它允许开发者按照功能逻辑组织代码，而不是按照选项类型。</p>

<h3>组合式 API 的优势</h3>
<ul>
  <li><strong>更好的代码组织</strong>：相关的逻辑可以放在一起，提高代码的可读性和可维护性</li>
  <li><strong>更好的类型推断</strong>：TypeScript 支持更友好</li>
  <li><strong>更好的代码复用</strong>：可以通过组合函数（Composables）复用逻辑</li>
  <li><strong>更小的打包体积</strong>：Tree-shaking 更有效</li>
</ul>

<h3>基本使用方法</h3>
<p>在 Vue 3 中，我们可以使用 <code>setup()</code> 函数或 <code>&lt;script setup&gt;</code> 语法来使用组合式 API。</p>

<pre><code>// 使用 &lt;script setup&gt;
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() =&gt; count.value * 2)

function increment() {
  count.value++
}
</code></pre>

<h3>响应式数据</h3>
<p>组合式 API 提供了多种创建响应式数据的方法：</p>
<ul>
  <li><code>ref()</code>：创建一个响应式的引用类型</li>
  <li><code>reactive()</code>：创建一个响应式的对象</li>
  <li><code>computed()</code>：创建一个计算属性</li>
  <li><code>watch()</code>：监听数据变化</li>
</ul>

<h3>生命周期钩子</h3>
<p>组合式 API 中的生命周期钩子以 <code>on</code> 开头：</p>
<ul>
  <li><code>onMounted</code>：组件挂载后</li>
  <li><code>onUpdated</code>：组件更新后</li>
  <li><code>onUnmounted</code>：组件卸载前</li>
</ul>

<h3>示例：计数器组件</h3>
<pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;p&gt;Double: {{ doubleCount }}&lt;/p&gt;
    &lt;button @click="increment"&gt;Increment&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() =&gt; count.value * 2)

function increment() {
  count.value++
}
&lt;/script&gt;
</code></pre>

<h3>总结</h3>
<p>组合式 API 是 Vue 3 中一个重要的特性，它为我们提供了一种更灵活、更强大的代码组织方式。通过使用组合式 API，我们可以编写更易于维护和测试的代码。</p>`},{id:2,title:"Element Plus 组件库使用指南",date:"2024-01-10",category:"前端",excerpt:"Element Plus 是基于 Vue 3 的 UI 组件库，本文介绍其主要组件的使用方法和最佳实践...",content:`<h2>Element Plus 简介</h2>
<p>Element Plus 是基于 Vue 3 的 UI 组件库，是 Element UI 的升级版本，为开发者提供了一套美观、实用的组件。</p>`},{id:3,title:"Vite 构建工具性能优化",date:"2024-01-05",category:"工具",excerpt:"Vite 是现代化的前端构建工具，本文分享一些性能优化技巧，提升开发和构建效率...",content:`<h2>Vite 性能优化指南</h2>
<p>Vite 是一个现代化的前端构建工具，以其快速的开发服务器和高效的构建过程而闻名。本文将分享一些 Vite 性能优化的技巧。</p>`},{id:4,title:"JavaScript 异步编程进阶",date:"2023-12-20",category:"前端",excerpt:"深入了解 JavaScript 异步编程，包括 Promise、async/await 和事件循环...",content:`<h2>JavaScript 异步编程</h2>
<p>异步编程是 JavaScript 中的一个重要概念，本文将深入探讨 JavaScript 中的异步编程模型。</p>`}];function l(t=3){return e.slice(0,t)}function i(t){return e.find(n=>n.id===parseInt(t))}function r(t,n,c=3){return e.filter(o=>o.id!==parseInt(t)&&o.category===n).slice(0,c)}export{e as a,i as b,r as c,l as g};
