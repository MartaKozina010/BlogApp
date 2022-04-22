import { useState } from "react"
import styled from "styled-components"
import { globalFont } from "../../../utils/theme"

const FaqItemContainer = styled.div`
  margin-bottom: 1em;
`

const Label = styled.div<{ invert: boolean }>`
  display: flex;
  align-items: center;
  padding: 1em;
  background-color: ${({ theme, invert }) =>
    invert ? theme.faqLabelLighter : theme.faqLabelDarker};
  transition: background-color 1s;

  &:hover {
    background-color: ${({ theme }) => theme.faqDescription};
  }
`

const Number = styled.p`
  font-size: ${globalFont.p25};
  color: ${({ theme }) => theme.paragraph};
  width: 5%;
  display: flex;
  justify-content: center;
  padding-right: 2%;
`

const Title = styled.p`
  font-size: ${globalFont.p18};
  color: ${({ theme }) => theme.paragraph};
  width: 95%;
`

const Description = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.faqDescription};
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
  lighter: boolean
}

export const FaqItem = (props: FaqItemProps) => {
  const [show, setShow] = useState(false)

  return (
    <FaqItemContainer
      onClick={show ? () => setShow(false) : () => setShow(true)}
    >
      <Label onClick={() => setShow(true)} invert={props.lighter}>
        <Number>{props.number}</Number>
        <Title>{props.title}</Title>
      </Label>
      <Description isOpen={show}>{props.description}</Description>
    </FaqItemContainer>
  )
}
