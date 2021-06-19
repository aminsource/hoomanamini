import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import FunctionCard from '@/components/FunctionCard';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const url = 'https://manakit.ir/snippets';
const title = 'Code Snippets – هومن امینی';

export default function Snippets({ snippets }) {
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
      <div className="flex flex-col justify-center items-start mb-16 p-4">
        <h1 className="font-bold text-2xl md:text-4xl tracking-normal mb-4 text-black dark:text-white">
          تکه کد ها
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('htmlcss');

  return { props: { snippets } };
}
