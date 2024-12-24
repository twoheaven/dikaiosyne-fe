import React, { useRef } from 'react';
import styled from 'styled-components';
import useIsMobile from '../../hooks/useIsMobile';
import emailjs from 'emailjs-com';

const ContactWrapper = styled.div<{ isMobile: boolean }>`
  font-family: 'BGBold';

  padding: 20px;
  text-align: center;
  margin-top: ${({ isMobile }) => (isMobile ? '20px' : '50px')};
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  justify-content: center;
`;

const Title = styled.h1`
  margin-top: 30px;
  padding: 10px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  border: 0.1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  border: 0.1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1px;
  background: white;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ContactUs: React.FC = () => {
  const isMobile = useIsMobile();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_PUBLIC_KEY);

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_USER_PUBLIC_KEY as string
        )
        .then(
          () => {
            alert('Message sent successfully!');
          },
          (error) => {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <ContactWrapper isMobile={isMobile}>
      <div style={{ textAlign: 'right', marginRight: '50px' }}>
        <Title>Contact Us</Title>
        <div>
          <p>안녕하세요. dikaiosyne를 찾아주셔서 감사합니다.</p>
          <p>남겨주신 귀한 제안은 신중하게 검토한 후,</p>
          기재하신 연락처로 답변 드리겠습니다.
        </div>
        <div>
          Hi :) It's a great pleasure for us to get in touch from you.
          <p>Please write about your inquiry in this form.</p>
          Then we'll consider about it and get back to you soon.
        </div>
      </div>
      <Form ref={form} onSubmit={sendEmail}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
            >
              문의유형 *
              <Select id="inquiryType" name="inquiryType" required>
                <option value="" disabled>
                  Select Inquiry Type
                </option>
                <option value="collaboration">협업 문의</option>
                <option value="partnership">입점 제안</option>
                <option value="bulkPurchase">대량구매 및 맞춤 제작</option>
                <option value="others">기타</option>
                <option value="overseas">Inquiry from overseas</option>
              </Select>
            </div>
          </label>
          <label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
            >
              소속 단체 *
              <Input
                type="text"
                name="organization"
                placeholder="소속 단체를 입력해주세요."
                required
              />
            </div>
          </label>
          <label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
            >
              세부 문의 내용 *
              <Textarea
                name="details"
                placeholder="세부 문의 내용을 입력해주세요."
                required
              />
            </div>
          </label>
          <label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
            >
              담당자 정보 *
              <Input
                type="text"
                name="contact"
                placeholder="성함, 연락처(이메일 주소)를 기입해주세요."
                required
              />
            </div>
          </label>
          <label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
            ></div>
            <div
              style={{
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  maxWidth: '300px',
                  width: '100%',
                  maxHeight: '200px',
                  overflowY: 'auto',
                  border: '1px solid #ccc',
                  padding: '10px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <p>■ 개인정보 수집목적 및 이용목적</p>
                입점, 상품 공급 등 사업 상 협력 검토
                <p>■ 수집하는 개인정보 항목</p>
                이름, 소속단체, 이메일, 휴대전화 번호 등  
                <p>■ 개인정보의 보유기간 및 이용기간</p>
                원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당
                정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의
                이유로 명시한 기간 동안 보존합니다.
                <p>
                  ο 회사 내부 방침에 의한 정보 보유 사유 · 부정거래 방지 및
                  쇼핑몰 운영방침에 따른 보관: 5년
                </p>
                ※ 동의를 거부하시면 제안 검토가 어려울 수 있습니다.
              </div>
              <input type="checkbox" name="agreement" required />
              개인정보 수집 및 이용에 동의합니다.
            </div>
          </label>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </div>
      </Form>
    </ContactWrapper>
  );
};

export default ContactUs;
