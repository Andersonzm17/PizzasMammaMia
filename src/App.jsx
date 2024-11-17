import Navbar from './components/navbar';
import Footer from './components/Footer';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import CardPizza from './components/CardPizza';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Row>
        <Col>
          <CardPizza nombre="4 quesos" descripcion="Esta pizza tiene 4 quesos" img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          precio={5950}></CardPizza>
        </Col>
        <Col>
          <CardPizza nombre="Napolitana" descripcion=" Esta pizza tiene salsa napolitana" img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          precio={6950}></CardPizza>
        </Col>
        <Col>
          <CardPizza nombre="Peperoni" descripcion="Esta pizza tiene peperoni" img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          precio={6950}></CardPizza>
        </Col>
      </Row>
     
      <Footer></Footer>

    </div>
  )
}

export default App
