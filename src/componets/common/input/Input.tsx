// src/components/common/Input/Input.tsx
import React from 'react';
import { InputWrapper } from './Input.styles';

interface InputProps {
  name: string;  // name 속성 추가
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: 'text' | 'password' | 'email' | 'number';  // 다양한 입력 타입
  placeholder?: string;  // 플레이스홀더
  size?: 'small' | 'medium' | 'large';  // 입력 크기
  variant?: 'filled' | 'outlined';  // 스타일 종류
  disabled?: boolean;  // 비활성화 여부
  error?: string;  // 에러 메시지
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  size = 'medium',
  variant = 'filled',
  disabled = false,
  error = '',
}) => {
  return (
    <div>
      <InputWrapper
        name={name}  // name 속성 추가
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        size={size}
        variant={variant}
        disabled={disabled}
        error={error}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
