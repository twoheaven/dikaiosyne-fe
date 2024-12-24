import { useState, useEffect } from 'react';

// 모바일 화면 크기를 정의 (예: 768px 이하를 모바일로 간주)
const MOBILE_BREAKPOINT = 768;

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // 윈도우의 크기 변경을 감지
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    // 초기 화면 크기 체크
    handleResize();

    // 리사이즈 이벤트 핸들러 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
