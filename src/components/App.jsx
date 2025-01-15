import Container from "./Container/Container";
import IconsList from "./IconsList/IconsList";
import Product from "./Product/Product";
import SanrioList from "./SanrioList/SanrioList";

function App() {
  return (
    <>
      <Container>
        <Product name="Tacos With Lime" price={10.99} />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </Container>

      <Container>
        <SanrioList />
      </Container>

      <Container>
        <IconsList />
      </Container>
    </>
  );
}

export default App;
