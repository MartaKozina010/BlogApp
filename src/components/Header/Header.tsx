import { FinsweetLogo } from "../../utils/FinsweetLogo"
import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { colors } from "../../utils/theme"
import React from "react"
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { SearchModule } from "./SearchList"

const HeaderContainer = styled.div`
  padding: 1em;
  background-color: ${colors.darkBlue};
  margin-bottom: 5em;
  display: flex;
  align-items: center;
`

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RightContainer = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 1200px) {
    display: none;
  }
`

const MenuLinks = styled.nav`
  a {
    font-size: 16px;
    font-weight: 500;
    color: ${colors.lightGrey};
    margin-right: 2em;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
  }
`

const StyledLink = styled(({ isActive, ...props }) => <Link {...props} />)<{
  isActive: boolean
}>`
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
  text-decoration-color: ${(props) => props.isActive && colors.hotPink};
`

const StyledContactUsLink = styled(({ isActive, ...props }) => (
  <Link {...props} />
))<{ isActive: boolean }>`
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
  text-decoration-color: ${(props) => props.isActive && colors.hotPink};
  border: 2px solid ${colors.darkGrey};
  color: ${colors.white} !important;
  border-radius: 50px;
  padding: 0.5em 2em;
`

export const Header: React.FC = () => {
  const CustomLink = ({ children, ...props }: LinkProps) => {
    const resolved = useResolvedPath(props.to)
    const match = useMatch({ path: resolved.pathname, end: true })

    return (
      <StyledLink isActive={!!match} {...props}>
        {children}
      </StyledLink>
    )
  }

  const CustomContactUsLink = ({ children, ...props }: LinkProps) => {
    const resolved = useResolvedPath(props.to)
    const match = useMatch({ path: resolved.pathname, end: false })

    return (
      <StyledContactUsLink isActive={!!match} {...props}>
        {children}
      </StyledContactUsLink>
    )
  }

  return (
    <HeaderContainer>
      <ContentContainer>
        <FinsweetLogo />
        <RightContainer>
          <MenuLinks>
            <CustomLink to="/">Blog</CustomLink>
            <CustomLink to="aboutUs">About us</CustomLink>
            <CustomLink to="features">Features</CustomLink>
            <CustomLink to="pricing">Pricing</CustomLink>
            <CustomLink to="faq">FAQ</CustomLink>
            <CustomContactUsLink to="contactUs">Contact us</CustomContactUsLink>
          </MenuLinks>
          <DarkModeSwitch />
          <SearchModule />
        </RightContainer>
      </ContentContainer>
    </HeaderContainer>
  )
}
