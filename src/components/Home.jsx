import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { useStore } from '../store'
import Footer from './HomeChild/Footer'
import PriceOption from './HomeChild/PriceOption'
import Service from './HomeChild/Service'
import Header from './HomeChild/Header'
import TopBar from './HomeChild/TopBar'
import Popular from './HomeChild/Popular'

const HomeWrapper = styled(Container)`
  position: relative;
  @media (min-width: 1400px) {
    max-width: 1440px;
  }
`

const RightSide = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-image: url('/images/header-bg.png');
  background-size: cover;
  background-position: center;
  min-height: 656px;
  min-width: 915px;
  top: 0;
  right: 0;
  z-index: -1;

  &:before {
    content: '';
      position: absolute;
      top: 0;
      height: 36px;
      width: 100%;
      background-color: #181949;
      right: 0;
  }
`


const Bigtitle = styled.div`
  font-size: 56px;
  font-weight: 700;
  line-height: 76px;
  color: #181949;
  width: 360px;
  min-height: 550px;
  align-items: center;
  display: flex;
  @media (max-width: 1024px) {
    color: #fff;
    width: unset;
  }
`


const HighlightMessage = styled.div`
  background: #FFD1E8;
  font-size: 24px;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 215px;
  }
`

const BoldText = styled.div`
  font-weight: 700;
`

const Home = () => {
  const [, dispatch] = useStore()

  const handleLogout = () => {
    dispatch({ type: 'logout' });
    localStorage.removeItem('isLoggedIn')
  }
  return (
      <HomeWrapper>
        <Row>
          <Col>
              <TopBar logout={handleLogout}/>
              <Header />
          </Col>
        </Row>
        <RightSide />

        <Row style={{ padding: '0 81px'}}>
          <Col xs="12" md="6">
            <Bigtitle>Asia IT Market Place</Bigtitle>
          </Col>
          <Col xs="12" md="6">
            <Popular />
          </Col>
        </Row>
        <Row>
          <HighlightMessage>You are now viewing an&nbsp;<BoldText>IT Software</BoldText>&nbsp;that has been verified by&nbsp;<BoldText>over 1 million users.</BoldText></HighlightMessage>
        </Row>
        <Service />  
        <PriceOption />
        <Footer />
      </HomeWrapper>
  );
}

export default Home
