const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');
const fs = require('fs');
const path = require('path');
const axios = require('axios'); // 需要安装: npm install axios

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

const BLOG_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const PROJECTS_DATABASE_ID = process.env.NOTION_PROJECTS_ID;

const POSTS_DIR = './content/posts';
const PROJECTS_DIR = './content/projects';
const PDF_DIR = './static/pdfs'; // PDF 存放目录

// 确保目录存在
[POSTS_DIR, PROJECTS_DIR, PDF_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// --- 核心：自定义 PDF 处理器 ---
n2m.setCustomTransformer('pdf', async (block) => {
  const { pdf } = block;
  if (!pdf) return '';

  const remoteUrl = pdf.type === 'external' ? pdf.external.url : pdf.file.url;
  // 提取文件名或用 ID 命名
  const fileName = `${block.id}.pdf`;
  const localPath = path.join(PDF_DIR, fileName);
  const webPath = `/pdfs/${fileName}`;

  try {
    console.log(`正在下载 PDF: ${fileName}`);
    const response = await axios({
      method: 'get',
      url: remoteUrl,
      responseType: 'stream'
    });
    const writer = fs.createWriteStream(localPath);
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        // 返回内嵌 HTML，指向 Hugo 的本地静态路径
        resolve(`
<div class="pdf-container" style="margin: 20px 0;">
  <iframe src="${webPath}" width="100%" height="600px" style="border:none; border-radius:8px;"></iframe>
  <p style="font-size:12px; color:gray; text-align:center;">
    <a href="${webPath}" target="_blank">新标签页打开 PDF</a>
  </p>
</div>\n`);
      });
      writer.on('error', reject);
    });
  } catch (err) {
    console.error('PDF 下载失败:', err.message);
    return `[下载 PDF 失败](${remoteUrl})`;
  }
});
// ----------------------------

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
    console.error('获取失败:', error.message);
    return [];
  }
}

async function convertPostToHugo(page) {
  const pageId = page.id;
  const title = page.properties.Name?.title[0]?.plain_text || 'Untitled';
  const date = page.properties.Date?.date?.start || new Date().toISOString().split('T')[0];
  const tags = page.properties.Tags?.multi_select.map(tag => tag.name) || [];
  const category = page.properties.Category?.select?.name || '';
  const slug = page.properties.Slug?.rich_text[0]?.plain_text || title.toLowerCase().replace(/\s+/g, '-');
  
  console.log('处理文章:', title);
  
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
  const filePath = path.join(POSTS_DIR, slug + '.md');
  
  fs.writeFileSync(filePath, fullContent, 'utf8');
}

// ... 你的 convertProjectToHugo 函数同理，直接复用逻辑即可 ...
// 为了篇幅，此处省略 convertProjectToHugo 的重复逻辑，
// 只需确保它也调用了同样的 n2m.pageToMarkdown 即可自动应用上面的 PDF 处理器。

async function main() {
  console.log('🚀 开始同步...');
  if (!process.env.NOTION_TOKEN) {
    console.error('❌ 未设置 NOTION_TOKEN');
    process.exit(1);
  }

  // 清理旧 PDF 目录（可选）
  if (fs.existsSync(PDF_DIR)) {
    fs.readdirSync(PDF_DIR).forEach(file => fs.unlinkSync(path.join(PDF_DIR, file)));
  }

  // ... 执行同步逻辑 (posts 和 projects) ...
  const posts = await getNotionPages(BLOG_DATABASE_ID);
  for (const page of posts) {
    await convertPostToHugo(page);
  }
  
  console.log('\n✨ 完成！');
}

main().catch(console.error);
