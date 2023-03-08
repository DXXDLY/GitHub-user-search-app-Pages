import { useState } from "react"
import { SwitchTheme, UserContext } from '../../code/src/context/context'
import Main from "./components/main/Main"

function App() {
  const [search, setSearch] = useState('')
  const [switchBtn, setSwitchBtn] = useState(false)
  return (
    <div className="App" style={{ background: switchBtn ? "#141D2F" : "#F6F8FF" }}>
      <UserContext.Provider value={{ search, setSearch }}>
        <SwitchTheme.Provider value={{ switchBtn, setSwitchBtn }}>
          <Main />
        </SwitchTheme.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
