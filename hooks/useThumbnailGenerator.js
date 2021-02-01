import { useRouter } from 'next/router';
import { getAbsoluteURL } from '@/lib/utils';

export const useThumbnailGenerator = () => {
  const router = useRouter();
  const ogFullImageUrl = getAbsoluteURL(
    `/api/thumbnail.png?path=${router.asPath}`
  );

  return ogFullImageUrl;
};
