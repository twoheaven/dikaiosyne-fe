import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 뷰포트 높이를 채우도록 설정 */
  width: 100%; /* 너비 100% */
  position: relative; /* Header와 MainContent를 겹치게 하기 위한 상대 위치 */
`;

const HeaderWrapper = styled.div`
  position: absolute; /* MainContent 위에 겹치도록 설정 */
  top: 0;
  width: 100%;
  z-index: 10; /* Header가 위로 올라오도록 설정 */
`;

const MainContent = styled.main`
  flex: 1; /* 나머지 공간을 차지하도록 설정 */
  width: 100%;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  padding: 0px;
  position: relative; /* Header와 겹치도록 설정 */
  margin-top: 0px; /* Header 높이만큼 아래로 내용 밀기 */
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainContent>
        <Outlet /> {/* 여기서 각 페이지 컴포넌트가 렌더링됩니다 */}
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
