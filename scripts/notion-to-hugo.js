const { Client } = require(’@notionhq/client’);
const { NotionToMarkdown } = require(‘notion-to-md’);
const fs = require(‘fs’);
const path = require(‘path’);

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

const BLOG_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const PROJECTS_DATABASE_ID = process.env.NOTION_PROJECTS_ID;

const POSTS_DIR = ‘./content/posts’;
const PROJECTS_DIR = ‘./content/projects’;

[POSTS_DIR, PROJECTS_DIR].forEach(dir => {
if (!fs.existsSync(dir)) {
fs.mkdirSync(dir, { recursive: true });
}
});

// 自定义转换函数，将 PDF 链接转换为 shortcode
function convertPdfLinksToShortcode(markdown) {
// 匹配 Notion 的 PDF 链接格式
// 格式1: [filename.pdf](https://...)
// 格式2: [任意文本](https://...pdf)
const pdfLinkRegex = /[([^]]+)](([^)]+.pdf[^)]*))/gi;

return markdown.replace(pdfLinkRegex, (match, filename, url) => {
// 清理文件名，如果不是 .pdf 结尾，添加 “PDF”
const displayName = filename.endsWith(’.pdf’) ? filename : filename + ’ PDF’;
return `\n{{< pdf src="${url}" title="${displayName}" >}}\n`;
});
}

async function getNotionPages(databaseId) {
try {
const response = await notion.databases.query({
database_id: databaseId,
filter: {
property: ‘Status’,
status: { equals: ‘Published’ }
}
});
return response.results;
} catch (error) {
console.error(‘获取失败:’, error.message);
return [];
}
}

async function convertPostToHugo(page) {
const pageId = page.id;
const title = page.properties.Name?.title[0]?.plain_text || ‘Untitled’;
const date = page.properties.Date?.date?.start || new Date().toISOString().split(‘T’)[0];
const tags = page.properties.Tags?.multi_select.map(tag => tag.name) || [];
const category = page.properties.Category?.select?.name || ‘’;
const slug = page.properties.Slug?.rich_text[0]?.plain_text || title.toLowerCase().replace(/\s+/g, ‘-’);

console.log(‘处理文章:’, title);

const mdblocks = await n2m.pageToMarkdown(pageId);
const mdString = n2m.toMarkdownString(mdblocks);

// 转换 PDF 链接为 shortcode
const processedContent = convertPdfLinksToShortcode(mdString.parent);

const frontMatter = `+++
title = “${title}”
date = “${date}”
draft = false
tags = [${tags.map(t => ‘”’ + t + ‘”’).join(’, ’)}]
categories = [”${category}”]
slug = “${slug}”
+++

`;

const fullContent = frontMatter + processedContent;
const filePath = path.join(POSTS_DIR, slug + ‘.md’);

fs.writeFileSync(filePath, fullContent, ‘utf8’);
console.log(‘✅ 文章:’, slug + ‘.md’);
}

async function convertProjectToHugo(page) {
const pageId = page.id;
const title = page.properties.Name?.title[0]?.plain_text || ‘Untitled’;
const date = page.properties.Date?.date?.start || new Date().toISOString().split(‘T’)[0];
const tags = page.properties.Tags?.multi_select.map(tag => tag.name) || [];
const category = page.properties.Category?.select?.name || ‘’;
const slug = page.properties.Slug?.rich_text[0]?.plain_text || title.toLowerCase().replace(/\s+/g, ‘-’);
const image = page.properties.Image?.rich_text[0]?.plain_text || ‘’;
const demo = page.properties.Demo?.url || ‘’;
const github = page.properties.GitHub?.url || ‘’;

console.log(‘处理项目:’, title);

const mdblocks = await n2m.pageToMarkdown(pageId);
const mdString = n2m.toMarkdownString(mdblocks);

// 转换 PDF 链接为 shortcode
const processedContent = convertPdfLinksToShortcode(mdString.parent);

let frontMatter = `+++ title = "${title}" date = "${date}" draft = false tags = [${tags.map(t => '"' + t + '"').join(', ')}] categories = ["${category}"] slug = "${slug}" `;

if (image) frontMatter += `image = "${image}"\n`;
if (demo) frontMatter += `demo = "${demo}"\n`;
if (github) frontMatter += `github = "${github}"\n`;

frontMatter += `+++

`;

const fullContent = frontMatter + processedContent;
const filePath = path.join(PROJECTS_DIR, slug + ‘.md’);

fs.writeFileSync(filePath, fullContent, ‘utf8’);
console.log(‘✅ 项目:’, slug + ‘.md’);
}

async function main() {
console.log(‘🚀 开始同步…’);

if (!process.env.NOTION_TOKEN) {
console.error(‘❌ 未设置 NOTION_TOKEN’);
process.exit(1);
}

if (BLOG_DATABASE_ID) {
console.log(’\n📝 同步文章…’);
if (fs.existsSync(POSTS_DIR)) {
fs.readdirSync(POSTS_DIR).forEach(file => {
fs.unlinkSync(path.join(POSTS_DIR, file));
});
}

```
const posts = await getNotionPages(BLOG_DATABASE_ID);
console.log(`找到 ${posts.length} 篇文章`);

for (const page of posts) {
  await convertPostToHugo(page);
}
```

}

if (PROJECTS_DATABASE_ID) {
console.log(’\n🎨 同步项目…’);
if (fs.existsSync(PROJECTS_DIR)) {
fs.readdirSync(PROJECTS_DIR).forEach(file => {
fs.unlinkSync(path.join(PROJECTS_DIR, file));
});
}

```
const projects = await getNotionPages(PROJECTS_DATABASE_ID);
console.log(`找到 ${projects.length} 个项目`);

for (const page of projects) {
  await convertProjectToHugo(page);
}
```

}

console.log(’\n✨ 完成！’);
}

main().catch(console.error);
