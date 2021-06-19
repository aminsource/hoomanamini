import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import SnippetLayout from '@/layouts/snippets';
import MDXComponents from '@/components/MDXComponents';

export default function Snippet({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <SnippetLayout frontMatter={frontMatter}>{content}</SnippetLayout>;
}

export async function getStaticPaths() {
  const oracle = await getFiles('oracle');

  return {
    paths: oracle.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const snippet = await getFileBySlug('oracle', params.slug);

  return { props: snippet };
}
