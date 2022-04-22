import { useContext } from "react"
import { Articles } from "../ArticleFetch"
import { ArticleContainer } from "../PagesComponents/HomeComponents/ArticleContainer"
import { MainArticle } from "../PagesComponents/HomeComponents/MainArticle"

export const BlogHome = () => {
  const articles = useContext(Articles.Context)
  return Articles.isSuccess(articles) ? (
    <>
      <MainArticle
        title={articles.articles[0].title}
        author={articles.articles[0].author}
        postedDate={new Date(articles.articles[0].publishedAt)}
        image={articles.articles[0].urlToImage}
        description={articles.articles[0].description}
        articleIndex={0}
      />
      <ArticleContainer />
    </>
  ) : (
    <div>Loading...</div>
  )
}
