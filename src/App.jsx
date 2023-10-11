
import { useEffect, useState } from "react";
import RouterApp from "./router/router"
import DataApi from "./components/context/store";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch(`${import.meta.env.VITE_REACT_APP_CLOTHES_API}/products`)
        .then((res) => res.json())
        .then((data) => setData(data))
    };
    getData();
  }, []);



  return (
    <DataApi.Provider value={data}>
      <RouterApp />
    </DataApi.Provider>
    
  )
}

export default App
