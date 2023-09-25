import StoreLayout from 'components/store/storeLayout/layouts';
import Banners from 'components/store/homePage/banners';
import CustomBanner from 'components/store/homePage/custombanner';
import MainPageCatalog from 'components/store/homePage/mainPageCatalog';
// import Bestsellers from 'components/home-page/bestsellers';
// import CreatedForYou from 'components/home-page/createdForYou';
// import Reviews from 'components/home-page/reviews';
import SEOstatic from 'components/store/SEO/SEOstatic';
import Loading from 'ui-kit/Loading';
import React, { Suspense, useEffect } from 'react';

// const Banners = React.lazy(() => import('components/home-page/banners'));
// const Bestsellers = React.lazy(
//   () => import('components/home-page/bestsellers'),
// );
// const CreatedForYou = React.lazy(
//   () => import('components/home-page/createdForYou'),
// );

// const Reviews = React.lazy(() => import('components/home-page/reviews'));

const IndexPage = (): JSX.Element => {
  return (
    <>
      {/* <SEOstatic
        page={{
          name: 'Главный',
          url: '/',
          desc: 'Интернет-магазин Fingarden',
          keywords: 'fingarden, fingarden.ru',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }}
        image="https://fingarden.ru/fingarden.svg"
      /> */}

      <Suspense fallback={<Loading />}>
        <Banners />
        <CustomBanner />
        <MainPageCatalog />
        {/* <Bestsellers />
        <CreatedForYou /> */}
        {/* <Reviews /> */}
      </Suspense>
    </>
  );
};

IndexPage.PageLayout = StoreLayout;
export default IndexPage;
