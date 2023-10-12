
import { useEffect, useState } from "react";
import RouterApp from "./router/router"
import DataApi from "./components/context/store";
import BasketApi from "./components/context/basket";
import { Toaster } from "react-hot-toast";

function App() {

  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [basket, setBasket] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState([])

  useEffect(() => {
    const getData = async () => {
      await fetch(`${import.meta.env.VITE_REACT_APP_CLOTHES_API}/products`)
        .then((res) => res.json())
        .then((data) => setData(data))
    };
    getData();
  }, []);



  return (
    <BasketApi.Provider value={{basket, setBasket}} >
    <DataApi.Provider value={data}>
        <RouterApp />
        <Toaster
  position="bottom-right"
  reverseOrder={true}
/>
      </DataApi.Provider>
      </BasketApi.Provider>
    
  )
}

export default App
