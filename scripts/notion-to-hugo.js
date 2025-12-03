const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');
const fs = require('fs');
const path = require('path');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

// 博客文章数据库
const BLOG_DATABASE_ID = process.env.NOTION_DATABASE_ID;
// 项目数据库
const PROJECTS_DATABASE_ID = process.env.NOTION_PROJECTS_ID;

const POSTS_DIR = './content/posts';
const PROJECTS_DIR = './content/projects';

// 确保目录存在
[POSTS_DIR, PROJECTS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 获取 Notion 数据库页面
async function getNotionPages(databaseId) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Status',
        status: { equals: 'Published' }
      }
    });
    return response.results;
  } catch (error) {
    console.error('获取页面失败:', error.message);
    return [];
  }
}

// 转换博客文章
async function convertPostToHugo(page) {
  const pageId = page.id;
  const title = page.properties.Name?.title[0]?.plain_text || 'Untitled';
  const date = page.properties.Date?.date?.start || new Date().toISOString().split('T')[0];
  const tags = page.properties.Tags?.multi_select.map(tag => tag.name) || [];
  const category = page.properties.Category?.select?.name || '';
  const slug = page.properties.Slug?.rich_text[0]?.plain_text || title.toLowerCase().replace(/\s+/g, '-');
  
  console.log('正在处理文章:', title);
  
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblo)
