import { Btns } from '../../common';
import { Dispatch, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import variants from 'components/store/lib/variants';
import { paginateTo } from 'components/store/checkout/constant';
import { handleMenuState } from '../../helpers';
import { PopupDisplay } from '../../constants';
import { User } from 'swagger/services';
import { devices } from 'components/store/lib/Devices';
import ProfileLogedOutSVG from '../../../../../assets/profile_loged_out.svg';
type Props = {
  user: User | null;
  isSignedIn: boolean;
  setDisplay: Dispatch<SetStateAction<PopupDisplay>>;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  paginate: any;
  btnNode: any;
};

const AuthBtn: React.FC<Props> = ({
  user,
  isSignedIn,
  setDisplay,
  setIsOpened,
  paginate,
  btnNode,
}) => {
  const [isAnimate, setAnimate] = useState(false);

  return (
    <ParentContainer ref={btnNode}>
      {isSignedIn ? (
        <Btns
          onClick={() => {
            paginate(paginateTo.back, 'selection');
            handleMenuState(setIsOpened, setDisplay)();
          }}
          key="auth-profile"
          initial="init"
          animate={isSignedIn ? 'animate' : 'exit'}
          variants={variants.fadeInSlideIn}
        >
          <span
            style={{
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              backgroundColor: '#000',
              display: 'block',
            }}
          >
            <img
              src={`https://avatars.dicebear.com/api/micah/${user?.id}.svg?facialHairProbability=0&mouth[]=smile&scale=100&hair[]=fonze,full,pixie`}
              width={25}
              height={25}
            />
          </span>
        </Btns>
      ) : (
        <motion.button
          className="header-action-btns"
          onClick={(e) => {
            paginate(paginateTo.back, 'selection');
            handleMenuState(setIsOpened, setDisplay)();
            setAnimate(!isAnimate);
            setTimeout(() => setAnimate(false), 200);
          }}
          key="auth"
          initial="init"
          animate={!isSignedIn ? 'animate' : 'exit'}
          variants={variants.fadeInSlideIn}
          title="Войти"
        >
          <span>
            <ProfileLogedOutSVG />
          </span>
        </motion.button>
      )}
    </ParentContainer>
  );
};

const ParentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media ${devices.mobileL} {
    width: 100%;
    hieght: 100%;
  }
`;

export default AuthBtn;
