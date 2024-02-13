import ItemList from "./ItemList";

const ItemListContainer = () => {
  let nombre = "fernando";
  const saludar = () => {
    return console.log("Hola");
  };

  return <ItemList nombre={nombre} saludar={saludar} />;
};

export default ItemListContainer;
