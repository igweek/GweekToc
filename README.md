# GweekToc

# GweekToc | Typecho 极简悬浮目录插件

<p align="center">
  <img src="https://img.shields.io/badge/Typecho-1.2+-467b96.svg" alt="Typecho Version">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Version-1.0.3-57bf94.svg" alt="Version">
</p>

> 一个专为 Typecho 设计的极简风格悬浮目录插件。抛弃繁杂的设置，提供极致的阅读体验。

## :sparkles: 特性 (Features)

* **🎨 极简 UI 设计**：采用清新绿（#57bf94）与极简圆环风格，完美融合现代博客主题。
* **🧠 智能内容识别**：自动识别 Joe、Jasmine、Typecho 原生等多种主题的文章容器，无需手动配置选择器。
* **📱 完美响应式**：
    * **PC 端**：右下角悬浮按钮，点击展开/收起，点击空白处自动收回。
    * **移动端**：适配小屏幕，点击目录项后自动收起面板，不遮挡阅读视线。
* **🚀 丝滑交互体验**：
    * **平滑滚动**：点击目录平滑定位到标题。
    * **精准定位**：修复了顶部导航栏遮挡标题的问题。
    * **无痕浏览**：使用 `history.replaceState` 技术，点击目录**不会**产生浏览器后退历史记录（解决了点击后退键无法返回上一页的痛点）。
* **👻 自动隐藏逻辑**：
    * “返回顶部”按钮仅在向下滚动超过 300px 后显示。
    * 若文章无 H2/H3 标题，目录按钮自动隐藏。

## :art: 预览 (Preview)

![image.png](https://pic.myla.eu.org/file/8hIV2Wm8.png)

## :wrench: 安装 (Installation)

1.  **下载插件**：下载本仓库的压缩包。
2.  **解压重命名**：将解压后的文件夹重命名为 `GweekToc`。
    * ⚠️ **注意**：文件夹名称必须严格为 `GweekToc` (首字母大写)，否则插件无法启用。
3.  **上传**：将文件夹上传至网站的 `usr/plugins/` 目录下。
4.  **启用**：登录 Typecho 后台 -> `插件管理` -> 启用 **GweekToc**。

## :gear: 配置与自定义 (Customization)

本插件主打“开箱即用”，默认无需配置。

### 修改主题色
默认主题色为 **清新绿 (#57bf94)**。如果你想修改颜色，请编辑插件目录下的 `style.css` 文件：

```css
/* style.css 第 15 行左右 */
.gweek-btn {
    /* ... */
    border: 2px solid #57bf94; /* 修改边框颜色 */
    color: #57bf94;            /* 修改图标颜色 */
    /* ... */
}

.gweek-btn:hover {
    background: #57bf94;      /* 修改悬停背景色 */
    /* ... */
}

```

### 智能适配列表

如果你的主题比较特殊，插件不显示目录，请编辑 `script.js`，在 `selectors` 数组中添加你的文章容器类名：

```javascript
// script.js 第 3 行
const selectors = [
    '.post-content', 
    '.entry-content', 
    '.your-custom-class', // 添加你的类名
    // ...
];

```

## :open_file_folder: 目录结构

```text
GweekToc/
├── Plugin.php      # 插件核心入口
├── style.css       # 样式文件 (UI 定义)
└── script.js       # 逻辑文件 (生成目录、滚动监听、定位修复)

```

## :question: 常见问题 (FAQ)

**Q: 启用插件后报错 "500 Server Error"？**
A: 请检查插件文件夹名称是否为 `GweekToc`。Typecho 对文件夹名称大小写敏感。

**Q: 点击目录跳转位置偏下或偏上？**
A: 插件默认预留了 `80px` 的顶部偏移量（适配大多数带导航栏的主题）。如需调整，请修改 `script.js` 中的 `const offsetTop = 80;` 数值。

## :scroll: 许可证 (License)

本项目遵循 [MIT License](https://www.google.com/search?q=LICENSE) 开源协议。

---

**Author:** [Gweek](https://btw.pp.ua)

