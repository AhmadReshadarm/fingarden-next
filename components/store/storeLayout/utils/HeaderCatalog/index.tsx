import { useState, useCallback, useEffect } from 'react';
import { PopupDisplay } from '../../constants';
import CatalogBtn from './CatalogBtn';
import CatalogModal from './CatalogModal';
import { outsideClickListner } from 'components/store/storeLayout/helpers';
import { styled } from 'styled-components';
import color from 'components/store/lib/ui.colors';
type Props = {
  onWhichNav: string;
  setOnWhichNav: any;
};
const HeaderCatalog: React.FC<Props> = ({ onWhichNav, setOnWhichNav }) => {
  // const [isOpened, setIsOpened] = useState(false);
  // const [display, setDisplay] = useState(PopupDisplay.None);
  // const [menuRef, setMenuRef] = useState(null);
  // const [btnRef, setBtnRef] = useState(null);
  // const [listening, setListening] = useState(false);
  // const menuNode = useCallback((node: any) => {
  //   setMenuRef(node);
  // }, []);
  // const btnNode = useCallback((node: any) => {
  //   setBtnRef(node);
  // }, []);

  // useEffect(
  //   outsideClickListner(
  //     listening,
  //     setListening,
  //     menuRef,
  //     btnRef,
  //     setIsOpened,
  //     setDisplay,
  //   ),
  // );
  return (
    <CatalogWrapper
      onMouseEnter={() =>
        setOnWhichNav(
          onWhichNav == 'service'
            ? 'services'
            : onWhichNav == 'about'
            ? 'about'
            : 'catalog',
        )
      }
      onMouseLeave={() => setOnWhichNav('')}
    >
      <CatalogModal
      // isOpened={isOpened}
      // setIsOpened={setIsOpened}
      // display={display}
      // setDisplay={setDisplay}
      // menuNode={menuNode}
      />
      {/* <CatalogBtn
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        setDisplay={setDisplay}
        btnNode={btnNode}
      /> */}
    </CatalogWrapper>
  );
};

const CatalogWrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 90px;
  left: 0;
  z-index: 99;
  background-color: ${color.glassmorphismBg};
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export default HeaderCatalog;
