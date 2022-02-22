import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../../utils/theme"

const FaqQuestionContainer = styled.div`
  margin-right: auto;
  background-color: ${colors.darkBlue};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  max-width: 700px;
  padding-left: 15px;
`

const TextArea = styled.textarea`
  width: 500px;
  height: 60px;
  border: 2px solid ${colors.sunnyYellow};
  padding-left: 5px;
  resize: none;

  ::placeholder {
    color: ${colors.darkBlue};
    font-weight: 500;
  }
`

const MailContainer = styled.a`
  margin-left: 10px;
  background-color: none;
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
