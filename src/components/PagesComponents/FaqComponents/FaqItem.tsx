import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../../utils/appColors"

const FaqContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`

const Label = styled.div<{ backgroundColor: string }>`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: background-color 1s;
  max-width: 1230px;
  padding: 15px;

  &:hover {
    background-color: ${colors.white};
  }
`

const Number = styled.p`
  font-size: 36px;
  color: ${colors.darkBlue};
  margin-left: 1.5%;
  margin-right: 3%;
`

const Title = styled.p`
  font-size: 22px;
  color: ${colors.darkBlue};
  margin-top: auto;
  margin-bottom: auto;
  text-align: justify;
  margin-right: 3%;
`

const Description = styled.div<{ isOpen: boolean }>`
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.paragraphWhite};
  max-width: 1200px;
  text-align: justify;
  overflow: hidden;
  height: auto;
  transition: all 1s;
  max-height: ${({ isOpen }) => (isOpen ? "400px" : "0px")};
  padding: ${({ isOpen }) => (isOpen ? "30px 30px" : "0 30px")};
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
    <FaqContainer onClick={show ? () => setShow(false) : () => setShow(true)}>
      <Label
        onClick={() => setShow(true)}
        backgroundColor={props.backgroundColor}
      >
        <Number>{props.number}</Number>
        <Title>{props.title}</Title>
      </Label>
      <Description isOpen={show}>{props.description}</Description>
    </FaqContainer>
  )
}
