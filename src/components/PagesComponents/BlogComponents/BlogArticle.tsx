import styled from "styled-components"
import { colors } from "../../../utils/appColors"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import { ArticleHeader } from "../HomeComponents/ArticleHeader"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 830px;
  width: 100%;
`

const Text = styled.div`
  max-width: 830px;
  width: 100%;

  h1 {
    font-size: 30px;
    font-weight: 600;
    color: ${colors.darkBlue};
    padding: 1em 0;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.darkBlue};
    text-align: justify;
    padding-top: 0.7em;
    text-indent: 3em;
  }

  img {
    max-height: 300px;
    max-width: 830px;
    width: 100%;
    height: 100%;
    padding-top: 2%;
  }
`

type EntireArticleProps = {
  title: string
  author: string
  postedDate: Date
  image: string
}

export const BlogArticle: React.FC<EntireArticleProps> = (props) => {
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
