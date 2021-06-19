import { useState } from 'react';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const url = 'https://manakit.ir/blog';
const title = 'Blog – هومن امینی';
const description =
  'ارائه گفتارها و مطالب آموزشی در رابطه با توسعه فرانت اند وب و ابزارهای بکار گرفته شده در مانا ';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-full mx-auto mb-16 px-8">
        <h1 className="text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          وبلاگ
        </h1>

        {/* <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`تعداد پست ها ${posts.length} .`}
        </p> */}
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="جستجو"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="font-bold text-1xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
              محبوب ها
            </h3>
            <BlogPost
              title="جاوااسکریپت چیست؟"
              summary="شما هنوز جی اس نمی دانید، من هم به طور کامل نمی دانم، هیچ کدام از ما نمی توانیم این ادعا را داشته باشیم."
              slug="What-Is-Javascript"
            />
          </>
        )}
        <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          تمام گفتارها
        </h3>
        {!filteredBlogPosts.length && 'پستی وجود ندارد'}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
