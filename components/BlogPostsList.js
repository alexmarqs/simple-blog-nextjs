import Link from 'next/link';
import PostDate from '@/components/PostDate';
import { usePostViews } from '@/hooks/usePostViews';

const BlogPostsList = ({ posts }) => {
  return (
    <section className="text-lg">
      <h2 className="my-3 text-2xl font-bold">Blog 👨‍💻</h2>
      {posts.map((post) => (
        <PostPreview
          title={post.title}
          key={post.id}
          slug={post.id}
          date={post.date}
          desc={post.description}
        />
      ))}
    </section>
  );
};

const PostPreview = ({ title, date, slug, desc }) => {
  const { views } = usePostViews(slug);
  return (
    <div className="p-3 mb-5 border-2 border-gray-300">
      <Link href={`/posts/${slug}`}>
        <a className="link">{title}</a>
      </Link>
      <div className="flex justify-between text-light">
        <PostDate dateStr={date} />
        <p>{`${views || '–––'} views`}</p>
      </div>
      <div className="mt-1 italic text-light">{desc}</div>
    </div>
  );
};

export default BlogPostsList;
