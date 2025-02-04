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
import CartProvider from './context/CartContext';
import UserProvider from './context/UserContext';
import PublicRoutes from './pages/PublicRoutes';
import ProtectedRoutes from './pages/ProtectedRoutes';


const App = () => {
  return (
    
    <div className="flex flex-xol min-h-screen">
      <UserProvider>
      <CartProvider>
      <Navbar></Navbar>
      <main className="flex-grow">
        <Routes>
          <Route path="/" 
          element={<Home></Home>}/>
          <Route path="/cart" element={<Cart></Cart>}/>
          <Route path="/login" 
          element={
            <PublicRoutes>
            <Login></Login>
            </PublicRoutes>}/>
          <Route path="/register" 
          element={
          <PublicRoutes>
          <Register></Register>
          </PublicRoutes>}/>
          <Route path="/pizza/p001" element={<Pizza></Pizza>}/>
          <Route path="/profile" 
          element={
          <ProtectedRoutes>
          <Profile></Profile>
          </ProtectedRoutes>}/>
          <Route path="/*" element={<NotFound></NotFound>}/>
     </Routes>
     </main>
     <Footer/>
     </CartProvider>
     </UserProvider>
     </div>
    
  );
};

export default App
