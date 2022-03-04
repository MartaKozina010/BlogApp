import styled from "styled-components"

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 100%;
    max-width: 1000px;
    font-size: 48px;
    font-weight: 600;
    padding-bottom: 0.4em;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  height: 400px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-top: 1em;
  }
`
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DateAuthorContainer = styled.div`
  display: flex;

  p {
    font-size: 16px;
    font-weight: 500;
    padding-right: 1em;
    color: ${({ theme }) => theme.subtitle};
  }
`

export type ArticleHeaderProps = {
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
      <ImageContainer>
        <img src={props.image} />
      </ImageContainer>
    </ContentContainer>
  )
}
