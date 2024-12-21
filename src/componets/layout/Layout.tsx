// src/components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 뷰포트 높이를 채우도록 설정 */
  width: 100%; /* 너비 100% */
`;

const MainContent = styled.main`
  flex: 1; /* 나머지 공간을 차지하도록 설정 */
  width: 100%;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  padding: 0px;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <Outlet /> {/* 여기서 각 페이지 컴포넌트가 렌더링됩니다 */}
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
