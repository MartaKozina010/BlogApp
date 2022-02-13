import { FinsweetLogo } from "../../utils/FinsweetLogo"
import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { pageTabs } from "../pageTabs"
import { colors } from "../../utils/appColors"
import { useEffect, useState } from "react"
import React from "react"

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

const SearchComponent = styled.img`
  position: absolute;
  margin-left: 20px;
`

const SearchInput = styled.input`
  width: 50px;
  transition: width 2s;
  height: 40px;
  border: none;
  border-radius: 50px;
  margin-right: 0;
  margin-left: 55px;
  padding-left: 5px;

  ::placeholder {
    color: ${colors.darkBlue};
    font-weight: 500;
  }

  &:hover {
    background-color: ${colors.paragraphWhite};
    width: 200px;
  }
`

export const Header = () => {
  const [renderSearch, setRenderSearch] = useState(false)
  const [currentIcon, setCurrentIcon] = useState("burger3.png")
  const [input, setInput] = useState("")

  const searchInput = React.useRef<HTMLInputElement>(null)

  const focusHandler = () => {
    searchInput?.current?.focus()
  }
  const hideAndCleanInput = () => {
    if (document.activeElement !== searchInput.current) {
      setTimeout(() => {
        setRenderSearch(false)
        setInput("")
      }, 3000)
    }
  }

  useEffect(() => {
    renderSearch && focusHandler()
  }, [renderSearch])

  const showSearch = () => {
    setCurrentIcon("food.png")
    setRenderSearch(true)
    focusHandler()
  }

  const hideSearch = () => {
    setCurrentIcon("burger3.png")
    setRenderSearch(false)
  }

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
          <SearchComponent
            src="burger3.png"
            onClick={renderSearch ? hideSearch : showSearch}
          />
        </LinksContainer>
        {renderSearch && (
          <SearchInput
            ref={searchInput}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="search"
            onBlur={hideAndCleanInput}
          />
        )}
      </ContentContainer>
    </HeaderContainer>
  )
}
