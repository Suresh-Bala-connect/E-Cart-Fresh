
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Projects/Food E-comm/Home";
import Fruits from "./Projects/Food E-comm/Fruits";
import Vegtable from "./Projects/Food E-comm/Vegtable";
import Meat from "./Projects/Food E-comm/Meat";
import Contact from "./Projects/Food E-comm/Contact";
import Nav_bar from "./Projects/Food E-comm/Contact";
import Customer_review from "./Projects/Food E-comm/Customer_review";
import AddToCart from "./Projects/Food E-comm/AddToCart";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Fruits Page */}
        <Route path="/Fruits" element={<Fruits />} />

        {/* Meat Page */}
        <Route path="/Meat" element={<Meat />} />

        {/* Vegtable Page */}
        <Route path="/Vegtable" element={<Vegtable />} />
         <Route path="/Customer_review" element={<Customer_review />} />
         {/* Vegtable Page */}
        <Route path="/Contact" element={<Contact />} />
         {/* Vegtable Page */}
         <Route path="/AddToCart" element={<AddToCart />} />
       
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;