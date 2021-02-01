import { useRouter } from 'next/router';

export function useIsRoot() {
  return useRouter().pathname === '/';
}
