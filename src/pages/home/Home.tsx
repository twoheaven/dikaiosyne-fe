import styled from 'styled-components';
import ImageFader from '../../componets/feature/imagefader/ImageFader';
import About from './about/About';
import Book from './book/Book';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center; /* 가운데 정렬 (필요에 따라 삭제 가능) */
  width: 100%; /* 부모 요소의 너비를 100%로 */
`;

function Home() {
  return (
    <HomeWrapper>
      <ImageFader />
      <div id="about-section">
        <About />
      </div>
      <div id="book-section">
        <Book />
      </div>
    </HomeWrapper>
  );
}

export default Home;
