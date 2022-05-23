import { FinsweetLogo } from "../../utils/FinsweetLogo"
import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { colors } from "../../utils/theme"
import React, {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react"
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
  border: 1px solid red;

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

  const [mobileMenu, showMobileMenu] = useState(false)

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

  const focusHandler = () => {
    searchInput?.current?.focus()
  }

  useEffect(() => {
    renderSearch && focusHandler()
  }, [renderSearch])

  const showSearch = () => {
    setRenderSearch(true)
    focusHandler()
  }

  const hideSearch = () => {
    setRenderSearch(false)
  }

  const display1150 = useMediaQuery("(min-width: 1150px)")
  const searchInput = React.useRef<HTMLInputElement>(null)

  return (
    <SearchContext.Provider
      value={{
        ref: searchInput,
        setRenderSearch: setRenderSearch,
      }}
    >
      <HeaderContainer>
        <ContentContainer>
          <FinsweetLogo />
          <RightContainer>
            {display1150 ? (
              <HorizontalMenu>
                <CustomLink to="/BlogApp">Blog</CustomLink>
                <CustomLink to="/BlogApp/aboutUs">About us</CustomLink>
                <CustomLink to="/BlogApp/features">Features</CustomLink>
                <CustomLink to="/BlogApp/pricing">Pricing</CustomLink>
                <CustomLink to="/BlogApp/faq">FAQ</CustomLink>
                <CustomContactUsLink to="/BlogApp/contactUs">
                  Contact us
                </CustomContactUsLink>
              </HorizontalMenu>
            ) : (
              <MenuIcon
                sx={{ color: "#BBBBCB", cursor: "pointer" }}
                fontSize="large"
                onClick={() => showMobileMenu(!mobileMenu)}
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
      {mobileMenu && !display1150 && (
        <VerticalMenu>
          <CustomLink to="/BlogApp">Blog</CustomLink>
          <CustomLink to="/BlogApp/aboutUs">About us</CustomLink>
          <CustomLink to="/BlogApp/features">Features</CustomLink>
          <CustomLink to="/BlogApp/pricing">Pricing</CustomLink>
          <CustomLink to="/BlogApp/faq">FAQ</CustomLink>
          <CustomLink to="/BlogApp/contactUs">Contact us</CustomLink>
        </VerticalMenu>
      )}
      {renderSearch && <SearchModule />}
    </SearchContext.Provider>
  )
}
