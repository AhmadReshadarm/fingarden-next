import color from 'components/store/lib/ui.colors';
import variants from 'components/store/lib/variants';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../../assets/arrow.svg';
import { ArrowBtns, ArrowSpan } from 'ui-kit/ArrowBtns';
import { SWIPE_CONFIDENCE_THRESHOLD } from './constants';
import Link from 'next/link';
import {
  UseImagePaginat,
  handleDragEnd,
} from 'components/store/storeLayout/helpers';
import { Slide } from 'swagger/services';
import { devices } from 'components/store/lib/Devices';

type Props = {
  slides: Slide[] | undefined;
};

const ImageBanner: React.FC<Props> = ({ slides }) => {
  const [page, direction, setPage, paginateImage] = UseImagePaginat();
  const imageIndex = wrap(0, Number(slides?.length), page);
  const [userIntract, setUserIntract] = useState(false);
  let timer;
  useEffect(() => {
    if (!userIntract) {
      timer = setTimeout(() => {
        paginateImage(1);
      }, 10000);
    }
    return () => {
      if (userIntract) window.clearTimeout(timer);
    };
  });

  return (
    <SliderWrapper
      key="slider-home-banners"
      custom={0.3}
      initial="init"
      animate="animate"
      exit={{ y: -80, opacity: 0, transition: { delay: 0.2 } }}
      variants={variants.fadInSlideUp}
    >
      <Link
        href={
          slides && slides[imageIndex]?.link ? slides[imageIndex]?.link! : ''
        }
        legacyBehavior
      >
        <a>
          <AnimatePresence initial={false} custom={direction}>
            <Slider
              key={page}
              src={slides ? `/api/images/${slides[imageIndex]?.image}` : ''}
              custom={direction}
              variants={variants.slider}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd(
                paginateImage,
                SWIPE_CONFIDENCE_THRESHOLD,
              )}
              onDrag={() => setUserIntract(true)}
            />
          </AnimatePresence>
        </a>
      </Link>
      <ArrowBtns
        whileHover="hover"
        whileTap="tap"
        custom={1.1}
        variants={variants.grow}
        right="15px"
        top="auto"
        position="absolute"
        boxshadow="transparent"
        bgcolor={color.textPrimary}
        onClick={() => {
          paginateImage(1);
          setUserIntract(true);
        }}
      >
        <ArrowSpan rotate="0">
          <Arrow />
        </ArrowSpan>
      </ArrowBtns>
      <ArrowBtns
        whileHover="hover"
        whileTap="tap"
        custom={1.1}
        variants={variants.grow}
        left="15px"
        top="auto"
        position="absolute"
        boxshadow="transparent"
        bgcolor={color.textPrimary}
        onClick={() => {
          paginateImage(-1);
          setUserIntract(true);
        }}
      >
        <ArrowSpan rotate="180">
          <Arrow />
        </ArrowSpan>
      </ArrowBtns>
    </SliderWrapper>
  );
};

const SliderWrapper = styled(motion.div)`
  width: 100%;
  height: 462px;
  padding-top: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devices.mobileL} {
    height: auto;
    overflow: hidden;
    a {
      width: 100%;
      height: 53vw;
    }
  }
`;

const Slider = styled(motion.img)`
  width: 100%;
  height: 462px;
  border-radius: 25px;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  @media ${devices.mobileL} {
    height: auto;
  }
`;

export default memo(ImageBanner);
