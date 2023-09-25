import { Button, Form, Spin } from 'antd';
import { navigateTo } from 'common/helpers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { Page } from 'routes/constants';
import { Advertisement } from 'swagger/services';
import color from 'components/store/lib/ui.colors';
import { uploadImage } from '../products/helpers';
import FormItem from '../generalComponents/FormItem';
import { handleFormSubmitBanner } from './helpers';
import styles from './index.module.scss';
import { ManageAdvertisementFields } from './manageAdvertisementFields';
import { handleFalsyValuesCheck } from '../../../common/helpers/handleFalsyValuesCheck.helper';
import { convertFromRaw, EditorState, convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic';
import { EditorProps } from 'react-draft-wysiwyg';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false },
);
import DOMPurify from 'dompurify';
import draftToHtml from 'draftjs-to-html';

interface Props {
  isLoading: boolean;
  isSaveLoading: boolean;
}

const AdvertisementForm = ({ isLoading, isSaveLoading }: Props) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [desc, setDesc] = useState<string>();
  const advertisement: Advertisement = useAppSelector<Advertisement[]>(
    (state) => state.banners.advertisement,
  )[0];

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  useEffect(() => {
    if (!isLoading && advertisement) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(advertisement?.description!)),
        ),
      );
    }
  }, [advertisement]);

  const initialValues: Advertisement = {
    description: advertisement?.description,
  };

  useEffect(() => {
    if (advertisement) {
      setDesc(advertisement?.description);
    }
  }, [advertisement]);

  const isDisabled: boolean = handleFalsyValuesCheck(desc);

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

  const fontSizes: number[] = [];
  for (let index = 0; index < 97; index++) {
    if (index !== 0) {
      fontSizes.push(index);
    }
  }

  return (
    <>
      {isLoading ? (
        <Spin className={styles.spinner} size="large" />
      ) : (
        <>
          <Form
            layout="vertical"
            form={form}
            initialValues={initialValues}
            requiredMark={true}
            className={styles.updateBannerForm}
            onFinish={handleFormSubmitBanner(
              router,
              dispatch,
              'imageList',
              'advertisement',
              Number.parseInt(advertisement?.id!),
            )}
          >
            <FormItem
              option={ManageAdvertisementFields.Desc}
              children={
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                  placeholder="Write here..."
                  editorStyle={{
                    border: `1px solid ${color.textSecondary}`,
                    borderRadius: '5px',
                  }}
                  toolbar={{
                    fontFamily: {
                      options: ['Jost', 'Anticva'],
                    },
                    image: {
                      urlEnabled: true,
                      uploadEnabled: true,
                      alignmentEnabled: true,
                      uploadCallback: (file) => uploadImage(file, dispatch),
                      previewImage: true,
                      inputAccept:
                        'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                      alt: { present: true, mandatory: false },
                      defaultSize: {
                        height: 'auto',
                        width: 'auto',
                      },
                    },
                    fontSize: {
                      options: fontSizes,
                    },
                  }}
                />
              }
            />
            <Form.Item className={styles.updateBannerForm__buttonsStack}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.updateBannerForm__buttonsStack__submitButton}
                loading={isSaveLoading}
                // disabled={isDisabled}
              >
                Сохранить
              </Button>
              <Button
                type="primary"
                onClick={navigateTo(router, Page.ADMIN_BANNERS)}
              >
                Вернуться назад
              </Button>
            </Form.Item>
          </Form>
          <div className="preview-wrapper">
            <h1>Просмотр:</h1>
            <div
              className="preview-advertisment"
              dangerouslySetInnerHTML={createMarkup(convertedContent)}
            ></div>
          </div>
        </>
      )}
    </>
  );
};

export default AdvertisementForm;
