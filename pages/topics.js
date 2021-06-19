import React from 'react'
import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
function topics() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start mb-16 p-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
                    <Link href={`/snippets`}>
                        <a
                            className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full text-center"
                        >
                            <Image
                                alt="جاوااسکریپت"
                                height={52}
                                width={52}
                                src="/logos/javascript.png"
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-bold text-center mt-2 text-gray-900 dark:text-gray-100">
                                جاوااسکریپت
                            </h3>
                            <p className="mt-1 text-gray-700 dark:text-gray-400">نکات و ترفندها</p>
                        </a>
                    </Link>
                    <Link href={`/snippets`}>
                        <a
                            className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full text-center"
                        >
                            <Image
                                alt="ری‌اکت جی اس"
                                height={52}
                                width={52}
                                src="/logos/react.png"
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-bold text-center mt-2 text-gray-900 dark:text-gray-100">
                                ری اکت جی اس
                            </h3>
                            <p className="mt-1 text-gray-700 dark:text-gray-400">نکات و ترفندها</p>
                        </a>
                    </Link>
                    <Link href={`/snippets`}>
                        <a
                            className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full text-center"
                        >
                            <Image
                                alt="تایپ اسکریپت"
                                height={52}
                                width={52}
                                src="/logos/typescript.png"
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-bold text-center mt-2 text-gray-900 dark:text-gray-100">
                                تایپ اسکریپت
                            </h3>
                            <p className="mt-1 text-gray-700 dark:text-gray-400">نکات و ترفندها</p>
                        </a>
                    </Link>
                    <Link href={`/snippets`}>
                        <a
                            className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full text-center"
                        >
                            <Image
                                alt="جاوااسکریپت"
                                height={52}
                                width={52}
                                src="/logos/htmlcss.jpg"
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-bold text-center mt-2 text-gray-900 dark:text-gray-100">
                                سی اس اس
                            </h3>
                            <p className="mt-1 text-gray-700 dark:text-gray-400">نکات و ترفندها</p>
                        </a>
                    </Link>
                    <Link href={`/snippets`}>
                        <a
                            className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full text-center"
                        >
                            <Image
                                alt="پایتون"
                                height={52}
                                width={52}
                                src="/logos/python.png"
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-bold text-center mt-2 text-gray-900 dark:text-gray-100">
                                پایتون
                            </h3>
                            <p className="mt-1 text-gray-700 dark:text-gray-400">نکات و ترفندها</p>
                        </a>
                    </Link>
                    <Link href={`/snippets`}>
                        <a
                            className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full text-center"
                        >
                            <Image
                                alt="اوراکل"
                                height={52}
                                width={52}
                                src="/logos/oracle.png"
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-bold text-center mt-2 text-gray-900 dark:text-gray-100">
                                اوراکل
                            </h3>
                            <p className="mt-1 text-gray-700 dark:text-gray-400">نکات و ترفندها</p>
                        </a>
                    </Link>

                </div>
            </div>
        </Container>
    );
}

export default topics
