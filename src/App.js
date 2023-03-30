import { useState, useEffect } from "react";
import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import MyNavbar from "./components/Navbar/MyNavbar";
import Cart from "./components/Cart/Cart";
import Product from "./components/product/Product";
function App() {
  const [showCart, setshowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const handleShow = () => setshowCart(true);
  const handleClose = () => setshowCart(false);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef")
      .then((res) => res.json())
      .then((data) => setProducts(data.meals))
      .catch((err) => console.log(err));
  }, []);
  const handleSerch = (mealsName) => {
    const nameCapitalized =
      mealsName.charAt(0).toUpperCase() + mealsName.slice(1);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameCapitalized}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.meals != null) {
          setProducts(data.meals);
        } else {
          alert("no food found");
        }
      })
      .catch((err) => console.log(err));
    // console.log(meals);
  };
  return (
    <div className="App">
      <MyNavbar handleSerch={handleSerch} handleShow={handleShow} />
      <Cart showCart={showCart} handleClose={handleClose} />
      <div className="container mt-4 cardContainer">
        {products.map((product) => (
          <Product key={product.idMeal} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
