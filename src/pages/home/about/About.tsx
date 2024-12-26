import React from 'react';
import styled from 'styled-components';
import AboutImg from '/src/assets/about/KakaoTalk_20241226_084430876.jpg';
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
  text-align: ${({ isMobile }) => (isMobile ? 'center' : 'left')};
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
            <Title style={{ fontFamily: Fonts.MaruBuriBold }}>
              🌿디카이오쉬네 : dikaiosyne
            </Title>
            <div
              style={{
                fontFamily: 'Pretendard-Regular',
                justifyContent: 'left',
                textAlign: 'left',
                marginTop: '20px',
              }}
            >
              <Description isMobile={isMobile} style={{ textAlign: 'left' }}>
                하나님의 말씀대로 살고자 하는 이들을 돕습니다.
              </Description>
              <Description isMobile={isMobile} style={{ textAlign: 'left' }}>
                하나님을 너무나 사랑하고 열정이 있지만 실제 삶에서 그 열정을
                지켜내기 위한 힘이 부족할 때,
              </Description>
              <Description isMobile={isMobile} style={{ textAlign: 'left' }}>
                실제적인 믿음을 발휘하기 위한 가치들을 담은 제품을 만듭니다.
              </Description>
              <Description isMobile={isMobile} style={{ textAlign: 'left' }}>
                감정과 막연함이 아닌 말씀을 기준으로 실제적인 믿음을
                발휘해보세요!
              </Description>
              <div style={{ height: '12px' }} />
              <Description isMobile={isMobile} style={{ textAlign: 'left' }}>
                사랑, 공의, 지혜, 긍휼 등 하나님의 성품과 속성들..
              </Description>
              <Description isMobile={isMobile} style={{ textAlign: 'left' }}>
                우리 안에서 그 가치들이 명확해 질 때,
              </Description>
              <Description isMobile={isMobile} style={{ textAlign: 'left' }}>
                우리 삶에서 살아 움직이시는 하나님과 동행할 것입니다.
              </Description>
              <Description isMobile={isMobile} style={{ textAlign: 'left' }}>
                다카이오쉬네는 막연하던 그 기독교적 가치들이 명확해지는 경험을
                전달합니다.
              </Description>
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
              alt="About"
              style={{
                width: '27%',
                aspectRatio: '1/1',
                marginLeft: '5%',
                objectFit: 'cover',
              }}
            />
            <div style={{ width: '5%' }} />
            <div
              style={{
                textJustify: '-moz-initial',
                alignContent: 'left',
                marginTop: '1%',
              }}
            >
              <Title
                style={{
                  marginTop: '-10px',
                  fontFamily: Fonts.MaruBuriBold,
                }}
              >
                🌿디카이오쉬네 : dikaiosyne
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
                  하나님을 너무나 사랑하고 열정이 있지만 실제 삶에서 그 열정을
                  지켜내기 위한 힘이 부족할 때,
                </Description>
                <Description isMobile={isMobile}>
                  실제적인 믿음을 발휘하기 위한 가치들을 담은 제품을 만듭니다.
                </Description>
                <Description isMobile={isMobile}>
                  감정과 막연함이 아닌 말씀을 기준으로 실제적인 믿음을
                  발휘해보세요!
                </Description>
                <div style={{ height: '10px' }} />
                <Description isMobile={isMobile}>
                  사랑, 공의, 지혜, 긍휼 등 하나님의 성품과 속성들..
                </Description>
                <Description isMobile={isMobile}>
                  우리 안에서 그 가치들이 명확해 질 때,
                </Description>
                <Description isMobile={isMobile}>
                  우리 삶에서 살아 움직이시는 하나님과 동행할 것입니다.
                </Description>
                <Description isMobile={isMobile}>
                  다카이오쉬네는 막연하던 그 기독교적 가치들이 명확해지는 경험을
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
