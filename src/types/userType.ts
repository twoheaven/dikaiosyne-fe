// src/types/userType.ts

export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    profilePicture?: string;  // 선택적인 필드
  }
  
  export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
  }
  