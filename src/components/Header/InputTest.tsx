import { useState } from "react"

export const InputTest = () => {
  const [input, setInput] = useState("")
  const [inputTab, setInputTab] = useState<string[]>([])
  // const tab: Array<string> = ["alfa", "alfa", "alfa2", "beta", "gamma", "delta", "omikron"];

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const addToArray: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    setInputTab([input, ...inputTab])
    console.log("Arrrd: ", inputTab)
  }

  return (
    <>
      <form onSubmit={addToArray}>
        <input onChange={inputHandler} placeholder="test" />
        <button type="submit">HERE</button>
        <div>
          {inputTab.map((el) => (
            <div>{el.toUpperCase()}</div>
          ))}
        </div>
      </form>
    </>
  )
}
