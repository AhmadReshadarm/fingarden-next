import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { Advertisement } from 'swagger/services';
import styles from './index.module.scss';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';
interface Props {
  isLoading: boolean;
}

const AdvertisementTab = ({ isLoading }: Props) => {
  const data = useAppSelector<Advertisement[]>(
    (state) => state.banners.advertisement,
  );

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  useEffect(() => {
    if (!isLoading && data.length !== 0) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(data[0]?.description!)),
        ),
      );
    }
  }, [data]);

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
    <>
      {isLoading ? (
        <Spin className={styles.spinner} size="large" />
      ) : (
        <div
          className="preview"
          dangerouslySetInnerHTML={createMarkup(convertedContent)}
        ></div>
      )}
    </>
  );
};

export default AdvertisementTab;
