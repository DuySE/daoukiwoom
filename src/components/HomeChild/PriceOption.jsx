import React from 'react';
import styled from 'styled-components'
import { Row } from 'react-bootstrap'


const PriceWrapper = styled.div`
  background-color: #F3F9FF;
`

const PriceOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  border: 1px solid #DEDEDE;
  width: 264px;
  height: 228px;
  padding: 43px 0 0 43px;
  margin: 0 16px;
  background-color: ${props => props.highlight ? '#E6367E' : '#fff'};

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 27px;
`

const PriceTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: ${props => props.highlight ? '#fff' : '#333333'};
`

const PriceDescription = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: ${props => props.highlight ? '#fff' : '#374754'};
  margin-top: 3px;
`

const Price = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 65px;
  letter-spacing: 0.2px;
  color: #111111;
  color: ${props => props.highlight ? '#fff' : '#252B42'};
  margin-right: 10px;
  margin-left: 5px;
`

const PerMonthValue = styled.div`
  display: flex;
  flex-direction: column;
`

const PerMonthLabel = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: ${props => props.highlight ? '#fff' : '#252B42'};
`

const Unit = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: ${props => props.highlight ? '#fff' : '#252B42'};
`

const RowWrapperPrice = styled(Row)`
  display: flex;
  justify-content: center;
  padding: 121px 0;
`

const PriceOption = () => {
  return (
    <PriceWrapper>
      <RowWrapperPrice>
        <PriceOptionWrapper>
          <PriceTitle>Free Test</PriceTitle>
          <PriceDescription>Organize across all apps by hand</PriceDescription>
          <PriceRow>
            <Price>0</Price>
            <PerMonthValue>
                <Unit>$</Unit>
                <PerMonthLabel>Per Month</PerMonthLabel>
            </PerMonthValue>
          </PriceRow>
        </PriceOptionWrapper>
        
        <PriceOptionWrapper>
          <PriceTitle>Low Price</PriceTitle>
          <PriceDescription>Monthly Fixed Amount</PriceDescription>
          <PriceRow>
            <Price>200.000</Price>
            <PerMonthValue>
                <Unit>$</Unit>
                <PerMonthLabel>Per Month</PerMonthLabel>
            </PerMonthValue>
          </PriceRow>
        </PriceOptionWrapper>

        <PriceOptionWrapper>
          <PriceTitle>Easy Using Methods</PriceTitle>
          <PriceDescription>Various Manuals</PriceDescription>
          <PriceRow>
            <Price>200.000</Price>
            <PerMonthValue>
                <Unit>$</Unit>
                <PerMonthLabel>Per Month</PerMonthLabel>
            </PerMonthValue>
          </PriceRow>
        </PriceOptionWrapper>

        <PriceOptionWrapper highlight>
          <PriceTitle highlight>Verified IT Service</PriceTitle>
          <PriceDescription highlight>On sale in 4 countries</PriceDescription>
          <PriceRow>
            <Price highlight>300.000</Price>
            <PerMonthValue>
                <Unit highlight>VNĐ</Unit>
                <PerMonthLabel highlight>Per Month</PerMonthLabel>
            </PerMonthValue>
          </PriceRow>
        </PriceOptionWrapper>
      </RowWrapperPrice>
    </PriceWrapper>
  );
}

export default PriceOption
