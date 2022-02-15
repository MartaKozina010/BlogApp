import styled from "styled-components"
import { colors } from "../../utils/appColors"
import { ContentWidthLimiter } from "../Header/ContentWidthLimiter"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 1000px;
    font-size: 48px;
    font-weight: 600;
    color: ${colors.darkBlue};
    text-align: center;

    margin-bottom: 16px;
  }

  img {
    max-width: 1280px;
    width: 1280px;
    height: 500px;
    margin-top: 30px;
  }
`

const DateAuthorContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${colors.darkBlue};
    margin-right: 10px;
    margin-top: 0px;
  }
`

type ArticleHeaderProps = {
  title: string
  author: string
  postedDate: Date
  image: string
}

export const ArticleHeader = (props: ArticleHeaderProps) => {
  return (
    <ContentContainer>
      <h1>{props.title}</h1>
      <DateAuthorContainer>
        <p>{props.author}</p>
        <p>Posted on {props.postedDate.toDateString()}</p>
      </DateAuthorContainer>
      <img src={props.image} />
    </ContentContainer>
  )
}
