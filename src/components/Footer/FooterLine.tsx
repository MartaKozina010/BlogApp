import styled from "styled-components";
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter";
import { pageTabs } from "../pageTabs";
import { colors } from "../../utils/appColors";

const FooterLineContainer = styled.div`
    display: flex;
    align-items: center;  
    height: 92px;
    background-color: ${colors.white};
    color: ${colors.darkBlue};
    font-size: 15px;
    font-weight: 500;
`

const ContentContainer = styled(ContentWidthLimiter)`
    display: flex;
    flex-direction: row;
`

const Webmarks = styled.div`
    margin-left: auto;

    a{
    text-decoration: none;
    color: ${colors.darkBlue};
    font-size: 15px;
    font-weight: 500;
    margin-right: 32px;
    }

    a:hover{
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
    }
`

export const FooterLine = () => {
    return (
        <FooterLineContainer>
            <ContentContainer>
                <p>Copyright 2021, Finsweet.com</p>
                <Webmarks>
                    <a href={pageTabs.home}>Home</a>
                    <a href={pageTabs.aboutUs}>About us</a>
                    <a href={pageTabs.features}>Features</a>
                    <a href={pageTabs.pricing}>Pricing</a>
                    <a href={pageTabs.faq}>FAQ</a>
                    <a href={pageTabs.blog}>Blog</a>
                </Webmarks>
            </ContentContainer>
        </FooterLineContainer>
    )
}