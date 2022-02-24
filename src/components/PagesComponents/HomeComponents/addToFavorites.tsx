import { createContext, useState } from "react"

type ValueType = {
  articleArray: object[]
}

const favoritesArticlesContext = createContext<ValueType>({ articleArray: [] })
