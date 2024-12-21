// src/pages/Services.tsx
import React from 'react';
import styled from 'styled-components';

const ServiceWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  font-size: 1.2rem;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Service: React.FC = () => {
  return (
    <ServiceWrapper>
      <Title>Our Services</Title>
      <ServiceList>
        <ServiceItem>Web Development</ServiceItem>
        <ServiceItem>Mobile App Development</ServiceItem>
        <ServiceItem>UI/UX Design</ServiceItem>
      </ServiceList>
    </ServiceWrapper>
  );
};

export default Service;
