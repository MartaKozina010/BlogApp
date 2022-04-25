import React, { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Articles } from "../ArticleFetch"
import { colors } from "../../utils/theme"
import { SearchContext } from "./Header"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter"

const ListContainer = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;

  a {
    background-color: white;
    display: block;
    font-size: 12px;
    line-height: 1em;
    list-style: none;
    text-decoration: none;
    padding-bottom: 0.2em;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.paragraph};
    padding-bottom: 0.5em;
    width: 100%;
  }

  a:before {
    content: "→ ";
  }

  a:hover {
    background-color: ${({ theme }) => theme.searchListHover};
    text-decoration: none;
    color: ${({ theme }) => theme.paragraph};
    width: 100%;
  }
`

const WidthManagement = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid pink;
`

const SearchInput = styled.input`
  box-sizing: border-box;
  padding-left: 2em;
  font-size: 12px;
  height: 3em;
  border-radius: 6px;
  width: 100%;
  border: 1px solid lightgrey;
  margin: 1em 0;

  ::placeholder {
    color: ${colors.darkBlue};
  }
`

export const SearchModule = () => {
  const context = useContext(SearchContext)

  const [renderList, setRenderList] = useState(false)
  const [input, setInput] = useState("")

  const listRendering = (event: React.ChangeEvent<HTMLInputElement>) => {
    input.trim() !== "" && setRenderList(true)
    setInput(event.target.value)
  }

  const hideAndClean = () => {
    setTimeout(() => {
      hideSearch()
      setInput("")
      setRenderList(false)
    }, 500)
  }

  const hideSearch = () => {
    context.setRenderSearch(false)
  }

  const articles = useContext(Articles.Context)

  const titlesList = Articles.isSuccess(articles) ? (
    articles.articles
      .map((el, index) => ({ ...el, index }))
      .filter((el) => el.title.toLowerCase().includes(input.toLowerCase()))
      .map((el) => (
        <Link key={el.title} to={`/${el.index}`}>
          {el.title}
        </Link>
      ))
  ) : (
    <div>No result found</div>
  )

  return (
    <ContentWidthLimiter>
      <WidthManagement>
        <SearchInput
          ref={context.ref}
          value={input}
          onChange={listRendering}
          placeholder="search"
          onBlur={hideAndClean}
        />
        {renderList && (
          <ListContainer onClick={hideAndClean}>{titlesList}</ListContainer>
        )}
      </WidthManagement>
    </ContentWidthLimiter>
  )
}
