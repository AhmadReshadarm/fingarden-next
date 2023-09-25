import { useState } from 'react';
import styled from 'styled-components';
import color from 'components/store/lib/ui.colors';
import { motion } from 'framer-motion';
import variants from 'components/store/lib/variants';
import {
  decreaseCounter,
  increaseCounter,
} from '../../components/store/storeLayout/utils/HeaderCart/helpers';
import { Product } from 'swagger/services';
import { useAppSelector } from 'redux/hooks';
import { TAuthState } from 'redux/types';
import { Role } from 'common/enums/roles.enum';
type Props = {
  qty: number;
  product: Product;
  inputStyle?: Object;
  onCountChange: (counter: number, product: Product) => void;
};
const ItemCounter: React.FC<Props> = ({
  qty,
  product,
  inputStyle,
  onCountChange,
}) => {
  const { user } = useAppSelector<TAuthState>((state) => state.auth);
  const [itemCounter, setItemCounter] = useState(
    qty < 10 && user?.role === Role.SuperUser ? 10 : qty,
  );

  return (
    <ItemCounterWrapper onClick={(e) => e.preventDefault()}>
      <motion.button
        whileHover="hover"
        whileTap="tap"
        variants={variants.boxShadow}
        onClick={decreaseCounter(product, setItemCounter, onCountChange, user!)}
      >
        -
      </motion.button>
      <span>{itemCounter}</span>
      <motion.button
        whileHover="hover"
        whileTap="tap"
        variants={variants.boxShadow}
        onClick={increaseCounter(product, setItemCounter, onCountChange)}
      >
        +
      </motion.button>
    </ItemCounterWrapper>
  );
};

const ItemCounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  button {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background-color: ${color.btnPrimary};
    color: ${color.textPrimary};
    align-self: center !important;
  }

  span {
    width: 34px;
    height: 30px;
    border-radius: 3px;
    border: 1px solid ${color.btnPrimary};
    background-color: transparent;
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default ItemCounter;
