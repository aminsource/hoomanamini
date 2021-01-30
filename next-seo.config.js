const title = 'مانا کیت';
const description =
  'Front-end developer, JavaScript enthusiast, and course creator.';

const SEO = {
  title,
  description,
  canonical: 'https://manakit.ir',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://manakit.ir',
    title,
    description,
    images: [
      {
        url: 'https://manakit.ir/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@leeerob',
    site: '@leeerob',
    cardType: 'summary_large_image'
  }
};

export default SEO;
