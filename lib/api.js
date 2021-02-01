import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

const postsDir = path.join(process.cwd(), 'data');

export const getExportedPostsByDate = () => {
  // get file names under /data
  const fileNames = fs.readdirSync(postsDir);
  const postsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    // Read markdown file as string
    const fullPathFile = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPathFile, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });
  // Sort by date (DESC)
  return postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getPostById(id) {
  const fullPathFile = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPathFile, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    readingTime: readingTime(matterResult.content),
    contentHtml,
    ...matterResult.data
  };
}
