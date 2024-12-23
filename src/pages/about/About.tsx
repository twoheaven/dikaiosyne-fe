import React from 'react';
import styled from 'styled-components';
import AboutImg from '/src/assets/about/파일 14_Ver 2.0.jpg';

const AboutWrapper = styled.div`
  padding: 0px;
  text-align: center;
  aspect-ratio: 1.92/1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const About: React.FC = () => {
  return (
    <AboutWrapper style={{ alignContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <img
          src={AboutImg}
          style={{
            width: '27%',
          }}
        />
        <div style={{ width: '4%' }} />
        <div
          style={{
            textJustify: '-moz-initial',
            alignContent: 'center',
          }}
        >
          <Title
            style={{
              marginTop: '-10px',
            }}
          >
            dikaiosyne ; 디카이오쉬네
          </Title>
          <div style={{ height: '20px' }}></div>
          <div style={{ marginLeft: '10%', width: '110%' }}>
            <Description>
              하나님의 말씀대로 살고자 하는 이들을 돕습니다.
            </Description>
            <Description>
              하나님 그 분은 그분 자체가 ‘위로’이시고 ‘사랑’이신 것을 압니다.
            </Description>
            <Description>
              하지만, 우리는 ‘위로’와 ‘사랑’을 찾아 다른 것에 쉽게 눈을 돌리곤
              합니다.
            </Description>
            <div style={{ height: '10px' }} />
            <Description>막연하게, 어렴풋하게 알던</Description>
            <Description>
              위로, 사랑, 지혜, 거룩.. 하나님 그분의 속성들, 그 가치가 명확해 질
              때,
            </Description>
            <Description>
              우리는 삶에서 살아 움직이시는 하나님과 동행할 것입니다.
            </Description>
            <Description>
              다카이오쉬네는 막연하던 그 가치가 명확해지는 경험을 전달합니다.
            </Description>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
