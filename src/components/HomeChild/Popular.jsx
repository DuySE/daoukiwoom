import React, { useState } from 'react';
import styled from 'styled-components'

const Tabs = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`

const Tab = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #2a437c;
  &.selected {
    border-bottom: 1.5px solid #CFE5FF;
    color: #fff;
    font-weight: 700;
    @media (max-width: 768px) {
      color: #212529;
    }
    @media (max-width: 1024px) {
      color: #fff;
    }
  }
  height: 40px;
  padding: 39px;
  transition: border 1s ease;  
`

const PopularWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
`
const PolularItem = styled.div`
  display: flex;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`

const BigNumber = styled.div`
  font-weight: bold;
  font-size: 64px;
  line-height: 87px;
  color: #CFE5FF;
`

const Description = styled.div`
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    color: #212529;
  }
`

const TabList = ['Now', 'Future']

const ContentTabList = {
  Now: {
    network: 6,
    partner: 32,
    country: 4,
  },
  Future: {
    network: 100,
    partner: 300,
    country: 67,
  }
}


const Popular = () => {
  const [selectedTab, setSelectedTab] = useState('Now')
  return (
    <>
      <Tabs>
        {TabList.map(item => <Tab className={item === selectedTab ? 'selected' : ''} key={item} onClick={() => setSelectedTab(item)}>{item}</Tab>)}
      </Tabs>
      <PopularWrapper>
        <PolularItem>
          <BigNumber>{ContentTabList[selectedTab].network}</BigNumber>
          <Description>different IT Software Networks</Description>
        </PolularItem>
        <PolularItem>
          <BigNumber>{ContentTabList[selectedTab].partner}</BigNumber>
          <Description>partners</Description>
        </PolularItem>
        <PolularItem>
          <BigNumber>{ContentTabList[selectedTab].country}</BigNumber>
          <Description>countries</Description>
        </PolularItem>
      </PopularWrapper>
    </>
  );
}

export default Popular
