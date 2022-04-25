import { FinsweetLogo } from "../../utils/finsweetLogo"
import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { colors } from "../../utils/theme"
import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom"
import { DarkModeSwitch } from "../DarkMode/DarkModeSwitch"
import { SearchModule } from "./SearchList"
import { useMediaQuery } from "../../utils/useMediaQuery"
import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"

const HeaderContainer = styled.div`
  padding: 1em;
  background-color: ${colors.darkBlue};
  margin-bottom: 2em;
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
`

const HorizontalMenu = styled.nav`
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

const VerticalMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
  background-color: ${colors.sunnyYellowOpacity};

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

type ContextType = {
  ref: any
  setRenderSearch: Dispatch<SetStateAction<boolean>>
}

export const SearchContext = React.createContext<ContextType>({
  ref: undefined,
  setRenderSearch: () => undefined,
})

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

  const [isMobileMenu, setIsMobileMenu] = useState(false)

  const CustomContactUsLink = ({ children, ...props }: LinkProps) => {
    const resolved = useResolvedPath(props.to)
    const match = useMatch({ path: resolved.pathname, end: false })

    return (
      <StyledContactUsLink isActive={!!match} {...props}>
        {children}
      </StyledContactUsLink>
    )
  }

  const [renderSearch, setRenderSearch] = useState(false)

  const showSearch = () => {
    setRenderSearch(true)
    focusHandler()
  }

  const hideSearch = () => {
    setRenderSearch(false)
  }

  const inputRef = React.useRef<HTMLInputElement>(null)
  const focusHandler = () => {
    inputRef?.current?.focus()
  }

  useEffect(() => {
    renderSearch && focusHandler()
  }, [renderSearch])

  const menuRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent) => {
      if (
        isMobileMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenu(!isMobileMenu)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMobileMenu])

  const display1150 = useMediaQuery("(min-width: 1150px)")

  return (
    <SearchContext.Provider
      value={{
        ref: inputRef,
        setRenderSearch: setRenderSearch,
      }}
    >
      <HeaderContainer>
        <ContentContainer>
          <FinsweetLogo />
          <RightContainer>
            {display1150 ? (
              <HorizontalMenu>
                <CustomLink to="/">Blog</CustomLink>
                <CustomLink to="aboutUs">About us</CustomLink>
                <CustomLink to="features">Features</CustomLink>
                <CustomLink to="pricing">Pricing</CustomLink>
                <CustomLink to="faq">FAQ</CustomLink>
                <CustomContactUsLink to="contactUs">
                  Contact us
                </CustomContactUsLink>
              </HorizontalMenu>
            ) : (
              <MenuIcon
                sx={{ color: "#BBBBCB", cursor: "pointer" }}
                fontSize="large"
                onClick={() => setIsMobileMenu(!isMobileMenu)}
              />
            )}
            <DarkModeSwitch />
            <SearchIcon
              sx={{ color: "#BBBBCB", cursor: "pointer" }}
              fontSize="large"
              onClick={renderSearch ? hideSearch : showSearch}
            />
          </RightContainer>
        </ContentContainer>
      </HeaderContainer>
      {isMobileMenu && !display1150 && (
        <VerticalMenu ref={menuRef} onClick={() => setIsMobileMenu(false)}>
          <CustomLink to="/">Blog</CustomLink>
          <CustomLink to="aboutUs">About us</CustomLink>
          <CustomLink to="features">Features</CustomLink>
          <CustomLink to="pricing">Pricing</CustomLink>
          <CustomLink to="faq">FAQ</CustomLink>
          <CustomLink to="contactUs">Contact us</CustomLink>
        </VerticalMenu>
      )}
      {renderSearch && <SearchModule />}
    </SearchContext.Provider>
  )
}
