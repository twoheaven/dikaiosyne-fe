// src/components/common/Button/Button.styles.ts
import styled, { css } from 'styled-components';

interface ButtonWrapperProps {
  variant: 'primary' | 'secondary' | 'outlined' | 'filled';  // 'filled' 추가
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}

const buttonStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.primary};
      opacity: 0.6;
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    border: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.6;
    }
  `,
  outlined: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
    &:disabled {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.6;
    }
  `,
  filled: css`  // 'filled' 스타일 추가
    background-color: ${({ theme }) => theme.colors.filled || '#f39c12'}; // 기본 색상
    color: #fff;
    border: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.filledHover || '#e67e22'}; // 호버 색상
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.filled || '#f39c12'};
      opacity: 0.6;
    }
  `,
};

const buttonSizes = {
  small: css`
    padding: 8px 16px;
    font-size: ${({ theme }) => theme.fontSize.small};
  `,
  medium: css`
    padding: 12px 24px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,
  large: css`
    padding: 16px 32px;
    font-size: ${({ theme }) => theme.fontSize.large};
  `,
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;

  // 기본 스타일
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;

  // 버튼 스타일 variant 적용
  ${({ variant }) => buttonStyles[variant]}

  // 버튼 크기 적용
  ${({ size }) => buttonSizes[size]}

  // 비활성화 상태 스타일
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;
