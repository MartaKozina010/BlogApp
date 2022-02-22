import styled from "styled-components"
import { colors } from "../../../utils/theme"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"

type SingleSmallArticleProps = {
  image?: string
  postedDate?: Date
  title?: string
  description?: string
}

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
`

const SingleArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 300px;
  width: 100%;

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
  }
`

export const SingleSmallArticle: React.FC<SingleSmallArticleProps> = (
  props
) => {
  const {
    image = "https://us.123rf.com/450wm/deagreez/deagreez1905/deagreez190501463/122178757-pleine-longueur-c%C3%B4t%C3%A9-profil-taille-du-corps-photo-funky-dr%C3%B4le-elle-lui-il-lui-son-gars-dame-sauter-h.jpg?ver=6",
    postedDate = new Date(2015, 11, 11),
    title = "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description = "See how pivoting to Webflow changed one person sales strategy and allowed him to attract",
  } = props

  return (
    <SingleArticleContainer>
      <ContentContainer>
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
        <h5>{postedDate.toDateString()}</h5>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="https://d-art.ppstatic.pl/kadry/k/r/1/3b/59/5fb8d717a60f9_o_large.jpg">
          Read more →
        </a>
      </ContentContainer>
    </SingleArticleContainer>
  )
}
