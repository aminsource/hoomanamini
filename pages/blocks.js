import React from 'react';
import Link from 'next/link';

import Container from '@/components/Container';
import getIcons from '@/components/icons';

const iconList = getIcons();

export default function blocks() {
  const ListRenderer = () => {
    return Object.entries(iconList).map(([type, icons]) => (
      <div key={type}>
        <div className="text-blue-500 justify-items-center ">{type}</div>
        <div className="flex flex-row flex-wrap justify-items-center items-start max-w-full mx-auto mb-16 px-8">
          {Object.entries(icons).map((icon) => (
            <Link href={`/blocks/${type}/${icon[0]}`}>
              <div className="box-border min-h-full w-80 p-4 border-4 m-5">
                {icon[1]}
              </div>
            </Link>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <Container>
      <ListRenderer />
    </Container>
  );
}
