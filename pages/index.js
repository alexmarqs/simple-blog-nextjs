import Layout from '@/layouts/Layout';
import { getExportedPostsByDate } from '@/lib/api';
import Bio from '@/components/Bio';
import BlogPostsList from '@/components/BlogPostsList';

export default function Home({ postsData }) {
  return (
    <Layout>
      <div className="mb-16">
        <Bio />
        <BlogPostsList posts={postsData} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsData = getExportedPostsByDate();
  return {
    props: {
      postsData
    }
  };
}
