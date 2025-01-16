import Container from "./Container/Container";
import FormUser from "./FormUser/FormUser";
import IconsList from "./IconsList/IconsList";
import Modal from "./Modal/Modal";
import Product from "./Product/Product";
import Profile from "./Profile/Profile";
import SanrioList from "./SanrioList/SanrioList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import FormAuthorization from "./FormAuthorization/FormAuthorization";

function App() {
  return (
    <>
      <Container>
        <Modal />
      </Container>

      <Container>
        <FormUser />
      </Container>

      <Container>
        <Product name="Tacos With Lime" price={10.99} />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </Container>

      <Container>
        <FormAuthorization />
      </Container>

      <Container>
        <SanrioList />
      </Container>

      <Container>
        <IconsList />
      </Container>

      <Container>
        <Profile />
      </Container>

      <Container>
        <TransactionHistory />
      </Container>
    </>
  );
}

export default App;
