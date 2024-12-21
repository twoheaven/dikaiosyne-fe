// src/api/userApi.ts
import axios from 'axios';

const API_URL = 'https://example.com/api';  // 실제 API URL로 변경해야 합니다.

interface User {
  id: string;
  name: string;
  email: string;
}

// 사용자 정보 조회 API 요청 함수
export const getUserInfo = async (userId: string): Promise<User> => {
  const response = await axios.get(`${API_URL}/user/${userId}`);
  return response.data;
};

// 사용자 정보 업데이트 API 요청 함수
export const updateUserInfo = async (userId: string, data: Partial<User>): Promise<User> => {
  const response = await axios.put(`${API_URL}/user/${userId}`, data);
  return response.data;
};
