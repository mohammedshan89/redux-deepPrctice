import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 35,
    title: "My First Book",
    description: "The First book I ever Wrote",
  },
  {
    id: "p2",
    price: 40,
    title: "The Alchamesit",
    description: "The First book I ever Wrote",
  },
  {
    id: "p3",
    price: 60,
    title: "Sugandhi enn Andal devanayika",
    description: "The First book I ever Wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem key= {item.id}
          id= {item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
