const title = 'Example blog with Next.js';
const titleTemplate = '%s';
const description =
  'Example blog built with Next.js + TailwindCSS and deployed with Vercel';

const SEO = {
  title,
  titleTemplate,
  description,
  canonical: 'https://simple-blog-nextjs-three.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://simple-blog-nextjs-three.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://simple-blog-nextjs-three.vercel.app/api/thumbnail.png',
        alt: title,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    handle: '@alexlmarques',
    site: '@alexlmarques',
    cardType: 'summary_large_image'
  }
};

export default SEO;
