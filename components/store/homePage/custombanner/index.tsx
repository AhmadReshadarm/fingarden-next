import color from 'components/store/lib/ui.colors';
import {
  Container,
  Content,
  Wrapper,
} from 'components/store/storeLayout/common';
import Loading from 'ui-kit/Loading';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { Advertisement } from 'swagger/services';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';
import styled from 'styled-components';

const CustomBanner = () => {
  const advertisement = useAppSelector<Advertisement[]>(
    (state) => state.banners.advertisement,
  );
  const isLoading = useAppSelector((state) => state.banners.loading);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  useEffect(() => {
    if (!isLoading && advertisement.length !== 0) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(advertisement[0]?.description!)),
        ),
      );
    }
  }, [advertisement]);

  // _________________________ preview converter _______________________
  const [convertedContent, setConvertedContent] = useState(null);
  useEffect(() => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const htmlOutput = draftToHtml(rawContentState);
    setConvertedContent(htmlOutput);
  }, [editorState]);

  function createMarkup(html) {
    if (typeof window !== 'undefined') {
      const domPurify = DOMPurify(window);
      return {
        __html: domPurify.sanitize(html),
      };
    }
  }
  return (
    <Container
      flex_direction="column"
      justify_content="center"
      padding="20px 0"
      bg_color={color.bgPrimary}
    >
      <Wrapper>
        <Content
          flex_direction="column"
          justify_content="center"
          align_items="center"
        >
          {isLoading ? (
            <Loading />
          ) : (
            <div
              className="main-page-advertisment"
              dangerouslySetInnerHTML={createMarkup(convertedContent)}
            ></div>
          )}
        </Content>
      </Wrapper>
      <ServiceIconsWrapper>
        <div className="service-container">
          <div className="service-content-wrapper">
            <span>
              <img src="/icons/cart-gray-main.png" alt="cart gray" />
            </span>
            <span>Оплата удобным для Вас способом: наличными или по карте</span>
          </div>
          <div className="service-content-wrapper">
            <span>
              <img src="/icons/delivary-gray.png" alt="cart gray" />
            </span>
            <span>Быстрая доставка и отгрузка. Работаем по всей России</span>
          </div>
          <div className="service-content-wrapper">
            <span>
              <img
                className="special-icons"
                src="/icons/graunty-gray.png"
                alt="cart gray"
              />
            </span>
            <span>Лучшие товары для Вас Гарантия высокого качества</span>
          </div>
          <div className="service-content-wrapper">
            <span>
              <img
                className="special-icons"
                src="/icons/chat-gray.png"
                alt="cart gray"
              />
            </span>
            <span>Бесплатная онлайн-консультация</span>
          </div>
        </div>
      </ServiceIconsWrapper>
    </Container>
  );
};

const ServiceIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: ${color.bgProduct};
  padding: 90px 0;
  .service-container {
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    .service-content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 25px;
      .special-icons {
        width: 100px;
      }
      span {
        text-align: center;
      }
      img {
        width: 140px;
      }
    }
  }
`;

export default CustomBanner;
