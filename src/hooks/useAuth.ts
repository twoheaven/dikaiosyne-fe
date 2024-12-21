// hooks/useAuth.ts
import { useState, useEffect } from 'react';

// 인증 상태를 정의할 타입
interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

// 인증 관련 로직을 담당하는 커스텀 훅
const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // 초기 인증 상태를 로컬 스토리지나 API를 통해 불러오기
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthState({ isAuthenticated: true, user: storedUser });
    }
  }, []);

  // 로그인 함수
  const login = (username: string) => {
    setAuthState({ isAuthenticated: true, user: username });
    localStorage.setItem('user', username);
  };

  // 로그아웃 함수
  const logout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    localStorage.removeItem('user');
  };

  return {
    authState,
    login,
    logout,
  };
};

export default useAuth;
