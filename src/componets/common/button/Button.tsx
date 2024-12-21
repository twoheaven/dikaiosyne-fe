// src/components/common/Button/Button.tsx
import React from 'react';
import { ButtonWrapper } from './Button.styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';  // 버튼의 타입을 설정
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined' | 'filled'; // 버튼 스타일 종류에 'filled' 추가
  size?: 'small' | 'medium' | 'large'; // 버튼 크기
  disabled?: boolean; // 비활성화 여부
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',  // 기본값을 'button'으로 설정
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  return (
    <ButtonWrapper variant={variant} size={size} disabled={disabled} onClick={onClick}>
      <button type={type}>  {/* 여기서 type을 적용 */}
        {children}
      </button>
    </ButtonWrapper>
  );
};

export default Button;
