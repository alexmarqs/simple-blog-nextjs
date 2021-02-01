/* eslint-disable react/no-danger */
import PostDate from '@/components/PostDate';
import Layout from '@/layouts/Layout';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import ViewCounter from '@/components/ViewCounter';
import { useThumbnailGenerator } from '@/hooks/useThumbnailGenerator';

const BlogPostLayout = ({ data, children }) => {
  const { title, date, author, readingTime, id } = data;
  return (
    <Layout>
      <PostSeo {...data} />
      <article className="mb-16">
        <PostTitle>{title}</PostTitle>
        <PostHeader
          dateStr={date}
          author={author}
          readTime={readingTime}
          id={id}
        />
        <div className="prose" dangerouslySetInnerHTML={{ __html: children }} />
      </article>
    </Layout>
  );
};

const PostSeo = ({ title, description }) => {
  const ogFullImageUrl = useThumbnailGenerator();
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            url: `${ogFullImageUrl}`,
            alt: title
          }
        ]
      }}
    />
  );
};

const PostTitle = ({ children }) => (
  <h1 className="my-2 text-4xl font-bold">{children}</h1>
);

const PostHeader = ({ dateStr, author, readTime, id }) => {
  return (
    <div className="flex flex-col justify-between w-full mb-3 md:flex-row text-light">
      <div className="flex items-center space-x-3">
        <PostAuthor name={author.name} picture={author.picture} />
        <PostDate dateStr={dateStr} />
      </div>
      <p className="mt-1 md:mt-0">
        {readTime.text}
        {` • `}
        <ViewCounter slug={id} />
      </p>
    </div>
  );
};

const PostAuthor = ({ name, picture }) => {
  return (
    <div className="flex items-center space-x-1">
      <Image
        src={picture}
        alt="Picture of the author"
        width={20}
        height={20}
        quality={25}
        className="rounded-full"
        priority
      />
      <span>{name}</span>
    </div>
  );
};

export default BlogPostLayout;
