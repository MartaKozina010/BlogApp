import styled from "styled-components"
import { colors } from "../../utils/appColors"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { ArticleHeader } from "./ArticleHeader"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  max-width: 830px;
`

const MainArticleContainer = styled(ContentWidthLimiter)`
  a {
    font-size: 16px;
    font-weight: 300;
    color: ${colors.royalBlue};
    text-align: center;
    text-decoration: none;
    margin-top: 16px;
    margin-bottom: 50px;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
  }
`

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.darkBlue};
  text-align: center;
  margin-top: 30px;
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
    <MainArticleContainer>
      <ContentContainer>
        <ArticleHeader
          title={props.title}
          author={props.author}
          postedDate={props.postedDate}
          image={props.image}
        />
        <Description>{props.description}</Description>
        <a href="https://d-art.ppstatic.pl/kadry/k/r/1/3b/59/5fb8d717a60f9_o_large.jpg">
          Read more →
        </a>
      </ContentContainer>
    </MainArticleContainer>
  )
}
