import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="flex flex-xol min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/cart" element={<Cart></Cart>}/>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>}/>
          <Route path="/pizza/p001" element={<Pizza></Pizza>}/>
          <Route path="/profile" element={<Profile></Profile>}/>
          <Route path="/*" element={<NotFound></NotFound>}/>
     </Routes>
     </main>
     <Footer/>

    </div>
  );
};

export default App
