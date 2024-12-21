// src/api/authApi.ts
import axios from 'axios';

const API_URL = 'https://example.com/api';  // 실제 API URL로 변경해야 합니다.

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
  };
}

interface LoginRequest {
  username: string;
  password: string;
}

// 로그인 API 요청 함수
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};

// 로그아웃 API 요청 함수
export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data;
};
