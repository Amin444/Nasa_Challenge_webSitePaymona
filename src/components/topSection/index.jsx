import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 60px;
  color: #ffffff;
  text-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
  text-align: center;
`;

const Slogan = styled.h4`
  margin: 0;
  color: rgba(255,255,255, 0.6);
  font-weight: 700;
  font-size: 50px;
  margin-top: 10px;
  text-align: center;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  width: 100%;
  text-align: center;
`;

const DonateButton = styled.a`
  border: 2px solid #ffffff;
  background-color: transparent;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  padding: 20px 2em;
  margin-top: 3em;
  width: 100%;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  display: flex;
  justify-content: center;
  text-decoration: none;
  &:hover {
    background-color: transparent;
    border: 2px solid #ffffff;
  }
`;

const Wrap = styled.div`
  padding: 10% 0 0 50px;
  width: 45%;
  height: 100%;
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Wrap>
      <Logo>MAPPING SPACE TRASH IN REAL TIME</Logo>
      <Slogan>Nasa Space Challenge</Slogan>
      <DonateButton
      href='http://debris.paymona.demo.com'
      target='_blank'
      >Launch Demo</DonateButton>
      </Wrap>
    </TopSectionContainer>
  );
}
