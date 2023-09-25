import { devices } from 'components/store/lib/Devices';
import color from 'components/store/lib/ui.colors';
import variants from 'components/store/lib/variants';
import {
  Container,
  Content,
  Wrapper,
} from 'components/store/storeLayout/common';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchBanner, fetchBrands } from 'redux/slicers/store/homePageSlicer';
import { THomePageState } from 'redux/types';
import styled from 'styled-components';
import Loading from 'ui-kit/Loading';
import ImageBanner from './ImageBanner';

const Banners = () => {
  const dispatch = useAppDispatch();
  const { banner } = useAppSelector<THomePageState>((state) => state.homePage);
  const [loading, setLoading] = useState(true);
  const [imageIndexForDots, setImageIndexForDots] = useState(0);
  useEffect(() => {
    (async () => {
      await Promise.all([dispatch(fetchBanner()), dispatch(fetchBrands())]);
      setLoading(false);
    })();
  }, []);

  return (
    <Container
      variants={variants.fadInOut}
      key="container-home-banners"
      initial="start"
      animate="middle"
      exit="end"
      flex_direction="row"
      justify_content="center"
      position="relative"
    >
      <SliderContainer>
        {!loading ? (
          <>
            <ImageBanner
              slides={banner?.slides}
              setImageIndexForDots={setImageIndexForDots}
            />
          </>
        ) : (
          <Loading />
        )}
      </SliderContainer>
      <SliderBgWrapper>
        <div className="InnerWrapper">
          <div className="right-side"></div>
          <div className="left-side center-content-wrapper">
            {banner?.slides.map((item, index) => {
              return (
                <span
                  key={index}
                  style={{
                    backgroundColor:
                      index == imageIndexForDots ? '#606060' : '#d0d3cb',
                  }}
                ></span>
              );
            })}
          </div>
          <div className="left-side"></div>
        </div>
      </SliderBgWrapper>
    </Container>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SliderBgWrapper = styled.div`
  width: 100%;
  min-height: 600px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    ${color.bgSecondary} 40%,
    ${color.bgPrimary}
  );
  .InnerWrapper {
    width: 100%;
    max-width: 1230px;
    min-height: 550px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      width: 100%;
      min-height: 600px;
      height: 100%;
    }
    .right-side: {
      background-color: ${color.bgSecondary};
    }
    .left-side {
      background-color: ${color.bgPrimary};
    }
    .center-content-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      gap: 20px;
      padding-bottom: 45px;
      span {
        padding: 3px;
        border-radius: 50%;
        background-color: #d0d3cb;
      }
    }
  }
`;

export default Banners;
