import { getAllPostIds, getPostById } from '@/lib/api';
import BlogPostLayout from '@/layouts/BlogPostLayout';

export default function Post({ postData }) {
  return (
    <BlogPostLayout data={postData}>{postData.contentHtml}</BlogPostLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostById(params.id);
  return {
    props: {
      postData
    }
  };
}
