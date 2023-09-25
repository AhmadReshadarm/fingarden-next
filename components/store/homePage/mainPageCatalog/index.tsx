import { Container, Wrapper } from 'components/store/storeLayout/common';
import styled from 'styled-components';
import color from 'components/store/lib/ui.colors';
import { TGlobalState } from 'redux/types';
import { useAppSelector } from 'redux/hooks';

const MainPageCatalog = (): JSX.Element => {
  const { categories } = useAppSelector<TGlobalState>((state) => state.global);

  return (
    <Container
      flex_direction="column"
      justify_content="center"
      padding="20px 0"
      bg_color={color.bgPrimary}
    >
      <HeaderWrapper>
        <div className="header-title-wrapper">
          <span>Ассортимент</span>
        </div>
        <div className="header-divder-wrapper"></div>
      </HeaderWrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid;
  position: relative;
  .header-title-wrapper {
    max-width: 1230px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0 30px 20px 0;
    border-bottom: 1px solid ${color.btnPrimary};
    z-index: 2;
    margin-bottom: -1px;
    span {
      font-family: Anticva;
      font-size: 2.5rem;
      font-weight: 600;
    }
  }
  .header-divder-wrapper {
    width: 50%;
    align-self: flex-end;
    border-bottom: 5px solid ${color.textPrimary};
    z-index: 1;
    position: absolute;
    top: 65px;
    right: 0;
  }
`;

export default MainPageCatalog;
