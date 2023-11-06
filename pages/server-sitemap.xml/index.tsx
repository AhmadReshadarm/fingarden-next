import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  let posts: any = await fetch(
    'http://62.217.179.49:4010/products?limit=100000',
  );
  posts = await posts.json();
  const productSitemaps = posts.rows.map((item) => ({
    loc: `https://ivill.ru/product/${item?.url}`,
    changefreq: 'daily',
    lastmod: item.updatedAt,
    priority: 0.7,
  }));

  const fields = [...productSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
