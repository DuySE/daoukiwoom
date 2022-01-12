import React from 'react';
import styled from 'styled-components'

const TopBarWrapper = styled.div`
  height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  padding: 0 81px;
  margin-right: 76px;

  @media (max-width: 768px) {
    margin-right: 0px;
    padding: 0;
    justify-content: flex-start;
  }
`

const TopBarItem = styled.div`
  margin-left: 82px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 77px;
    margin-left: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const TopBar = ({ logout }) => {
  return (
    <TopBarWrapper>
      <TopBarItem>EN <img alt="" src="images/icons/arrow-down-icon.png" /></TopBarItem>
      <TopBarItem>Company <img alt="" src="images/icons/arrow-down-icon.png" /></TopBarItem>
      <TopBarItem>Parner MarketPlace <img alt="" src="images/icons/arrow-down-icon.png" /></TopBarItem>
      <TopBarItem onClick={() => logout()}>Logout</TopBarItem>

    </TopBarWrapper>
  );
}

export default TopBar
