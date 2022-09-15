import React from 'react'
import Categories from '../components/Categories'
import NewsList from '../components/NewsList'
import Header from '../components/Header'

const NewsPage = ({ match }) => {
  // match객체는 해당 컴포넌트가 현재 어떤 라우트에 매치되어있는지에 대한 정보가 있다
  // 카테고리가 선택되지않았다면 기본값이 all 로 설정
  const category = match.params.category || 'all'

  return (
    <>
      <Header />
      <Categories />
      <NewsList category={category} />
    </>
  )
}

export default NewsPage;