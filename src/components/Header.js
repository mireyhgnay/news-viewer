import React from 'react'
import styled from 'styled-components'

const HeaderBlock = styled.div`
  width: 768px;
  margin: 20px auto;

  .headline {
    width: 768px;
    text-align: center;
    h1 {
      font-size: 90px;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .headline {
      text-align: left;
      h1 {
        font-size: 40px;
      }
    }
  }
`

const Header = () => {
  return (
    <HeaderBlock>
      <div className="headline">
        <h1>NEWS VIEWER</h1>
      </div>
    </HeaderBlock>
  )
}

export default Header;