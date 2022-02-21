import styled from "styled-components"
import { colors } from "../../../utils/appColors"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import { SingleSmallArticle } from "./SingleSmallArticle"

const ContentContainer = styled(ContentWidthLimiter)`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ArticleFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

const H1 = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  margin-top: 0.2em;
  margin-bottom: 1em;
  color: ${colors.almostBlack};
`

export const ArticleContainer = () => {
  return (
    <ContentContainer>
      <H1>Our blog</H1>
      <ArticleFlexContainer>
        <SingleSmallArticle image="https://assets.weforum.org/article/image/XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.jpg" />
        <SingleSmallArticle image="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" />
        <SingleSmallArticle image="https://assets.aws.worldathletics.org/large/61167b1583751946399a5ccb.jpg" />
        <SingleSmallArticle image="https://www.rover.com/blog/wp-content/uploads/iStock-1301022721.jpg" />
        <SingleSmallArticle image="https://eartheclipse.com/wp-content/uploads/2017/05/clouds-cloudy-conifers-dawn-valley.jpg" />
        <SingleSmallArticle />
      </ArticleFlexContainer>
    </ContentContainer>
  )
}
