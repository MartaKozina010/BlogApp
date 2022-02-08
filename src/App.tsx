import './App.css';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header"
import { MainArticle } from './components/Content/MainArticle';
import { SingleArticle } from './components/Content/SingleArticle';
import { ArticleContainer } from './components/Content/ArticleContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainArticle
        title='A UX Case Study on Creating a Studious Environment for Students'
        author='Andrew Jonson'
        postedDate={new Date(2021, 12, 15)}
        image="https://marketingprzykawie.pl/wp-content/uploads/2015/01/glod_small.jpg"
        description='Apparently we had reached a great height in the atmosphere, 
      for the sky was a dead black, and the stars had ceased to twinkle. 
      By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.'
      />

      {/* <SingleArticle 
      image='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'
      postedDate={new Date(2020,10,11)}
      title='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
      description='See how pivoting to Webflow changed one person sales strategy and allowed him to attract'/> */}

      <ArticleContainer/>

      <Footer />
    </div>
  );
}

export default App;

type SingleArticleProps = {
  image: string,
  postedDate: Date,
  title: string,
  description: string
}