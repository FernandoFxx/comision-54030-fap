

const ItemList = ({nombre , saludar}) => {
  return (
    <div>
        <h2> {nombre} </h2>
        <button onClick={saludar}>Saludar</button>
    </div>
  );
};

export default ItemList;