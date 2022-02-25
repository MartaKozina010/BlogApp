import { useEffect, useState } from "react"
import { Articles, ArticleType } from "../../../utils/articleFetch"

export const SearchArticle = () => {
  const [input, setInput] = useState("")

  const articles = Articles.useFetch(input)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <>
      <input onChange={inputHandler} placeholder="search..." />
      <button type="submit">HERE</button>

      {/* {Articles.isSuccess(articles)
        ? <div>{articles.articles[1].title}</div>
        : <div>xd</div>} */}
    </>
  )
}
