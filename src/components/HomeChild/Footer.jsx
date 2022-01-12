import React from 'react';
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F3F9FF;
  border-top: 1.5px solid #e2e7ec;
`

const FooterBlock = styled(Col)`
  padding: 33px 0 0 40px;
  min-width: 380px;
`

const FooterBlockBordered = styled(FooterBlock)`
  border-left: 2px solid #e2e7ec;
  border-right: 2px solid #e2e7ec;
`

const FooterTitle = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.3px;
  color: #181949;
  margin-bottom: 20px;
  font-family: 'Roboto'
`

const FooterDescription = styled.div`
  max-width: 328px;
  font-size: 15px;
  line-height: 20px;
  color: #666666;
  margin-bottom: 16px;
  font-family: 'Roboto'
`

const Footer = () => {
  return (
      <FooterWrapper>
        <Row>
          <FooterBlock>
            <FooterTitle>
              Vietnam Office
            </FooterTitle>
            <FooterDescription>
              14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city
            </FooterDescription>
            <FooterDescription>
              Business resigtration: 0315421202
            </FooterDescription>
            <FooterDescription>
              Tel: 028-3520-2367    sales@dkinno.com
            </FooterDescription>
            <FooterDescription>
              Copyright 2021 DaouKiwoom Innocation C0., Ltd
            </FooterDescription>
          </FooterBlock>

          <FooterBlockBordered>
            <FooterTitle>
              Indonesia Office
            </FooterTitle>
            <FooterDescription>
              Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia
            </FooterDescription>
            <FooterDescription>
              Tel: +62-21-5082-0038
            </FooterDescription>
          </FooterBlockBordered>

          <FooterBlock>
            <FooterTitle>
              Korea Office
            </FooterTitle>
            <FooterDescription>
              5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea
            </FooterDescription>
          </FooterBlock>
        </Row>
      </FooterWrapper>
  );
}

export default Footer
