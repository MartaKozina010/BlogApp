import { FinsweetLogo } from "../../utils/FinsweetLogo"
import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { colors } from "../../utils/theme"
import { useEffect, useState } from "react"
import React from "react"
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom"
import { DarkModeSwitch } from "./DarkModeSwitch"

const HeaderContainer = styled.div`
  height: 5em;
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

const LogoContainer = styled.div``

const LinksContainer = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: no-wrap;

  a {
    font-family: unset;
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

const SearchComponent = styled.img`
  margin: 0 2em;
`

const SearchInput = styled.input<{ isShowed: boolean }>`
  font-size: 12px;
  transition: width 2s;
  height: 3.5em;
  border: none;
  border-radius: 50px;
  padding-left: ${({ isShowed }) => isShowed && ".5em"};
  width: ${({ isShowed }) => (isShowed ? "18em" : "0")};
  transition: all 2s;

  ::placeholder {
    color: ${colors.darkBlue};
    font-weight: 500;
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
  type renderSearchType = {
    display: boolean
    icon: string
  }

  const [renderSearch, setRenderSearch] = useState<renderSearchType>({
    display: false,
    icon: "loupe.png",
  })
  const [input, setInput] = useState("")

  const searchInput = React.useRef<HTMLInputElement>(null)

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
    const match = useMatch({ path: resolved.pathname, end: true })

    return (
      <StyledContactUsLink isActive={!!match} {...props}>
        {children}
      </StyledContactUsLink>
    )
  }

  const focusHandler = () => {
    searchInput?.current?.focus()
  }

  const hideAndCleanInput = () => {
    if (document.activeElement !== searchInput.current) {
      setTimeout(() => {
        setRenderSearch({ display: false, icon: "search.png" })
        setInput("")

        setTimeout(() => {
          setRenderSearch({ display: false, icon: "loupe.png" })
        }, 3000)
      }, 3000)
    }
  }

  useEffect(() => {
    renderSearch.display && focusHandler()
  }, [renderSearch.display])

  const showSearch = () => {
    setRenderSearch({ display: true, icon: "search.png" })
    focusHandler()
  }

  const hideSearch = () => {
    setRenderSearch({ display: false, icon: "loupe.png" })
  }

  return (
    <HeaderContainer>
      <ContentContainer>
        <LogoContainer>
          <FinsweetLogo />
        </LogoContainer>
        <LinksContainer>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="aboutUs">About us</CustomLink>
          <CustomLink to="features">Features</CustomLink>
          <CustomLink to="pricing">Pricing</CustomLink>
          <CustomLink to="faq">FAQ</CustomLink>
          <CustomLink to="blog">Blog</CustomLink>
          <CustomContactUsLink to="contactUs">Contact us</CustomContactUsLink>
          <DarkModeSwitch />
          <SearchComponent
            src={renderSearch.icon}
            onClick={renderSearch ? showSearch : hideSearch}
          />
          <SearchInput
            isShowed={renderSearch.display}
            ref={searchInput}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="search"
            onBlur={hideAndCleanInput}
          />
        </LinksContainer>
      </ContentContainer>
    </HeaderContainer>
  )
}
