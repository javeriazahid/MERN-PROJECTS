// Products.jsx
import React from "react";

const shoes = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 9000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSC6NDv9CO6FC28iPeU70SA8I7qu6lHZMvWEuNX6VNKtv4bsWXqP8j6U&s",
  },
  {
    id: 2,
    name: "Adidas Sambas",
    price: 8500,
    image: "https://runnerz.pk/cdn/shop/files/Samba_OG_Shoes_White_B75806_01_00_standard_535x.jpg?v=1732876591",
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 7500,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/391984/12/fnd/EEA/fmt/png/RS-X-Metallic-Sneakers-Youth",
  },
  {
    id: 4,
    name: "Reebok Classic",
    price: 6800,
    image: "https://www.reebok.com/cdn/shop/files/100008494_SLC_eCom-tif.png?v=1736438127",
  },
  {
    id: 5,
    name: "New Balance 574",
    price: 7200,
    image: "https://nb.scene7.com/is/image/NB/ml574evw_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
  },
  {
    id: 6,
    name: "Converse Chuck Taylor",
    price: 5600,
    image: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw187c312e/images/a_08/M7650_A_08X1.jpg?sw=406",
  },
  {
    id: 7,
    name: "Vans Old Skool",
    price: 6200,
    image: "https://cdn.shopify.com/s/files/1/1692/9471/files/f5377aea-bab0-4a19-ace6-16767f46b52c-Img-shoe_large.jpg?v=1753794065",
  },
  {
    id: 8,
    name: "Jordan 1 Retro",
    price: 12000,
    image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/lxgedfocjc5owejiyhsa/air-jordan-1-retro-chicago-release-date.jpg",
  },
  {
    id: 9,
    name: "Puma Bella",
    price: 7000,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/402186/04/sv01/fnd/VNM/fmt/png/Bella-Leather-Sneakers-Women",
  },
  {
    id: 10,
    name: "Caterpillar",
    price: 6400,
    image: "https://www.catfootwear.com.pk/cdn/shop/products/CATU-P110592-051921-S22-032.jpg?v=1745584663",
  },
];

function Products({ handleAddToCart = () => {} }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Available Shoes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white p-4 rounded shadow text-center hover:shadow-md transition"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="h-40 w-full object-cover rounded mb-2"
            />
            <h3 className="text-xl font-semibold">{shoe.name}</h3>
            <p className="text-gray-600">PKR {shoe.price}</p>
            <button
              onClick={() => handleAddToCart(shoe)}
              className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
