import styled from "styled-components"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import { ArticleHeader } from "./ArticleHeader"
import { ReadMore } from "./ReadMore"
import { globalFont } from "../../../utils/theme"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 100%;
`

const Description = styled.p`
  font-size: ${globalFont.p16};
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
  articleIndex: number
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
      <ReadMore articleIndex={props.articleIndex} />
    </ContentContainer>
  )
}
