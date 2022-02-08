import { FinsweetLogo } from "../../utils/FinsweetLogo";
import styled from "styled-components";
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter";
import { pageTabs } from "../pageTabs";
import { colors } from "../../utils/appColors";

const HeaderContainer = styled.div`
    height: 90px;
    width: 100%;
    background-color: ${colors.darkBlue};
    display: flex;
    align-items: center;
`
const ContentContainer = styled(ContentWidthLimiter)`
    display: flex;
    align-items: center;
`

const LinksContainer = styled.span`
    margin-left: auto;

    a {
    font-family: unset;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.lightGrey};
    text-decoration: none;
    margin-left: 32px;
    } 

    a:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
   } 
`

const ContactUsLink = styled.a`
    border: 2px solid ${colors.darkGrey};
    color: ${colors.white} !important;
    border-radius: 50px;
    padding: 16px 48px;
    margin-left: 48px;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <ContentContainer>
                <FinsweetLogo />
                <LinksContainer>
                    <a href={pageTabs.home}>Home</a>
                    <a href={pageTabs.aboutUs}>About us</a>
                    <a href={pageTabs.features}>Features</a>
                    <a href={pageTabs.pricing}>Pricing</a>
                    <a href={pageTabs.faq}>FAQ</a>
                    <a href={pageTabs.blog}>Blog</a>
                    <ContactUsLink href={pageTabs.contactUs}>Contact us</ContactUsLink>
                </LinksContainer>
            </ContentContainer>
        </HeaderContainer>
    )
}

