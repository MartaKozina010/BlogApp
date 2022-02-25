import "./App.css"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Pages/Home"
import { AboutUs } from "./components/Pages/AboutUs"
import { Features } from "./components/Pages/Features"
import { Pricing } from "./components/Pages/Pricing"
import { Faq } from "./components/Pages/Faq"
import { Blog } from "./components/Pages/Blog"
import { ContactUs } from "./components/Pages/ContactUs"
import React from "react"
import { DarkModeProvider } from "./utils/DarkModeProvider"
import { GlobalStyles } from "./utils/theme"
import { SearchArticle } from "./components/PagesComponents/HomeComponents/SearchArticle"

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="faq" element={<Faq />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
      <SearchArticle />
    </DarkModeProvider>
  )
}

export default App
