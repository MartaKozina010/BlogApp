import styled from "styled-components"
import { colors } from "../../../utils/theme"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import { ArticleHeader, ArticleHeaderProps } from "./ArticleHeader"
import { ReadMore } from "./ReadMore"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 100%;
`

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 1em;
  width: 100%;
  max-width: 1000px;
`

type MainArticleProps = {
  title: string
  author: string
  postedDate: Date
  image: string
  description: string
}

export const MainArticle: React.FC<MainArticleProps> = (props) => {
  return (
    <ContentContainer>
      <ArticleHeader
        title={props.title}
        author={props.author}
        postedDate={props.postedDate}
        image={props.image}
      />
      <Description>{props.description}</Description>
      <ReadMore />
    </ContentContainer>
  )
}
