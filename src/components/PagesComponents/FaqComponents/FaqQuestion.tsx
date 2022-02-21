import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../../utils/appColors"

const FaqQuestionContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.darkBlue};
  height: 5em;
  width: 100%;
  max-width: 700px;
  padding: 1em;
`

const TextArea = styled.textarea`
  width: 80%;
  height: 100%;
  border: 0.2em solid ${colors.sunnyYellow};
  resize: none;

  ::placeholder {
    color: ${colors.darkBlue};
  }
`

const MailContainer = styled.a`
  padding-left: 1em;
  text-decoration: none;
  color: ${colors.sunnyYellow};

  &:hover {
    color: ${colors.sunnyYellowOpacity};
  }
`

type sendEmailProps = {
  body: string
}

const SendEmail = (props: sendEmailProps) => {
  return (
    <MailContainer
      href={`mailto:mkozina010@gmail.com&subject=FAQ: new issue&body=${props.body}`}
    >
      send
    </MailContainer>
  )
}

export const FaqQuestion = () => {
  const [input, setInput] = useState("")

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <FaqQuestionContainer>
      <TextArea placeholder="Didn't find answer to your question? Write to us directly!">
        {inputHandler}
      </TextArea>
      <SendEmail body={input} />
    </FaqQuestionContainer>
  )
}
