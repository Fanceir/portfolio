# 作品集网站

> [!TIP]  
> 网站现在支持多主题。向下滚动到 [主题](#color-theme) 部分来查看！

它支持以下几个部分：

- 姓名和简短的自我介绍
- 教育背景
- 工作经验
- 项目经历
- 技能
- 联系方式

虽然花了一些时间来构建这个网站，但我将其开源，希望你可以根据需要自由使用。

所有内容可以直接在 `me.ts` 文件中进行编辑。

## 安装

要安装此网站，你需要在机器上安装 nodejs。

1. 克隆这个仓库
2. 进入该目录
3. 运行 `npm install` 或 `yarn`
4. 运行 `npm dev` 或 `yarn dev` 启动开发服务器
5. 在 http://localhost:3000 查看网站

## 使用方法

1. 打开 `src/me.ts` 文件
2. 修改内容为你自己的
3. 在你喜欢的平台上托管

## 主题颜色

模板现在支持多种主题！

你可以在 `src/me.ts` 文件中的 `themeColor` 变量设置默认主题。

你还可以选择允许用户切换的主题。要修改列表，前往 `src/me.ts` 文件并修改 `multiThemeOptions` 列表。

### 支持的主题

- gray（灰色）
- red（红色）
- orange（橙色）
- green（绿色）
- teal（青色）
- blue（蓝色）
- cyan（蓝绿色）
- purple（紫色）
- pink（粉色）
- blackAlpha（不推荐）

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)
