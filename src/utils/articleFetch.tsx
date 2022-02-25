import { useEffect, useState } from "react"

export type ArticleType = {
  title: string
  author: string
  content: string
  description: string
  publishedAt: Date
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

type ArticleFetchType = ArticleFetchSuccessType | ArticleFetchFailType

export namespace Articles {
  export const isSuccess = (
    arg?: ArticleFetchType
  ): arg is ArticleFetchSuccessType => {
    return arg?.status === "success"
  }

  export const useFetch = (search: string) => {
    const [articleFetch, setArticleFetch] = useState<ArticleFetchType>()

    useEffect(() => {
      fetch(
        `https://newsapi.org/v2/everything?q=${search}&from=2022-01-25&sortBy=publishedAt&apiKey=06eeb4e6a31c43bdbc83dae595fbcd57`
      )
        .then((response) => response.json())
        .then((data) =>
          setArticleFetch({ status: "success", articles: data.articles })
        )
        .catch((error) => setArticleFetch({ status: "failed", error: error }))
    }, [search])
    return articleFetch
  }
}

// const articles = isSuccess(articleFetch) && articleFetch.articles.map((article: ArticleType) =>
//     <>
//     </>
