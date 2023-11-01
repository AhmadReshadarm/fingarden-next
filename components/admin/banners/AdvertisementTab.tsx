import { Spin } from 'antd';
import { useAppSelector } from 'redux/hooks';
import { Advertisement } from 'swagger/services';
import styles from './index.module.scss';
import styled from 'styled-components';
interface Props {
  isLoading: boolean;
}

const AdvertisementTab = ({ isLoading }: Props) => {
  const data = useAppSelector<Advertisement[]>(
    (state) => state.banners.advertisement,
  );

  return (
    <>
      {isLoading ? (
        <Spin className={styles.spinner} size="large" />
      ) : (
        <Wrapper>
          <div className="title-wrapper">
            <h1>{data[0].title}</h1>
          </div>
          <div className="description-wrapper">
            <p>{data[0].description}</p>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 50px;
  .title-wrapper {
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    h1 {
      width: 100%;
      text-align: left;
      font-family: Anticva;
    }
  }
  .description-wrapper {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    p {
      width: 100%;
      text-align: left;
    }
  }
`;

export default AdvertisementTab;
