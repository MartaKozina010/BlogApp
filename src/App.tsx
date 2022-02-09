import "./App.css"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { MainArticle } from "./components/Content/MainArticle"
import { SingleArticle } from "./components/Content/SingleArticle"
import { ArticleContainer } from "./components/Content/ArticleContainer"
import { Search } from "./components/Header/Search"

function App() {
  return (
    <div className="App">
      <Header />
      <MainArticle
        title="A UX Case Study on Creating a Studious Environment for Students"
        author="Andrew Jonson"
        postedDate={new Date(2021, 12, 15)}
        image="https://marketingprzykawie.pl/wp-content/uploads/2015/01/glod_small.jpg"
        description="Apparently we had reached a great height in the atmosphere, 
      for the sky was a dead black, and the stars had ceased to twinkle. 
      By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
      />
      <ArticleContainer />
      <Footer />
      <Search />
    </div>
  )
}

export default App
