import React from "react"
import { useEffect, useState } from "react"

export type ArticleType = {
  title: string
  author: string
  content: string
  description: string
  publishedAt: string
  urlToImage: string
}

type ArticleFetchSuccessType = {
  status: "success"
  articles: ArticleType[]
}

type ArticleFetchFailType = {
  status: "failed"
  error: any
}

type ArticleFetchType =
  | ArticleFetchSuccessType
  | ArticleFetchFailType
  | undefined

export namespace Articles {
  export const Context = React.createContext<ArticleFetchType>(undefined)

  export const isSuccess = (
    arg?: ArticleFetchType
  ): arg is ArticleFetchSuccessType => {
    return arg?.status === "success"
  }

  type UseFetchType = {
    search: string
  }

  export const Provider: React.FC<UseFetchType> = ({ search, children }) => {
    const [articleFetch, setArticleFetch] = useState<ArticleFetchType>()

    useEffect(() => {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${search}&apiKey=06eeb4e6a31c43bdbc83dae595fbcd57`
      )
        .then((response) =>
          response.ok
            ? response.json()
            : Promise.reject(`Http error: ${response.status}`)
        )
        .then((data) =>
          setArticleFetch({ status: "success", articles: data.articles })
        )
        .catch((error) => setArticleFetch({ status: "failed", error: error }))
    }, [search])

    return <Context.Provider value={articleFetch}>{children}</Context.Provider>
  }
}
