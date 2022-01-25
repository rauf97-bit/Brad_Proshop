import {
	BrowserRouter as Router,
  Routes,
	Route
} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductScreen from './screens/ProductScreen';
import HomeScreen from "./screens/HomeScreen";
import { Container } from 'react-bootstrap';


function App() {

  return (
    <Router>
      <Header />
      <main>
          <Container>
            <Routes>
                <Route exact path='/' element={<HomeScreen/>}/>
                <Route path='/product/:id'  element={<ProductScreen/>}/>
            </Routes>
          </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
