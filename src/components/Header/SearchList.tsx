import React, { useContext, useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Articles } from "../../utils/articleFetch"
import { colors } from "../../utils/theme"

const ProperDisplay = styled.div`
  display: inline-block;
`

const ListContainer = styled.div`
  max-width: 220px;
  width: 100%;
  background-color: white;
  position: absolute;

  a {
    display: block;
    font-size: 12px;
    line-height: 1em;
    list-style: none;
    text-decoration: none;
    padding-bottom: 0.2em;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.paragraph};
    padding-bottom: 0.5em;
  }

  a:before {
    content: "→ ";
  }

  a:hover {
    background-color: ${({ theme }) => theme.searchListHover};
    text-decoration: none;
    color: ${({ theme }) => theme.paragraph};
  }
`

const SearchComponent = styled.img`
  margin: 0 2em;
`

const SearchInput = styled.input<{ isShowed: boolean }>`
  font-size: 12px;
  height: 3.5em;
  border: none;
  border-radius: 50px;
  width: 18em;
  padding-left: 0.5em;
  visibility: ${({ isShowed }) => !isShowed && "hidden"};

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

  const [renderList, setRenderList] = useState(false)
  const [input, setInput] = useState("")
  const [renderSearch, setRenderSearch] = useState<renderSearchType>({
    display: false,
    icon: "loupe.png",
  })

  const searchInput = React.useRef<HTMLInputElement>(null)

  const focusHandler = () => {
    searchInput?.current?.focus()
  }

  const listRendering = (event: React.ChangeEvent<HTMLInputElement>) => {
    input.trim() !== "" && setRenderList(true)
    setInput(event.target.value)
  }

  useEffect(() => {
    renderSearch.display && focusHandler()
  }, [renderSearch.display])

  const hideAndClean = () => {
    setTimeout(() => {
      hideSearch()
      setInput("")
      setRenderList(false)
    }, 500)
  }

  setTimeout(() => {
    console.log("This will run after 1 second!")
  }, 1000)

  const showSearch = () => {
    setRenderSearch({ display: true, icon: "search.png" })
    focusHandler()
  }

  const hideSearch = () => {
    setRenderSearch({ display: false, icon: "loupe.png" })
  }

  const articles = useContext(Articles.Context)

  const titlesList = Articles.isSuccess(articles) ? (
    articles.articles
      .map((el, index) => ({ ...el, index }))
      .filter((el) => el.title.toLowerCase().includes(input.toLowerCase()))
      .map((el) => <Link to={`/${el.index}`}>{el.title}</Link>)
  ) : (
    <div>No result found</div>
  )

  return (
    <>
      <SearchComponent
        src={renderSearch.icon}
        onClick={renderSearch ? showSearch : hideSearch}
      />
      <ProperDisplay>
        <SearchInput
          isShowed={renderSearch.display}
          ref={searchInput}
          value={input}
          onChange={listRendering}
          placeholder="search"
          onBlur={hideAndClean}
        />
        {renderList && (
          <ListContainer onClick={hideAndClean}>{titlesList}</ListContainer>
        )}
      </ProperDisplay>
    </>
  )
}
