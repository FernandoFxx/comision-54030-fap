import { Navbar } from "./components/layout/Navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer"


function App() {


  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola Tarea 1"} />
    </div>    
  )
}

export default App
