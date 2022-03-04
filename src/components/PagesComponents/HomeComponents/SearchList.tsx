import React from "react"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Articles, ArticleType } from "../../../utils/articleFetch"
import { colors } from "../../../utils/theme"

const Container = styled.div``

const StyledUl = styled.ul`
  max-width: 220px;
  width: 100%;
  background-color: white;
  position: absolute;
`

const StyledLi = styled.li`
  border: 1px solid blue;
  font-size: 12px;
  line-height: 1em;
  list-style: none;
`

const SearchComponent = styled.img`
  margin: 0 2em;
`

const SearchInput = styled.input<{ isShowed: boolean }>`
  font-size: 12px;
  transition: width 2s;
  height: 3.5em;
  border: none;
  border-radius: 50px;
  padding-left: ${({ isShowed }) => isShowed && ".5em"};
  width: ${({ isShowed }) => (isShowed ? "18em" : "0")};
  transition: all 2s;

  ::placeholder {
    color: ${colors.darkBlue};
    font-weight: 500;
  }
`

export const SearchModule = () => {
  type renderSearchType = {
    display: boolean
    icon: string
  }

  const [renderSearch, setRenderSearch] = useState<renderSearchType>({
    display: false,
    icon: "loupe.png",
  })

  const [input, setInput] = useState("")
  const searchInput = React.useRef<HTMLInputElement>(null)

  const focusHandler = () => {
    searchInput?.current?.focus()
  }

  //to change
  const hideAndCleanInput = () => {
    if (document.activeElement !== searchInput.current) {
      setTimeout(() => {
        setRenderSearch({ display: false, icon: "search.png" })
        setInput("")

        setTimeout(() => {
          setRenderSearch({ display: false, icon: "loupe.png" })
        }, 3000)
      }, 3000)
    }
  }

  useEffect(() => {
    renderSearch.display && focusHandler()
  }, [renderSearch.display])

  const showSearch = () => {
    setRenderSearch({ display: true, icon: "search.png" })
    focusHandler()
  }

  const hideSearch = () => {
    setRenderSearch({ display: false, icon: "loupe.png" })
  }

  //display titles
  const articles = useContext(Articles.Context)

  const titlesList = Articles.isSuccess(articles) ? (
    articles.articles
      .filter((el) => el.title.toLowerCase().includes(input.toLowerCase()))
      .map((el, index) => <StyledLi key={index}>{el.title}</StyledLi>)
  ) : (
    <li>No result found</li>
  )

  return (
    <>
      <SearchComponent
        src={renderSearch.icon}
        onClick={renderSearch ? showSearch : hideSearch}
      />
      <Container>
        <SearchInput
          isShowed={renderSearch.display}
          ref={searchInput}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="search"
          onBlur={hideAndCleanInput}
        />
        {input.trim() !== "" && <StyledUl>{titlesList}</StyledUl>}
      </Container>
    </>
  )
}
