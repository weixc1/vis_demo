

# 空气污染数据可视化平台

一个基于 Django + ECharts 的空气污染数据可视化管理系统。

## 项目简介

本项目是一个空气污染数据可视化平台，采用 Django 框架作为后端，ECharts 作为前端可视化库，实现对空气污染数据的展示、分析和管理。

## 技术栈

- **后端**: Python 3.x, Django
- **前端**: HTML5, JavaScript, jQuery, ECharts
- **数据库**: SQLite3
- **可视化**: ECharts 图表库

## 项目结构

```
vis_demo/
├── myapp/               # Django 应用
│   ├── models.py        # 数据模型
│   ├── views.py         # 视图函数
│   ├── admin.py         # Admin 配置
│   ├── apps.py          # 应用配置
│   └── migrations/      # 数据库迁移
├── templates/           # HTML 模板
│   ├── index.html       # 主页面
│   ├── index1.html      # 页面1
│   └── index2.html      # 页面2
├── static/              # 静态资源
│   ├── css/             # 样式文件
│   ├── js/              # JavaScript 文件
│   ├── images/          # 图片资源
│   └── echarts.min.js   # ECharts 库
└── vis_demo/            # Django 项目配置
```

## 数据模型

项目包含以下核心数据模型：

- **Polution** - 污染数据模型
- **HistoryClick** - 历史点击记录
- **CoByPosition** - 按位置的CO数据
- **AirQualityData** - 空气质量数据
- **AQI** - 空气质量指数

## 功能特性

- 空气质量数据可视化展示
- 污染数据统计分析
- 交互式地图展示
- 趋势图表分析
- 数据筛选与过滤
- 历史数据查询

## 快速开始

### 环境要求

- Python 3.7+
- Django 3.2+

### 安装步骤

1. 克隆项目

```bash
git clone https://gitee.com/weising/vis_demo.git
cd vis_demo
```

2. 创建虚拟环境（可选）

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或
venv\Scripts\activate     # Windows
```

3. 安装依赖

```bash
pip install django
```

4. 运行迁移

```bash
python manage.py migrate
```

5. 启动开发服务器

```bash
python manage.py runserver
```

6. 访问系统

打开浏览器访问 `http://127.0.0.1:8000/`

## 页面说明

- `/` - 主页面，展示综合数据可视化
- `/index1/` - 页面1，数据可视化展示
- `/index2/` - 页面2，数据可视化展示

## 开发说明

### 添加数据模型

在 `myapp/models.py` 中定义数据模型后，执行：

```bash
python manage.py makemigrations
python manage.py migrate
```

### 创建管理员账户

```bash
python manage.py createsuperuser
```

## 许可证

MIT License

## 贡献指南

欢迎提交 Issue 和 Pull Request。