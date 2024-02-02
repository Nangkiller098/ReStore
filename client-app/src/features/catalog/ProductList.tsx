import { Grid, List } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}
export default function ProductList({ products }: Props) {
  return (
    <List>
      {/* <Grid container spacing={4}></Grid> */}
      {products.map((product) => (
        <Grid key={product.id} item xs={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </List>
  );
}
