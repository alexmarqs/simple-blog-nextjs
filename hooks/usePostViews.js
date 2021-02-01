import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

export const usePostViews = (slug) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  return {
    views: data?.total
  };
};
