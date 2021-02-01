import { useEffect } from 'react';
import { usePostViews } from '@/hooks/usePostViews';

export default function ViewCounter({ slug }) {
  const { views } = usePostViews(slug);

  useEffect(() => {
    const countView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    countView();
  }, [slug]);

  return `${views || '–––'} views`;
}
