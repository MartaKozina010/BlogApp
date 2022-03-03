import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { Articles } from "../../../utils/articleFetch"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import {
  ArticleHeader,
  ArticleHeaderProps,
} from "../HomeComponents/ArticleHeader"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1230px;
  width: 100%;
`

const Text = styled.div`
  max-width: 830px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  padding-top: 0.7em;
  text-indent: 3em;
  text-decoration: none;
  padding-top: 2em;
`

export const BlogArticle = () => {
  const { id } = useParams()

  const articles = useContext(Articles.Context)
  const isSuccess = Articles.isSuccess(articles)

  return isSuccess && id && articles.articles[parseInt(id)] ? (
    <ContentContainer>
      <ArticleHeader
        title={articles.articles[parseInt(id)].title}
        author={articles.articles[parseInt(id)].author}
        postedDate={new Date(articles.articles[parseInt(id)].publishedAt)}
        image={articles.articles[parseInt(id)].urlToImage}
      />
      <Text>{articles.articles[parseInt(id)].content}</Text>
    </ContentContainer>
  ) : (
    <div>failed</div>
  )
}
