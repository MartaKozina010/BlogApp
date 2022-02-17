import { ArticleContainer } from "../PagesComponents/HomeComponents/ArticleContainer"
import { MainArticle } from "../PagesComponents/HomeComponents/MainArticle"

export const Home = () => {
  return (
    <>
      <MainArticle
        title="A UX Case Study on Creating a Studious Environment for Students"
        author="Andrew Jonson"
        postedDate={new Date(2021, 12, 15)}
        image="tatry.jpg"
        description="Apparently we had reached a great height in the atmosphere, 
            for the sky was a dead black, and the stars had ceased to twinkle. 
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
      />
      <ArticleContainer />
    </>
  )
}
