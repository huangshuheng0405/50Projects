50projects
波仔是我男神

# 01-Expanding_Cards

## will-change

告诉浏览器哪些属性会变 提前让渲染器做好优化

## cubic-bezier

- 语法：cubic-bezier(x1, y1, x2, y2)
- x1 和 x2 必须在 0 到 1 之间（表示时间轴位置）；y 值可超出 0–1（用于过冲或回弹效果）。
- 常用预设：linear, ease, ease-in, ease-out, ease-in-out；cubic-bezier 可自定义更精细的曲线。
- 例子：cubic-bezier(.22,.61,.36,1) 会产生先慢后快再平滑结束的“自然”感觉。
- 可视化/生成工具：cubic-bezier.com、easings.net、Chrome DevTools 的 easing 编辑器。
- 支持：主流浏览器均支持，无需 polyfill。

```css
/* 自定义过渡速率 */
.panel {
  transition: transform 0.6s cubic-bezier(.22, .61, .36, 1);
}
```

# 25-Sticky-Navbar

## window.scrollY

- 是 Window 的只读属性，返回页面在垂直方向已滚动的像素值（数字，单位为 px）。
- 等同于 window.pageYOffset。用于判断用户当前滚动到页面的哪个位置。示例：scrollY 为 0 表示在页面顶部。

## element.offsetHeight

- 是 Element 的只读属性，返回元素的布局高度（整数，单位为 px），包含元素的内容高度 + padding + border（不包含 margin）。
- 典型用于获取元素在文档流中占据的像素高度（用于计算何时触发样式/固定等）。

## clientHeight

cientHeight = 内容高度 + padding（不含border、border）
