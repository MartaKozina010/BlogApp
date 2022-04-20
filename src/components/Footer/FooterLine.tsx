import { Link } from "react-router-dom"
import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { colors } from "../../utils/theme"

const FooterLineContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  background-color: ${colors.white};
  color: ${colors.darkBlue};
  font-size: 15px;
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
`

const Webmarks = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkBlue};
  font-size: 15px;
  font-weight: 500;
  margin-right: 32px;

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
          <StyledLink to="/">Blog</StyledLink>
          <StyledLink to="aboutUs">About us</StyledLink>
          <StyledLink to="features">Features</StyledLink>
          <StyledLink to="pricing">Pricing</StyledLink>
          <StyledLink to="faq">FAQ</StyledLink>
        </Webmarks>
      </ContentContainer>
    </FooterLineContainer>
  )
}
