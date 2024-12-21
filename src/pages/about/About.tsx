// src/pages/About.tsx
import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Title>About Us</Title>
      <Description>
        We are a team dedicated to providing the best services for our clients. Our goal is to bring innovative
        solutions to life with the highest quality standards.
      </Description>
    </AboutWrapper>
  );
};

export default About;
