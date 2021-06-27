# Simple Blog using Next.js

This is based on starter template for [Learn Next.js](https://nextjs.org/learn) but using some customizations 🚀.

Demo: https://simple-blog-nextjs-three.vercel.app

## Built with

- 🔥 [Next.js](https://nextjs.org) v11!
- 🔥 [Cloud Firestore](https://firebase.google.com/docs/firestore) (Firebase) via Next.js API route to implement real time count views mechanism. **Note:** _Once you choose a region for your database, select the same location for your Serverless Function Region. This will minimize latency between your Serverless Function and your database, improving performance_
- 🎨 [Tailwind CSS](https://tailwindcss.com) integration for styling
- ✏️ Linter with [ESLint](https://eslint.org)
- 💥 Custom API route / serverless function to use [Playwright](https://playwright.dev/) to create thumbnails for blog posts preview when sharing the link in the social media (Twitter, Facebook, etc.)!
- 🛠 [Prettier](https://prettier.io) for code formatter
- 🦊 SEO with [Next SEO](https://github.com/garmeeh/next-seo)
- 📑 [reading-time](https://www.npmjs.com/package/reading-time) package to get a Medium's like reading time estimation
- ⌛ [NProgress](NProgress.js) progress bar to convince the users that something is happening
- 📝 SSG (Static Site Generation) pre-rendering from Next.js to parse blog markdown files during build time
- 💥 [SWR](https://swr.vercel.app/) React hook lib for remote data fetching, it first returns the data from cache (stale) and then sends the fetch request (revalidate)
- Custom google fonts using [next-google-fonts](https://github.com/joe-bell/next-google-fonts)
- Replace React with Preact in client production build (https://blogify.dev/egoist/how-i-made-my-next-js-build-50-percent-smaller)

## Running Locally

```bash
$ git clone https://github.com/alexmarqs/simple-blog-with-nextjs.git
$ cd simple-blog-with-nextjs
$ yarn
$ yarn dev
```

Note: Do not forget to rename the file `.env.example` to `.env.local` and set your own variables.
