import LayoutHeader from '@/layouts/LayoutHeader';
import LayoutFooter from '@/layouts/LayoutFooter';
import GithubSourceCode from '@/components/GithubSourceCode';

export default function Layout({ children }) {
  return (
    <>
      <GithubSourceCode />
      <div className="flex flex-col max-w-2xl min-h-screen px-4 py-4 mx-auto">
        <LayoutHeader />
        <main className="flex-grow">{children}</main>
        <LayoutFooter />
      </div>
    </>
  );
}
