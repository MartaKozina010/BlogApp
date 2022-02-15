import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../utils/appColors"

const FaqContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`

const Label = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  background-color: ${colors.sunnyYellow};
  transition: background-color 1s;
  max-width: 1230px;
  padding: 15px;

  &:hover {
    background-color: ${colors.sunnyYellowOpacity};
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

const Description = styled.p`
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.paragraphWhite};
  max-width: 1200px;
  padding: 30px;
  text-align: justify;
`

type FaqItemProps = {
  number: number
  title: string
  description: string
}

export const FaqItem = (props: FaqItemProps) => {
  const [show, setShow] = useState(false)

  return (
    <FaqContainer onClick={show ? () => setShow(false) : () => setShow(true)}>
      <Label onClick={() => setShow(true)}>
        <Number>{props.number}</Number>
        <Title>{props.title}</Title>
      </Label>
      {show && <Description>{props.description}</Description>}
    </FaqContainer>
  )
}

export const FaqPage = () => {
  return (
    <>
      <div>Per adesso c'e niente!</div>
    </>
  )
}
