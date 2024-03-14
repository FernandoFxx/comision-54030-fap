export const products = [
  {
    tittle: "Tenis Cafe",
    price: 800,
    description: "Tenis cafe",
    img: "https://res.cloudinary.com/dxgbxk8ft/image/upload/v1708050172/samples/shoe.jpg",
    stock: 12,
    category: "tenis",
  },

  {
    tittle: "Saco",
    price: 1500,
    description: "Saco Cafe",
    img: "https://res.cloudinary.com/dxgbxk8ft/image/upload/v1708050146/samples/bike.jpg",
    stock: 12,
    category: "pantalones",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
