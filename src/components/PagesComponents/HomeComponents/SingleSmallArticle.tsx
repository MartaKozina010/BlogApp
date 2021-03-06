import styled from "styled-components"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import { ReadMore } from "./ReadMore"
import { globalFont } from "../../../utils/fonts"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  padding: 0;
  max-width: 400px;
  min-width: 300px;
  width: 100%;
  height: 750px;

  h1 {
    font-size: ${globalFont.p18};
    font-weight: 500;
    padding: 0.6em 0;
  }

  p {
    font-size: ${globalFont.p16};
    font-weight: 400;
  }

  h5 {
    font-size: ${globalFont.p16};
    font-weight: 500;
    padding-top: 0.5em;
    color: ${({ theme }) => theme.subtitle};
  }
`

const ImageContainer = styled.div`
  height: 250px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid black;
  }
`
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Description = styled.p`
  height: 200px;
  overflow: hidden;
`

type SingleSmallArticleProps = {
  image: string
  postedDate: Date
  title: string
  description: string
  articleIndex: number
}

export const SingleSmallArticle = (props: SingleSmallArticleProps) => {
  return (
    <ContentContainer>
      <ImageContainer>
        <img src={props.image} />
      </ImageContainer>
      <DateContainer>
        <h5>{props.postedDate.toDateString()}</h5>
        <img src="/BlogApp/pluss.png" />
      </DateContainer>
      <h1>{props.title}</h1>
      <Description>{props.description}</Description>
      <ReadMore articleIndex={props.articleIndex} />
    </ContentContainer>
  )
}
