import { Fragment, useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";

function App() {
  const [prodcts, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  function addProduct() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setProducts((prevState: any) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "some brand",
        description: "some description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={prodcts} addProduct={addProduct} />
      </Container>
    </Fragment>
  );
}

export default App;
