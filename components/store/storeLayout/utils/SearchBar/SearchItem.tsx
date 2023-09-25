import { getProductVariantsImages } from 'common/helpers/getProductVariantsImages.helper';
import variants from 'components/store/lib/variants';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import styled from 'styled-components';
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
import { AddToCart, AddToWishlist } from 'ui-kit/ProductActionBtns';
import { TWishlistState } from 'redux/types';
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
  // const wishlist: Wishlist = useAppSelector((state) => state.global.wishlist);
  const { wishlist }: TWishlistState = useAppSelector(
    (state) => state.wishlist,
  );
  return (
    <Link key={index} href={`/product/${product.url}`}>
      <CardItemContainer
        custom={1.01}
        whileHover="hover"
        whileTap="tap"
        variants={variants.grow}
      >
        <ItemImageAndBtnWrapper>
          <span className="ItemPriceWrapper">
            Цена: {product?.productVariants![0].price} ₽
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
              <AddToCart
                product={product}
                cart={cart}
                checkIfItemInCart={checkIfItemInCart}
              />
            </ArrowBtns>
            <ArrowBtns
              bgcolor={color.glassmorphismSeconderBG}
              filterdropback="blur(9px);"
              position="relative"
              onClick={TrigerhandleWishBtnClick(
                product,
                handleWishBtnClick(product, dispatch, wishlist!),
              )}
            >
              <AddToWishlist
                checkIfItemInWishlist={checkIfItemInWishlist}
                product={product}
                wishlist={wishlist!}
              />
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
