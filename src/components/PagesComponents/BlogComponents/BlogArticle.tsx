import { useContext } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Articles } from "../../../utils/articleFetch"
import { ContentWidthLimiter } from "../../../utils/ContentWidthLimiter"
import { globalFont } from "../../../utils/theme"
import { ArticleHeader } from "../HomeComponents/ArticleHeader"

const ContentContainer = styled(ContentWidthLimiter)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1230px;
  width: 100%;
`

const Text = styled.div`
  max-width: 830px;
  width: 100%;
  font-size: ${globalFont.p16};
  font-weight: 400;
  text-align: justify;
  padding-top: 0.7em;
  text-indent: 3em;
  text-decoration: none;
  padding-top: 2em;
`

export const BlogArticle = () => {
  const { id } = useParams()

  const loremIpsum =
    "Lorem ipsum dolor sit amet. Eos explicabo nesciunt eos sapiente temporibus et distinctio rerum non corporis possimus. Ut magnam ipsum At sapiente totam ab laboriosam fugiat. Non optio tempora aut unde voluptate id veritatis adipisci et dolorem aliquam ab rerum reprehenderit. Qui provident ipsa et fugit illo qui dolorem numquam sed dolor excepturi. Eum autem sint et optio ratione ut sint nesciunt et maxime laudantium! Est Quis dolorem hic adipisci commodi eum mollitia commodi aut veritatis autem. Sit omnis voluptas qui numquam enim et quasi illo. Et harum numquam ad animi iste aut Quis velit in internos nostrum non galisum fugiat quo eligendi minima sed Quis dolor. Qui doloremque amet et alias quia ea quia fugit et tempore vitae est voluptas quia sit explicabo veritatis."
  const articles = useContext(Articles.Context)
  const isSuccess = Articles.isSuccess(articles)

  return isSuccess && id && articles.articles[parseInt(id)] ? (
    <ContentContainer>
      <ArticleHeader
        title={articles.articles[parseInt(id)].title}
        author={articles.articles[parseInt(id)].author}
        postedDate={new Date(articles.articles[parseInt(id)].publishedAt)}
        image={articles.articles[parseInt(id)].urlToImage}
      />
      <Text>{articles.articles[parseInt(id)].content}</Text>
      <Text>{loremIpsum}</Text>
      <Text>{loremIpsum}</Text>
      <Text>{loremIpsum}</Text>
      <Text>{loremIpsum}</Text>
    </ContentContainer>
  ) : (
    <div>Sorry, page not found</div>
  )
}
