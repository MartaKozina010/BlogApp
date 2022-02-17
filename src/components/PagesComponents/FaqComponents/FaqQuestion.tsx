import { useState } from "react"
import styled from "styled-components"

const FaqQuestionContainer = styled.form`
  margin-left: auto;
  margin-right: auto;
  background-color: red;
  display: flex;
  justify-content: center;
  max-width: 700px;
  max-height: 200px;
`

export const FaqQuestion = () => {
  const [input, setInput] = useState("")

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <FaqQuestionContainer>
      <input onChange={inputHandler} />
      <button>SEND</button>
    </FaqQuestionContainer>
  )
}
