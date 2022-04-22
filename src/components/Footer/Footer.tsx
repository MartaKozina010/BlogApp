import styled from "styled-components"
import { FinsweetLogo } from "../../utils/finsweetLogo"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { SocialMedia } from "../../utils/socialMedia"
import { FooterLine } from "./FooterLine"
import { colors } from "../../utils/theme"
import { globalFont } from "../../utils/fonts"

const FooterContainer = styled.div`
  background-color: ${colors.darkBlue};
  display: flex;
`

const ContentContainer = styled(ContentWidthLimiter)`
  padding-top: 2%;
  display: flex;
`

const ContactP = styled.p`
  font-size: ${globalFont.p16};
  line-height: 28px;
  color: ${colors.darkBlue};
`

const ContactH = styled.h2`
  font-size: ${globalFont.p18};
  font-weight: 600;
  color: ${colors.darkBlue};
`

const StyledP = styled.p`
  color: ${colors.paragraphWhite};
  font-size: ${globalFont.p16};
  padding-top: 22px;
`

const StyledH1 = styled.h1`
  font-size: ${globalFont.header};
  font-weight: 600;
  color: ${colors.paragraphWhite};
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContactContainer = styled.div`
  margin-top: 10%;
  background-color: ${colors.sunnyYellow};
  color: ${colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const ContactBox = styled.div`
  padding: 0.5em;
`

const RightSide = styled.div`
  margin-left: 20%;
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    display: none;
  }
`

const SocialMediaContainer = styled.div`
  margin-top: 2%;
  width: 20%;
  display: flex;
  justify-content: space-between;
`

const AllContainer = styled.div`
  margin-top: 2%;
`

export const Footer = () => {
  return (
    <AllContainer>
      <FooterContainer>
        <ContentContainer>
          <LeftSide>
            <FinsweetLogo />
            <StyledP>
              We are always open to discuss your project and improve your online
              presence.
            </StyledP>
            <ContactContainer>
              <ContactBox>
                <ContactH>Email me at</ContactH>
                <ContactP>contact@website.com</ContactP>
              </ContactBox>
              <ContactBox>
                <ContactH>Call us</ContactH>
                <ContactP>511453843</ContactP>
              </ContactBox>
            </ContactContainer>
          </LeftSide>
          <RightSide>
            <StyledH1>Let's talk!</StyledH1>
            <div>
              <StyledP>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challanges.
              </StyledP>
              <SocialMediaContainer>
                <SocialMedia logo="facebook" />
                <SocialMedia logo="twitter" />
                <SocialMedia logo="instagram" />
                <SocialMedia logo="linkedin" />
              </SocialMediaContainer>
            </div>
          </RightSide>
        </ContentContainer>
      </FooterContainer>
      <FooterLine />
    </AllContainer>
  )
}
