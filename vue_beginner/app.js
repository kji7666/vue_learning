// 【設定區】從 Vue 全域物件取出 createApp
const { createApp } = Vue;

// 【可修改區】Vue 應用邏輯
createApp({
  data() {
    return {
      title: 'Vue 3 + JavaScript 分離版',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    }
  }
}).mount('#app');
