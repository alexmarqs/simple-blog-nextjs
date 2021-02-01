import Image from 'next/image';
import Link from 'next/link';
import { useIsRoot } from '@/hooks/useIsRoot';

const LayoutHeader = () => {
  const title = 'Digital Garden,';
  const isRoot = useIsRoot();
  const imgSize = isRoot ? '150' : '106';

  return (
    <header className="flex flex-col items-center mb-4">
      <Link href="/">
        <a>
          <Image
            src="/avatar.jpg"
            alt="Picture of the author"
            width={imgSize}
            height={imgSize}
            quality={45}
            priority
            className="rounded-full"
          />
        </a>
      </Link>
      {isRoot ? (
        <h2 className="my-3 text-2xl font-bold">
          <Title title={title} />
        </h2>
      ) : (
        <h3 className="my-4 text-lg font-bold">
          <Link href="/">
            <a className="text-inherit">
              <Title title={title} />
            </a>
          </Link>
        </h3>
      )}
    </header>
  );
};

export default LayoutHeader;

const Title = ({ title }) => {
  return (
    <>
      <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-600">
        {title}
      </span>
      <br />
      by Your Name.
    </>
  );
};
