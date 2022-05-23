import { Link } from "react-router-dom"
import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { colors } from "../../utils/theme"
import { globalFont } from "../../utils/fonts"

const FooterLineContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  background-color: ${colors.white};
  color: ${colors.darkBlue};
  font-size: ${globalFont.p16};
  font-weight: 500;
`

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledP = styled.p`
  font-weight: 600;
  text-align: center;
`

const Webmarks = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkBlue};
  font-size: ${globalFont.p16};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
  }
`

export const FooterLine = () => {
  return (
    <FooterLineContainer>
      <ContentContainer>
        <StyledP>Copyright 2021, Finsweet.com</StyledP>
        <Webmarks>
          <StyledLink to="/BlogApp">Blog</StyledLink>
          <StyledLink to="/BlogApp/aboutUs">About us</StyledLink>
          <StyledLink to="/BlogApp/features">Features</StyledLink>
          <StyledLink to="/BlogApp/pricing">Pricing</StyledLink>
          <StyledLink to="/BlogApp/faq">FAQ</StyledLink>
        </Webmarks>
      </ContentContainer>
    </FooterLineContainer>
  )
}
