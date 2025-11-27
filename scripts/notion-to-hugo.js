const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');
const fs = require('fs');
const path = require('path');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });
const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const CONTENT_DIR = './content/posts';

if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

async function getNotionPages() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
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

async function convertPageToHugo(page) {
  const pageId = page.id;
  const title = page.properties.Name?.title[0]?.plain_text || 'Untitled';
  const date = page.properties.Date?.date?.start || new Date().toISOString().split('T')[0];
  const tags = page.properties.Tags?.multi_select.map(tag => tag.name) || [];
  const category = page.properties.Category?.select?.name || '';
  const slug = page.properties.Slug?.rich_text[0]?.plain_text || title.toLowerCase().replace(/\s+/g, '-');
  
  console.log('正在处理:', title);
  
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  
  const frontMatter = `+++
title = "${title}"
date = "${date}"
draft = false
tags = [${tags.map(t => '"' + t + '"').join(', ')}]
categories = ["${category}"]
slug = "${slug}"
+++

`;
  
  const fullContent = frontMatter + mdString.parent;
  const fileName = slug + '.md';
  const filePath = path.join(CONTENT_DIR, fileName);
  
  fs.writeFileSync(filePath, fullContent, 'utf8');
  console.log('✅ 已生成:', fileName);
}

async function main() {
  console.log('🚀 开始从 Notion 同步内容...');
  
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.error('❌ 错误: 请设置环境变量');
    process.exit(1);
  }
  
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR);
    files.forEach(file => fs.unlinkSync(path.join(CONTENT_DIR, file)));
  }
  
  const pages = await getNotionPages();
  console.log('📄 找到', pages.length, '篇已发布文章');
  
  for (const page of pages) {
    await convertPageToHugo(page);
  }
  
  console.log('✨ 同步完成！');
}

main().catch(console.error);
