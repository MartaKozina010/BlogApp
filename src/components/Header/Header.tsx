import React from "react";
import { MenuLink } from "../../utils/headerLinks";
import { HeaderLogo } from "./HeaderLogo";
import { LinkHeader } from './LinkHeader';
import styled from "styled-components";
import { ContentWidthLimiter } from "./ContentWidthLimiter";


const HeaderContainer = styled.div`
    height: 90px;
    width: 100%;
    background-color: #1C1E53;
    display: flex;
    align-items: center;
`

const LinksContainer = styled.span`
    margin-left: auto;
`

const ContentContainer = styled(ContentWidthLimiter)`
    display: flex;
    align-items: center;
`

const ContactUsLink = styled(LinkHeader)`
    border: 2px solid rgba(244, 246, 252, 0.2);
    color: white;
    border-radius: 50px;
    padding: 16px 48px;
    margin-left: 48px;
`


export const Header = () => {
    return (
        <HeaderContainer>
            <ContentContainer>
                <HeaderLogo />
                <LinksContainer>
                    <LinkHeader link={MenuLink.home}>Home</LinkHeader>
                    <LinkHeader link={MenuLink.aboutUs}>About us</LinkHeader>
                    <LinkHeader link={MenuLink.features}>Features</LinkHeader>
                    <LinkHeader link={MenuLink.pricing}>Pricing</LinkHeader>
                    <LinkHeader link={MenuLink.faq}>FAQ</LinkHeader>
                    <LinkHeader link={MenuLink.blog}>Blog</LinkHeader>
                    <ContactUsLink link={MenuLink.contactUs}>Contact us</ContactUsLink>
                </LinksContainer>
            </ContentContainer>
        </HeaderContainer>
    )
}

