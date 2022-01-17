import { useState } from "react"
import "./App.css"
import AddToList from "./components/AddToList"
import List from "./components/List"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 31,
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg",
      note: "Allergic to staying on the same team",
    },
  ])

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
