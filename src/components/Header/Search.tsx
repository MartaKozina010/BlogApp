import React, { useState } from "react"
import styled from "styled-components"
import { colors } from "../../utils/appColors"

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.sunnyYellow};
  width: 500px;
  height: 50px;

  input {
    width: 400px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    margin-left: 20px;

    ::placeholder {
      color: ${colors.darkBlue};
      font-weight: 500;
    }
  }

  input:hover {
    background-color: ${colors.paragraphWhite};
  }
`

export const Search = () => {
  const [input, setInput] = useState("")
  const [valuesList, setValuesList] = useState([])

  const valueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }
  return (
    <SearchContainer>
      <img src="bitcoin.png" />
      <input type="text" placeholder="search" onChange={valueHandler} />
    </SearchContainer>
  )
}
