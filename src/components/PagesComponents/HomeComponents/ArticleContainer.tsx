import { useContext, useState } from "react"
import styled from "styled-components"
import { Articles } from "../../ArticleFetch"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import { colors } from "../../../utils/theme"
import { SingleSmallArticle } from "./SingleSmallArticle"

const ContentContainer = styled(ContentWidthLimiter)`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ArticleFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

const H1 = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  margin-top: 0.2em;
  margin-bottom: 1em;
`

const Button = styled.button`
  border: none;

  &:hover {
    background-color: ${colors.sunnyYellow};
  }
`

export const ArticleContainer = () => {
  const [sliceEnd, setSliceEnd] = useState(7)

  const articles = useContext(Articles.Context)
  const articlesList = Articles.isSuccess(articles) ? (
    articles.articles
      .slice(1, sliceEnd)
      .map((el, index) => (
        <SingleSmallArticle
          key={el.title}
          image={el.urlToImage}
          postedDate={new Date(el.publishedAt)}
          title={el.title}
          description={el.description}
          articleIndex={index + 1}
        />
      ))
  ) : (
    <ContentWidthLimiter>
      <div>Loading...</div>
    </ContentWidthLimiter>
  )

  return (
    <>
      <ContentContainer>
        <H1>Our blog</H1>
        <ArticleFlexContainer>{articlesList}</ArticleFlexContainer>
        <Button onClick={() => setSliceEnd(sliceEnd + 6)}>load more</Button>
      </ContentContainer>
    </>
  )
}
