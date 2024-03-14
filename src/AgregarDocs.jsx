import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { products } from "./productsMock";


const AgregarDocs = () => {
  const rellenar = () => {

    let productsCollection = collection(db, "products")
    products.forEach((product) => { addDoc(productsCollection, product) })
  };

  return (
    <div>
      <button onClick={rellenar}>Agregar documento</button>
    </div>
  );
};

export default AgregarDocs;
