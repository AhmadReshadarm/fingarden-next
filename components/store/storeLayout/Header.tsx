import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { Btns, Container, Content, Wrapper } from './common';
import { overrideDefaultIOSZoom } from './helpers';
import AuthComp from './utils/HeaderAuth/index';
import HeaderCart from './utils/HeaderCart';
import SearchBar from './utils/SearchBar/SearchBar';
import ExtraNavBar from './utils/ExtraNav';
import variants from '../lib/variants';
import color from '../lib/ui.colors';
import { outsideClickListner } from 'components/store/storeLayout/helpers';
import LogoSVG from '../../../assets/fingarden.svg';
import SearchedNormalSVG from '../../../assets/search_normal.svg';
import SearchedPressedSVG from '../../../assets/search_pressed.svg';
import ProfileLogedOutSVG from '../../../assets/profile_loged_out.svg';
import WishlistNormalSVG from '../../../assets/Wishlist_normal_black.svg';
import BasketNormalSvg from '../../../assets/basket_normal.svg';
import { PopupDisplay } from './constants';
import { motion } from 'framer-motion';
import HeaderCatalog from './utils/HeaderCatalog/index';
import { devices } from '../lib/Devices';
import { useEffect, useState, useCallback } from 'react';
import { useAppDispatch } from 'redux/hooks';
import NavWrapMobile from './NavWrapMobile';
import AuthBtnMobile from './utils/HeaderAuth/AuthBtnMobile';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';
import { handleSearchclosed } from './helpers';
const Header = () => {
  const dispatch = useAppDispatch();
  const [isSearchActive, setSearchActive] = useState(false);
  const [display, setDisplay] = useState(PopupDisplay.None);
  const [searchWrapperRef, setSearchWrapperRef] = useState(null);
  const [searchBtnRef, setSearchBtnRef] = useState(null);
  const [listening, setListening] = useState(false);
  const searchWrapperNode = useCallback((node: any) => {
    setSearchWrapperRef(node);
  }, []);
  const searchBtnNode = useCallback((node: any) => {
    setSearchBtnRef(node);
  }, []);

  const [onWhichNav, setOnWhichNav] = useState('');

  useEffect(
    outsideClickListner(
      listening,
      setListening,
      searchWrapperRef,
      searchBtnRef,
      setSearchActive,
      setDisplay,
    ),
  );

  useEffect(() => {
    if (!isSearchActive) {
      handleSearchclosed(dispatch);
    }
  }, [isSearchActive]);
  // ReactGA.initialize('G-LGRKY05W0C');
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url, { shallow }) => {
  //     // REACTGA
  //     // Send pageview with a custom path
  //     ReactGA.send({ hitType: 'pageview', page: url });

  //     console.log(
  //       `App is changing to ${url} ${
  //         shallow ? 'with' : 'without'
  //       } shallow routing`,
  //     );
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  useEffect(() => overrideDefaultIOSZoom());
  return (
    <>
      <Head>
        {/* <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css"
          rel="stylesheet"
        /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container
        variants={variants.fadInOut}
        key="header"
        initial="start"
        animate="middle"
        exit="end"
        flex_direction="column"
        justify_content="center"
        position="relative"
        bg_color={`linear-gradient(to right, ${color.bgSecondary} 60%, ${color.bgPrimary});`}
      >
        <Wrapper>
          <Content
            height="90px"
            flex_direction="row"
            justify_content="space-between"
            align_items="center"
          >
            <LogoWrapper>
              <Link href="/">
                <LogoSVG id="header-logo" />
              </Link>
            </LogoWrapper>
            <NavWraper>
              <button
                onMouseEnter={() => setOnWhichNav('catalog')}
                // onMouseLeave={() => setOnWhichNav('')}
              >
                <span>КАТАЛОГ</span>
              </button>
              <button
                onMouseEnter={() => setOnWhichNav('services')}
                onMouseLeave={() => setOnWhichNav('')}
              >
                <span>УСЛУГИ</span>
              </button>
              <button
                onMouseEnter={() => setOnWhichNav('about')}
                onMouseLeave={() => setOnWhichNav('')}
              >
                <span>О КОМПАНИИ</span>
              </button>
            </NavWraper>
            <BtnsWrapper>
              <div className="innerWrapper">
                <button
                  ref={searchBtnNode}
                  title="Поиск"
                  onClick={() => {
                    setSearchActive(!isSearchActive);
                    !isSearchActive
                      ? setDisplay(PopupDisplay.Flex)
                      : setTimeout(() => setDisplay(PopupDisplay.None), 150);
                  }}
                >
                  <motion.span
                    animate={isSearchActive ? 'exit' : 'animate'}
                    variants={variants.fadeOutSlideOut}
                    className="search-absolute-position"
                  >
                    <SearchedNormalSVG />
                  </motion.span>
                  <motion.span
                    animate={isSearchActive ? 'animate' : 'exit'}
                    variants={variants.fadeInSlideIn}
                    className="search-absolute-position"
                  >
                    <SearchedPressedSVG />
                  </motion.span>
                </button>
                <button title="Войти">
                  <span>
                    <ProfileLogedOutSVG />
                  </span>
                </button>
                <button title="Избранное">
                  <span>
                    <WishlistNormalSVG />
                  </span>
                </button>
                <button title="Корзина">
                  <span>
                    <BasketNormalSvg />
                  </span>
                </button>
              </div>
            </BtnsWrapper>
          </Content>
        </Wrapper>
        {onWhichNav == 'catalog' ? (
          <HeaderCatalog onWhichNav="catalog" setOnWhichNav={setOnWhichNav} />
        ) : (
          ''
        )}
        {onWhichNav == 'services' ? (
          <ExtraNavBar onWhichNav="service" setOnWhichNav={setOnWhichNav} />
        ) : (
          ''
        )}
        {onWhichNav == 'about' ? (
          <ExtraNavBar onWhichNav="about" setOnWhichNav={setOnWhichNav} />
        ) : (
          ''
        )}
        <SearchBar
          isSearchActive={isSearchActive}
          setSearchActive={setSearchActive}
          searchWrapperNode={searchWrapperNode}
          isSearchFormVisiable={display}
        />
      </Container>
      {/* <NavWrapMobile /> */}
    </>
  );
};

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media ${devices.laptopS} {
    gap: 47px;
  }

  @media ${devices.mobileL} {
    gap: 55px;
    flex-direction: column-reverse;
    margin-top: 15px;
    margin-bottom: -15px;
  }
`;

const NavWraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${color.bgPrimary};
  a,
  button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      color: #606060;
      font-size: 1rem;
    }
  }
`;

const BtnsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: ${color.bgPrimary};
  .innerWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    button {
      cursor: pointer;
      width: 25px;
      height: 25px;
      position: relative;
      .search-absolute-position {
        position: absolute;
        top: 0;
        left: 0;
      }
      span {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Header;
