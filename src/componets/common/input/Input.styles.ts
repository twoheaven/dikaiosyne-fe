// src/components/common/Input/Input.styles.ts
import styled, { css } from 'styled-components';

interface InputWrapperProps {
  size: 'small' | 'medium' | 'large';
  variant: 'filled' | 'outlined';
  disabled: boolean;
  error: string;
}

const inputStyles = {
  filled: css`
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.background};
      opacity: 0.6;
    }
  `,
  outlined: css`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
    &:disabled {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      opacity: 0.6;
    }
  `,
};

const inputSizes = {
  small: css`
    padding: 8px;
    font-size: ${({ theme }) => theme.fontSize.small};
  `,
  medium: css`
    padding: 12px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,
  large: css`
    padding: 16px;
    font-size: ${({ theme }) => theme.fontSize.large};
  `,
};

const errorStyle = css`
  border-color: ${({ theme }) => theme.colors.secondary};
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const InputWrapper = styled.input<InputWrapperProps>`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.3s ease;

  // 기본 스타일
  ${({ variant }) => inputStyles[variant]}

  // 입력 크기 적용
  ${({ size }) => inputSizes[size]}

  // 에러 스타일
  ${({ error }) => error && errorStyle}

  // 비활성화 상태 스타일
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}

  &.error-message {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 4px;
  }
`;
