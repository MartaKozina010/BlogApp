import styled from "styled-components"
import { colors } from "../../utils/appColors"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { ArticleHeader } from "./ArticleHeader"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 830px;
`

const Text = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
    color: ${colors.darkBlue};
    width: 830px;
    margin: 48px 0px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.darkBlue};
    text-align: justify;
    width: 830px;
    margin-top: 20px;
    text-indent: 40px;
  }

  img {
    height: 300px;
    width: 830px;
    margin-top: 20px;
  }
`

type EntireArticleProps = {
  title: string
  author: string
  postedDate: Date
  image: string
}

export const EntireArticle: React.FC<EntireArticleProps> = (props) => {
  return (
    <ContentContainer>
      <ArticleHeader
        title={props.title}
        author={props.author}
        postedDate={props.postedDate}
        image={props.image}
      />
      <Text>{props.children}</Text>
    </ContentContainer>
  )
}
