import { parseISO, format } from 'date-fns';

export const formatPostDate = (dateString) => {
  const date = parseISO(dateString);
  return format(date, 'LLLL d, yyyy');
};

export const getAbsoluteURL = (path) => {
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL;
  return baseURL + path;
};
