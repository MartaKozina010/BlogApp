import styled from "styled-components"
import { colors } from "../../../utils/appColors"

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 100%;
    max-width: 1000px;
    color: ${colors.darkBlue};
    font-size: 48px;
    font-weight: 600;
    padding-bottom: 0.4em;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    max-height: 500px;
    padding-top: 1em;
  }
`

const DateAuthorContainer = styled.div`
  display: flex;

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${colors.darkBlue};
    padding-right: 1em;
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
