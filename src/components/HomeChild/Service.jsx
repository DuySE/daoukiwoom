import React from 'react';
import styled from 'styled-components'
import { Row, Col, Button } from 'react-bootstrap'

const ServiceWrapper = styled(Row)`
  padding: 77px;
`

const GrayWrapper = styled.div`
  background-color: #F4F4F4;
  padding: 77px;
`

const AccoutingWrapper = styled(GrayWrapper)`
`

const HRAdminWrapper = styled(ServiceWrapper)`
  padding: 77px;
`

const SaleWrapper = styled(GrayWrapper)`
`

const SecurityWrapper = styled(GrayWrapper)`
`

const ColWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ColWrapperDescription = styled(ColWrapper)`

`

const HeadingDescription = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #666666;
  margin: 16px 0;
`

const HeadingTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #181949;
  font-family: Manrope;
`

const HeadingButton = styled(Button)`
  background-color: #181949;
  border-color: #181949;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-rarius: 8px;
  &:hover {
    background-color: #181949;
    border-color: #181949;
  }
`

const TagGroup = styled.div`
  display: flex;
`


const ButtonGroup = styled.div`
  display: flex;
  & > button {
    margin: 8px 23px;
  }
`

const Tag = styled.div`
  margin: 8px 23px;
  font-size: 16px;
  line-height: 22px;
  color: #666666;
`

const Title = styled.div`
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.01em;
  color: #181949;
  margin-bottom: 100px;
`

const Service = () => {
  return (
    <>
      <ServiceWrapper>
        <Title>IT CLOUD SEA’S IT SERVICE</Title>
        <Row>
          <ColWrapper><img alt="" src="images/icons/asset.svg"/></ColWrapper>
          <ColWrapperDescription>
            <HeadingTitle>ASSETS</HeadingTitle>
            <HeadingDescription>Inventory Management</HeadingDescription>
            <HeadingButton variant="secondary">G-Book</HeadingButton>
          </ColWrapperDescription>
        </Row>
      </ServiceWrapper>

      <AccoutingWrapper>
        <Row>
          <ColWrapperDescription>
            <HeadingTitle>ACCOUNTING</HeadingTitle>
            <HeadingDescription>Accounting</HeadingDescription>
            <HeadingButton variant="secondary">G-Book</HeadingButton>
          </ColWrapperDescription>
          <ColWrapper><img alt="" src="images/icons/accounting-icon.svg"/></ColWrapper>
        </Row>
      </AccoutingWrapper>

      <HRAdminWrapper>
        <Row>
          <ColWrapper><img alt="" src="images/icons/hradmin-icon.svg"/></ColWrapper>
          <ColWrapperDescription>
            <HeadingTitle>HR & ADMIN</HeadingTitle>
            <TagGroup>
              <Tag>Webmail</Tag>
              <Tag>E- Apporval</Tag>
              <Tag>E- Document</Tag>
            </TagGroup>
            <ButtonGroup>
              <HeadingButton variant="secondary">E-office</HeadingButton>
              <HeadingButton variant="secondary">E-office</HeadingButton>
              <HeadingButton variant="secondary">E-office</HeadingButton>
            </ButtonGroup>
              <TagGroup>
              <Tag>E- Check in.out</Tag>
              <Tag>Co-work/Project</Tag>
            </TagGroup>
            <ButtonGroup>
              <HeadingButton variant="secondary">E-office</HeadingButton>
              <HeadingButton variant="secondary">E-office</HeadingButton>
            </ButtonGroup>
          </ColWrapperDescription>
        </Row>
      </HRAdminWrapper>

      <SaleWrapper>
        <Row>
          <ColWrapperDescription>
            <HeadingTitle>SALES</HeadingTitle>
            <HeadingDescription>Create Homepage Youtube & Instagram</HeadingDescription>
            <HeadingButton variant="secondary">Fieldmake</HeadingButton>
          </ColWrapperDescription>
          <ColWrapper><img alt="" src="images/icons/sale-icon.svg"/></ColWrapper>
        </Row>
      </SaleWrapper>
      <ServiceWrapper>
        <Row>
          <ColWrapper><img alt="" src="images/icons/customer.svg"/></ColWrapper>
          <ColWrapperDescription>
            <HeadingTitle>CUSTOMER</HeadingTitle>
            <HeadingDescription>Customer Request Management</HeadingDescription>
            <HeadingButton variant="secondary">OQUFIE</HeadingButton>
          </ColWrapperDescription>
        </Row>
      </ServiceWrapper>

      <SecurityWrapper>
        <Row>
          <ColWrapperDescription>
            <HeadingTitle>SECURITY</HeadingTitle>
            <HeadingDescription>SSL server</HeadingDescription>
            <HeadingButton variant="secondary">SECTIGO</HeadingButton>
          </ColWrapperDescription>
          <ColWrapper><img alt="" src="images/icons/security.svg"/></ColWrapper>
        </Row>
      </SecurityWrapper>
    </>
  );
}

export default Service
