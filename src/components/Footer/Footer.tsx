import styled from "styled-components"
import { FinsweetLogo } from "../../utils/FinsweetLogo"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { SocialMediaLink, SocialMediaLogo } from "../../utils/SocialMedia"
import { FooterLine } from "./FooterLine"
import { colors } from "../../utils/theme"

//footer caly do poprawy -na nowo

const FooterContainer = styled.div`
  height: 397px;
  background-color: ${colors.darkBlue};
  display: flex;
  align-items: end;
`

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: row;
`

const ContactContainer = styled.div`
  height: 95px;
  max-width: 517px;
  background-color: ${colors.sunnyYellow};
  display: flex;
  color: ${colors.darkBlue};
  margin-top: 86px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;
  }

  p {
    font-size: 15px;
    line-height: 28px;
  }
`
const LogoContainer = styled.div`
  p {
    color: ${colors.paragraphWhite};
    font-size: 16px;
    line-height: 28px;
    padding-top: 22px;
    width: 400px;
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`

const EmailContact = styled.div`
  padding: 18px 0px 16px 36px;
`

const PhoneContact = styled.div`
  padding: 18px 0px 16px 29px;
`

const RightSide = styled.div`
  color: ${colors.paragraphWhite};
  padding-left: 200px;
  background-color: ${colors.darkBlue};

  @media (max-width: 700px) {
    display: none;
  }

  p {
    font-size: 15px;
    line-height: 28px;
    width: 400px;
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
    line-height: 64px;
    padding-bottom: 16px;
  }
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;

  a {
    padding: 28px 28px 0px 0px;
  }
`

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`

export const Footer = () => {
  return (
    <AllContainer>
      <FooterContainer>
        <ContentContainer>
          <LeftSide>
            <LogoContainer>
              <FinsweetLogo />
              <p>
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </LogoContainer>
            <ContactContainer>
              <EmailContact>
                <h3>Email me at</h3>
                <p>contact@website.com</p>
              </EmailContact>
              <PhoneContact>
                <h3>Call us</h3>
                <p>511453843</p>
              </PhoneContact>
            </ContactContainer>
          </LeftSide>
          <RightSide>
            <h1>Let's talk!</h1>
            <p>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challanges.
            </p>
            <SocialMediaContainer>
              <a href={SocialMediaLink.facebook}>
                <SocialMediaLogo logo="facebook" />
              </a>
              <a href={SocialMediaLink.twitter}>
                <SocialMediaLogo logo="twitter" />
              </a>
              <a href={SocialMediaLink.instagram}>
                <SocialMediaLogo logo="instagram" />
              </a>
              <a href={SocialMediaLink.linkedin}>
                <SocialMediaLogo logo="linkedin" />
              </a>
            </SocialMediaContainer>
          </RightSide>
        </ContentContainer>
      </FooterContainer>
      <FooterLine />
    </AllContainer>
  )
}
