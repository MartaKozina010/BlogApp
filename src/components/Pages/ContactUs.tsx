import styled from "styled-components"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"
import { SignupForm } from "../PagesComponents/ContactUsComponents/Form"

const ContactUsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const ContactImg = styled.img`
  width: auto;
  height: 100%;
  max-width: 100%;
`

export const ContactUs = () => {
  return (
    <ContentWidthLimiter>
      <ContactUsBox>
        <SignupForm />
        <ContactImg src="contactR.jpg" />
      </ContactUsBox>
    </ContentWidthLimiter>
  )
}
