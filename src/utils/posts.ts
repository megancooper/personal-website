import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src', '_posts');

export const getPostSlugs = () => fs.readdirSync(postsDirectory);

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const getPostBySlug = (slug: string, fields: string[] = []): Post => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);

  const items = {} as Post;

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'date') {
      const date = data[field];
      items[field] = new Date(date).toDateString();
    }
    if (field === 'title') {
      items[field] = data[field];
    }
  });

  return items;
};

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));

  return posts;
}
