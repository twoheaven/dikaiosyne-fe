// src/types/commonType.ts

// API 응답 결과 타입
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
  }
  
  // 기본적인 Form 필드 타입
  export interface FormField {
    name: string;
    value: string;
    error?: string;
  }
  