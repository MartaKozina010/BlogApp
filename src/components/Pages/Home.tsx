import { Link, Outlet } from "react-router-dom"
import { ArticleContainer } from "../Content/ArticleContainer"
import { MainArticle } from "../Content/MainArticle"

export const Home = () => {
  return (
    <>
      <MainArticle
        title="A UX Case Study on Creating a Studious Environment for Students"
        author="Andrew Jonson"
        postedDate={new Date(2021, 12, 15)}
        image="https://www.tapeciarnia.pl/tapety/normalne/263800_osiol_shrek_bajka.jpg"
        description="Apparently we had reached a great height in the atmosphere, 
            for the sky was a dead black, and the stars had ceased to twinkle. 
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
      />
      <ArticleContainer />
    </>
  )
}
