import React from 'react';
import styled from 'styled-components';
import AboutImg from '/src/assets/about/파일 14_Ver 2.0.jpg';
import useIsMobile from '../../../hooks/useIsMobile';
import Fonts from '../../../styles/font/font';

const Title = styled.h1`
  font-family: 'MaruBuriBold';
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

interface DescriptionProps {
  isMobile: boolean;
}

const Description = styled.p<DescriptionProps>`
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: 'left'; /* 모바일일 경우 center, 아니면 left */
`;

const AboutWrapper = styled.div`
  padding: 0px;
  text-align: left;
  aspect-ratio: 1.92/1;
`;

const About: React.FC = () => {
  const isMobile = useIsMobile(); // 모바일 여부 확인

  return (
    <>
      {isMobile ? (
        // 모바일 레이아웃
        <div style={{ textAlign: 'center', padding: '0px' }}>
          <img
            src={AboutImg}
            alt="About"
            style={{
              width: '70%',
              aspectRatio: '1/1',
              objectFit: 'cover',
              marginBottom: '0px',
            }}
          />
          <div
            style={{
              padding: '20px',
            }}
          >
            <Title style={{ fontFamily: Fonts.MaruBuriBold }}>dikaiosyne</Title>
            <Title style={{ fontFamily: Fonts.MaruBuriBold }}>
              ; 디카이오쉬네
            </Title>
            <div
              style={{
                fontFamily: 'Pretendard-Regular',
                justifyContent: 'left',
                textAlign: 'left',
                marginTop: '20px',
              }}
            >
              <Description isMobile={isMobile}>
                하나님의 말씀대로 살고자 하는 이들을 돕습니다.
              </Description>
              <Description isMobile={isMobile}>
                하나님 그 분은 그분 자체가 ‘위로’이시고
              </Description>
              ‘사랑’이신 것을 압니다.
              <Description isMobile={isMobile}>
                하지만, 우리는 ‘위로’와 ‘사랑’을 찾아
              </Description>
              다른 것에 쉽게 눈을 돌리곤 합니다.
              <div style={{ height: '12px' }} />
              <Description isMobile={isMobile}>
                막연하게, 어렴풋하게 알던 위로, 사랑, 지혜, 거룩..
              </Description>
              <Description isMobile={isMobile}>
                하나님 그분의 속성들, 그 가치가 명확해 질 때,
              </Description>
              <Description isMobile={isMobile}>
                우리는 삶에서 살아 움직이시는
              </Description>
              하나님과 동행할 것입니다.
              <Description isMobile={isMobile}>
                다카이오쉬네는 막연하던 그 가치가
              </Description>
              명확해지는 경험을 전달합니다.
            </div>
          </div>
        </div>
      ) : (
        // PC 레이아웃
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
                aspectRatio: '3/4',
                marginLeft: '5%',
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
                  fontFamily: Fonts.MaruBuriBold,
                }}
              >
                dikaiosyne ; 디카이오쉬네
              </Title>
              <div style={{ height: '20px' }}></div>
              <div
                style={{
                  width: '110%',
                  fontFamily: 'Pretendard-Regular',
                }}
              >
                <Description isMobile={isMobile}>
                  하나님의 말씀대로 살고자 하는 이들을 돕습니다.
                </Description>
                <Description isMobile={isMobile}>
                  하나님 그 분은 그분 자체가 ‘위로’이시고 ‘사랑’이신 것을
                  압니다.
                </Description>
                <Description isMobile={isMobile}>
                  하지만, 우리는 ‘위로’와 ‘사랑’을 찾아 다른 것에 쉽게 눈을
                  돌리곤 합니다.
                </Description>
                <div style={{ height: '10px' }} />
                <Description isMobile={isMobile}>
                  막연하게, 어렴풋하게 알던
                </Description>
                <Description isMobile={isMobile}>
                  위로, 사랑, 지혜, 거룩.. 하나님 그분의 속성들, 그 가치가
                  명확해 질 때,
                </Description>
                <Description isMobile={isMobile}>
                  우리는 삶에서 살아 움직이시는 하나님과 동행할 것입니다.
                </Description>
                <Description isMobile={isMobile}>
                  다카이오쉬네는 막연하던 그 가치가 명확해지는 경험을
                  전달합니다.
                </Description>
              </div>
            </div>
          </div>
        </AboutWrapper>
      )}
    </>
  );
};

export default About;
