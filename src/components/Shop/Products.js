import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Book',
    description: 'A book.',
  },
  {
    id: 'p2',
    price: 9,
    title: 'Table',
    description: 'A table.',
  },
  {
    id: 'p3',
    price: 2,
    title: 'Lollypop',
    description: 'A lollypop.',
  },
];

const Products = (props) => {
  const products = DUMMY_PRODUCTS.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
