import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My first product", description: "hell yeah" },
  { id: "p2", price: 8, title: "My second product", description: "hell yeah" },
  { id: "p3", price: 4, title: "My third product", description: "hell yeah" },
  { id: "p4", price: 10, title: "My fourth product", description: "hell yeah" },

];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
