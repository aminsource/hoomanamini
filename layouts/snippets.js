import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function SnippetLayout({ children, frontMatter }) {
  const title = `${frontMatter.title} - Code Snippet`;
  const url = `https://manakit.ir/snippets/${frontMatter.slug}`;

  return (
    <Container>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <article className="flex flex-col justify-center items-center max-w-6xl mx-auto mb-16 w-full px-8">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-1xl md:text-2xl tracking-tight mb-4 text-black dark:text-white">
              {frontMatter.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {frontMatter.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={frontMatter.title}
              height={48}
              width={48}
              src={`/logos/${frontMatter.logo}`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="prose dark:prose-dark w-full max-w-screen-xl">{children}</div>
      </article>
    </Container>
  );
}
