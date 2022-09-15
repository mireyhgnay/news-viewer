import React from 'react'
import styled from 'styled-components'

const NewsItemBlock = styled.div`
  display: flex;
  border-bottom: 5px solid #000000;
  padding-bottom: 1.5rem;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: #000000;
        text-decoration: none;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;


const NewsItem = ({ article }) => {
  // article 객체를 props로 통째로 받아와서 사용 
  const { title, url, description, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank">
            <img src={urlToImage} alt="thumbnail image" />
          </a>
        </div>
      )}

      <div className="contents">
        <h2>
          <a href={url} target="_blank">{title}</a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  )
}

export default NewsItem;