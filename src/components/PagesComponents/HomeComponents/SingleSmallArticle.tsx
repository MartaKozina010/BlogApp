import styled from "styled-components"
import { colors } from "../../../utils/theme"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  padding: 0;
  max-width: 400px;
  min-width: 300px;
  width: 100%;
  height: 750px;

  h1 {
    font-size: 24px;
    font-weight: 500;
    padding: 0.6em 0;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 1em;
  }

  a {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 2em;
    color: ${({ theme }) => theme.readMore};
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
  }

  h5 {
    font-size: 16px;
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

const ReadMore = styled.a`
  display: relative;
  margin-top: auto;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.readMore};
`

type SingleSmallArticleProps = {
  image: string
  postedDate: Date
  title: string
  description: string
}

export const SingleSmallArticle = (props: SingleSmallArticleProps) => {
  return (
    <ContentContainer>
      <ImageContainer>
        <img src={props.image} />
      </ImageContainer>
      <DateContainer>
        <h5>{props.postedDate.toDateString()}</h5>
        <img src="pluss.png" />
      </DateContainer>
      <h1>{props.title}</h1>
      <Description>{props.description}</Description>
      <ReadMore href="https://d-art.ppstatic.pl/kadry/k/r/1/3b/59/5fb8d717a60f9_o_large.jpg">
        Read more →
      </ReadMore>
    </ContentContainer>
  )
}
