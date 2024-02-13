import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";
import { Navbar } from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemCountContainer stock={3} />
    </div>
  );
};

export default App;
