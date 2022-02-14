import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { pageTabs } from "../pageTabs"
import { colors } from "../../utils/appColors"
import { Link } from "react-router-dom"

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

  a {
    text-decoration: none;
    color: ${colors.darkBlue};
    font-size: 15px;
    font-weight: 500;
    margin-right: 32px;
  }

  a:hover {
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
          <Link to="/">Home</Link>
          <Link to="aboutUs">About us</Link>
          <Link to="features">Features</Link>
          <Link to="pricing">Pricing</Link>
          <Link to="faq">FAQ</Link>
          <Link to="blog">Blog</Link>
        </Webmarks>
      </ContentContainer>
    </FooterLineContainer>
  )
}
