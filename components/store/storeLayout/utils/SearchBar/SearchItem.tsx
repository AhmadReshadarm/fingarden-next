import { getProductVariantsImages } from 'common/helpers/getProductVariantsImages.helper';
import variants from 'components/store/lib/variants';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import styled from 'styled-components';
import WishlistNormalSVG from '../../../../../assets/wishlist_normal.svg';
import WishlistPressedSVG from '../../../../../assets/wishlilst_pressed.svg';
import BasketNortmalWhite from '../../../../../assets/basket_normal_white.svg';
import BasketPressedWhite from '../../../../../assets/basket_pressed_white.svg';
import {
  handleSearchItemClick,
  TrigerhandleWishBtnClick,
  TrigerhandleCartBtnClick,
} from './helpers';
import { devices } from 'components/store/lib/Devices';
import presets from 'components/store/lib/presets';
import color from 'components/store/lib/ui.colors';
import { ArrowBtns } from 'ui-kit/ArrowBtns';
import { Basket, Product, Wishlist } from 'swagger/services';

import {
  checkIfItemInCart,
  checkIfItemInWishlist,
  handleCartBtnClick,
  handleWishBtnClick,
} from 'ui-kit/products/helpers';

type Props = {
  product: Product;
  index: number;
};

const SearchItem: React.FC<Props> = ({ product, index }) => {
  const dispatch = useAppDispatch();
  const images = getProductVariantsImages(product?.productVariants);
  const cart: Basket = useAppSelector((state) => state.cart.cart);
  const wishlist: Wishlist = useAppSelector((state) => state.global.wishlist);

  return (
    <Link href={`/product/${product.url}`}>
      <CardItemContainer
        custom={1.01}
        whileHover="hover"
        whileTap="tap"
        variants={variants.grow}
      >
        <ItemImageAndBtnWrapper>
          <span className="ItemPriceWrapper">
            Цена: {product?.productVariants[0].price} ₽
          </span>
          <ItemActionBtnsWrapper>
            <ArrowBtns
              bgcolor={color.glassmorphismSeconderBG}
              filterdropback="blur(9px);"
              position="relative"
              onClick={TrigerhandleCartBtnClick(
                product,
                handleCartBtnClick(
                  product,
                  dispatch,
                  product.productVariants![0],
                  cart,
                ),
              )}
            >
              <ItemActionBtnIconsWrapper
                key={'basket-pressed'}
                animate={checkIfItemInCart(product, cart) ? 'animate' : 'exit'}
                variants={variants.fadeOutSlideOut}
                className="search-absolute-position"
              >
                <BasketPressedWhite />
              </ItemActionBtnIconsWrapper>
              <ItemActionBtnIconsWrapper
                key={'basket-normal'}
                animate={checkIfItemInCart(product, cart) ? 'exit' : 'animate'}
                variants={variants.fadeOutSlideOut}
                className="search-absolute-position"
              >
                <BasketNortmalWhite />
              </ItemActionBtnIconsWrapper>
            </ArrowBtns>
            <ArrowBtns
              bgcolor={color.glassmorphismSeconderBG}
              filterdropback="blur(9px);"
              position="relative"
              onClick={TrigerhandleWishBtnClick(
                product,
                handleWishBtnClick(product, dispatch, wishlist),
              )}
            >
              <ItemActionBtnIconsWrapper
                key={'wishlist-pressed'}
                animate={
                  checkIfItemInWishlist(product, wishlist) ? 'animate' : 'exit'
                }
                variants={variants.fadeOutSlideOut}
                className="search-absolute-position"
              >
                <WishlistPressedSVG />
              </ItemActionBtnIconsWrapper>
              <ItemActionBtnIconsWrapper
                key={'wishlist-normal'}
                animate={
                  checkIfItemInWishlist(product, wishlist) ? 'exit' : 'animate'
                }
                variants={variants.fadeOutSlideOut}
                className="search-absolute-position"
              >
                <WishlistNormalSVG />
              </ItemActionBtnIconsWrapper>
            </ArrowBtns>
          </ItemActionBtnsWrapper>
          <img
            onClick={handleSearchItemClick(dispatch)}
            src={`/api/images/${images[0]}`}
            alt={product.name}
          />
        </ItemImageAndBtnWrapper>
        <ItemTitelWrapper onClick={handleSearchItemClick(dispatch)}>
          {product.name}
        </ItemTitelWrapper>
      </CardItemContainer>
    </Link>
  );
};

const CardItemContainer = styled(motion.li)`
  width: 260px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${presets.boxShadow};
  -webkit-box-shadow: ${presets.boxShadow};
  -moz-box-shadow: ${presets.boxShadow};
  border-radius: 10px;
  background-color: ${color.bgPrimary};
  overflow: hidden;
  @media ${devices.laptopS} {
    width: 220px;
  }

  @media ${devices.mobileL} {
    width: 100%;
    min-width: 300px;
  }
`;

const ItemImageAndBtnWrapper = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ItemPriceWrapper {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 120px;
    height: 40px;
    background-color: ${color.glassmorphismSeconderBG};
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    border-radius: 5px;
    color: ${color.textPrimary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ItemActionBtnsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
`;

const ItemActionBtnIconsWrapper = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ItemTitelWrapper = styled.span`
  width: 100%;
  height: 25%;
  text-align: left;
  padding: 20px 10px;
`;

export default SearchItem;
