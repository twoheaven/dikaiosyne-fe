import styled from 'styled-components';
import comfortImg from '/src/assets/comfort/KakaoTalk_Photo_2024-12-18-00-14-25 001.jpeg';
import Card from '../../../componets/feature/card/Card';
import Paths from '../../../utils/paths';

const BookWrapper = styled.div`
  padding: 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  aspect-ratio: 2/1;
  max-width: 1000px;
`;

const CardsContainer = styled.div`
  display: flex; /* 가로 배치 */
  justify-content: center; /* 카드 가운데 정렬 */
  align-items: center; /* 수직 정렬 */
  gap: 16px; /* 카드 간격 */
  margin-top: -10%;
`;

const Book: React.FC = () => {
  return (
    <BookWrapper>
      <CardsContainer>
        <Card link={Paths.Book} imgSrc={comfortImg} alt={'comfort'} />
        <div style={{ width: '3%' }} />
        <Card link={Paths.Book} imgSrc={comfortImg} alt={'comfort'} />
      </CardsContainer>
    </BookWrapper>
  );
};

export default Book;
