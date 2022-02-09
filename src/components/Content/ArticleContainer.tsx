import styled from "styled-components"
import { colors } from "../../utils/appColors"
import { SingleArticle } from "./SingleArticle"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter";


const ContentContainer = styled(ContentWidthLimiter)`
    max-width: 1280px;
`

const ArticleFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 80px;
`

const H1 = styled.h1`
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    margin-top: 80px;
    margin-bottom: 48px;
    color: ${colors.almostBlack};
`

export const ArticleContainer = () => {
    return (
        <ContentContainer>
            <H1>Our blog</H1>
            <ArticleFlexContainer>
                <SingleArticle image="https://assets.weforum.org/article/image/XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.jpg"/>
                <SingleArticle image="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"/>
                <SingleArticle image="https://assets.aws.worldathletics.org/large/61167b1583751946399a5ccb.jpg"/>
                <SingleArticle image="https://www.rover.com/blog/wp-content/uploads/iStock-1301022721.jpg"/>
                <SingleArticle image="https://eartheclipse.com/wp-content/uploads/2017/05/clouds-cloudy-conifers-dawn-valley.jpg"/>
                <SingleArticle />
            </ArticleFlexContainer>
        </ContentContainer>
    )
}