// hooks/useForm.ts
import { useState } from 'react';

// 폼 필드 타입
interface FormValues {
  [key: string]: string;
}

// 유효성 검사 함수 타입
type Validator = (value: string) => string | undefined;

interface UseFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;  // 폼 제출 시 호출되는 함수
  validators?: { [key: string]: Validator };  // 선택적인 유효성 검사 함수
}

const useForm = ({ initialValues, onSubmit, validators = {} }: UseFormProps) => {
  const [formState, setFormState] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 폼 필드 값 변경 처리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // 유효성 검사
    if (validators[name]) {
      const error = validators[name](value);
      setErrors((prev) => ({
        ...prev,
        [name]: error || '', // error가 undefined일 때 빈 문자열로 대체
      }));
    }
  };

  // 폼 제출 처리
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 유효성 검사 실행
    const newErrors: { [key: string]: string } = {};
    Object.keys(formState).forEach((key) => {
      if (validators[key]) {
        const error = validators[key](formState[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);

    // 에러가 없다면 폼 제출
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formState);
    }
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
