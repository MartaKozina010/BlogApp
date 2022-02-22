import styled from "styled-components"
import { colors } from "../../../utils/theme"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import { ArticleHeader } from "./ArticleHeader"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 100%;
`

const ReadMore = styled.a`
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  color: ${({ theme }) => theme.readMore};
  padding-top: 1em;
  padding-bottom: 2.5em;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
  }
`

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding-top: 2em;
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
    <>
      <ContentContainer>
        <ArticleHeader
          title={props.title}
          author={props.author}
          postedDate={props.postedDate}
          image={props.image}
        />

        <Description>{props.description}</Description>
        <ReadMore href="https://d-art.ppstatic.pl/kadry/k/r/1/3b/59/5fb8d717a60f9_o_large.jpg">
          Read more →
        </ReadMore>
      </ContentContainer>
    </>
  )
}
