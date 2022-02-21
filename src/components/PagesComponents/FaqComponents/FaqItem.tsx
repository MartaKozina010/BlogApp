import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../../utils/appColors"
import { FaqQuestion } from "./FaqQuestion"

const FaqItemContainer = styled.div`
  margin-bottom: 1em;
`

const Label = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  padding: 1em;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: background-color 1s;

  &:hover {
    background-color: ${colors.white};
  }
`

const Number = styled.p`
  font-size: 30px;
  color: ${colors.darkBlue};
  width: 5%;
  display: flex;
  justify-content: center;
  padding-right: 2%;
`

const Title = styled.p`
  font-size: 18px;
  color: ${colors.darkBlue};
  width: 95%;
`

const Description = styled.div<{ isOpen: boolean }>`
  background-color: ${colors.paragraphWhite};
  text-align: justify;
  overflow: hidden;
  height: auto;
  transition: all 1s;
  max-height: ${({ isOpen }) => (isOpen ? "30em" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "1.5em 1.5em" : "0 1.5em")};
`

type FaqItemProps = {
  number: number
  title: string
  description: string
  backgroundColor: string
}

export const FaqItem = (props: FaqItemProps) => {
  const [show, setShow] = useState(false)

  return (
    <FaqItemContainer
      onClick={show ? () => setShow(false) : () => setShow(true)}
    >
      <Label
        onClick={() => setShow(true)}
        backgroundColor={props.backgroundColor}
      >
        <Number>{props.number}</Number>
        <Title>{props.title}</Title>
      </Label>
      <Description isOpen={show}>{props.description}</Description>
    </FaqItemContainer>
  )
}
