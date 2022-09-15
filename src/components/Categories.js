import React from 'react';
import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
]

const CategoriesBlock = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  width: 900px;
  margin: 0 auto;
  border-top: 4px solid #000000;
  border-bottom: 1px solid #000000;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
    justify-content: space-around;
  }
`

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  line-height: 50px;
  width:100%;
  text-align:center;
  height: 50px;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc0db;
    }
  }

  ${props => 
    props.active && css `
      font-weight: 600;
      color: #22b8cf;
      &:hover {
        color : #3bc9db;
      }
    `
  }


  &+& {
    margin-left: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category 
          key={c.name} 
          activeClassName="active"
          exact={c.name === 'all'}  
          to={c.name === 'all' ? '/' : `/${c.name}`}  
        >
        {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  )
}

export default Categories;